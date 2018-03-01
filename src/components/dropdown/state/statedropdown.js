"use strict";
var domManipulation_1 = require('../../../utilities/domManipulation');
var DropDownState = (function () {
    function DropDownState() {
        domManipulation_1.$(this.constructor.name.toLowerCase()).item(0).innerHTML = require("./statedropdown.html");
    }
    return DropDownState;
}());
exports.__esModule = true;
exports["default"] = DropDownState;
//# sourceMappingURL=statedropdown.js.map