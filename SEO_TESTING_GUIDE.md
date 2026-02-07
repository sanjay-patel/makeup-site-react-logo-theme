# SEO Testing Guide

## Overview

This guide explains how to use the SEO metadata tests to ensure your website's SEO tags remain consistent and accurate. These tests validate titles, descriptions, canonical URLs, and Open Graph tags across all pages.

## Why SEO Testing Matters

- **Prevent Accidental Changes**: Catch unintended modifications to carefully crafted SEO metadata
- **Maintain Consistency**: Ensure all pages follow SEO best practices
- **Local SEO**: Verify "Surat" and location keywords appear correctly
- **Social Sharing**: Validate Open Graph tags for Facebook, LinkedIn, Twitter
- **Search Rankings**: Protect your hard-earned search engine rankings

## Installation

### 1. Install Test Dependencies

```bash
npm install
```

This will install Jest and all testing dependencies defined in `package.json`.

## Running the Tests

### Run All SEO Tests

```bash
npm run test:seo
```

This runs only the SEO-related tests in `__tests__/seo/`.

### Run All Tests

```bash
npm test
```

Runs all tests in the project.

### Watch Mode (Auto-rerun on changes)

```bash
npm run test:watch
```

Useful during development - tests automatically rerun when you save files.

### Coverage Report

```bash
npm run test:coverage
```

Generates a detailed coverage report.

## Understanding Test Results

### ✅ Successful Test Output

```
PASS  __tests__/seo/metadata.test.ts
  SEO Metadata Tests
    Home Page
      ✓ should have correct title (2 ms)
      ✓ should have correct description (1 ms)
      ✓ should have correct canonical URL (1 ms)
      ✓ should have correct Open Graph tags (1 ms)
    ...

Test Suites: 1 passed, 1 total
Tests:       45 passed, 45 total
```

All tests passed! Your SEO metadata is intact.

### ❌ Failed Test Output

```
FAIL  __tests__/seo/metadata.test.ts
  SEO Metadata Tests
    Home Page
      ✕ should have correct title (5 ms)

  ● SEO Metadata Tests › Home Page › should have correct title

    expect(received).toBe(expected)

    Expected: "Professional Makeup Artist in Surat | Bridal & Party Makeup Studio"
    Received: "Makeup Artist in Surat"

      at Object.<anonymous> (__tests__/seo/metadata.test.ts:123:26)
```

This shows:
- **What changed**: The title was shortened
- **Expected value**: The original, correct title
- **Received value**: The new (incorrect) title

## What the Tests Validate

### 1. Page Titles
- Correct wording and structure
- Contains location keywords ("Surat")
- Under 60 characters (SEO best practice)
- Unique across all pages

### 2. Meta Descriptions
- Accurate, compelling descriptions
- Contains relevant keywords
- 120-160 characters (optimal length)
- Unique across all pages

### 3. Canonical URLs
- Correct path for each page
- Relative URLs (e.g., `/about` not `https://...`)
- Unique for each page

### 4. Open Graph Tags
- Proper title for social sharing
- Engaging description
- Full URL (e.g., `https://bhumimakeupartistry.com/about`)
- Correct domain (bhumimakeupartistry.com)

### 5. SEO Best Practices
- All titles are unique
- All descriptions are unique
- URLs use HTTPS
- Correct domain name
- Sitemap configuration
- robots.txt settings

## When to Run These Tests

### Before Deploying
```bash
npm run test:seo
```
Always run before pushing to production to catch any SEO regressions.

### After Editing Page Metadata
If you modify any `metadata` export in page files:
- `app/page.tsx`
- `app/about/page.tsx`
- `app/portfolio/page.tsx`
- `app/contact/page.tsx`
- `app/destination-wedding/page.tsx`
- `app/faq/page.tsx`
- `app/brands/page.tsx`

### After Changing Domain
If you ever change your domain name, update:
1. Tests in `__tests__/seo/metadata.test.ts`
2. Root layout in `app/layout.tsx`
3. All page metadata files
4. Then run `npm run test:seo` to verify

