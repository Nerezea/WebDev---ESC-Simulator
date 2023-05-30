const { randomEntryFromArray } = require("./musician");

function getParticipatingCountries(array) {
  let newArray = [];
  array.forEach((element) => {
    newArray.push({ country: element.country, jurypoints: 0, publicpoints: 0 });
  });
  return newArray;
}

function pointsFromJuryVoting(juryCountries, pointCountries) {
  juryCountries.forEach((element) => {
    points12 = pointCountries[randomNumberGenerator()];
    points10 = pointCountries[randomNumberGenerator()];
    points8 = pointCountries[randomNumberGenerator()];
    points7 = pointCountries[randomNumberGenerator()];
    points6 = pointCountries[randomNumberGenerator()];
    points5 = pointCountries[randomNumberGenerator()];
    points4 = pointCountries[randomNumberGenerator()];
    points3 = pointCountries[randomNumberGenerator()];
    points2 = pointCountries[randomNumberGenerator()];
    points1 = pointCountries[randomNumberGenerator()];

    points12.jurypoints += 12;
    points10.jurypoints += 10;
    points8.jurypoints += 8;
    points7.jurypoints += 7;
    points6.jurypoints += 6;
    points5.jurypoints += 5;
    points4.jurypoints += 4;
    points3.jurypoints += 3;
    points2.jurypoints += 2;
    points1.jurypoints += 1;

    console.log(`${element} Voting:
    12 Points: ${points12.country} (overall: ${points12.jurypoints})
    10 Points: ${points10.country} (overall: ${points10.jurypoints})
    8 Points: ${points8.country} (overall: ${points8.jurypoints})
    7 Points: ${points7.country} (overall: ${points7.jurypoints})
    6 Points: ${points6.country} (overall: ${points6.jurypoints})
    5 Points: ${points5.country} (overall: ${points5.jurypoints})
    4 Points: ${points4.country} (overall: ${points4.jurypoints})
    3 Points: ${points3.country} (overall: ${points3.jurypoints})
    2 Points: ${points2.country} (overall: ${points2.jurypoints})
    1 Point: ${points1.country} (overall: ${points1.jurypoints})
    `);
  });

  pointCountries.forEach((element) => {
    points12 = pointCountries[randomNumberGenerator()];
    points10 = pointCountries[randomNumberGenerator()];
    points8 = pointCountries[randomNumberGenerator()];
    points7 = pointCountries[randomNumberGenerator()];
    points6 = pointCountries[randomNumberGenerator()];
    points5 = pointCountries[randomNumberGenerator()];
    points4 = pointCountries[randomNumberGenerator()];
    points3 = pointCountries[randomNumberGenerator()];
    points2 = pointCountries[randomNumberGenerator()];
    points1 = pointCountries[randomNumberGenerator()];

    points12.jurypoints += 12;
    points10.jurypoints += 10;
    points8.jurypoints += 8;
    points7.jurypoints += 7;
    points6.jurypoints += 6;
    points5.jurypoints += 5;
    points4.jurypoints += 4;
    points3.jurypoints += 3;
    points2.jurypoints += 2;
    points1.jurypoints += 1;

    console.log(`${element.country} Voting:
    12 Points: ${points12.country} (overall: ${points12.jurypoints})
    10 Points: ${points10.country} (overall: ${points10.jurypoints})
    8 Points: ${points8.country} (overall: ${points8.jurypoints})
    7 Points: ${points7.country} (overall: ${points7.jurypoints})
    6 Points: ${points6.country} (overall: ${points6.jurypoints})
    5 Points: ${points5.country} (overall: ${points5.jurypoints})
    4 Points: ${points4.country} (overall: ${points4.jurypoints})
    3 Points: ${points3.country} (overall: ${points3.jurypoints})
    2 Points: ${points2.country} (overall: ${points2.jurypoints})
    1 Point: ${points1.country} (overall: ${points1.jurypoints})
    `);
  });

  return pointCountries;
}

function pointsFromPublicVoting(pointCountries) {
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
  pointsFromJuryVoting,
  pointsFromPublicVoting,
};
