/*
IF ELSE
*/

weather = 75;

if (weather < 70){
    console.log('Wear a jacket');
}else{
    console.log('No jacket necessary!');
}

/*
Challenge: 
Write an if else statement that checks your name;
If it is your name, console.log 'Hello, my name is <your name>';
If the name does not match, console.log 'Hello, what is your name?'
*/

name = 'William Bailey' 

if ( name == 'William Bailey IV'){
    console.log('This is William Bailey IV');
}else{
    console.log('ACCESS DENIED, THIS IS NOT WILLIAM BAILEY IV');
}

/*
Challenge:
Capitalize the FIRST LETTER OF NAME ONLY
*/

let name = 'cRaZy' //output->Crazy

function name(string){
    //console.log(string.charAt(0).toUpperCase());
   // console.log(string.slice(1).toLowerCase());
    return string.charAt(0).toUpperCase()+string.slice(1).toLowerCase();
}
console.log(name('jOsH'))

let name = 'tYlEr';

if (name[0]== name[0].toUpperCase()){
    firstLetter = name [0] + name.slice(1).tolowerCase();
    console.log(firstLetter);
}else{
    otherLetters = name.charAt(0).toUpperCase()+ name.slice(1).lowerCase();
    console.log(otherLetter);
}

let age = 25 

if (age <= 17);{
    console.log('Sorry, you are too young to do anything.');
} else if(age >= 18);{
    console.log('Yay! You can vote!');
} else if (age >= 21);{
    console.log('Yay! You can drink');
} else (age >= 25);{
    console.log('yay, you can rent a car!');
}