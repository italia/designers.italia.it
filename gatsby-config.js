module.exports = {
  siteMetadata: {
    siteUrl: `https://designers.italia.it`,
    title : "Designers Italia",
    author : "Team per la Trasformazione Digitale e AGID",
    lang : "it",
    description : "Il punto di riferimento per la progettazione dei servizi pubblici digitali",
    siteName : "Designers Italia",
    image : "https://designers.italia.it/assets/icons/logo-it.png",
    twitterImage : "https://designers.italia.it/assets/icons/logo-it.png",
    twitterSite : "@designersITA",
    twitterCreator : "@Team per la Trasformazione Digitale e AGID",
    themeColor: "#0066cc"
  },
  plugins: [`gatsby-plugin-sass`],
  pathPrefix: '/',
  flags: {
    DEV_SSR: true
  },
}
