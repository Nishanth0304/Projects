"use strict";
class plane {
}
class cargoplane extends plane {
    takeoff() {
        console.log("Cargoplane is taking off....");
    }
    landing() {
        console.log("Cargoplane is landing....");
    }
}
class passangerplane extends plane {
    takeoff() {
        console.log("Passangerplane is taking off....");
    }
    landing() {
        console.log("Passangerplane is landing....");
    }
}
class Fighterplane extends plane {
    takeoff() {
        console.log("Fighterplane is taking off....");
    }
    landing() {
        console.log("Fighterplane is landing....");
    }
}
let a = new cargoplane();
let b = new passangerplane();
let c = new Fighterplane();
a.takeoff();
a.landing();
b.takeoff();
b.landing();
c.takeoff();
c.landing();
