const request = require('superagent');
const admZip = require('adm-zip');
const fs = require('fs');
const path = require('path');


const DEST_DIR = path.join("src", "data", "components_json")

async function downloadExamples (context) {

    const href = 'https://github.com/italia/bootstrap-italia/archive';
    const zipFile = 'main.zip';

    const source = `${href}/${zipFile}`;

    return new Promise((resolve, reject) => {
        request.get(source)
            .on('error', function(error) {
                reject(error);
            })
            .pipe(fs.createWriteStream(zipFile))
            .on('finish', function() {
                console.log('✅ Finished downloading');
                const zip = new admZip(zipFile);
                console.log('📑 Extracting json');
                fs.mkdirSync(path.join(DEST_DIR, context), { recursive: true })
                const zipEntries = zip.getEntries();
                zipEntries.forEach(function (zipEntry) {
                    if (zipEntry.entryName.match(new RegExp('.*\/api\/.*.json'))) {
                        const newFolder = path.join(
                            DEST_DIR, context, 
                            path.dirname(zipEntry.entryName).split(path.sep).pop(), 
                        )
                        fs.mkdirSync(newFolder, { recursive: true })
                        fs.writeFileSync(
                            path.join(
                                newFolder,
                                path.parse(zipEntry.entryName).base
                            ),
                            zipEntry.getData().toString("utf8"),
                            'utf-8'
                        )
                    }
                });
                fs.unlinkSync(zipFile);
                resolve()
            });
    })
}

module.exports = {
    downloadExamples
}