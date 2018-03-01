"use strict";
function $(selector) {
    if (selector.indexOf(".") !== -1) {
        return document.getElementsByClassName(selector.replace(".", ""));
    }
    else if (selector.indexOf("#") !== -1) {
        return document.getElementById(selector.replace("#", ""));
    }
    else {
        return document.getElementsByTagName(selector);
    }
}
exports.$ = $;
//# sourceMappingURL=domManipulation.js.map