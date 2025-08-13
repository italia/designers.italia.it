/* eslint-disable no-console */ // console.log is ok here for progress reporting

const { createRemoteFileNode } = require("gatsby-source-filesystem");

const jsYaml = require(`js-yaml`);

const path = require("path");
const express = require("express");
const slugify = require("slugify");
const { fetchDataFiles } = require("./server/fetchDataFiles");
const { findValues } = require("./server/utils/findValues");

const isRemoteAsset = (assetPath) => assetPath.startsWith("http");

exports.onCreateDevServer = ({ app }) => {
  app.use(express.static("public"));
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type RemoteAsset implements Node {
      source: String
      file: File @link(from: "fields.localFile")
    }
  `);
};

exports.sourceNodes = async ({ actions: { createNode } }) => {
  // assets import in graphQL for gatsby-plugin-image
  const dataFiles = fetchDataFiles();
  const assets = [...new Set(findValues(dataFiles, "img"))]; // new Set removes duplicates

  assets.forEach((asset, idx) => {
    if (isRemoteAsset(asset)) {
      const data = {
        source: asset,
      };
      createNode({
        ...data,
        id: `asset-${idx}`,
        parent: null,
        children: [],
        internal: {
          type: "RemoteAsset",
          // contentDigest: createContentDigest(data),
        },
      });
    }
  });
};

exports.onCreateNode = async ({
  node,
  actions: { createParentChildLink, createNode, createNodeField },
  createNodeId,
  createContentDigest,
  loadNodeContent,
  getCache,
}) => {
  const CONTENT_NODE_TYPE = "Content";
  const EDITORIALBOARD_NODE_TYPE = "EditorialBoard";

  if (node.internal.type === "RemoteAsset") {
    const fileNode = await createRemoteFileNode({
      url: node.source,
      parentNodeId: node.id,
      createNode,
      createNodeId, // `${node.unique_identifier_prop}-assets-${index}`,
      getCache,
    });
    if (fileNode) {
      createNodeField({ node, name: "localFile", value: fileNode.id });
    }
  } else if (
    node.internal.type === "File" &&
    (node.extension === "yaml" || node.extension === "yml")
  ) {
    // content
    if (node.sourceInstanceName === "content") {
      const content = await loadNodeContent(node);
      const parsedContent = jsYaml.load(content);

      const contentNode = {
        ...parsedContent,
        id: createNodeId(`${CONTENT_NODE_TYPE}-${node.id}`),
        parent: node.id,
        children: [],
        internal: {
          type: CONTENT_NODE_TYPE,
          contentDigest: createContentDigest(node),
        },
        relativePath: node.relativePath.replace(/(\.yaml$|\.yml$)/i, ""),
      };

      createNode(contentNode);
      createParentChildLink({ parent: node, child: contentNode });
    } else if (node.sourceInstanceName === "editorialBoard") {
      // editorialboard setting nodes
      // XXX > NOW WE HAVE THEM ON THE GRAPHQL SCHEMA, we have just to read them... and create the right array for the right page below... who know if it's the best way to do this...
      /*
      try this query: 
        
      { allEditorialBoard {
          nodes {
            highlightedCards {
              page
              sections {
                section
              }
            }
          }
        }
      }
      */
      const content = await loadNodeContent(node);
      const parsedContent = jsYaml.load(content);

      const editorialBoardNode = {
        ...parsedContent,
        id: createNodeId(`${EDITORIALBOARD_NODE_TYPE}-${node.id}`),
        parent: node.id,
        children: [],
        internal: {
          type: EDITORIALBOARD_NODE_TYPE,
          contentDigest: createContentDigest(node),
        },
        relativePath: node.relativePath.replace(/(\.yaml$|\.yml$)/i, ""),
      };

      createNode(editorialBoardNode);
      createParentChildLink({ parent: node, child: editorialBoardNode });
    }
  }
};

/* eslint-disable consistent-return */
exports.onCreatePage = async ({ page, actions }) => {
  // add variables to pageContext
  if (page.context.highlighted) {
    return "Skipping already highlighted page";
  }
  const { createPage, deletePage } = actions;
  deletePage(page);
  createPage({
    ...page,
    context: {
      ...page.context,
      highlighted: [
        // editorial settings > we have to move this inside graphql loaded from the dedicated .yaml in /data/content/editorial-board/hightlighted-cards.yaml
        "Il 2023 di Designers Italia ",
        "Esperienza del cittadino nei servizi pubblici: dalla Misura alla pratica",
        "Prendi parte anche tu all’evoluzione del design system del Paese",
        "Modelli di siti e servizi di Designers Italia: nuovi file in formato aperto",
      ],
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  // tags
  const { createPage } = actions;
  const tagTemplate = path.resolve("src/templates/tag.js");
  const tags = await graphql(`
    {
      tagsGroup: allContent {
        group(field: { components: { hero: { kangaroo: { tags: SELECT } } } }) {
          fieldValue
        }
      }
    }
  `);
  tags.data.tagsGroup.group.forEach((tag) => {
    if (process.env.DEBUG === "true") {
      console.log(`Creating tag page: ${tag.fieldValue} `);
    }
    createPage({
      path: `/argomenti/${slugify(tag.fieldValue, {
        strict: true,
        lower: true,
      })}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
  // tagsDesignSystem
  const tagDesignSystemTemplate = path.resolve(
    "src/templates/design-system-index-components-tags.js",
  );
  const tagsDesignSystem = await graphql(`
    {
      tagsDesignSystemGroup: allContent {
        group(
          field: {
            components: { hero: { kangaroo: { tagsDesignSystem: SELECT } } }
          }
        ) {
          fieldValue
        }
      }
    }
  `);
  tagsDesignSystem.data.tagsDesignSystemGroup.group.forEach((tag) => {
    if (process.env.DEBUG === "true") {
      console.log(`Creating tag page: ${tag.fieldValue}`);
    }
    createPage({
      path: `/design-system/componenti/utili-per/${slugify(tag.fieldValue, {
        strict: true,
        lower: true,
      })}/`,
      component: tagDesignSystemTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });

  // redirs
  const { createRedirect } = actions;
  const redirs = await graphql(`
    {
      allContent(filter: { metadata: { redirect_from: { ne: null } } }) {
        edges {
          node {
            seo {
              pathname
            }
            metadata {
              redirect_from
            }
          }
        }
      }
    }
  `);
  redirs.data.allContent.edges.forEach((edge) => {
    const { node } = edge;
    node.metadata.redirect_from.forEach((fromPath) => {
      const toPath = edge.node.seo.pathname;
      if (process.env.DEBUG === "true") {
        console.log(`Creating redirect: ${fromPath} -> ${toPath}...`);
      }

      createRedirect({ fromPath, toPath });
    });
  });
};
