// BUG - LISTE
// 1) WENN LISTE ERSETZT WIRD IST UK ODER GERMANY TROTZDEM IN DER LISTE DER NICHT TEILNEHMENDEN UND MUSS RAUSGELÖSCHT WERDEN

function forcedGermanyAndUK(listOfParticipants) {
  let germanyOrUKlist = [];
  for (let index = 0; index < listOfParticipants.length; index++) {
    germanyOrUKlist.push(listOfParticipants[index].country);
  }
  if (!germanyOrUKlist.includes("Germany")) {
    if (listOfParticipants[0].country !== "United Kingdom") {
      listOfParticipants[0].country = "Germany";
    } else {
      listOfParticipants[1].country = "Germany";
    }
  }
  if (!germanyOrUKlist.includes("United Kingdom")) {
    if (listOfParticipants[2].country !== "Germany") {
      listOfParticipants[2].country = "United Kingdom";
    } else {
      listOfParticipants[3].country = "United Kingdom";
    }
  }
}

function germanyBias(
  objectWithPoints,
  pointCountries,
  notAllowedCountry,
  number
) {
  console.log(objectWithPoints);
  percentage = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  console.log(percentage);
  if (percentage <= number) {
    return objectWithPoints;
  } else if (percentage >= number + 1) {
    index = pointCountries
      .map((element) => element.country)
      .indexOf(notAllowedCountry);
    objectWithPoints = pointCountries[index];
    console.log(objectWithPoints);
    return objectWithPoints;
  }
}

module.exports = { forcedGermanyAndUK, germanyBias };