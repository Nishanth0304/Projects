"use strict";
function getemployee() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Employee Fetched");
            resolve('John');
        }, 1000);
    });
}
function getdepartment() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Department Fetched");
            resolve('IT');
        }, 1000);
    });
}
function getsalary() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("salary Fetched");
            resolve(50000);
        }, 1000);
    });
}
async function getemployeedetails() {
    let employee = await getemployee();
    console.log("Employee:", employee);
    let department = await getdepartment();
    console.log("Department:", department);
    let salary = await getsalary();
    console.log("Salary:", salary);
    console.log("All data retrived");
}
getemployeedetails();
