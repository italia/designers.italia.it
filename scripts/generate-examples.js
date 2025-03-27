const path = require("path");
const fs = require("fs");
const slugify = require("slugify");
const Mustache = require("mustache");
const { searchInDir } = require("./utils");
const bsiData = require("../node_modules/bootstrap-italia/package.json");

const SEARCH_DIR = path.join("src", "data", "components_json");
const EXAMPLES_DIR = path.join("static", "examples");
const HTML_TEMPLATE = fs.readFileSync(
  path.join(EXAMPLES_DIR, "templates", "base.html"),
  "utf-8",
);

function rewriteSpriteUrl(content) {
  return content.replace(
    /https:\/\/italia.github.io\/bootstrap-italia\/dist\/svg\/sprites.svg/g,
    "/dist/svg/sprites.svg",
  );
}

function generateExamples(context) {
  const jsonFiles = searchInDir(SEARCH_DIR, ".json");
  for (const jsonFile of jsonFiles) {
    const parsedJson = JSON.parse(fs.readFileSync(jsonFile, "utf-8"));
    const componentFolder = path.join(
      EXAMPLES_DIR,
      context,
      path.dirname(jsonFile).split(path.sep).pop(),
      path.parse(jsonFile).base.replace(".json", ""),
    );
    fs.mkdirSync(componentFolder, { recursive: true });
    for (const example of parsedJson) {
      const filePath = `${path.join(
        componentFolder,
        slugify(example.name).toLowerCase(),
      )}.html`;
      fs.writeFileSync(
        filePath,
        Mustache.render(HTML_TEMPLATE, {
          code: rewriteSpriteUrl(example.content),
          name: example.name,
          bsiversion: bsiData.version,
        }),
        "utf-8",
      );
    }
  }
}

module.exports = {
  generateExamples,
};
