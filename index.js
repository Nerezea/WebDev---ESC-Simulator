const { listOfCountries } = require("./lists");
const { randomListOfMusicians } = require("./musician");
const {
  getParticipatingCountries,
  pointsFromJuryVoting,
  pointsFromPublicVoting,
} = require("./points");

let teilnehmerESC = randomListOfMusicians();
let teilnehmendenCountriesWithPoints = getParticipatingCountries(teilnehmerESC);
let points = pointsFromJuryVoting(teilnehmendenCountriesWithPoints);
let points2 = pointsFromPublicVoting(teilnehmendenCountriesWithPoints);
let sortedCountries = points.sort(
  (a, b) => b.jurypoints + b.publicpoints - (a.jurypoints + a.publicpoints)
);

function resultOfESC(teilnehmerESC, sortedCountries) {
  console.log("-------------------------------------");
  console.log("FINAL TABLE");
  console.log("-------------------------------------");
  setTimeout(function () {
    for (let index = 0; index < sortedCountries.length; index++) {
      console.log(
        `${index + 1}.`,
        `${sortedCountries[index].country}: ${
          sortedCountries[index].jurypoints +
          sortedCountries[index].publicpoints
        } Points
        ${
          teilnehmerESC[sortedCountries.indexOf(sortedCountries[index])].name
        } - ${
          teilnehmerESC[sortedCountries.indexOf(sortedCountries[index])].song
        }`
      );
    }
  }, 2000);
}

resultOfESC(teilnehmerESC, sortedCountries);
