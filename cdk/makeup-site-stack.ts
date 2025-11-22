import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as amplify from '@aws-cdk/aws-amplify-alpha';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';

export interface MakeupSiteStackProps extends cdk.StackProps {
  /**
   * GitHub repository owner (username or organization)
   */
  githubOwner: string;

  /**
   * GitHub repository name
   */
  githubRepo: string;

  /**
   * GitHub branch to deploy (default: main)
   */
  githubBranch?: string;

  /**
   * GitHub personal access token secret name in AWS Secrets Manager
   * Should have repo access permissions
   */
  githubTokenSecretName?: string;

  /**
   * Web3Forms access key for contact form
   */
  web3formsAccessKey: string;

  /**
   * Google Analytics Measurement ID (optional)
   */
  gaId?: string;

  /**
   * Custom domain name (optional)
   */
  customDomain?: string;
}

export class MakeupSiteStack extends cdk.Stack {
  public readonly amplifyApp: amplify.App;

  constructor(scope: Construct, id: string, props: MakeupSiteStackProps) {
    super(scope, id, props);

    // Get GitHub token from Secrets Manager
    const githubTokenSecretName = props.githubTokenSecretName || 'github-token';
    const githubTokenSecret = secretsmanager.Secret.fromSecretNameV2(
      this,
      'GitHubToken',
      githubTokenSecretName
    );

    // Create Amplify App
    this.amplifyApp = new amplify.App(this, 'MakeupSiteApp', {
      appName: 'bhumi-makeup-artistry',
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: props.githubOwner,
        repository: props.githubRepo,
        oauthToken: githubTokenSecret.secretValue,
      }),
      environmentVariables: {
        NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY: props.web3formsAccessKey,
        ...(props.gaId && { NEXT_PUBLIC_GA_ID: props.gaId }),
      },
      platform: amplify.Platform.WEB_COMPUTE,
      buildSpec: codebuild.BuildSpec.fromObjectToYaml({
        version: '1.0',
        applications: [
          {
            appRoot: '.',
            frontend: {
              phases: {
                preBuild: {
                  commands: ['npm ci'],
                },
                build: {
                  commands: ['npm run build'],
                },
              },
              artifacts: {
                baseDirectory: '.next',
                files: ['**/*'],
              },
              cache: {
                paths: ['node_modules/**/*', '.next/cache/**/*'],
              },
            },
          },
        ],
      }),
      autoBranchDeletion: true,
    });

    // Add branch
    const branch = this.amplifyApp.addBranch(props.githubBranch || 'main', {
      autoBuild: true,
      stage: 'PRODUCTION',
    });

    // Add custom domain if provided
    if (props.customDomain) {
      const domain = this.amplifyApp.addDomain(props.customDomain, {
        enableAutoSubdomain: true,
      });
      domain.mapRoot(branch);
      domain.mapSubDomain(branch, 'www');
    }

    // Output the default domain
    new cdk.CfnOutput(this, 'AmplifyAppUrl', {
      value: `https://${props.githubBranch || 'main'}.${this.amplifyApp.defaultDomain}`,
      description: 'Amplify App URL',
    });

    // Output the app ID
    new cdk.CfnOutput(this, 'AmplifyAppId', {
      value: this.amplifyApp.appId,
      description: 'Amplify App ID',
    });

    // Add tags
    cdk.Tags.of(this).add('Project', 'BhumiMakeupArtistry');
    cdk.Tags.of(this).add('Environment', 'Production');
  }
}
