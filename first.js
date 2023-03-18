const prompt = require("prompt-sync")();
/*
var fname = prompt("what is your first name ::");
var lname = prompt("what is your last name  ::");
console.log(" your full name is ::" , fname , lname);
let a=56;
console.log(a);
//primitive data types( nn bb ss u )
let b = null;
let c = true;
let d = BigInt("58649");
let e = "tarun";
let f = Symbol("i am a nice symbol");
let g ;
console.log(a,b,c,d,f,g);

//objects in java script
const item={
    "tarun":true,
    "saini":false,
    "varun":4545,
    "arun":undefined
}
console.log(item["saini"]);
console.log(item["tarun"]);
console.log(item["varun"]);
console.log(item["arun"]);
console.log(item["saini"]);
console.log(item.tarun);
 //operators in javascript

 let aa =45;
 let bb = 4;/
 console.log("aa+bb = " , aa+bb);
 console.log("aa-bb = " , aa-bb);
 console.log("aa/bb = " , aa/bb);
 console.log("aa*bb = " , aa*bb);
 console.log("aa%bb = " , aa%bb);
 console.log("aa**bb = " , aa**bb);
 
 let num = prompt("what is ypur age ::::");
  num=Number.parseInt(num)
  if(num==18){
    alert("this is a valid age ");
 }
 else if(num>18 && num<25){
    alert("you are a intermediate");
 }
  else{
    alert("this is a invalid age");
 }
//   loops in javascript
// for in loop
let obj={
    tarun:89,arun:78,aman:67,ansuman:78
}
for(let a in obj){
    console.log("marks of "+a+" are "+obj[a]);
}
// for of loop
for(let b of "tarun"){
    console.log(b);

}
// funstions in javascript
function sum(x,y){
    return x+y;
}
const subtraction = (p,q)=>{
    return p-q;
}
let a, b;
a=prompt("enter a first number for ::");
a=Number.parseInt(a);
b=prompt("enter a second number for ::");
b=Number.parseInt(b)
console.log("your sum of to given number are ::"+sum(a,b));
console.log("your subtraction  to given number are ::"+subtraction(a,b));

// strings
let name = "tarun";
console.log(name.length);
for(let i = 0;i<name.length;i++){
console.log(name[i]);
};

// Template literals
let boy1="tarun";
let boy2="arun";
let sentance=`${boy1} is a friend of ${boy2}`;
console.log(sentance); 

// Escape sequence characters
let fruit = 'banna\'na\n';
console.log(fruit);
console.log(fruit.length);

// some string methods in javascript
let name= "         tarun      kumar    saini    ";
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.slice(4));
console.log(name.replace("ta","r"));
console.log(name.concat(" is a bodybuilder", name , "good person "));
console.log(name.trim());

// for each loop
let num = [1,2,3,4,5,6,7,8,9]
num.forEach((element) => {
    console.log(element*element)
})
// Array.form
let name = "tarun";
let arr = Array.from(name);
console.log(arr);

// for.....of loop

for (let i of name){
    console.log(i)
}

// map , filter and reduce 
//map method
let arr =[34,45,67,78,89]
let a= arr.map((value , index , Array)=>{
    console.log(value , index , Array)
    return value+2
})
console.log(a)

//filter method 
let arr2 = [23,34,546,67,78,89]
let a2 = arr2.filter((a)=>{
    return a<546
})
console.log(a2);*/

// reduce method
let arr3= [1,2,3,4,5]
const reduce_function =(h1,h2) => {
    return h1+h2;
}
let newarr3 = arr3.reduce(reduce_function)
console.log(newarr3);












