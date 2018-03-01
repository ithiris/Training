"use strict";
var domManipulation_1 = require('../../../utilities/domManipulation');
var DropDownCountry = (function () {
    function DropDownCountry() {
        domManipulation_1.$(this.constructor.name.toLowerCase()).item(0).innerHTML = require("./countrydropdown.html");
    }
    return DropDownCountry;
}());
exports.__esModule = true;
exports["default"] = DropDownCountry;
//# sourceMappingURL=countrydropdown.js.map