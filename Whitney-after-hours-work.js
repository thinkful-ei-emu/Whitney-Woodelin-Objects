'use strict';
//Continuation of today's work

// Cracking the Code
// Redo your Cracking the Code problem from String Drills but this time use an object as your cipher. 

// Additionally, create a decodeWords function that utilizes your decode function to accept a single string of words, and then return the fully decoded message as a string.

// --------------------
//Previous code from String Drills
// function decode(string) {
//   let newArray = string.split(' ');
//   let decodedSentence = [];

//   for(let i=0; i<newArray.length; i++) {
//     let firstLetter = newArray[i].charAt(0);
//     if(firstLetter === 'a') {
//       decodedSentence.push(newArray[i].slice(1, 2));
//     } else if(firstLetter === 'b') {
//       decodedSentence.push(newArray[i].slice(2, 3));
//       //console.log(decodedSentence);
//     } else if(firstLetter === 'c') {
//       decodedSentence.push(newArray[i].slice(3, 4));
//     } else if(firstLetter === 'd') {
//       decodedSentence.push(newArray[i].slice(4, 5));
//     } else {decodedSentence.push(' ');}
      
//   }
//   //console.log(decodedSentence);
//   return decodedSentence.join().replace(/,/g, '');

// }
// decode('craft block argon meter bells brown croon droop');
// --------------------

//***COME BACK TO AND SATISFY 2ND CRITERIA */

function decode(word) {
  let newArray = word.split(' ');
  //console.log(newArray);
  let decodedSentence = [];

  const cipher = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
  };

  for(let i = 0; i < newArray.length; i++) {
    let firstLetter = newArray[i].charAt(0);
    //console.log(firstLetter);
    let location = cipher[firstLetter];
    //console.log(location);

    if(location === undefined) {
      decodedSentence.push(' ');
    } else {
      decodedSentence.push(newArray[i][location]);
      //console.log(newArray[i][location]);
    }  
  }
  //console.log(decodedSentence.join().replace(/,/g, ''));
  return decodedSentence.join().replace(/,/g, '');
}
decode('craft block argon meter bells brown croon droop');

// Factory Functions with LOTR

// Write a factory function called createCharacter (review in this assignment) that could appropriately build characters from LOTR that have the following attributes: (see drill for table)

function createCharacter(name, nickname, race, origin, attack, defense) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe: function() {
      return `${this.name} is a ${this.race} from ${this.origin}.`;
      //console.log(${this.name});
    },
    evaluateFight: function(character) {
      let x = this.attack - character.defense;
      let y = character.attack - this.defense;
      //console.log(character.defense);

      if (x < 0) {
        x = 0;
      }
      if (y < 0) {
        y = 0;
      }
      console.log(y);
      return `Your opponent takes ${x} damage and you receive ${y} damage.`;}

  };
}
const legolas = createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', '8', '5');
const aragorn = createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', '6', '8');
console.log(legolas.evaluateFight(aragorn));