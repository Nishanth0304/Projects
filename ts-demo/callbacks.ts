function getemployee(callback:Function):void{
    setTimeout(function(){
        console.log("Employee Fetched");
        callback();
    },1000);
}

function getdepartment(callback:Function):void{
    setTimeout(function(){
        console.log("Department Fetched");
        callback();
    },1000);
}

function getsalary(callback:Function):void{
    setTimeout(function(){
        console.log("salary Fetched");
        callback();
    },1000);
}

getemployee(function(){
    getdepartment(function(){
        getsalary(function(){
            console.log("All data Retrived");
        });
    });
});