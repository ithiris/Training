/**
 * Created by ithir on 27-02-2018.
 */

function MyPromise(cb) {
    var that = this;
    this.successCb = null;
    this.failureCb = null;
    this.finalCb = null;

    this.then = function (cb) {
        this.successCb = cb;
        return this;
    }

    this.catch = function (cb) {
        this.failureCb = cb;
        return this;
    }

    this.finally = function (cb) {
        this.finalCb = cb;
        return this;
    }

    this.resolve = function (succuss) {
        that.successCb(succuss);
        that.finalCb();
    }

    this.reject = function (error) {
        that.failureCb(error);
        that.finalCb();
    }

    cb(this.resolve, this.reject);
}


function dbCall1() {
    return new MyPromise(function (resolve, reject) {
        var a = 5;
        var b = 10;
        setTimeout(function () {
            if ((a < b)) {
                resolve('dbcall 1 success');
            } else {
                reject('dbcall 1 failure');
            }
        }, 3000);
    })
}

function dbCall2() {
    return new MyPromise(function (resolve, reject) {
        var a = 5;
        var b = 10;
        setTimeout(function () {
            if ((a < b)) {
                resolve('dbcall 2 success');
            } else {
                reject('dbcall 2 failure');
            }
        }, 2000);
    })
}


var promise = dbCall1();
promise
    .then(function (res) {
        console.log(res)
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log();
    });


var promise2 = dbCall2();
promise2
    .then(function (res) {
        console.log(res)
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
        console.log();
    });
