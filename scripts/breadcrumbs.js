const {walk} = require('./utils');
const yaml = require('js-yaml');
const fs = require('fs');

const getCrumbLabelUpdates = () => {
  let paths = [];
  walk('./src/pages/', (path) => {
    if (path.endsWith('.yaml')) {
      const doc = yaml.load(fs.readFileSync(path, 'utf8'));
      if(doc.seo && doc.seo.pathname) {
        const found = paths.find(element => element.pathname === doc.seo.pathname);
        if (!found) {
          paths.push({
            pathname: doc.seo.pathname.replace(/\/+$/, ''),
            crumbLabel: doc.seo.name.split(" -")[0]
          })
        }
      }
    }
  });
  return paths
};

module.exports = {
    getCrumbLabelUpdates
}