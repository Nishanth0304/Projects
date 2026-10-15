function preparedough(){
    console.log("Preparing Dough")
}

function taketopping(){
    console.log("Add Topping");
}

function baking(){
    setTimeout(() => {
        console.log("Baking");
    }, 2000);

}

function takeotherorder(){
    console.log("Taking other order");
}

preparedough();
taketopping();
baking();
takeotherorder();