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

