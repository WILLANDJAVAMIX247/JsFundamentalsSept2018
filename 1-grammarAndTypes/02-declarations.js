/*
VARIABLES

1) a variable must begin with a letter, undercrore, or dollar sign
2) you can use numbers, but they must follow one of the above
3) Javascript is case sensitive 'hellow' and 'Hello' are different
*/

var a=1;
var b=2;
console.log(a+b); //3

/*
DECLARATIONS 

Declerations are the LEFT SIDE of a variable
    It is simply the var x
    It is on the left side of assignment operatior (=)

Initializations are the right side of the variable
    set the value to the variable
    Includes the variable name(x), the assignment operator(=)and the value (10) => x = 10
    */

    var x;
    console.log('Declaration:',x);

    x=10;
    console.log('Initalization on 1:',x);

    x=33 
    console.log('Initialization2:',x);

    /*
    Var, Let, and Const:
    Var= 'old' js keyword for variables
    let = 'new' js keyword for variable (introduced in ES6)
    const= also 'new'; declares unchangeable variables
    */

    let today = 'Great';
    const elevenFifty = 'Wonderful!'
    console.log(today, elevenFifty);

    today = "lovely"
    console.log(today, elevenfifty);

    //elevenFifty= 'Super'
    console.log(today, elevenFifty);
