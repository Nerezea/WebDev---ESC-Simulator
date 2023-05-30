const { listOfNames, listOfSongs, listOfCountries } = require("./lists");

class Musician {
  constructor(name, song, country) {
    this.name = name;
    this.song = song;
    this.country = country;
  }
}

function randomGenerator(array) {
  entry = randomEntryFromArray(array);
  removeEntryFromList(array, entry);
  return entry;
}

function randomEntryFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function removeEntryFromList(array, entry) {
  array.splice(array.indexOf(entry), 1);
}

function randomListOfMusicians() {
  let newList = [];
  for (let index = 0; index < 26; index++) {
    newList.push(
      new Musician(
        randomGenerator(listOfNames),
        randomGenerator(listOfSongs),
        randomGenerator(listOfCountries)
      )
    );
  }
  return newList;
}

module.exports = { randomListOfMusicians, randomEntryFromArray };