### In CI/CD Pipeline
Add to your deployment workflow:
```yaml
- name: Run SEO Tests
  run: npm run test:seo
```

## Updating Tests When Making Intentional SEO Changes

If you intentionally update SEO metadata, you'll need to update the tests:

### Example: Changing Home Page Title

1. **Update the metadata** in `app/page.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'New Title | Makeup Artist Surat',
  // ...
}
```

2. **Update the test** in `__tests__/seo/metadata.test.ts`:
```typescript
const expectedMetadata = {
  home: {
    title: 'New Title | Makeup Artist Surat', // Update here
    // ...
  }
}
```

3. **Run tests** to verify:
```bash
npm run test:seo
```

## Test File Structure

```
__tests__/
└── seo/
    └── metadata.test.ts    # All SEO metadata tests
```

## Covered Pages

The tests validate SEO metadata for:
- ✅ Home page (`/`)
- ✅ About page (`/about`)
- ✅ Portfolio page (`/portfolio`)
- ✅ Contact page (`/contact`)
- ✅ Destination Wedding page (`/destination-wedding`)
- ✅ FAQ page (`/faq`)
- ✅ Brands page (`/brands`)

## Common Test Failures and Fixes

### Title Too Long
```
Expected: length < 60
Received: length = 75
```
**Fix**: Shorten the title to under 60 characters for better SEO.

### Description Too Short/Long
```
Expected: length between 120-160
Received: length = 95
```
**Fix**: Expand or trim description to optimal length (120-160 chars).

### Missing "Surat" Keyword
```
Expected: title to contain "Surat"
Received: title without location
```
**Fix**: Add "Surat" to title or description for local SEO.

### Wrong Domain
```
Expected: "https://bhumimakeupartistry.com"
Received: "https://beautybyartist.com"
```
**Fix**: Update domain in metadata and layout.tsx.

### Duplicate Titles
```
Expected: all titles to be unique
Received: 2 pages with same title
```
**Fix**: Make each page title unique and descriptive.

## Best Practices

### 1. Run Tests Before Committing
```bash
git add .
npm run test:seo
git commit -m "Update about page content"
```

### 2. Keep Tests Updated
When you intentionally change SEO metadata, update tests immediately.

### 3. Document Changes
When updating SEO tags, note why in commit messages:
```bash
git commit -m "SEO: Update home title to emphasize bridal services"
```

### 4. Review Test Failures Carefully
Don't just update tests to pass. Understand WHY they're failing:
- Is it an accidental change? → Revert the code
- Is it an intentional improvement? → Update the tests

## Integration with Git Workflow

### Pre-commit Hook (Optional)
Create `.git/hooks/pre-commit`:
```bash
#!/bin/sh
npm run test:seo
```

This automatically runs SEO tests before every commit.

### GitHub Actions (Optional)
Add to `.github/workflows/test.yml`:
```yaml
name: Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run test:seo
```

## Troubleshooting

### Tests Won't Run
```bash
# Reinstall dependencies
rm -rf node_modules
npm install

# Try running Jest directly
npx jest __tests__/seo
```

### Import Errors
Make sure TypeScript configuration is correct:
```bash
# Check tsconfig.json has proper paths
cat tsconfig.json
```

### Module Not Found
```bash
# Install missing dependencies
npm install --save-dev jest @jest/globals @types/jest
```

## Contact & Support

If you need help with the SEO tests:
1. Check this guide first
2. Review the test file: `__tests__/seo/metadata.test.ts`
3. Check Jest documentation: https://jestjs.io/

## Maintenance

### Regular Reviews
- **Monthly**: Review test expectations vs. actual metadata
- **Quarterly**: Verify all SEO best practices are current
- **Annually**: Update keyword strategy and test accordingly

### When to Update Tests
- Rebranding or domain change
- Major service offering changes
- Location expansion (adding new cities)
- SEO strategy updates

---

**Remember**: These tests are your safety net. They help you maintain consistent, high-quality SEO metadata that protects your search rankings and online visibility.
