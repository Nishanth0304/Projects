"use strict";
// 1.Basic Functions
// function add1(a:number,b:number):number{
//     return a+b;
// }
// console.log(add1(10,20));
// 2.Function with multiple parameter
// function empdetails(pname: string, page:number):string|number{
//     return `pname:${pname} page:${page}`;
// }
// console.log(empdetails("Nishanth",23))
// 3.function returning void
// function display(name:string):void{
//     console.log(name);
// }
// display("Nishanth1")
// 4.Optional function
// function optional(c:number,d?:string):number|string{
//     return `c:${c} d:${d}`
// }
// console.log(optional(30));
// 5.Function with default
// function defultt(a:number,b:number=2):number{
//     return a + b;
// }
// console.log(defultt(6));
// 6. Arrow function
// const addition=(a:number,b:number):number=>a+b
// console.log(addition(10,20))
const square = (n) => n * n;
console.log(square(4));
