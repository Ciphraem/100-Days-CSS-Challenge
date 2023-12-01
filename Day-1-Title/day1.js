console.log("Connected to Day 1")
console.log("Practicing DOM Manipulation using 100 Days CSS Challenge");

const number = document.querySelector("#number");
const oneTotal = document.createElement("div");
const oneSlash = document.createElement("div");
const oneLine = document.createElement("div");
const zeroTens = document.createElement("div");
const zeroOnes = document.createElement("div");

oneTotal.appendChild(oneSlash); oneSlash.id = "oneSlash";
oneTotal.appendChild(oneLine); oneLine.id = "oneLine";
number.appendChild(zeroOnes); zeroOnes.id = "zeroOnes";
number.appendChild(zeroTens); zeroTens.id = "zeroTens";
number.appendChild(oneTotal); oneTotal.id = "oneTotal";
