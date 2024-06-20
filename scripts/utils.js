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
  str = str.replace(/^\s+|\s+$/g, ""); // trim leading/trailing white space
  str = str.toLowerCase(); // convert string to lowercase
  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove any non-alphanumeric characters
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // remove consecutive hyphens
  return str;
}

const toTitleCase = (string) => {
  string = string.toLowerCase();
  return string.charAt(0).toUpperCase() + string.slice(1);
};

module.exports = {
  searchInDir,
  walk,
  slugify,
  toTitleCase,
};
