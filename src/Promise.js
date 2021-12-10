class Promiser {
  aPromise() {
    return new Promise(function (resolve, reject) {
      //Thres a delay in processing!
      setTimeout(() => resolve(12), 500);
    }).then(function (result) {
      return result * 2;
    });
  }
}

module.exports = { Promiser };
