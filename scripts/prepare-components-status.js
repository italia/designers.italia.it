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

const toTitleCase = (string) => {
  string = string.toLowerCase()
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const JSON_TO_COLS = {
  "angular Kit" : "Angular",
  "amichevole con lettori di schermo" : "Amichevole con lettori di schermo"
}

function replaceValuesInTable(rows, component) {
  // Find cols with text, then change the tag with component value
  Object.keys(JSON_TO_COLS).forEach(function(key) {
    // Get the updated value, if not present skip the search troughout columns
    let finalValue = component[key]
    if (finalValue === undefined) {
      finalValue = 'Non presente'
    }
    finalValue = toTitleCase(finalValue)
    for (row of rows) {
      for(let colIndex = 0 ; colIndex < row.cols.length ; colIndex++) {
        if (row.cols[colIndex].text === JSON_TO_COLS[key]) {
          console.log(row.cols[colIndex])
          console.log(row.cols[colIndex + 1].tag.label)
          console.log(finalValue)
          break;
        }
      }
    }
  });
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

    const tabUsoEAccessibilita = yamlData.tabs[0]
    const a11yEditorial = tabUsoEAccessibilita.sectionsEditorial[tabUsoEAccessibilita.sectionsEditorial.length - 2]
    const statusEditorial = tabUsoEAccessibilita.sectionsEditorial[tabUsoEAccessibilita.sectionsEditorial.length - 1]
    a11Table = a11yEditorial.components.find(el => el.name === 'Table')
    statusTable = statusEditorial.components.find(el => el.name === 'Table')
    replaceValuesInTable(a11Table.rows, component)
    replaceValuesInTable(statusTable.rows, component)
    // fs.writeFileSync(yamlFileToEdit, yaml.dump(yamlData), 'utf8');
  }
}

module.exports = {
  prepareComponentsStatus,
};