const {
  listOfNames,
  listOfSongs,
  listOfCountries,
  listOfSeededCountries,
} = require("./lists");

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
  for (
    let indexSeeded = 0;
    indexSeeded < listOfSeededCountries.length;
    indexSeeded++
  ) {
    newList.push(
      new Musician(
        randomGenerator(listOfNames),
        randomGenerator(listOfSongs),
        listOfSeededCountries[indexSeeded]
      )
    );
  }
  for (let index = 0; index < 26 - listOfSeededCountries.length; index++) {
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
