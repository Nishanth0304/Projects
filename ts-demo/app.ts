let message: string = "Hello TypeScript";
console.log(message);

let age: number = 25;
let salary: number = 50000.75;
console.log(age);
console.log(salary);

let empname: string = "Nishanth";
let city: string = 'Bangalore';
console.log(empname);
console.log(city);

let isActive: boolean = true;
let isLoggedIn: boolean = false;
console.log(isActive);
console.log(isLoggedIn);

//Array
let marks: number[] = [80, 90, 95];
let names: string[] = ["Ram", "Sam", "John"];
console.log(marks);
console.log(names);

//Tuple
let employee: [number, string] = [101, "Nishanth"];
console.log(employee);

//Enum
enum Department {
    HR,
    IT,
    Finance
}
let dept: Department = Department.IT;
console.log(dept);

//Any
let data: any = 100;
data = "Hello";
data = true;
console.log(data);

//Null
let x: null = null;
console.log(x);

//Undefined
let y: undefined = undefined;
console.log(y);

//Object
let person: object = {
    id: 1,
    namess: "Nishanth"
};
console.log(person);

function addition(c:number,d:number):number{
    return c+d;
}
let res = addition(30,40);
console.log(res);


function substraction(e:number,f:number):number{
    return e-f;
}
let res1 = substraction(40,30);
console.log(res1);

function multiplication(g:number,h:number):number{
    return g*h;
}
let res3 = multiplication(40,30);
console.log(res3);

