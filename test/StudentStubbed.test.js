const chai = require("chai");
const Student = require("../src/Student");
const sinon = require("sinon");
const expect = chai.expect;

//When to Stub
//if the method has a dependancy where it takes long time -like API call or Database state change-you can mock that
//For example: in Student enroll has a dependancy to callExternalWebService
//So we need t stub the _callExternalWebService  method
/*

  enroll(courseName) {
    this.courses.push(courseName);
    this._callExternalWebService(courseName);
  }

  _callExternalWebService(courseName) {
    //do a call to POST data
  }

*/

describe("Testing the enroll", () => {
  it("How to stub the external API call", () => {
    let studentObj = new Student("solen", "dogan");
    const stub = sinon.stub(
      studentObj,
      "_getCourseDetailsFromExternalWebService"
    );
    stub.returns(100);

    //call the real service
    //THis should insert a record to the courses array
    studentObj.enroll("java");

    expect(studentObj.courses).to.include(100);
    //expect([1, 2, 3]).to.not.include(4);
  });
});
