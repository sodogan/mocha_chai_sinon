const chai = require("chai");
const Student = require("../src/Student");
const sinon = require("sinon");
const expect = chai.expect;

//When to Mock
//if the method has a dependancy where it does not cause any state change-you can mock that
//For example: in Student object-Greet method does not have any impact on the startorietation method
//So we can mock the greet method
/*

  startOrientation() {
    //greet first
    this.greet();
    this.IsOriented = true;
  }

  greet() {
    console.log(`welcome to the course ${this.firstName} ${this.lastName}`);
  }

*/
describe("testing the startorientation method", () => {
  it("Can a student be oriented", () => {
    let buddy = "eren";

    let studentObj = new Student("solen", "dogan");

    const mock = sinon.mock(studentObj);
    const expectation = mock.expects("greet");
    expectation.once();
    expectation.withArgs(buddy);

    //call
    studentObj.startOrientation(buddy);
    //Then
    mock.verify();
    mock.restore();
  });
});
