//@ts-check
var question = require("readline-sync").question;

class Student {
  constructor(ID, studentNumber, forename, lastname) {
    this.id = ID;
    this.StudentNumber = studentNumber;
    this.Forename = forename;
    this.Lastname = lastname;
    this.CourseGrades = [];
    this.addGrade = function (coursename, grade) {
      this.CourseGrades.push({ Course: coursename, Grade: grade });
    };
    this.toString = function () {
      return `${this.StudentNumber}: ${this.Forename}, ${this.Lastname}\n`;
    };
    this.getGrades = function () {
      let grades = "";
      this.CourseGrades.forEach(function (coursegrade) {
        grades = `${grades}${coursegrade.Course}:${coursegrade.Grade}\n`;
      });
      return grades;
    };
  }
}

function getStudentData() {
  let ID = question("Please enter the student's document ID: ");
  let studentNumber = question("Enter the student's number: ");
  let forename = question("Enter the student's forename: ");
  let lastname = question("Enter the student's last name: ");
  let student = new Student(ID, studentNumber, forename, lastname);
  return student;
}

function test() {
  let student1 = getStudentData();
  student1.addGrade("Computer Science", "A");
  student1.addGrade("Applied Mathematics", "C");

  process.stdout.write(student1.toString());
  process.stdout.write(student1.getGrades());

  let student2 = getStudentData();
  student2.addGrade("Computer Science", "A");

  process.stdout.write(student2.toString());
  process.stdout.write(student2.getGrades());
}

test();
