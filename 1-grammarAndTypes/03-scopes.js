/*


Javascript has both LOCAL and GLOBAL scope
*/

var x = 12;

function scope(){
    var x =33;
    console.log(x);
}
scope(); //output was 33
console.log(x);// output was 12

//
var x = 12;
function scope(){
    x = 33
    console.log(x);
}
scope()//output 33
console.log(x);//output 33
//The two examples are different because the first exp
//had 2 variables named 'x' the second just had one var named 'x' 

var x = 12;
function scope(){
    var x = 33;
    if (true){
        var x=45;
        console.log(x);
    }
    console.log(x);
}
scope();
console.log(x);
// 
let x = 12;

function scope(){
    let x = 33;
    if (true){
        let x = 45;
        console.log(x);
    }
    console.log(x);
}
scope();
console.log(x);

//
function constTest(){
    const scope = 1;
    if (true){
        const scope = 2;
        console.log(scope);
    }
    console.log(scope);
    if (true){
        const scope= 3;
        console.log(scope);
    }
    console.log(scope);
}
constTest();

/*
    variable declar.   obeys functional scope    obeys block scope   can be mutated (changed after initialization)
    var                 x                         o                   x
    let                 x                         x                   x
    const               x                         x                   o
*/