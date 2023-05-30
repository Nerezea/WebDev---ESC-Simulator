const { randomEntryFromArray } = require("./musician");

function getParticipatingCountries(array) {
  let newArray = [];
  array.forEach((element) => {
    newArray.push({ country: element.country, points: 0 });
  });
  return newArray;
}

function pointsFromAllCountries(pointCountries) {
  for (index = 0; index < 37; index++) {
    pointCountries[randomNumberGenerator()].points += 12;
    pointCountries[randomNumberGenerator()].points += 10;
    pointCountries[randomNumberGenerator()].points += 8;
    pointCountries[randomNumberGenerator()].points += 7;
    pointCountries[randomNumberGenerator()].points += 6;
    pointCountries[randomNumberGenerator()].points += 5;
    pointCountries[randomNumberGenerator()].points += 4;
    pointCountries[randomNumberGenerator()].points += 3;
    pointCountries[randomNumberGenerator()].points += 2;
    pointCountries[randomNumberGenerator()].points += 1;
  }
  return pointCountries;
}

const randomNumberGenerator = () => Math.floor(Math.random() * 26);

module.exports = { getParticipatingCountries, pointsFromAllCountries };
