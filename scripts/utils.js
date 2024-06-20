const path = require("path");
const fs = require("fs");

function searchInDir(startPath, filter, subfolders = true) {
  if (!fs.existsSync(startPath)) {
    throw Error("No dir ", startPath);
  }
  const files = fs.readdirSync(startPath);
  let collection = [];
  for (const element of files) {
    const filename = path.join(startPath, element);
    if (subfolders && fs.lstatSync(filename).isDirectory()) {
      collection = collection.concat(searchInDir(filename, filter, subfolders));
    } else if (filename.endsWith(filter)) {
      collection.push(filename);
    }
  }
  return collection;
}

function walk(dir, callback) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filepath = path.join(dir, file);
    const stats = fs.statSync(filepath);
    if (stats.isDirectory()) {
      walk(filepath, callback);
    } else if (stats.isFile()) {
      callback(filepath, stats);
    }
  });
}

function slugify(str) {
  let finalStr = str.replace(/^\s+|\s+$/g, ""); // trim leading/trailing white space
  finalStr = finalStr.toLowerCase(); // convert string to lowercase
  finalStr = finalStr
    .replace(/[^a-z0-9 -]/g, "") // remove any non-alphanumeric characters
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // remove consecutive hyphens
  return finalStr;
}

const toTitleCase = (string) => {
  const finalStr = string.toLowerCase();
  return finalStr.charAt(0).toUpperCase() + finalStr.slice(1);
};

module.exports = {
  searchInDir,
  walk,
  slugify,
  toTitleCase,
};
