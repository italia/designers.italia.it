const path = require("path");
const { getCrumbLabelUpdates } = require("./scripts/breadcrumbs");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(
  process.cwd(),
  "node_modules",
  "gatsby",
  "dist",
  "utils",
  "eslint-rules",
);

const PLUGIN_SHARP_FORMATS = ["auto", "webp"];

const GATSBY_PLUGINS = [
  {
    resolve: `gatsby-plugin-breadcrumb`,
    options: {
      useAutoGen: true,
      crumbLabelUpdates: getCrumbLabelUpdates(),
      autoGenHomeLabel: `Inizio`,
      exclude: [
        `**/dev-404-page/**`,
        `**/404/**`,
        `**/404.html`,
        `**/offline-plugin-app-shell-fallback/**`,
      ],
      trailingSlashes: true,
    },
  },
  {
    resolve: `gatsby-plugin-sass`,
    options: {
      sassOptions: {
        includePaths: ["node_modules/"],
      },
    },
  },
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
        formats: PLUGIN_SHARP_FORMATS,
        placeholder: "dominantColor", // or blurred ...
        quality: 70,
      },
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
      name: `editorialBoard`,
      path: `./src/data/editorial-board`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `content`,
      path: `./src/data/content`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `./src/pages/`,
    },
  },
  {
    resolve: `@colliercz/gatsby-transformer-gitinfo`,
    options: {
      include: /\.ya?ml/i,
      match: {
        regex: "(last-update-skip)",
        invert: true,
      },
    },
  },
  {
    resolve: `gatsby-plugin-satorare`,
    options: {
      path: `${__dirname}/src/components/social-card-image/SocialCardImage.tsx`,
      width: 1200,
      height: 630,
      fonts: [
        {
          name: `tRegular`,
          path: `${__dirname}/static/dist/fonts/Titillium_Web/titillium-web-v10-latin-ext_latin-regular.ttf`,
        },
        {
          name: `tBold`,
          path: `${__dirname}/static/dist/fonts/Titillium_Web/titillium-web-v10-latin-ext_latin-700.ttf`,
        },
      ],
      target_nodes: ["Content"],
    },
  },
  {
    resolve: "gatsby-plugin-matomo",
    options: {
      siteId: process.env.MATOMO_SITE_ID,
      matomoUrl: "https://ingestion.webanalytics.italia.it/",
      siteUrl: process.env.MATOMO_SITE_URL,
      matomoPhpScript: "matomo.php",
      matomoJsScript: "matomo.js",
      enableJSErrorTracking: true,
    },
  },
  {
    resolve: "gatsby-plugin-local-search",
    options: {
      // A unique name for the search index. This should be descriptive of
      // what the index contains. This is required.
      name: "pages",

      // Set the search engine to create the index. This is required.
      // The following engines are supported: flexsearch, lunr
      engine: "flexsearch",

      // Provide options to the engine. This is optional and only recommended
      // for advanced users.
      //
      // Note: Only the flexsearch engine supports options.
      engineOptions: {
        profile: "score",
        charset: "latin:advanced",
        // encode: "extra",
        tokenize: "strict", // < strict = full word (better performance) | forward or reverse partials...
        threshold: 11,
        resolution: 22,
        depth: 2,
        filter: [
          // XXX we need a stemmer also...
          // array stopwords italian > https://www.ranks.nl/stopwords/italian
          "a",
          "adesso",
          "ai",
          "al",
          "alla",
          "allo",
          "allora",
          "altre",
          "altri",
          "altro",
          "anche",
          "ancora",
          "avere",
          "aveva",
          "avevano",
          "ben",
          "buono",
          "che",
          "chi",
          "comprare",
          "con",
          "consecutivi",
          "consecutivo",
          "cosa",
          "cui",
          "da",
          "del",
          "della",
          "dello",
          "dentro",
          "deve",
          "devo",
          "di",
          "doppio",
          "due",
          "e",
          "ecco",
          "fare",
          "fine",
          "fino",
          "fra",
          "gente",
          "giu",
          "ha",
          "hai",
          "hanno",
          "ho",
          "il",
          "indietro",
          "invece",
          "io",
          "la",
          "le",
          "lei",
          "lo",
          "loro",
          "lui",
          "lungo",
          "ma",
          "me",
          "meglio",
          "molta",
          "molti",
          "molto",
          "nei",
          "nella",
          "no",
          "noi",
          "nome",
          "nostro",
          "nove",
          "nuovi",
          "nuovo",
          "o",
          "oltre",
          "ora",
          "otto",
          "peggio",
          "pero",
          "persone",
          "piu",
          "poco",
          "primo",
          "promesso",
          "qua",
          "quarto",
          "quasi",
          "quattro",
          "quello",
          "questo",
          "qui",
          "quindi",
          "quinto",
          "rispetto",
          "sara",
          "secondo",
          "sei",
          "sembra",
          "sembrava",
          "senza",
          "sette",
          "sia",
          "siamo",
          "siete",
          "solo",
          "sono",
          "sopra",
          "soprattutto",
          "sotto",
          "stati",
          "stato",
          "stesso",
          "su",
          "subito",
          "sul",
          "sulla",
          "tanto",
          "te",
          "tempo",
          "terzo",
          "tra",
          "tre",
          "triplo",
          "ultimo",
          "un",
          "una",
          "uno",
          "va",
          "vai",
          "voi",
          "volte",
          "vostro",
        ],
      },

      // GraphQL query used to fetch all data for the search index. This is
      // required.
      query: `
      {
        allContent {
          edges {
            node {
              id
              relativePath
              metadata {
                template {
                  name
                }
              }
              seo {
                name
                description
                pathname
              }
              components {
                hero {
                  title
                  subtitle
                  text
                  tag {
                    label
                  }
                  kangaroo {
                    tags
                  }
                }
                sectionIntro {
                  title
                  text
                  moreText
                }
                sectionsEditorial {
                  title
                  text
                  components {
                    title
                    text
                  }
                }
                sectionsEditorial2 {
                  title
                  text
                  components {
                    title
                    text
                  }
                }
              }
            }
          }
        }
      }`,

      // Field used as the reference value for each document.
      ref: "id",

      // List of keys to index. The values of the keys are taken from the
      // normalizer function below.
      index: ["title", "description", "body"],

      // List of keys to store and make available in your UI. The values of
      // the keys are taken from the normalizer function below.
      // Default: all fields
      store: [
        "id",
        "template",
        "relativePath",
        "path",
        "title",
        "description",
        "tag",
        "tags",
      ],

      // Function used to map the result from the GraphQL query. This should
      // return an array of items to index in the form of flat objects
      // containing properties to index. The objects must contain the `ref`
      // field above (default: 'id'). This is required.
      normalizer: ({ data }) =>
        data.allContent.edges.map((edge) => ({
          id: edge.node.id,
          template: edge.node.metadata?.template?.name,
          relativePath: `/${edge.node.relativePath}`,
          tags: edge.node.components?.hero?.kangaroo?.tags,
          path: `${edge.node.seo?.pathname}`,
          title: `${edge.node.components?.hero?.title}`,
          description: `${edge.node.seo?.description}`,
          tag: `${edge.node.components?.hero?.tag?.label}`,
          body:
            `${edge.node.components?.hero?.subtitle} ${edge.node.components?.hero?.text}` +
            ` ${edge.node.components?.sectionIntro?.title} ${edge.node.components?.sectionIntro?.text} ${edge.node.components?.sectionIntro?.moreText}` +
            ` ${edge.node.components?.sectionsEditorial
              ?.map((s) => s.title)
              .join(" ")} ${edge.node.components?.sectionsEditorial
              ?.map((s) => s.components?.map((c) => c.title))
              .join(" ")} ${edge.node.components?.sectionsEditorial2
              ?.map((s) => s.components?.map((c) => c.title))
              .join(" ")} ${edge.node.components?.sectionsEditorial
              ?.map((s) => s.text)
              .join(" ")} ${edge.node.components?.sectionsEditorial
              ?.map((s) => s.components?.map((c) => c.text))
              .join(" ")} ${edge.node.components?.sectionsEditorial2
              ?.map((s) => s.components?.map((c) => c.text))
              .join(" ")}`,
        })),
    },
  },
  {
    resolve: "gatsby-plugin-eslint",
    options: {
      // Gatsby required rules directory
      rulePaths: [gatsbyRequiredRules],
      // re-add "develop" to the stages once https://github.com/italia/designers.italia.it/issues/848
      // is fixed
      stages: [""],
      extensions: ["js", "jsx", "ts", "tsx"],
      exclude: ["node_modules", "bower_components", ".cache", "public"],
      // Any additional eslint-webpack-plugin options below
      // ...
    },
  },
  // This must be the last plugin in the array
  `gatsby-plugin-meta-redirect`,
];

/* Dev / Production configurations and plugins */

const ONLY_PRODUCTION_PLUGINS = [];

if (process.env.GATSBY_BUILD !== "dev") {
  PLUGIN_SHARP_FORMATS.push("avif");
  GATSBY_PLUGINS.push(...ONLY_PRODUCTION_PLUGINS);
}

/* ------------------------------------------ */

module.exports = {
  trailingSlash: "always",
  siteMetadata: {
    siteUrl: `https://designers.italia.it`,
    title: "Designers Italia",
    author: "Dipartimento per la trasformazione digitale e AGID",
    lang: "it",
    description:
      "Il punto di riferimento per la progettazione dei servizi pubblici digitali",
    siteName: "Designers Italia",
    image: "https://designers.italia.it/images/logo-designers-italia-quad.png",
    twitterSite: "@DesignersITA",
    twitterCreator: "Dipartimento per la trasformazione digitale e AGID",
    themeColor: "#0066cc",
  },
  plugins: GATSBY_PLUGINS,
  pathPrefix: "/",
  flags: {
    DEV_SSR: true,
  },
};
