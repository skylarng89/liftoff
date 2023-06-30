"use strict";
(() => {
var exports = {};
exports.id = 487;
exports.ids = [487];
exports.modules = {

/***/ 9612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
function handler(_req, res) {
    res.status(200).json({
        error: "We love that you want to keep trying us out! Feel free to clone this repository in Vercel and continue using it yourself."
    });
    return res.end();
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9612));
module.exports = __webpack_exports__;

})();