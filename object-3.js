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