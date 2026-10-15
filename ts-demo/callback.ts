function father():void{
    console.log("This is Example of Callback")
}

function mother(callback:Function):void{
    callback();
}
mother(father);

function calculator():void{
    console.log("This is one function");
}

function mycalculator(r:Function):void{
r();
}
mycalculator(calculator);