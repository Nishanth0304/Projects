abstract class plane{
    abstract takeoff():void;
    abstract landing():void;
}

class cargoplane extends plane{
    takeoff():void{
        console.log("Cargoplane is taking off....")
    }
    landing():void{
        console.log("Cargoplane is landing....");
    }
}

class passangerplane extends plane{
    takeoff():void{
        console.log("Passangerplane is taking off....")
    }
    landing():void{
        console.log("Passangerplane is landing....");
    }
}

class Fighterplane extends plane{
    takeoff():void{
        console.log("Fighterplane is taking off....")
    }
    landing():void{
        console.log("Fighterplane is landing....");
    }
}

class Airport{
    display(p:plane):void{
        p.takeoff();
        p.landing();
    }
}

let a = new cargoplane();
let b = new passangerplane();
let c = new Fighterplane();

let airport = new Airport

airport.display(a);
airport.display(b);
airport.display(c);