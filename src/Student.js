class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.courses = [];
    this.isOriented = false;
  }

  enroll(courseName) {
    let _courseDtls = this._getCourseDetailsFromExternalWebService(courseName);
    this.courses.push(_courseDtls);
  }

  _getCourseDetailsFromExternalWebService(courseName) {
    //do a call to POST data
    return;
  }

  startOrientation(buddy) {
    //greet first
    this.greet(buddy);
    this.IsOriented = true;
  }

  greet(buddyName) {
    console.log(
      `Buddy  ${buddyName} welcomes ${this.firstName} ${this.lastName}`
    );
  }
}

module.exports = Student;
