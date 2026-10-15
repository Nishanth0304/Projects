class mobile{
    brand:string="Poco";
    cost:number=10000
    color:string="Red"

    start(){
        console.log("Started...")
    }

    stop(){
    console.log("sTOPPED..");
    }

    restart(){
        console.log("Restarted")
    }
}
 
let m = new mobile()
console.log(m.brand)
console.log(m.cost)
console.log(m.color)
m.start()
m.stop()
m.restart()

