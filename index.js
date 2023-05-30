const {
  Musician,
  randomGenerator,
  randomListOfMusicians,
} = require("./musician");

let teilnehmer = randomListOfMusicians();
console.log(teilnehmer.length);
