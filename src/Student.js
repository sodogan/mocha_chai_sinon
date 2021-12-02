const http = require("./http");

class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.courses = [];
    this.isOriented = false;
  }

  enroll(courseName) {
    //gets the courses from the API call!
    return this._getCourseDetailsFromExternalWebService(courseName);
  }

  ReEnroll(courseName) {
    //gets the courses from the API call!
    this.enroll(courseName);
  }

  _getCourseDetailsFromExternalWebService(
    endPoint = "https://jsonplaceholder.typicode.com/posts/1"
  ) {
    return http
      .fetchAPI(endPoint)
      .then((result) => {
        this.courses.push(result);
      })
      .catch(function (error) {
        // handle error
        return error;
      });
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
