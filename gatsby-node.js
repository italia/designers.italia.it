const { createRemoteFileNode,  } = require("gatsby-source-filesystem")

const { fetchDataFiles } = require('./server/fetchDataFiles')
const { findValues } = require('./server/utils/findValues')

const STATIC_ASSET_PATH = __dirname + '/static'

const { simpleGit } = require('simple-git');
var path = require('path');
const fs = require('fs')



const isRemoteAsset= (assetPath) => {
  return assetPath.startsWith('http')
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html"  || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bootstrap-italia/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type RemoteAsset implements Node {
      source: String
      file: File @link(from: "fields.localFile")
    }
  `)
}

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {

  //assets import in graphQL for gatsby-plugin-image
  const data = fetchDataFiles()
  const assets = [...new Set(findValues(data, 'img'))] //new Set removes duplicates

  assets.forEach((asset, idx) => {
    if (isRemoteAsset(asset)) {
      const data = {
        source: asset
      }
      createNode({
        ...data,
        id: 'asset-' + idx,
        parent: null,
        children: [],
        internal: {
          type: 'RemoteAsset',
          contentDigest: createContentDigest(data),
        },
      })
    }
  })
}

exports.onCreateNode = async ({
  node,
  actions: { createNode, createNodeField },
  createNodeId,
  getCache,
}) => {
  if (node.internal.type === "RemoteAsset") {
    const fileNode = await createRemoteFileNode({
      url: node.source,
      parentNodeId: node.id,
      createNode,
      createNodeId,//`${node.unique_identifier_prop}-assets-${index}`,
      getCache,
    })
    if (fileNode) {
      createNodeField({ node, name: "localFile", value: fileNode.id })
    }
   }
}

exports.onCreatePage = async({ page, actions }) => {
  const { createPage, deletePage } = actions
  console.log(`📑 Generating ${page.path}`);
  if (page.context.lastmodified === undefined) {
    let yamlPath = path.join('src', 'pages', `${page.path.replace(/^\/|\/$/g, '')}.yaml`)
    try {
      if (!fs.existsSync(yamlPath)) {
        yamlPath = path.join('src', 'pages', `${page.path.replace(/^\/|\/$/g, '')}`, '/', 'index.yaml')
      }
    } catch(err) {
      return
    }
    const logOptions = {
      file: yamlPath,
      n: 1,
      format: {
        date: `%ai`,
        authorName: `%an`,
        authorEmail: "%ae"
      }
    };
    let logs = []
    try {
      logs = await simpleGit().log(logOptions)
      if (!logs.latest) {
        return
      }
    } catch(err) {
      return
    }
    deletePage(page)
    createPage({
      ...page,
      context: {
        ...page.context,
        lastmodified: logs.latest.date,
      },
    })
  }
}
