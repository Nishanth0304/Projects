declare var require: any;
const input = require("prompt-sync")();

interface Student {
    rollNumber: number;
    names: string;
    marks: number[];
}
function generateResult(student: Student) {
    let total = student.marks.reduce((sum, mark) => sum + mark, 0);
    let percentage = Math.round(total / student.marks.length);
    let grade: string;
    if (percentage >= 90) {
        grade = "A";
    } else if (percentage >= 75) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else {
        grade = "D";
    }
    return { total, percentage, grade };
}
let rollNumber = Number(input("Enter Roll Number: "));
let names = input("Enter Name: ");
let marks = [
    Number(input("Enter Mark 1: ")),
    Number(input("Enter Mark 2: ")),
    Number(input("Enter Mark 3: "))
];
const student1: Student = {
    rollNumber,
    names,
    marks
};
console.log(generateResult(student1));