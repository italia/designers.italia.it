/* eslint-disable no-console */ // console.log is ok here for progress reporting

const { createRemoteFileNode } = require("gatsby-source-filesystem");

const jsYaml = require(`js-yaml`);

const _ = require("lodash");
const path = require("path");
const express = require("express");
const { fetchDataFiles } = require("./server/fetchDataFiles");
const { findValues } = require("./server/utils/findValues");

const isRemoteAsset = (assetPath) => assetPath.startsWith("http");

exports.onCreateDevServer = ({ app }) => {
  app.use(express.static("public"));
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /accessible-autocomplete/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
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
    node.sourceInstanceName === "content" &&
    (node.extension === "yaml" || node.extension === "yml")
  ) {
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
  }
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
      console.log(`Creating tag page: ${tag.fieldValue}`);
    }
    createPage({
      path: `/argomenti/${_.kebabCase(tag.fieldValue)}/`,
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
      path: `/design-system/componenti/utili-per/${_.kebabCase(
        tag.fieldValue,
      )}/`,
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
