"use strict";
function father() {
    console.log("This is Example of Callback");
}
function mother(callback) {
    callback();
}
mother(father);
function calculator() {
    console.log("This is one function");
}
function mycalculator(r) {
    r();
}
mycalculator(calculator);
