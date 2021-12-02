const chai = require("chai");
const Student = require("../src/Student");

const expect = chai.expect;

//Start writing test
describe("Can we create A Student", () => {
  let _studentNoArgs;
  before(() => {
    _studentNoArgs = new Student();
    console.log("Before before");
  });

  after(() => {
    console.log("after after");
  });

  beforeEach(() => {
    console.log("Before each top");
  });

  afterEach(() => {
    console.log("After each top");
  });

  describe("Constructor", () => {
    const Validate = (studentObj, compareTo) => {
      //then
      expect(studentObj).to.be.a("object");
      expect(studentObj).to.have.property("firstName");
      expect(studentObj).to.have.property("lastName");
      expect(studentObj).to.have.property("courses");
      if (compareTo) {
        expect(studentObj).to.deep.equal(compareTo);
      }
    };
    it("Student with name", () => {
      //Given
      let _student = new Student("solen", "dogan");
      //When
      Validate(_student, {
        firstName: "solen",
        lastName: "dogan",
        courses: [],
        isOriented: false,
      });
    });
    it("Student with no Name", () => {
      //Given
      let _student = _studentNoArgs;
      //When
      Validate(_student, {
        firstName: undefined,
        lastName: undefined,
        courses: [],
        isOriented: false,
      });
    });
  });
  it("Testing properties", () => {
    expect(_studentNoArgs.firstName).to.be.equal(undefined);
  });
});

describe.skip("testing  student creation", () => {
  let _student;

  before(() => {
    console.log("**before  called");
  });

  after(() => {
    console.log("**after called");
  });
  beforeEach(() => {
    //Given
    _student = new Student("solen", "dogan");
  });
  afterEach(() => {
    _student = null;
  });
  it("Basic test", () => {
    //then
    expect(_student).to.be.a("object");
    expect(_student).to.have.property("firstName");
    expect(_student).to.have.property("lastName");
    expect(_student).to.have.property("courses");
    expect(_student.firstName).to.be.equal("solen");
  }),
    it("Deeper test", () => {
      expect(_student).to.deep.equal({
        firstName: "solen",
        lastName: "dogan",
        courses: [],
      });

      expect(_student).to.have.ownPropertyDescriptor("firstName", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: "solen",
      });
    });
});
