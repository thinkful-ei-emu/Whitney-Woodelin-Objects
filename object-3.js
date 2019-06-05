'use strict';

//Object initializers and methods

// Create an object called loaf using an object initializer ({}) with two properties: flour, which should be set to 300 and water which should be set to 210.

//Use console.log to print the flour and water properties.

//Add an empty method to the loaf object called hydration.

//Fill in the body of the method to return the hydration of the loaf (the water divided by the flour multiplied by 100).

//Call the hydration method and use console.log to print the result.

const loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return (this.water/this.flour)*100;
  }
};

console.log(loaf.flour, loaf.water);
console.log(loaf.hydration());


var obj = {
  foo: 'foo',
  bar: 'bar',
  fum: 'fum',
  quux: 'quux',
  spam: 'spam'
}

for(var propery in obj){
  console.log(Object.value);
}

var obj = {
  foo: 'foo',
  bar: 'bar',
  fum: 'fum',
  quux: 'quux',
  spam: 'spam'
}

for(var property in obj){
  const value = obj[property];
  const key = property;
  console.log(key,value);
}

// Arrays in objects
// Create an object with a property called meals which is an array of strings: 'breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'.
// Use console.log to show the name of a hobbit's fourth meal of the day.
// Don't forget that humans and hobbits count from 1, but computers count from 0.

const hobbitMeals = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(hobbitMeals.meals[3]);


// Create 3-5 objects, each with a name and a jobTitle




var storage = [

  {
   name: 'Clint',
   jobTitle: 'Director'
 },
 
 
 {
   name: 'Sam',
   jobTitle: 'Graphic Designer',
   boss: 'Clint'
 },
 
 {
   name: 'Whitney',
   jobTitle: 'Teacher',
   boss: 'Clint'
 }
];



for(let i = 0; i < storage.length; i++){
if(storage[i].hasOwnProperty('boss')) {
  console.log(`${storage[i].jobTitle} ${storage[i].name} reports to ${storage[i].boss}.`);
} else
 console.log(`${storage[i].jobTitle} ${storage[i].name} doesn't report to anybody.`);
}

//cracking the code
// --------- 
function decode(string) {
  let newArray = string.split(' ');
  let decodedSentence = [];

  for(let i=0; i<newArray.length; i++) {
    let firstLetter = newArray[i].charAt(0);
    if(firstLetter === 'a') {
      decodedSentence.push(newArray[i].slice(1, 2));
    } else if(firstLetter === 'b') {
      decodedSentence.push(newArray[i].slice(2, 3));
      console.log(decodedSentence);
    } else if(firstLetter === 'c') {
      decodedSentence.push(newArray[i].slice(3, 4));
    } else if(firstLetter === 'd') {
      decodedSentence.push(newArray[i].slice(4, 5));
    } else {decodedSentence.push(' ');}
      
  }
  return decodedSentence.join().replace(/,/g, '');

}
decode('craft block argon meter bells brown croon droop');
// ---------

var cipher = {



}

function decode(){
  
}