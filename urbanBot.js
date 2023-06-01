function urbanCommentary(
  country12,
  country10,
  country8,
  country7,
  country6,
  country5,
  country4,
  country3,
  country2,
  country1,
  voteCountry,
  listOfESC
) {
  index12 = listOfESC.map((element) => element.country).indexOf(country12);
  index10 = listOfESC.map((element) => element.country).indexOf(country10);
  index8 = listOfESC.map((element) => element.country).indexOf(country8);
  index7 = listOfESC.map((element) => element.country).indexOf(country7);
  index6 = listOfESC.map((element) => element.country).indexOf(country6);
  index5 = listOfESC.map((element) => element.country).indexOf(country5);
  index4 = listOfESC.map((element) => element.country).indexOf(country4);
  index3 = listOfESC.map((element) => element.country).indexOf(country3);
  index2 = listOfESC.map((element) => element.country).indexOf(country2);
  index1 = listOfESC.map((element) => element.country).indexOf(country1);

  let urbanArray = [
    `Peter Urban: Leider auch wieder keine Punkte von ${voteCountry} für Germany
    
    `,
    `Peter Urban: Magische Performance von ${listOfESC[index12].name}, hat die 12 Punkte mit seinem Song ${listOfESC[index12].song} auf jeden fall verdient
    
    `,
    `Peter Urban: Wissen Sie, an was mich die Performance von ${listOfESC[index1].name} erinnert? An Stefan Raabs Auftritt mit 'Wadde Hadde Dude Da', genau in dieser Halle da beim ESC 2000!
    
    `,
    `Peter Urban: Was hat ${listOfESC[index2].name} denn um den Hals? Einen Strick mit Blumenkohl? Vielleicht als Strafe für das schrecklich trutschige Kleid. 
    
    `,
    `Peter Urban: Das Land des Feuers hat keine Kosten gescheut: schwedische Komponisten, Goldregen, Flammen, goldverzierte Footballer und dann der goldene Strampelanzug! Gesungen hat ${listOfESC[index8].name} auch und zwar ziemlich gut.
    
    `,
    `Peter Urban: ${listOfESC[index10].name} mit der Stimme wie ein Reibeisen - kein Wunder, wenn ${listOfESC[index10].name} sich immer so die Seele aus dem Hals schreit.
    
    `,
    `Peter Urban: Willkommen in ${listOfESC[index6].name} Garten - vielleicht hat sie Renoir dazu inspiriert. Sehr schön!
    
    `,
    `Peter Urban: ${country10} Sternsinger in seiner Glitzerwelt, umkreist von Zirkusartisten im Mono-Wheel: zum Genießen!
    
    `,
    `Peter Urban: Die Halle kocht, da hat auch das merkwürdige Science-Fiction-Kostüm mit LED-Beleuchtung von ${listOfESC[index4].name} nicht geschadet.
    
    `,
    `Peter Urban: Die Halle kocht, da hat auch das merkwürdige Science-Fiction-Kostüm mit LED-Beleuchtung von ${listOfESC[index4].name} nicht geschadet.
    
    `,
    `Peter Urban: "Cool, undramatisch und erfrischend, ${listOfESC[index12].name} - aber kann er auch der Nachfolger als ESC-Sieger werden?"
    
    `,
    `Peter Urban: ${listOfESC[index3].name} im Märchenwald - ein klasse Auftritt! Der beste Auftritt in diesen Tagen.
    
    `,
    `Peter Urban: Elias M'Barek bei seiner Zweitkarriere als ${listOfESC[index2].name} - aber was macht ein fröhlicher irdischer Tanzhit im Weltraum?
    
    `,
    `Peter Urban: Wolfgang Petry hat eine Verjüngungskur gemacht, sich die Haare wachsen lassen und singt jetzt für ${country5}.
    
    `,
    `Peter Urban: Whow! ${listOfESC[index7].name} hat eine riesige Stimme, aber was macht ${listOfESC[index7].name} denn so lange auf dieser komischen Glitzerkiste?
    
    `,
    `Peter Urban: ${listOfESC[index10].name}: Lasst sie doch endlich raus, wegen eines Fernsehers haben sie doch lange genug gesessen.
    
    `,
    `Peter Urban: Da haben böse Männer keine Chance - geballte Frauenpower von ${listOfESC[index6].name} ganz in Schwarz - und süß. Ich hörte, ihr Kleid sei aus abgerollten Lakritzschnecken!
    
    `,
    `Peter Urban: Pudel-Locken mit Undercut - aber der Salto war amtlich, genau wie die Nummer. Starker Auftritt von ${listOfESC[index10].name}
    
    `,
    `Peter Urban: Singen kann ${listOfESC[index6].name}, aber diese Designertapete als Umhang und das silberne Federgedönse darunter zeugen nicht gerade von modischer Erleuchtung. 
    
    `,
    `Peter Urban: Willkommen beim Eurovision Video Contest - der ${listOfESC[index4].name} aus ${country4} könnte als Illusionist nach Las Vegas gehen.
    
    `,
    `Peter Urban: Die Globe Arena wird zum Tanztempel - und ${listOfESC[index1].name} und die ${listOfESC[index2].name} aus ${country2} haben denselben Tanzlehrer.
    
    `,
    `Peter Urban: Die Leiden des jungen ${listOfESC[index7].name} aus ${country7} - es zerreißt ${listOfESC[index7].name} ja fast!
    
    `,
    `Peter Urban: Bewegend, ${listOfESC[index12].name} intensive, packende Geschichtsstunde als moderne Elektro-Nummer und wahnsinnig gut gesungen.
    
    `,
    `Peter Urban: ${listOfESC[index1].song}, ${country1}. Ohne Gold kein Glanz. Und der arme Synchronschwimmer daneben ist am Ende fix und fertig.
    
    `,
    `Peter Urban: Ein Flashback zum Beatclub oder Musikladen - aus ${country7} zum Eurovision Rave.
    
    `,
    `Peter Urban: ${listOfESC[index8].name} auf dem Weg zum Paradies - aus ${country8} mit einem Beitrag auf Französisch, welch charmante Überraschung! Das finden die Leute in der Halle auch.
    
    `,
    `Peter Urban: Nette, knuddelige Jungs, aber die Nummer klingt wie eine ausgemusterte Coldplay-Nummer ohne Chris Martins Stimme und Ausstrahlung. Das war nichts ${listOfESC[index1].name}.
    
    `,
    `Peter Urban: Ein Drama-Auftritt unter Vollstrom mit allem, was dazu anscheinend nötig ist: Windmaschine, Nebel, Flammen und knappes Dress. Wie wär's mal mit ein paar leisen Tönen ${listOfESC[index5].name}?
    
    `,
  ];

  return urbanArray[Math.floor(Math.random() * urbanArray.length)];
}

module.exports = { urbanCommentary };
