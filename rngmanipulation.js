// function forcedGermanyAndUK(listOfParticipants) {
//   let germanyOrUKlist = [];
//   for (let index = 0; index < listOfParticipants.length; index++) {
//     germanyOrUKlist.push(listOfParticipants[index].country);
//   }
//   if (!germanyOrUKlist.includes("Germany")) {
//     if (listOfParticipants[0].country !== "United Kingdom") {
//       listOfParticipants[0].country = "Germany";
//     } else {
//       listOfParticipants[1].country = "Germany";
//     }
//   }
//   if (!germanyOrUKlist.includes("United Kingdom")) {
//     if (listOfParticipants[2].country !== "Germany") {
//       listOfParticipants[2].country = "United Kingdom";
//     } else {
//       listOfParticipants[3].country = "United Kingdom";
//     }
//   }
// }

function biasTowardsCertainCountries(number) {
  percentage = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  // console.log(percentage);
  if (percentage <= number) {
    return false;
  } else if (percentage >= number + 1) {
    return true;
  }
}

module.exports = { biasTowardsCertainCountries };
