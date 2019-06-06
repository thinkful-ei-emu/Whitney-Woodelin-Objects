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

// Write a factory function called createCharacter (review in this assignment) that could appropriately build characters from LOTR that have the following attributes: (see drill for table); Each character should have the method 'describe' which takes no parameters and prints out the string: '{name} is a {race} from {origin}.'
//Each character should also have a method called evaluateFight...


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

//console.log(characters);
//console.log(characters[0].name);
//const legolas = createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', '8', '5');
//const aragorn = createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', '6', '8');
//console.log(legolas.evaluateFight(aragorn));

// Using array literal syntax, create an array 'characters' that calls your factory function for each character in the table above with the relevant parameters.  Your 'characters array should now have 5 objects in it.
//Add a new character to 'characters' => 'arwen'
const characters = [
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', '6', '8'), 
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', '8', '5'),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', '3', '2'),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', '2', '1'),
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', '10', '6'),
  createCharacter('Arwen Undomiel', 'arwen', 'Elf', 'Rivendell', '10', '10')
];

// Using the .find() function, retrieve your character nicknamed 'aragorn' from 'characters' and then call his 'describe' method.
characters.forEach(function(character) {
  if(character.nickname === 'aragorn') {
    return character.describe();
  }
});

// Using the .filter() function, create a new array from 'characters' that ONLY contains characters of the race 'Hobbit'
const hobbits = characters.filter(character => {
  //console.log(character.race);
  return character.race === 'Hobbit';
});
//console.log(hobbits);

// Using the .filter() function, create a new array from 'characters' that ONLY contains characters with attack value above 5.
const attackers = characters.filter(character => {
  return character.attack > 5;
});
//console.log(attackers);


// BONUS: A Database Search
// const HEROES = [
//   { id: 1, name: 'Captain America', squad: 'Avengers' },
//   { id: 2, name: 'Iron Man', squad: 'Avengers' },
//   { id: 3, name: 'Spiderman', squad: 'Avengers' },
//   { id: 4, name: 'Superman', squad: 'Justice League' },
//   { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
//   { id: 6, name: 'Aquaman', squad: 'Justice League' },
//   { id: 7, name: 'Hulk', squad: 'Avengers' },
// ];

// // Write a function findOne() that takes in the following two arguments: (1) arr - array of Heroes objects to search through, (2) query - object with one or more key/value pairs that must exactly match the target Hero
// // The first matching result should be returned even if multiple match.  If a match isn't found, return 'null'
// function findOne(arr, query) {
//   let found = false;

//   HEROES.forEach(hero => {
//     if(found === false) {
      
//       let heroKeys = Object.keys(hero);
//       let heroValues = Object.values(hero);

//      // console.log(heroValues);
//       for(let query in heroKeys) {
//         console.log(query);
//         return query;
//       }
//       if(query.key === heroKeys) {
//         found = true;
//         return hero;
//       }
//     }
//   });
// }


// Tests from drill page
//findOne(HEROES, { id: 1 }); // expected: { id: 1, name: 'Captain America', squad: 'Avengers' }
//findOne(HEROES, { id: 10 }); // null
//findOne(HEROES, { id: 2, name: 'Aquaman' }); // null
//findOne(HEROES, { id: 5, squad: 'Justice League' }); // { id: 5, name: 'Wonder Woman', squad: 'Justice League' }
//findOne(HEROES, { squad: 'Justice League' }); // { id: 4, name: 'Superman', squad: 'Justice League' }

//console.log(findOne(HEROES, { id: 1 }));