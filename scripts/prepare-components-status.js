const https = require("https");
const fs = require("fs");
const path = require("path");

const yaml = require(`js-yaml`);
const { slugify, toTitleCase } = require("./utils");

const STATUS_API =
  "https://raw.githubusercontent.com/italia/bootstrap-italia/main/api/components_status.json";
const COMPONENTS_YAML_DIR = path.join(
  "src",
  "data",
  "content",
  "design-system",
  "componenti",
);

const JSON_TO_COLS = {
  // Kit columns
  "angular Kit": "Angular",
  "react Kit": "React",
  "uI Kit Italia": "UI Kit Italia (design)",
  "bootstrap Italia": "Bootstrap Italia",
  // A11y columns
  navigabile: "Navigabile",
  comprensibile: "Comprensibile",
  "visivamente accessibile": "Visivamente accessibile",
  "amichevole con lettori di schermo": "Amichevole con lettori di schermo",
};

const STATUS_TO_CLASSES = {
  "Non presente": "neutral-2-bg text-secondary",
  "Da verificare": "neutral-2-bg text-secondary",
  Pronto: "bg-success",
  "Da rivedere": "bg-warning",
  "In review": "bg-warning",
  "In progress": "bg-warning",
  "Verifica in corso": "bg-warning",
  Deprecato: "bg-danger",
};

const TRANSLATE_STATUS = {
  "In progress": "Verifica in corso",
  "In review": "Verifica in corso",
  "Da fare": "Non presente",
  "Da completare varianti": "Pronto",
  "Da rivedere a11y": "Da rivedere",
  "Da rimuovere": "Deprecato",
};

function replaceValuesInTable(rows, component, missingLabel = "Da verificare") {
  // Find cols with text, then change the tag with component value
  Object.keys(JSON_TO_COLS).forEach((key) => {
    // Get the updated value, if not present skip the search troughout columns
    let finalValue = component[key];
    if (finalValue === undefined) {
      finalValue = missingLabel;
    }
    finalValue = toTitleCase(finalValue);
    finalValue = TRANSLATE_STATUS[finalValue]
      ? TRANSLATE_STATUS[finalValue]
      : finalValue;
    for (const row of rows) {
      for (let colIndex = 0; colIndex < row.cols.length; colIndex++) {
        if (row.cols[colIndex].text === JSON_TO_COLS[key]) {
          row.cols[colIndex + 1].tag.label = finalValue;
          if (STATUS_TO_CLASSES[finalValue]) {
            row.cols[colIndex + 1].tag.addonClasses =
              STATUS_TO_CLASSES[finalValue];
          }
          // CHANGE URL
          if (
            ["Angular", "React", "Bootstrap Italia"].includes(JSON_TO_COLS[key])
          ) {
            if (component[`${key} - url`]) {
              row.cols[colIndex + 2].simpleCta.url = component[`${key} - url`];
            } else {
              row.cols[colIndex + 2].simpleCta.url = undefined;
            }
          }
          break;
        }
      }
    }
  });
}

async function prepareComponentsStatus() {
  const promise = new Promise((resolve, reject) => {
    let data = "";
    https.get(STATUS_API, (res) => {
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        resolve(data);
      });
      res.on("error", () => {
        reject(data);
      });
    });
  });

  const result = JSON.parse(await promise);

  for (const component of result.items) {
    const title = slugify(
      component.title.substring(
        component.title.indexOf("`") + 1,
        component.title.lastIndexOf("`"),
      ),
    );
    const yamlFileToEdit = path.join(COMPONENTS_YAML_DIR, `${title}.yaml`);
    const yamlData = yaml.load(fs.readFileSync(yamlFileToEdit, "utf8"));

    const tabUsoEAccessibilita = yamlData.tabs[0];
    const a11yEditorial =
      tabUsoEAccessibilita.sectionsEditorial[
        tabUsoEAccessibilita.sectionsEditorial.length - 2
      ];
    const statusEditorial =
      tabUsoEAccessibilita.sectionsEditorial[
        tabUsoEAccessibilita.sectionsEditorial.length - 1
      ];
    const a11Table = a11yEditorial.components.find((el) => el.name === "Table");
    const statusTable = statusEditorial.components.find(
      (el) => el.name === "Table",
    );

    replaceValuesInTable(a11Table.rows, component);
    replaceValuesInTable(statusTable.rows, component);
    fs.writeFileSync(yamlFileToEdit, yaml.dump(yamlData), "utf8");
  }
}

module.exports = {
  prepareComponentsStatus,
};
