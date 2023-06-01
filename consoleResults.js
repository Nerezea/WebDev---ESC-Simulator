const resultOfJuryvoting = (pointsFromJury) => {
  pointsFromJury.sort((a, b) => b.jurypoints - a.jurypoints);

  console.log(`Jury Voting:
    ${pointsFromJury[0].jurypoints} Points: ${pointsFromJury[0].country} 
    ${pointsFromJury[1].jurypoints} Points: ${pointsFromJury[1].country} 
    ${pointsFromJury[2].jurypoints} Points: ${pointsFromJury[2].country} 
    ${pointsFromJury[3].jurypoints} Points: ${pointsFromJury[3].country} 
    ${pointsFromJury[4].jurypoints} Points: ${pointsFromJury[4].country} 
    ${pointsFromJury[5].jurypoints} Points: ${pointsFromJury[5].country} 
    ${pointsFromJury[6].jurypoints} Points: ${pointsFromJury[6].country} 
    ${pointsFromJury[7].jurypoints} Points: ${pointsFromJury[7].country} 
    ${pointsFromJury[8].jurypoints} Points: ${pointsFromJury[8].country} 
    ${pointsFromJury[9].jurypoints} Points: ${pointsFromJury[9].country} 
    ${pointsFromJury[10].jurypoints} Points: ${pointsFromJury[10].country} 
    ${pointsFromJury[11].jurypoints} Points: ${pointsFromJury[11].country} 
    ${pointsFromJury[12].jurypoints} Points: ${pointsFromJury[12].country} 
    ${pointsFromJury[13].jurypoints} Points: ${pointsFromJury[13].country} 
    ${pointsFromJury[14].jurypoints} Points: ${pointsFromJury[14].country} 
    ${pointsFromJury[15].jurypoints} Points: ${pointsFromJury[15].country} 
    ${pointsFromJury[16].jurypoints} Points: ${pointsFromJury[16].country} 
    ${pointsFromJury[17].jurypoints} Points: ${pointsFromJury[17].country} 
    ${pointsFromJury[18].jurypoints} Points: ${pointsFromJury[18].country} 
    ${pointsFromJury[19].jurypoints} Points: ${pointsFromJury[19].country} 
    ${pointsFromJury[20].jurypoints} Points: ${pointsFromJury[20].country} 
    ${pointsFromJury[21].jurypoints} Points: ${pointsFromJury[21].country} 
    ${pointsFromJury[22].jurypoints} Points: ${pointsFromJury[22].country} 
    ${pointsFromJury[23].jurypoints} Points: ${pointsFromJury[23].country} 
    ${pointsFromJury[24].jurypoints} Points: ${pointsFromJury[24].country} 
    ${pointsFromJury[25].jurypoints} Points: ${pointsFromJury[25].country} 
    `);
};

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
    let index2 = teilnehmerESC
      .map((element) => element.country)
      .indexOf(sortedCountries[index].country);

    console.log(
      `${index + 1}.`,
      `${sortedCountries[index].country}: ${
        sortedCountries[index].jurypoints + sortedCountries[index].publicpoints
      } Points
        ${teilnehmerESC[index2].name} - ${teilnehmerESC[index2].song}`
    );
  }
}

module.exports = {
  resultOfJuryvoting,
  resultOfTelevoting,
  resultOfESC,
};
