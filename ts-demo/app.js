"use strict";
let message = "Hello TypeScript";
console.log(message);
let age = 25;
let salary = 50000.75;
console.log(age);
console.log(salary);
let empname = "Nishanth";
let city = 'Bangalore';
console.log(empname);
console.log(city);
let isActive = true;
let isLoggedIn = false;
console.log(isActive);
console.log(isLoggedIn);
//Array
let marks = [80, 90, 95];
let names = ["Ram", "Sam", "John"];
console.log(marks);
console.log(names);
//Tuple
let employee = [101, "Nishanth"];
console.log(employee);
//Enum
var Department;
(function (Department) {
    Department[Department["HR"] = 0] = "HR";
    Department[Department["IT"] = 1] = "IT";
    Department[Department["Finance"] = 2] = "Finance";
})(Department || (Department = {}));
let dept = Department.IT;
console.log(dept);
//Any
let data = 100;
data = "Hello";
data = true;
console.log(data);
//Null
let x = null;
console.log(x);
//Undefined
let y = undefined;
console.log(y);
//Object
let person = {
    id: 1,
    namess: "Nishanth"
};
console.log(person);

function addition(c, d) {
    return c + d;
}
let res = addition(30, 40);
console.log(res);

function substraction(e, f) {
    return e - f;
}
let res1 = substraction(40, 30);
console.log(res1);

