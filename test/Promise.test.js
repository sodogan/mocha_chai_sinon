/** How to test a promise that takes time
 *using the package chai-as-promised
 * This will ensure the promise worked fine
 * The old way commented out is not going to work well
 *
 *
 */
const chai = require("chai");
const sinon = require("sinon");
const { expect } = require("chai");
const { Promiser } = require("../src/Promise");
const chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);
describe("tetsing the promise", function () {
  it("how to tets a promşse-should return 24", function () {
    this.timeout(0);
    let promiser = new Promiser();
    /*
    promiser.aPromise().then(function (result) {
      expect(result).to.be.equal(24);
      expect(false).to.be.true;
      done();
    });
  
*/
    return expect(promiser.aPromise()).to.eventually.equal(24);
  });
});
