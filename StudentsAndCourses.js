var Student = function(first, last){
  this.name = first + " " + last;
  this.courses = [];

};

Student.prototype.enroll = function (course){
  if (this.courses.indexOf(course) === -1 ){
    this.courses.push(course);
    course.students.push(this);
  }
};

Student.prototype.courseLoad = function(){

};

var Course = function(name, department, credits){
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students = [];
};

Course.prototype.addStudent = function(student){
  student.enroll(this);
};
