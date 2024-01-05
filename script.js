let complete = true;

let promise = new Promise (function (resolve,reject) {
    if (complete) {
        resolve("successfull.");


    } else {
        reject("faild.");
    }
});
console.log(promise);
