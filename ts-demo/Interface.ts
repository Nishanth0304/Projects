// interface calculator{
//     add():void;
//     sub():void;
// }
// class mycalculator implements calculator{
//     add():void{
//         console.log("This is addition method")
//     }
//     sub():void{
//         console.log("This is substarction method");
//     }
//     mul():void{
//         console.log("This is multiplication");
//     }
//     div():void{
//         console.log("This is division");     
//     }
// }
// let a = new mycalculator();
// a.add();
// a.sub();
// a.mul();
// a.div();


// interface Employee {
//     empId: number;
//     empName: string;
//     display(): void;
// }
// class Manager implements Employee {
//     empId: number = 101;
//     empName: string = "Ravi";
//     display(): void {
//         console.log(this.empId, this.empName);
//     }
//     add():void{
//         console.log("This is addition")
//     }
// }
// let m = new Manager();
// m.display();
// m.add();


interface Student {
    name: string;
    age: number;  
}
let s1: Student = {
    name: "Nishanth",
    age:30, 
};
console.log(s1);