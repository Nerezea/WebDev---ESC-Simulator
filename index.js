const { listOfCountries } = require("./lists");
const { randomListOfMusicians } = require("./musician");
const {
  getParticipatingCountries,
  pointsFromAllCountries,
} = require("./points");

let teilnehmerESC = randomListOfMusicians();
let teilnehmendenCountriesWithPoints = getParticipatingCountries(teilnehmerESC);
let points = pointsFromAllCountries(teilnehmendenCountriesWithPoints);
let sortedCountries = points.sort((a, b) => b.points - a.points);

function resultOfESC(teilnehmerESC, sortedCountries) {
  for (let index = 0; index < sortedCountries.length; index++) {
    console.log(
      `${index + 1}.`,
      `${sortedCountries[index].country}: ${
        sortedCountries[index].points
      } Points
      ${
        teilnehmerESC[sortedCountries.indexOf(sortedCountries[index])].name
      } - ${
        teilnehmerESC[sortedCountries.indexOf(sortedCountries[index])].song
      }`
    );
  }
}

resultOfESC(teilnehmerESC, sortedCountries);
