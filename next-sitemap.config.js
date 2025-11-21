/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://bhumimakeupartistry.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [],
  },
  transform: async (config, path) => {
    // Custom priority for different page types
    let priority = 0.7
    let changefreq = 'weekly'

    if (path === '/') {
      priority = 1.0
      changefreq = 'daily'
    } else if (path === '/portfolio' || path === '/contact') {
      priority = 0.9
      changefreq = 'weekly'
    } else if (path === '/about' || path === '/services') {
      priority = 0.8
      changefreq = 'weekly'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    }
  },
}
