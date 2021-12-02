const chai = require("chai");
const Student = require("../src/Student");
const sinon = require("sinon");
const expect = chai.expect;

describe("Testing the Reenroll", () => {
  it("How to spy to the external API call", () => {
    //student
    //Given-Arrangements
    let _student = new Student("solen", "dogan");
    let arg1 = "java";

    const spy = sinon.spy(_student, "enroll");
    //When-Actions
    _student.ReEnroll(arg1);
    sinon.assert.calledOnce(spy);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith(arg1)).to.be.true;
    //Then
  });
});
