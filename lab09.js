//Q1//
let characters = [`Harry`, `Hermione`, `Draco`, `Luna`];
for (let i = 0; i < characters.length; i++){
    console.log(characters[i]);
}

//Q2//
let firstName = "Harry";
let house = "Gryffindor";

console.log(`Welcome, ${firstName} of ${house}!`);


//Q3//
let characterName = "Hermione";

console.log(characterName.toLowerCase());
console.log(characterName.toUpperCase());

//Q4//
let spell = "Expelliarmus";

console.log(spell.trim());

//Q5//
let quote = "I solemnly swear that I am up to no good";
console.log(quote.slice(10,16));

//Q6//
let FirstName = "Ron"
let LastName = "Weasley"
console.log(FirstName.concat(` `, LastName));

//Q7//
let sentence = 'Draco is a good wizard'
console.log(sentence.replace(`good`,`bad`));

//Q8//
let houses = [`Gryffindor`, `Hufflepuff`, `Ravenclaw`]
houses.push("Slytherin");
console.log(houses)
houses.pop()
console.log(houses);

//Q9//
let spells = [`Alohomora`, `Lumos`, `Nox`];
spells.unshift(`Accio`);
console.log(spells)
spells.shift();
console.log(spells);

//Q10//
