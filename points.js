const { biasTowardsCertainCountries } = require("./rngmanipulation");
const { urbanCommentary } = require("./urbanBot");

function getParticipatingCountries(array) {
  let newArray = [];
  array.forEach((element) => {
    newArray.push({ country: element.country, jurypoints: 0, publicpoints: 0 });
  });
  return newArray;
}

function pointsFromJuryVoting(juryCountries, pointCountries, teilnehmerESC) {
  let runOneMoreTime = false;
  pointCountries.forEach((element) => {
    do {
      runOneMoreTime = false;
      points12 = pointCountries[randomNumberGenerator()];
      if (points12.country === "Germany") {
        runOneMoreTime = biasTowardsCertainCountries(2);
      }
    } while (runOneMoreTime || points12.country === element.country);

    do {
      runOneMoreTime = false;
      points10 = pointCountries[randomNumberGenerator()];
      if (points10.country === "Germany") {
        runOneMoreTime = biasTowardsCertainCountries(4);
      }
    } while (
      runOneMoreTime ||
      points10.country === element.country ||
      points10.country === points12.country
    );

    do {
      runOneMoreTime = false;
      points8 = pointCountries[randomNumberGenerator()];
      if (points8.country === "Germany") {
        runOneMoreTime = biasTowardsCertainCountries(6);
      }
    } while (
      runOneMoreTime ||
      points8.country === element.country ||
      points8.country === points12.country ||
      points8.country === points10.country
    );

    do {
      runOneMoreTime = false;
      points7 = pointCountries[randomNumberGenerator()];
      if (points7.country === "Germany") {
        runOneMoreTime = biasTowardsCertainCountries(8);
      }
    } while (
      runOneMoreTime ||
      points7.country === element.country ||
      points7.country === points12.country ||
      points7.country === points10.country ||
      points7.country === points8.country
    );

    do {
      runOneMoreTime = false;
      points6 = pointCountries[randomNumberGenerator()];
      if (points6.country === "Germany") {
        runOneMoreTime = biasTowardsCertainCountries(10);
      }
    } while (
      runOneMoreTime ||
      points6.country === element.country ||
      points6.country === points12.country ||
      points6.country === points10.country ||
      points6.country === points8.country ||
      points6.country === points7.country
    );

    do {
      runOneMoreTime = false;
      points5 = pointCountries[randomNumberGenerator()];
      if (points5.country === "Germany") {
        runOneMoreTime = biasTowardsCertainCountries(10);
      }
    } while (
      runOneMoreTime ||
      points5.country === element.country ||
      points5.country === points12.country ||
      points5.country === points10.country ||
      points5.country === points8.country ||
      points5.country === points7.country ||
      points5.country === points6.country
    );

    do {
      runOneMoreTime = false;
      points4 = pointCountries[randomNumberGenerator()];
      if (points4.country === "Germany") {
        runOneMoreTime = biasTowardsCertainCountries(10);
      }
    } while (
      runOneMoreTime ||
      points4.country === element.country ||
      points4.country === points12.country ||
      points4.country === points10.country ||
      points4.country === points8.country ||
      points4.country === points7.country ||
      points4.country === points6.country ||
      points4.country === points5.country
    );

    do {
      runOneMoreTime = false;
      points3 = pointCountries[randomNumberGenerator()];
      if (points3.country === "Germany") {
        runOneMoreTime = biasTowardsCertainCountries(10);
      }
    } while (
      runOneMoreTime ||
      points3.country === element.country ||
      points3.country === points12.country ||
      points3.country === points10.country ||
      points3.country === points8.country ||
      points3.country === points7.country ||
      points3.country === points6.country ||
      points3.country === points5.country ||
      points3.country === points4.country
    );

    do {
      runOneMoreTime = false;
      points2 = pointCountries[randomNumberGenerator()];
      if (points2.country === "Germany") {
        runOneMoreTime = biasTowardsCertainCountries(10);
      }
    } while (
      runOneMoreTime ||
      points2.country === element.country ||
      points2.country === points12.country ||
      points2.country === points10.country ||
      points2.country === points8.country ||
      points2.country === points7.country ||
      points2.country === points6.country ||
      points2.country === points5.country ||
      points2.country === points4.country ||
      points2.country === points3.country
    );

    do {
      runOneMoreTime = false;
      points1 = pointCountries[randomNumberGenerator()];
      if (points1.country === "Germany") {
        runOneMoreTime = biasTowardsCertainCountries(10);
      }
    } while (
      runOneMoreTime ||
      points1.country === element.country ||
      points1.country === points12.country ||
      points1.country === points10.country ||
      points1.country === points8.country ||
      points1.country === points7.country ||
      points1.country === points6.country ||
      points1.country === points5.country ||
      points1.country === points4.country ||
      points1.country === points3.country ||
      points1.country === points2.country
    );

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

    console.log(
      urbanCommentary(
        points12.country,
        points10.country,
        points8.country,
        points7.country,
        points6.country,
        points5.country,
        points4.country,
        points3.country,
        points2.country,
        points1.country,
        element.country,
        teilnehmerESC
      )
    );
  });

  juryCountries.forEach((element) => {
    do {
      runOneMoreTime = false;
      points12 = pointCountries[randomNumberGenerator()];
      if (points12.country === "Germany") {
        runOneMoreTime = biasTowardsCertainCountries(2);
      }
    } while (runOneMoreTime || points12.country === element);

    do {
      runOneMoreTime = false;
      points10 = pointCountries[randomNumberGenerator()];
      if (points10.country === "Germany") {
        runOneMoreTime = biasTowardsCertainCountries(2);
      }
    } while (
      runOneMoreTime ||
      points10.country === element ||
      points10.country === points12.country
    );

    do {
      runOneMoreTime = false;
      points8 = pointCountries[randomNumberGenerator()];
      if (points8.country === "Germany") {
        runOneMoreTime = biasTowardsCertainCountries(2);
      }
    } while (
      runOneMoreTime ||
      points8.country === element ||
      points8.country === points12.country ||
      points8.country === points10.country
    );

    do {
      runOneMoreTime = false;
      points7 = pointCountries[randomNumberGenerator()];
      if (points7.country === "Germany") {
        runOneMoreTime = biasTowardsCertainCountries(2);
      }
    } while (
      runOneMoreTime ||
      points7.country === element ||
      points7.country === points12.country ||
      points7.country === points10.country ||
      points7.country === points8.country
    );

    do {
      runOneMoreTime = false;
      points6 = pointCountries[randomNumberGenerator()];
      if (points6.country === "Germany") {
        runOneMoreTime = biasTowardsCertainCountries(2);
      }
    } while (
      runOneMoreTime ||
      points6.country === element ||
      points6.country === points12.country ||
      points6.country === points10.country ||
      points6.country === points8.country ||
      points6.country === points7.country
    );

    do {
      runOneMoreTime = false;
      points5 = pointCountries[randomNumberGenerator()];
      if (points5.country === "Germany") {
        runOneMoreTime = biasTowardsCertainCountries(2);
      }
    } while (
      runOneMoreTime ||
      points5.country === element ||
      points5.country === points12.country ||
      points5.country === points10.country ||
      points5.country === points8.country ||
      points5.country === points7.country ||
      points5.country === points6.country
    );

    do {
      runOneMoreTime = false;
      points4 = pointCountries[randomNumberGenerator()];
      if (points4.country === "Germany") {
        runOneMoreTime = biasTowardsCertainCountries(2);
      }
    } while (
      runOneMoreTime ||
      points4.country === element ||
      points4.country === points12.country ||
      points4.country === points10.country ||
      points4.country === points8.country ||
      points4.country === points7.country ||
      points4.country === points6.country ||
      points4.country === points5.country
    );

    do {
      runOneMoreTime = false;
      points3 = pointCountries[randomNumberGenerator()];
      if (points3.country === "Germany") {
        runOneMoreTime = biasTowardsCertainCountries(2);
      }
    } while (
      runOneMoreTime ||
      points3.country === element ||
      points3.country === points12.country ||
      points3.country === points10.country ||
      points3.country === points8.country ||
      points3.country === points7.country ||
      points3.country === points6.country ||
      points3.country === points5.country ||
      points3.country === points4.country
    );

    do {
      runOneMoreTime = false;
      points2 = pointCountries[randomNumberGenerator()];
      if (points2.country === "Germany") {
        runOneMoreTime = biasTowardsCertainCountries(2);
      }
    } while (
      runOneMoreTime ||
      points2.country === element ||
      points2.country === points12.country ||
      points2.country === points10.country ||
      points2.country === points8.country ||
      points2.country === points7.country ||
      points2.country === points6.country ||
      points2.country === points5.country ||
      points2.country === points4.country ||
      points2.country === points3.country
    );

    do {
      runOneMoreTime = false;
      points1 = pointCountries[randomNumberGenerator()];
      if (points1.country === "Germany") {
        runOneMoreTime = biasTowardsCertainCountries(2);
      }
    } while (
      runOneMoreTime ||
      points1.country === element ||
      points1.country === points12.country ||
      points1.country === points10.country ||
      points1.country === points8.country ||
      points1.country === points7.country ||
      points1.country === points6.country ||
      points1.country === points5.country ||
      points1.country === points4.country ||
      points1.country === points3.country ||
      points1.country === points2.country
    );

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

    console.log(
      urbanCommentary(
        points12.country,
        points10.country,
        points8.country,
        points7.country,
        points6.country,
        points5.country,
        points4.country,
        points3.country,
        points2.country,
        points1.country,
        element.country,
        teilnehmerESC
      )
    );
  });

  return pointCountries;
}

function pointsFromPublicVoting(pointCountries) {
  for (index = 0; index < 70; index++) {
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
  randomNumberGenerator,
};
