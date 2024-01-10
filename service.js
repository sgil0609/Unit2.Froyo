// Prompt the user to enter a list of comma-separated froyo flavors
const userInput = prompt("Enter a list of comma-separated froyo flavors:");
const flavors = userInput.split(',');

const flavorCount = {};
flavors.forEach(flavor => {
    // remove whitespace
    flavor = flavor.trim(); 
    flavorCount[flavor] = (flavorCount[flavor] || 0) + 1;
});
console.table(flavorCount);