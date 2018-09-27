/*
TYPES
*/

//Booleans
let on = true;
console.log(on); //output-> true

let off = false;
console.log(off);

//boolean can represent: true/false, on/off, yes/no

//Null
/*
Null = empty value(not 0; not undefined)

it is like an empty container; nothing is in it, but it still exists as a space to fill
*/

let empty = null;
console.log(empty);


//Undefined
/*
undefined = no value assigned (not even an empty container)

undefined is not an error
*/

 let undef= undefined;
 console.log(undef);  //still is undefined

 let grass;
 console.log(grass); //still is undefined

 /*think of undefined and null as packages in UPS
 null-> package deliberately sent out from UPS as empty
 undefined -> package that was forgotten, or package that has not been used
 */

 //Numbers
let degrees = 65;
console.log(degrees);

let percise = 999999999999999
console.log(percise);

let rounded= 9999999999999999
console.log(rounded);

let notQuite= 0.2 + 0.1;
console.log(notQuite.toFixed(2));

let anotherNum = 0.2 +0.1;
console.log(anotherNum);

let num = 0.3;
console.log(num);

let numAreHard = (0.2 * 10 + 0.1 * 10) /10;
console.log(numAreHard);

//Strings
//Strings = any value within quotes; JS spit out the value within the quotes
let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne + stringTwo);

//numbers vs strings
let first = 1050 + 100;
let second = '1020'+'100';

console.log(first);  //number
console.log(second);  //string

console.log(typeof first); //number
console.log(typeof second); //string

//Whats going on here?
// + -> addition when given 2 numbers, concatenation when given 2 strings

let third = 1050 + '100'

console.log(third);

//Challenge:

//set 7(or 8) variables:
//firstName
//lastName
//houseNumber
//aptNumber (if applicable)
//street
//city
//state
//zipcode

//set each variable to its respective type.

//console.log your whole address (with the space between variable).

let firstName='William';
let lastName='Bailey IV'; 
Let houseNumber=901;
let street= 'Ironwood West'; 
let city= 'Brownsburg';
let state= 'Indiana'
let zipcode= 46112

console.log(firstName, lastName +',', houseNumber, street+ ','city+ ',',state,zipcode)

//Object
/*
What is an object?

a container that can hold multiple datatypes

denoted by {}
has keys and values (color (key): 'blue' (value)), separated with a colon
Each key separated with a coma
*/

let burritosNow = {
    size: 'Large',
    quantity: 4,
    now: true  
}

console.log(burritosNow);

console.log(burritosNow);
console.log(typeof burritosNow)

//Arrays
/*
Arrays are great for lists

denoted by ['blue', 'green','yellow']
have values separated by commas ->
*/

let burritos = ['large', 4, true];
console.log(burritos);
console.log(typeof burritos);