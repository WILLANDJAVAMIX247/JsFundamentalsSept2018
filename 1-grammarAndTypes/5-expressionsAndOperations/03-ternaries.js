//Ternaries.js

var x = 6;

(x> 0) ? console.log("x is greater than 0."):
console.log("x is not greater than 0")

if (x>0) {
    console.log("greater")
}else{
    console.log("lesser")
}

(x == 0) ? console.log("x equals 0") : (x<0) ? console.log("x is less than zero") :
console.log("x is greater than 0")


var age= 20;

(age >24) ? console.log("you are old enough to enter the party"): 
console.log("access denied you can not enter the party")

if (age>24){
    console.log("old enough")
}else{
    console.log("not old enough")
}

(age == 24) ? console.log("age is not old enough") :
(age > 24) ? console.log("you are old enough"):
console.log("age is still to young")

let yep = -8;

(yep < 0 && yep > -10) ? console.log("yep is between 0 and -10")
:(yep > 0) ? console.log("yep is greater than 0"): console.log("yep is greater than 0")

let y = 5;

(y==2) ? console.log("y is equal to two") : console.log("default");