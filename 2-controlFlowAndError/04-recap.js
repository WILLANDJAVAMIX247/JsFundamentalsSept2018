/*
RECAP
*/
let stringExample = 'string';
let numberExample = 0;
let boolExample = true;

let conditionExample = 0;

//if else example
if (typeof condititonExample === 'string'){
    console.log('yep, it\'s a string');
}else if (typeof conditionExample === 'number'){
    console.log("yep, it's a number");
}else if (typeof conditionExample === 'boolean'){
    console.log("yep, its's a boolean");
}

console.log(typeof conditionExample);
//switch
switch (typeof conditionExample){
    case 'string':
        console.log('this is a string!');
        break;
    case 'number':
        console.log('this is a number!');
        break;
    default:
        console.log('this variable is not a string or number');
        break;
}

//let x = 0;

//switch (x){
//  case (x< 10 && x > -10):
//     console.log('this is a small number');
//     break;
//   default:
//      console.log('this is some other number');
//      break;
//}

//ternary below


let FB = 15 

if (FB %3 === 0){
    console.log('Fizz');
}else if (FB% 5 === 0){
    console.log('Buzz')
}else if(FB% 3 ===0 && FB % 5 === 0){
    console.log('Fizz Buzz');
}

switch (true){
    case(FB%15===0):
        console.log('Fizz Buzz');
        break;
    case(FB%5===0):
        console.log('Buzz');
        break;
    case(FB%3===0):
        console.log('Fizz');
        break;
    }



