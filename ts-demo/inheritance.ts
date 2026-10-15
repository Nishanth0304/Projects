//Single level

// class Parent{
//     name:string="pranav";
//     age:number=50;
// }
// class Child extends Parent{
//     eat(){
//         console.log("Eating");
//     }
// }
// let a = new Child()
// console.log(a.name);
// console.log(a.age)
// a.eat();


//Multilevel

// class Grandparent{
//     name:string="Ajja";
// }
// class Parent extends Grandparent{
//     age:number=50
// }
// class Child extends Parent{
//     display(){
//         console.log("Everthing has been allocated");
//     }
// }
// let b = new Child()
// console.log(b.name)
// console.log(b.age)
// b.display()


//Hierarchical

// class Parent{
//     age:number=50;
//     name:string = "Vishu"
// }
// class child1 extends Parent{
//     display(){
//         console.log("This is child1")
//     }
// }
// class child2 extends Parent{
//     show(){
//         console.log("This is child2")
//     }
// }
// let c1 = new child1()
// console.log(c1.age)
// console.log(c1.name)
// c1.display()
// let c2 = new child2
// console.log(c2.name)
// console.log(c2.age)
// c2.show()


// Hybrid

class GrandParent{
    age:number = 80;
}
class Parent extends GrandParent{
    name:string="Ravi"
}
class child1 extends Parent{
    display(){
        console.log("This is child1")
    }
}
class child2 extends Parent{
    show(){
        console.log("This is child2")
    }
}
let c1 = new child1()
console.log(c1.age)
console.log(c1.name)
c1.display()
let c2 = new child2
console.log(c2.age)
console.log(c2.name)
c2.show()

