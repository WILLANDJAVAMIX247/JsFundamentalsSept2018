/*
INTRO TO ARRAYS

HAVE [] brackets 
can hold multiple datatypes
great for listing
*/

//overview/calling

let students = ['tony','Marshall','Rhys','Ray',23, true, ['Ryan', 'Iesha']];
//index numbers: 0      1           2     3    4    5      6                    

console.log(typeof students); //object
console.log(students[2]); //Rhys

console.log(students[6][1]);//Iesha
console.log(`Hello${students[6][1]}, you look nice today`);
console.log('Hello,', students[6][1], 'you look nice today');

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

for (let f of food){
    console.log(f);
}

for (let i=0; i<food.length; i++){
    console.log(food[i])
}

food.push('Pizza')//appends pizza to the end of the array
//console.log(food);
console.log(food);
food.splice(1,1,'Bananas'); //first num: the index to start at, second num: number of things to remove, third number is the replacement value
console.log(food);
food.splice(2, 0, 'Sweet Potato Pie');
console.log(food);
