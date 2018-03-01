
 class PromiseAsync {
    


    constructor(cb) {
        if(!cb)return;
        cb(this.resolve,this.reject)
    }

    then = function (cb:any):any {
        this.success = cb
        return this;
    }

    catchFunction = function (cb:any):any {

        this.error = cb;
        return this;
    }


    resolve = function (succuss:any):any {

        this.then(succuss)
    }

    reject = function (failure:any):any {

        this.catchFunction(failure)
    }


}

export  default PromiseAsync








    
    

