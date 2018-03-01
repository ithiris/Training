"use strict";
var domManipulation_1 = require('../../../utilities/domManipulation');
var DropDownCity = (function () {
    function DropDownCity() {
        domManipulation_1.$(this.constructor.name.toLowerCase()).item(0).innerHTML = require("./citydropdown.html");
    }
    return DropDownCity;
}());
exports.__esModule = true;
exports["default"] = DropDownCity;
//# sourceMappingURL=citydropdown.js.map