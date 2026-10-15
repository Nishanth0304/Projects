// let numbers:number[] = [1,2,3,4,5,6]
// let evennumber = numbers.filter(num=>num%2==0);
// console.log(evennumber);

// let numbers:number[] = [1,2,3,4,5,6];
// let sumof = numbers.reduce((total,sum)=>total+sum,0)
// console.log(sumof)

// let numbers:number[] = [1,2,3,4,5,6]
// let squares = numbers.map(num=>num*num)
// console.log(squares)

// let age = 19;
// if (age >= 18){
//     console.log("Eligible")
// }else{
//     console.log("Not eligible")
// }

// let number1 = 30;
// let number2 = 20;
// if (number1 > number2){
//     console.log(number1+" "+"Is greater than"+" "+number2)
// }else{
//     console.log(number2+" "+"is greater than"+" "+number1)
// }

// for(let i = 1;i<=10;i++){
//     console.log(i)
// }

// let name1:string = "Nishanth";
// let reversee = name1.split("").reverse().join("");
// console.log(reversee);

// let a:string = "AEIOUaeiou"
// let count:number = 0
// for(let ch of a){
//     if("aeiouAEIOU".includes(ch)){
//         count++
//     }
// }
// console.log(count);

// let a:number = 5
// let fact:number = 1
// for(let i =1;i<=a;i++){
//     fact = fact*i
// }
// console.log(fact);

// let a:number = 8
// let count:number = 0
// for(let i = 1;i<=a;i++){
//     if(a%i==0){
//     count++
//     }
// }
// if(count===2){
//     console.log("Prime");
// }else{
//     console.log("Not prime");
// }

// let a:number =7;
// if(a%2==0){
//     console.log("Even");
// } else{
//     console.log("Odd");
// }

// let a:number=10;
// let b:number = 20
// let c = a;
// a = b;
// b = c;
// console.log(a,b)

// let a:number = 20
// let b:number = 10
// let c:number = 30
// if(a>b && a>c){
//     console.log("A is greater")
// }else if(b>c){
//     console.log("B is greaer");   
// }else{
//     console.log("C is greater");   
// }

// let a:number = 10
// if (a>0){
//     console.log("Positive");
// }else if(a<0){
//     console.log("negative");
// }else{
//     console.log("Zero");
// }

// let a:number = 5
// for(let i = 1;i<=10;i++){
//     console.log(a+" "+"*"+" "+i+" "+"="+" "+a*i)
// }

// let a:number=10
// let count:number = 0
// for(let i = 1;i<=a;i++){
//     count = count+i
// }
// console.log(count);

// let a:number = 15
// let count:number = 0
// while (a>0){
//     count++;
//     a = Math.floor(a%10);
// }
// console.log(count);

// let num:number = 12345
// let sum = 0
// while(num>0){
//     sum = sum+(num%10)
//     num = Math.floor(num/10)
// }
// console.log(sum);

// let a:number = 12345
// let str:string = a.toString()
// let b = str.split("").reverse().join("")
// console.log(Number(b));

// let a:number = 123
// let b:string = a.toString()
// let c = b.split("").reverse().join("")
// if(a == Number(c)){
//     console.log("Palindrome");
// }else{
//     console.log("not palindrome");   
// }

// let arr:number[] = [10,50,30,20,60]
// let largest = arr[0]
// for(let num of arr){
//     if(num > largest){
//         largest = num
//     }
// }
// console.log(largest);

// let arr:number[] = [1050,5,6,8,9]
// let smallest = arr[0]
// for(let num of arr){
//     if (num < smallest){
//         smallest = num
//     }
// }
// console.log(smallest);

// let a:number[]=[1,2,3,4,5,6]
// let count:number = 0
// for(let num of a){
//     if(num%2==0){
//         count = count + 1
//     }
// }
// console.log(count);

// let a:number[]=[10,20,30,40,50]
// let sum:number = 0
// for(let num of a){
//     sum = sum+num
// }
// console.log(sum/a.length);

// let a:number[] = [10,20,30,10,40]
// let unque = [...new Set(a)]
// console.log(unque);

// let a:string = "nishanth"
// console.log(a.length);

// let a:string = "nishanth"
// console.log(a.toUpperCase());

// let a:string = "Noishanth"
// let b = a.split(" ")
// console.log(b.length);

// let a:string = "Nishanth"
// console.log(a[0]);

// let a:number = 10
// let b:number = 0
// let c:number = 1
// console.log(b);
// console.log(c);
// for(let i = 3;i<=10;i++){
//     let d = b+c
//     console.log(d);
//     b=c
//     c=d
// }

let a:number[] = [1,5,7,8,9]
let b = a.sort()
console.log(a[a.length - 2]);
