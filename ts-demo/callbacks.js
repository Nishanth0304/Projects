"use strict";
function getemployee(callback) {
    setTimeout(function () {
        console.log("Employee Fetched");
        callback();
    }, 1000);
}
function getdepartment(callback) {
    setTimeout(function () {
        console.log("Department Fetched");
        callback();
    }, 1000);
}
function getsalary(callback) {
    setTimeout(function () {
        console.log("salary Fetched");
        callback();
    }, 1000);
}
getemployee(function () {
    getdepartment(function () {
        getsalary(function () {
            console.log("All data Retrived");
        });
    });
});
