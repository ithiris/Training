"use strict";
var PromiseAsync = (function () {
    function PromiseAsync(cb) {
        this.then = function (cb) {
            this.success = cb;
            return this;
        };
        this.catchFunction = function (cb) {
            this.error = cb;
            return this;
        };
        this.resolve = function (succuss) {
            this.then(succuss);
        };
        this.reject = function (failure) {
            this.catchFunction(failure);
        };
        if (!cb)
            return;
        cb(this.resolve, this.reject);
    }
    return PromiseAsync;
}());
exports.__esModule = true;
exports["default"] = PromiseAsync;
//# sourceMappingURL=promiseasynchronus.js.map