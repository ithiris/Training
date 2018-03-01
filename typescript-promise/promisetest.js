/**
 * Created by ithir on 01-03-2018.
 */
"use strict";
var promiseasynchronus_1 = require('../typescript-promise/promiseasynchronus');
var PromiseTest = (function () {
    function PromiseTest() {
    }
    PromiseTest.prototype.database1 = function () {
        return new promiseasynchronus_1["default"](function (resolve, reject) {
            var a = 5;
            var b = 25;
            setTimeout(function () {
                if (a < b) {
                    resolve('database success');
                }
                else {
                    reject('database failure');
                }
            }, 3000);
        });
    };
    PromiseTest.prototype.database2 = function () {
        return new promiseasynchronus_1["default"](function (resolve, reject) {
            var a = 5;
            var b = 10;
            setTimeout(function () {
                if ((a < b)) {
                    resolve('database 2 succuss');
                }
                else {
                    reject('database 2 failure');
                }
            }, 2000);
        });
    };
    return PromiseTest;
}());
var databaseone = new PromiseTest();
databaseone.database1()
    .then(function (response) {
    console.log(response);
})
    .catchFunction(function (error) {
    console.log(error);
});
var databasetwo = new PromiseTest();
databasetwo.database2()
    .then(function (response) {
    console.log(response);
})
    .catchFunction(function (error) {
    console.log(error);
});
//# sourceMappingURL=promisetest.js.map