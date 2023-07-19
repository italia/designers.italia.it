/* eslint-disable no-console */ // console.log is ok here for progress reporting

const {generateExamples} = require("./generate-examples.js")
const {downloadExamples} = require("./download-examples.js")

const main = async () => {
    console.log("⤵️ Downloading examples...")
    await downloadExamples('bsi')
    console.log("✅ Done")
    console.log("🧵 Generating examples...")
    generateExamples('bsi')
    console.log("✅ Done")
}

main()
