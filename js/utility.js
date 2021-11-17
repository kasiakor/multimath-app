"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getInputValue(elementID) {
    var elementTarget = document.getElementById(elementID);
    return elementTarget.value;
}
exports.getValue = getInputValue;
function logger(message) {
    console.log(message);
}
exports.logger = logger;
//# sourceMappingURL=utility.js.map