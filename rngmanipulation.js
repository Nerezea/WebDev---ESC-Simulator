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

module.exports = { forcedGermanyAndUK };
