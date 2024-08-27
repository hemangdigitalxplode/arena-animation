const SitemapGenerator = require('sitemap-generator');
const fs = require('fs');
const path = require('path');
const routes = require('./src/routes/routes');
const fetchDynamicRoutes = require('./fetchDynamicRoutes');

const generateSitemap = async () => {
  const dynamicRoutes = await fetchDynamicRoutes();
console.log(dynamicRoutes)
  // Combine static and dynamic routes
  const allRoutes = [...routes, ...dynamicRoutes];

  const generator = SitemapGenerator('https://www.animationdelhincr.com', {
    stripQuerystring: false,
  });

  // Register event listeners
  generator.on('done', () => {
    console.log('Sitemap created');

    // Rename and move the sitemap to the public directory
    fs.renameSync(path.resolve(__dirname, 'sitemap.xml'), path.resolve(__dirname, 'public', 'sitemap.xml'));
  });

  // Start the crawler
  generator.start();

  // Manually queue all routes
  allRoutes.forEach((route) => {
    generator.queueURL(route, 'https://www.animationdelhincr.com');
  });
};
generateSitemap();
