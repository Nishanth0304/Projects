function getemployee():Promise<string>{
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("Employee Fetched");
            resolve('John');
        },1000);
    });
}

function getdepartment():Promise<string>{
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("Department Fetched");
            resolve('IT');
        },1000);
    });
}

function getsalary():Promise<number>{
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("salary Fetched");
            resolve(50000);
        },1000);
    });
}

getemployee()
.then (function(employee:string){
    console.log("Employee:",employee);
    return getdepartment();
})
.then (function(department:string){
    console.log("Department:",department);
    return getsalary();
})
.then (function(salary:number){
    console.log("Salary:",salary);
    console.log("All data retrived");
})