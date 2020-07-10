let student = {
  first: "Sankalp",
  last: "Khanna",
  age: 22,
  height: 200,
  studentinfo: function () {
    return this.first + "\n" + this.last + "\n" + this.age + "\n" + this.height;
  },
};
console.log(student.last);
console.log(student.studentinfo());
