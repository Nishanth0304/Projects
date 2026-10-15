"use strict";
class mobile {
    brand = "Poco";
    cost = 10000;
    color = "Red";
    start() {
        console.log("Started...");
    }
    stop() {
        console.log("sTOPPED..");
    }
    restart() {
        console.log("Restarted");
    }
}
let m = new mobile();
console.log(m.brand);
console.log(m.cost);
console.log(m.color);
m.start();
m.stop();
m.restart();
