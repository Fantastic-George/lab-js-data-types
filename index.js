/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

const twister = s1 + ' ' + s2 + ' ' + s3 + ' ' + s4 + ' ' + s5 + ' ' + s3 + ' ' + s2 + ' ' + s1 + ' ' + s4;
console.log(twister);

// Print out the concatenated string




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings


let i = part1.length-1
const part1Camel =  (part1.slice(0,i)) + part1.charAt(i).toUpperCase()
console.log(part1Camel);

let y = part2.length-1
const part2Camel =  (part2.slice(0,y)) + part2.charAt(y).toUpperCase()
console.log(part2Camel);

const result = part1Camel + part2Camel;
console.log(result);

// Print the cameLtaiL-formatted string




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

const tipAmount = billTotal * 0.15
console.log(tipAmount);

// Print out the tipAmount




/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

const randomNumber = Math.round((Math.random()*10));
if (randomNumber === 0) {
    randomNumber + 1
}
console.log(randomNumber);


// Print the generated random number



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
// False
console.log(expression1);

const expression2 = a || b;
// True
console.log(expression2);

const expression3 = !a && b;
// False
console.log(expression3);

const expression4 = !(a && b);
// True
console.log(expression4);

const expression5 = !a || !b;
// False
console.log(expression5);

const expression6 = !(a || b);
// False
console.log(expression6);

const expression7 = a && a;
// True
console.log(expression7);