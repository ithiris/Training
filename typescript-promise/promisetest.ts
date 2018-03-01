/**
 * Created by ithir on 01-03-2018.
 */

import PromiseAsync from '../typescript-promise/promiseasynchronus'

class PromiseTest {


    constructor() {

    }


  database1() {

        return new PromiseAsync(function (resolve, reject) {

            let a:number = 5;
            let b:number = 25;

            setTimeout(function () {

                if (a < b) {

                    resolve('database success');
                } else {
                    reject('database failure');
                }

            }, 3000);

        })
    }

    database2() {
    return new PromiseAsync(function (resolve, reject) {
        var a = 5;
        var b = 10;
        setTimeout(function () {
            if ((a < b)) {
                resolve('database 2 succuss');
            } else {
                reject('database 2 failure');
            }
        }, 2000);
    })
}
}
  let databaseone=new PromiseTest()

databaseone.database1()
    .then(function (response) {
        console.log(response)
    })
    .catchFunction(function (error) {

        console.log(error)
    })


let databasetwo =new PromiseTest()

databasetwo.database2()

    .then(function (response) {
        console.log(response)
    })
    .catchFunction(function (error) {

        console.log(error)
    })
    
    

