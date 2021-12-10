const math = require("../src/Math");
const chai = require("chai");
const sinon = require("sinon");
const { expect } = require("chai");

const Math = math.Math;

describe("tetsing the Math", () => {
  it("Stub the add", () => {
    //create the obj
    let myObj = new Math();

    //add depends on _calculate -so we stub _calculate
    let stub = sinon.stub(myObj, "_calculate");

    stub.withArgs(2, 4).onFirstCall().returns(2).onSecondCall().returns(99);
    //call the real code
    expect(myObj.add(2, 4)).to.be.equal(2);
    expect(myObj.add(2, 4)).to.be.equal(99);
  });
});
