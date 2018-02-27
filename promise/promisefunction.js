/**
 * Created by ithir on 27-02-2018.
 */



function MyPromise(cb) {
    this.then = function (cb) {
        var successCb = cb;
        return this;
    }

    this.catch = function (cb) {
        var failureCb = cb;
        return this;
    }

    this.finally = function (cb) {
        var finalCb = cb;
    }


}




function dbCall() {
    return new MyPromise(function (resolve, reject) {
        var a = 5;
        var b = 10;
        setTimeout(function () {
            if ((a < b)) {
                resolve('addition' + a + b + 'allowed');
            } else {
                reject('addition' + a + b + 'not allowed');
            }
        }, 3000);
    })
}


var promise = dbCall();

var promis2 = promise
    .then(function (res) {
        console.log(res)
    });

promis2
    .catch(function (error) {
        console.log(error);
    })
    .finally(function (data) {
        console.log(data);
    });

