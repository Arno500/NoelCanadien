const fs = require("fs");
const readline = require("readline");

var nameArray = fs
  .readFileSync("eleves.txt")
  .toString()
  .split("\n");

var nameArrayOrigin = nameArray.slice(0);

fs.writeFileSync("resultat.txt", "");

nameArrayOrigin.forEach(element => {
  var prenomID;
  console.log("Element : " + element);
  do {
    prenomID = Math.round(Math.random() * (nameArray.length - 1));
    console.log("ID : " + prenomID);
  } while (nameArray[prenomID] === element);

  let phrase = element + " va donner un cadeau à " + nameArray[prenomID];

  console.log(phrase);
  console.log("");

  let elementInRemainingArray = nameArray.indexOf(nameArray[prenomID]);

  console.log(nameArray, elementInRemainingArray);

  nameArray.splice(elementInRemainingArray, 1);

  fs.appendFileSync("resultat.txt", phrase + "\n");
});
