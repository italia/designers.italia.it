const https = require('https')
const fs = require("fs");
const path = require("path");
const yaml = require(`js-yaml`);

const STATUS_API = "https://raw.githubusercontent.com/italia/bootstrap-italia/main/api/components_status.json"
const COMPONENTS_YAML_DIR = path.join("src", "data", "content", "design-system", "componenti");


function slugify(str) {
  str = str.replace(/^\s+|\s+$/g, ''); // trim leading/trailing white space
  str = str.toLowerCase(); // convert string to lowercase
  str = str.replace(/[^a-z0-9 -]/g, '') // remove any non-alphanumeric characters
           .replace(/\s+/g, '-') // replace spaces with hyphens
           .replace(/-+/g, '-'); // remove consecutive hyphens
  return str;
}

async function prepareComponentsStatus() {
  const promise = new Promise((resolve, reject) => {
    var data = '';
    https.get(STATUS_API, res => {
      res.on('data', chunk => { data += chunk }) 
      res.on('end', () => {
        resolve(data);
      })
    }) 
  });

  const result = JSON.parse(await promise);

  for (component of result.items) {
    const title = slugify(
      component.title.substring(
        component.title.indexOf("`") + 1, 
        component.title.lastIndexOf("`")
      )
    )
    const yamlFileToEdit = path.join(COMPONENTS_YAML_DIR, `${title}.yaml`)
    const yamlData = yaml.load(fs.readFileSync(yamlFileToEdit, 'utf8'));
    console.log(yamlData)
    fs.writeFileSync(yamlFileToEdit, yaml.dump(yamlData), 'utf8');
  }
}

module.exports = {
  prepareComponentsStatus,
};
