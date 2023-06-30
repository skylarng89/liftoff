"use strict";
(() => {
var exports = {};
exports.id = 46;
exports.ids = [46];
exports.modules = {

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 5378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "openai"
const external_openai_namespaceObject = require("openai");
;// CONCATENATED MODULE: external "formidable"
const external_formidable_namespaceObject = require("formidable");
;// CONCATENATED MODULE: ./pages/api/transcribe.ts


const fs = __webpack_require__(7147);
const config = {
    api: {
        bodyParser: false
    }
};
async function handler(req, res) {
    const configuration = new external_openai_namespaceObject.Configuration({
        apiKey: process.env.OPENAI_API_KEY
    });
    const openai = new external_openai_namespaceObject.OpenAIApi(configuration);
    // Here, we create a temporary file to store the audio file using Vercel's tmp directory
    // As we compressed the file and are limiting recordings to 2.5 minutes, we won't run into trouble with storage capacity
    const fData = await new Promise((resolve, reject)=>{
        const form = new external_formidable_namespaceObject.IncomingForm({
            multiples: false,
            uploadDir: "/tmp",
            keepExtensions: true
        });
        form.parse(req, (err, fields, files)=>{
            if (err) return reject(err);
            resolve({
                fields,
                files
            });
        });
    });
    const videoFile = fData.files.file;
    const videoFilePath = videoFile?.filepath;
    console.log(videoFilePath);
    try {
        const resp = await openai.createTranscription(fs.createReadStream(videoFilePath), "whisper-1");
        const transcript = resp?.data?.text;
        // Content moderation check
        const response = await openai.createModeration({
            input: resp?.data?.text
        });
        if (response?.data?.results[0]?.flagged) {
            res.status(200).json({
                error: "Inappropriate content detected. Please try again."
            });
            return;
        }
        res.status(200).json({
            transcript
        });
        return resp.data;
    } catch (error) {
        console.error("server error", error);
        res.status(500).json({
            error: "Error"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5378));
module.exports = __webpack_exports__;

})();