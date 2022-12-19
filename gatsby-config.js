const { getCrumbLabelUpdates } = require('./scripts/breadcrumbs');
const {generateExamples} = require("./scripts/generate-examples.js")

console.log("🧵 Generate examples...")
generateExamples()
console.log("✅ Done")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  trailingSlash: "always",
  siteMetadata: {
    siteUrl: `https://designers.italia.it`,
    title : "Designers Italia",
    author : "Dipartimento per la trasformazione digitale e AGID",
    lang : "it",
    description : "Il punto di riferimento per la progettazione dei servizi pubblici digitali",
    siteName : "Designers Italia",
    image : "https://designers.italia.it/assets/icons/logo-it.png",
    twitterImage : "https://designers.italia.it/assets/icons/logo-it.png",
    twitterSite : "@DesignersITA",
    twitterCreator : "Dipartimento per la trasformazione digitale e AGID",
    themeColor: "#0066cc"
  },
  plugins: [
    {
      resolve:`gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        crumbLabelUpdates: getCrumbLabelUpdates(),
        autoGenHomeLabel: `Inizio`,
        exclude: [
          `**/dev-404-page/**`,
          `**/404/**`,
          `**/404.html`,
          `**/offline-plugin-app-shell-fallback/**`
        ],
        trailingSlashes: true,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-transformer-sharp`, // Needed for dynamic images
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: ["auto", "webp", "avif"],
          placeholder: "dominantColor", // or blurred ...
          quality: 70
        }
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `staticImages`,
        path: `${__dirname}/static/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/pages/`,
      },
    },
    `@colliercz/gatsby-transformer-gitinfo`,
    // {
    //   resolve: "gatsby-plugin-matomo",
    //   options: {
    //     siteId: "1",
    //     matomoUrl: `https://designers-italia.matomo.cloud/`,
    //     siteUrl: "https://prossima.designers.italia.it",
    //     matomoPhpScript: "matomo.php",
    //     matomoJsScript: "matomo.js",
    //     enableJSErrorTracking: true,
    //   },
    // },
    /*{
      resolve: 'gatsby-plugin-htaccess',
      // docs here: https://www.npmjs.com/package/gatsby-plugin-htaccess
      options: {
        RewriteBase: true,
        https: true,
        www: true,
        SymLinksIfOwnerMatch: true,
        host: 'designers.italia.it', // if 'www' is set to 'false', be sure to also remove it here!
        ErrorDocument: `
          ErrorDocument 401 /error_pages/401.html
          ErrorDocument 404 /error_pages/404.html
          ErrorDocument 500 /error_pages/500.html
        `,
        redirect: [
          // redirects go here
          'RewriteRule ^not-existing-url/?$ /existing-url [R=301,L,NE]',
        ],
        custom: `
            # This is a custom rule!
            # This is a another custom rule!
        `,
      },
    },*/
  ],
  pathPrefix: '/',
  flags: {
    DEV_SSR: true
  },
}
