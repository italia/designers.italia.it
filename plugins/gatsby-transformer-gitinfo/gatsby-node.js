/**
 * Local copy of @colliercz/gatsby-transformer-gitinfo (MIT, Aaron Collier),
 * https://github.com/CollierCZ/gatsby-transformer-gitinfo
 *
 * Kept in-repo because the upstream package pins simple-git@3.27.0 (affected by
 * several critical/high advisories) and simple-git >= 4 no longer exports the
 * factory as `module.exports`, only as the named export `simpleGit`.
 * Behaviour is otherwise unchanged: it adds gitLogLatest* fields to File nodes.
 */

const path = require("path");
const fs = require("fs");
const { simpleGit } = require("simple-git");

const realPath = (p) => fs.realpathSync.native(p);

async function getLogWithRetry(gitRepo, node, retry = 2, match = {}) {
  // Retry needed, see https://github.com/steveukx/git-js/issues/302
  const logOptions = {
    file: realPath(node.absolutePath),
    n: 1,
    format: {
      date: "%aI",
      authorName: "%an",
      authorEmail: "%ae",
      message: "%B",
    },
  };
  if (match?.regex) {
    logOptions["--grep"] = match.regex;
  }
  if (match?.invert) {
    logOptions["--invert-grep"] = match.invert;
  }
  const log = await gitRepo.log(logOptions);
  if (!log.latest && retry > 0) {
    return getLogWithRetry(gitRepo, node, retry - 1, match);
  }
  return log;
}

async function onCreateNode({ node, actions }, pluginOptions) {
  const { createNodeField } = actions;

  if (node.internal.type !== "File") {
    return;
  }
  if (pluginOptions.include && !pluginOptions.include.test(node.absolutePath)) {
    return;
  }
  if (pluginOptions.ignore && pluginOptions.ignore.test(node.absolutePath)) {
    return;
  }

  const gitRepo = simpleGit(
    pluginOptions.dir || path.dirname(realPath(node.absolutePath)),
  );
  const log = await getLogWithRetry(gitRepo, node, 2, pluginOptions.match);
  if (!log.latest) {
    return;
  }

  createNodeField({
    node,
    name: "gitLogLatestAuthorName",
    value: log.latest.authorName,
  });
  createNodeField({
    node,
    name: "gitLogLatestAuthorEmail",
    value: log.latest.authorEmail,
  });
  createNodeField({
    node,
    name: "gitLogLatestDate",
    value: log.latest.date.replace(/Z$/, "+00:00"),
  });
}

exports.onCreateNode = onCreateNode;
