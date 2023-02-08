const {generateExamples} = require("./generate-examples.js")
const {downloadExamples} = require("./download-examples.js")

const main = async function () {
    console.log("⤵️ Downloading examples...")
    await downloadExamples()
    console.log("✅ Done")
    // console.log("🧵 Generating examples...")
    // generateExamples()
    // console.log("✅ Done")
}

main()
