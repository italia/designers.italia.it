const {walk} = require('./utils');
const yaml = require('js-yaml');
const fs = require('fs');

const getCrumbLabelUpdates = () => {
  let paths = [];
  walk('./src/data/', (path) => {
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
    paths.push({ // xxx
      pathname: "/design-system/componenti/utili-per",
      crumbLabel: "Utili per"
    })
  });
  return paths
};

module.exports = {
    getCrumbLabelUpdates
}