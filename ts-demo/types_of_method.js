"use strict";
// Inheriting Method
// class Parent{
//     eat():void{
//         console.log("This is Inheriting Method");
//     }
// }
// class Child extends Parent{
// }
// let a = new Child();
// a.eat();
// Overriden Method
// class Parent{
//     eat():void{
//         console.log("This is main block");
//     }
// }
// class Child extends Parent{
//     eat():void{
//         console.log("I alter the body so it is Overriden Method")
//     }
// }
// let a = new Child();
// a.eat();
//Specialized Method
class Parent {
    eat() {
        console.log("The main block");
    }
}
class Child extends Parent {
    dog() {
        console.log("Dog barks");
    }
}
let a = new Child();
a.eat();
a.dog();
