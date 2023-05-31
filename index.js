const {
  resultOfTelevoting,
  resultOfESC,
  resultOfJuryvoting,
} = require("./consoleResults");
const { listOfCountries } = require("./lists");
const { randomListOfMusicians } = require("./musician");
const {
  getParticipatingCountries,
  pointsFromJuryVoting,
  pointsFromPublicVoting,
} = require("./points");

let teilnehmerESC = randomListOfMusicians();
let teilnehmendenCountriesWithPoints = getParticipatingCountries(teilnehmerESC);

let points = pointsFromJuryVoting(
  listOfCountries,
  teilnehmendenCountriesWithPoints
);
// let points2 = pointsFromPublicVoting(teilnehmendenCountriesWithPoints);

// resultOfJuryvoting(points);
// resultOfTelevoting(points2);

// let sortedCountries = points.sort(
//   (a, b) => b.jurypoints + b.publicpoints - (a.jurypoints + a.publicpoints)
// );

// setTimeout(function () {
//   resultOfESC(teilnehmerESC, sortedCountries);
// }, 8000);
