'use strict';
// Make student report

// return an array of strings '[name]: [grade]'

function makeStudentsReport(data) {
  // your code here
  const results = [];
  for (let i=0; i < data.length; i++) {
    const student = data[i];
    results.push(`${student.name}: ${student.grade}`);
  }
  return results;
}


const studentData = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology',
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics',
  },
  {
    name: 'Liz',
    status: 'On leave',
    course: 'Computer science',
  },
];

function enrollInSummerSchool(students) {
  
  //enrollInSummerSchool should return an array of objects. For each object from the original array

let newData = [];

  for(i=0; i < students.length; i++){

    const student = students[i];

    newData.push({name: student.name, status:'In Summer school',course: student.course});


  }

  return newData;
}

// Find by ID
const scratchData = [
  { id: 22, foo: 'bar' },
  { id: 28, foo: 'bizz' },
  { id: 19, foo: 'bazz' },
];

function findById(items, idNum) {
  return items.find(function(element) {
    return element.id === idNum;
  });
}


function validateKeys(object, expectedKeys) {
  // your code goes here
  if(expectedKeys.length !== Object.keys(object).length){
    return false;
  }




  for(var property in object){

    console.log(property)

    // console.log(expectedKeys.includes(property));

    if(expectedKeys.includes(property) === true){
      return true;
    } else if (expectedKeys.includes(property) === false){
      return false;
    } 

  }



}