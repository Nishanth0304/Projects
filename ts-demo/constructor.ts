class mobile{
    name:string;
    constructor(value1:string){
        this.name=value1;  //This keyword is used to access field or property of class.
    }
    display(){
        console.log(this.name)
    }
}
let n = new mobile("Shrinivasa n Bhat");
n.display();