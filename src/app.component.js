"use strict";
var domManipulation_1 = require('./utilities/domManipulation');
var statedropdown_1 = require('./components/dropdown/state/statedropdown');
var citydropdown_1 = require('./components/dropdown/city/citydropdown');
var countrydropdown_1 = require('./components/dropdown/country/countrydropdown');
var App = (function () {
    function App() {
        var _this = this;
        this.name = 'Rem';
        this.index = 1;
        domManipulation_1.$("#" + this.constructor.name.toLowerCase()).innerHTML = require("./app.html");
        this.dropdowncountry = new countrydropdown_1["default"]();
        this.dropdownstate = new statedropdown_1["default"]();
        this.dropdowncity = new citydropdown_1["default"]();
        domManipulation_1.$("#add").addEventListener('click', function () {
            _this.add();
        });
        domManipulation_1.$("#sub").addEventListener('click', function () {
            _this.sub();
        });
        domManipulation_1.$("#name").innerHTML = this.name;
        domManipulation_1.$("#count").innerHTML = this.index.toString();
    }
    App.prototype.add = function () {
        this.index = this.index + 1;
        domManipulation_1.$("#count").innerHTML = this.index.toString();
    };
    App.prototype.sub = function () {
        this.index--;
        domManipulation_1.$("#count").innerHTML = this.index.toString();
    };
    return App;
}());
exports.__esModule = true;
exports["default"] = App;
//# sourceMappingURL=app.component.js.map