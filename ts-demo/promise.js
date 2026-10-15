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
getemployee()
    .then(function (employee) {
    console.log("Employee:", employee);
    return getdepartment();
})
    .then(function (department) {
    console.log("Department:", department);
    return getsalary();
})
    .then(function (salary) {
    console.log("Salary:", salary);
    console.log("All data retrived");
});
