// Assign user input to variable named "input"
var input = (process.argv.slice(2));

// Intitalizing a For Loop that iterates from 1 to the number assigned to input. 
for (i = 1; i <= input; i++) {
    // if the number is divisible by 3 and 5
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(`${i}: 🛰`);
    }
    // if the number is divisible by 3
    else if (i % 3 === 0) {
        console.log(`${i}: 👽`);
    }
    // if the number is divisible by 5
    else if (i % 5 === 0) {
        console.log(`${i}: 🚀`);
    }
    // if the number is not divisible by 3, 5, or both
    else {
        console.log(`${i}: 💩`);
    }
}
