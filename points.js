const { randomEntryFromArray } = require("./musician");

function getParticipatingCountries(array) {
  let newArray = [];
  array.forEach((element) => {
    newArray.push({ country: element.country, jurypoints: 0, publicpoints: 0 });
  });
  return newArray;
}

function pointsFromJury(pointCountries) {
  for (index = 0; index < 37; index++) {
    pointCountries[randomNumberGenerator()].jurypoints += 12;
    pointCountries[randomNumberGenerator()].jurypoints += 10;
    pointCountries[randomNumberGenerator()].jurypoints += 8;
    pointCountries[randomNumberGenerator()].jurypoints += 7;
    pointCountries[randomNumberGenerator()].jurypoints += 6;
    pointCountries[randomNumberGenerator()].jurypoints += 5;
    pointCountries[randomNumberGenerator()].jurypoints += 4;
    pointCountries[randomNumberGenerator()].jurypoints += 3;
    pointCountries[randomNumberGenerator()].jurypoints += 2;
    pointCountries[randomNumberGenerator()].jurypoints += 1;
  }
  return pointCountries;
}

function pointsFromPublic(pointCountries) {
  for (index = 0; index < 60; index++) {
    pointCountries[randomNumberGenerator()].publicpoints += 12;
    pointCountries[randomNumberGenerator()].publicpoints += 10;
    pointCountries[randomNumberGenerator()].publicpoints += 8;
    pointCountries[randomNumberGenerator()].publicpoints += 7;
    pointCountries[randomNumberGenerator()].publicpoints += 6;
    pointCountries[randomNumberGenerator()].publicpoints += 5;
    pointCountries[randomNumberGenerator()].publicpoints += 4;
    pointCountries[randomNumberGenerator()].publicpoints += 3;
    pointCountries[randomNumberGenerator()].publicpoints += 2;
    pointCountries[randomNumberGenerator()].publicpoints += 1;
  }
  return pointCountries;
}

const randomNumberGenerator = () => Math.floor(Math.random() * 26);

module.exports = {
  getParticipatingCountries,
  pointsFromJury,
  pointsFromPublic,
};
