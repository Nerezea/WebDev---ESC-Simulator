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
let points2 = pointsFromPublicVoting(teilnehmendenCountriesWithPoints);

const resultOfTelevoting = (pointsFromPublic) => {
  pointsFromPublic.sort((a, b) => b.publicpoints - a.publicpoints);

  console.log(`Public Voting:
    ${pointsFromPublic[0].publicpoints} Points: ${pointsFromPublic[0].country} 
    ${pointsFromPublic[1].publicpoints} Points: ${pointsFromPublic[1].country} 
    ${pointsFromPublic[2].publicpoints} Points: ${pointsFromPublic[2].country} 
    ${pointsFromPublic[3].publicpoints} Points: ${pointsFromPublic[3].country} 
    ${pointsFromPublic[4].publicpoints} Points: ${pointsFromPublic[4].country} 
    ${pointsFromPublic[5].publicpoints} Points: ${pointsFromPublic[5].country} 
    ${pointsFromPublic[6].publicpoints} Points: ${pointsFromPublic[6].country} 
    ${pointsFromPublic[7].publicpoints} Points: ${pointsFromPublic[7].country} 
    ${pointsFromPublic[8].publicpoints} Points: ${pointsFromPublic[8].country} 
    ${pointsFromPublic[9].publicpoints} Points: ${pointsFromPublic[9].country} 
    ${pointsFromPublic[10].publicpoints} Points: ${pointsFromPublic[10].country} 
    ${pointsFromPublic[11].publicpoints} Points: ${pointsFromPublic[11].country} 
    ${pointsFromPublic[12].publicpoints} Points: ${pointsFromPublic[12].country} 
    ${pointsFromPublic[13].publicpoints} Points: ${pointsFromPublic[13].country} 
    ${pointsFromPublic[14].publicpoints} Points: ${pointsFromPublic[14].country} 
    ${pointsFromPublic[15].publicpoints} Points: ${pointsFromPublic[15].country} 
    ${pointsFromPublic[16].publicpoints} Points: ${pointsFromPublic[16].country} 
    ${pointsFromPublic[17].publicpoints} Points: ${pointsFromPublic[17].country} 
    ${pointsFromPublic[18].publicpoints} Points: ${pointsFromPublic[18].country} 
    ${pointsFromPublic[19].publicpoints} Points: ${pointsFromPublic[19].country} 
    ${pointsFromPublic[20].publicpoints} Points: ${pointsFromPublic[20].country} 
    ${pointsFromPublic[21].publicpoints} Points: ${pointsFromPublic[21].country} 
    ${pointsFromPublic[22].publicpoints} Points: ${pointsFromPublic[22].country} 
    ${pointsFromPublic[23].publicpoints} Points: ${pointsFromPublic[23].country} 
    ${pointsFromPublic[24].publicpoints} Points: ${pointsFromPublic[24].country} 
    ${pointsFromPublic[25].publicpoints} Points: ${pointsFromPublic[25].country} 
    `);
};

function resultOfESC(teilnehmerESC, sortedCountries) {
  console.log("-------------------------------------");
  console.log("FINAL TABLE");
  console.log("-------------------------------------");

  for (let index = 0; index < sortedCountries.length; index++) {
    console.log(
      `${index + 1}.`,
      `${sortedCountries[index].country}: ${
        sortedCountries[index].jurypoints + sortedCountries[index].publicpoints
      } Points
        ${
          teilnehmerESC[sortedCountries.indexOf(sortedCountries[index])].name
        } - ${
        teilnehmerESC[sortedCountries.indexOf(sortedCountries[index])].song
      }`
    );
  }
}

resultOfTelevoting(points2);

let sortedCountries = points.sort(
  (a, b) => b.jurypoints + b.publicpoints - (a.jurypoints + a.publicpoints)
);

setTimeout(function () {
  resultOfESC(teilnehmerESC, sortedCountries);
}, 8000);
