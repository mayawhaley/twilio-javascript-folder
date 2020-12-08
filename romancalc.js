// phase3

// initializing variables of every possible Roman Numeral
var I = 1;
var IV = 4;
var V = 5;
var IX = 9;
var X = 10;
var XL = 40;
var L = 50;
var XC = 90;
var C = 100;
var CD = 400;
var D = 500;
var CM = 900;
var M = 1000;


// function that converts roman numerals into integers and then adds them together
function romanToInt() {

    var numerals = process.argv[2];

    var total = 0; // initializing the total to 0

    // for loop that loops over all the user input
    for (i = 0; i < numerals.length; i++) {
        // total is 0 if the usser did not input anything
        if (numerals === "") {
            total === 0;
        }

        // handles the cases of I(1), IV(4), and IX(9)
        else if (numerals[i] === "I") {

            if (numerals[i] === "I" && numerals[i + 1] === "V") {
                total += IV;
            }

            else if (numerals[i] === "I" && numerals[i + 1] === "X") {
                total += IX;
            } else {
                total += I;
            }

        }

        // handles the cases of V(5) and makes sure IV(4) is not counted again (already counted in previous case)
        else if (numerals[i] === "V") {

            if (numerals[i - 1] === "I" && numerals[i] === "V") {
                total += 0;
            } else {
                total += V;
            }

        }
        // handles the cases of X(10), XL(40), and XC(90)
        else if (numerals[i] === "X") {

            if (numerals[i] === "X" && numerals[i + 1] === "L") {
                total += XL;
            }

            else if (numerals[i] === "X" && numerals[i + 1] === "C") {
                total += XC;
            } else {
                total += X;
            }
        }

        // handles the cases of L(50) and makes sure XL(40) isn't counted again (handles in previous case)
        else if (numerals[i] === "L") {

            if (numerals[i - 1] === "X" && numerals[i] === "L") {
                total += 0;
            }
            else {
                total += L;
            }
        }

        // handles the cases of C(100), CM(900), CD (400) and makes sure XC(90) isn't counted again (counted in another case)
        else if (numerals[i] === "C") {

            if (numerals[i] === "C" && numerals[i + 1] === "D") {
                total += CD;
            }

            else if (numerals[i] === "C" && numerals[i + 1] === "M") {
                total += CM;
            }
            else if (numerals[i - 1] === "X" && numerals[i] === "C") {
                total += 0;
            }

            else {
                total += C;
            }
        }

        // handles the case of D(500) and makes sure CD(400) isn't counted again (already handlded in another case)
        else if (numerals[i] === "D") {

            if (numerals[i - 1] === "C" && numerals[i] === "D") {
                total += 0;
            } else {
                total += D;
            }
        }

        // handles the case of M (1000) and makes sure CM (900) isn't counted again (already handled in another case)
        else if (numerals[i] === "M") {

            if (numerals[i - 1] === "C" && numerals[i] === "M") {
                total += 0;
            } else {
                total += M;
            }

        }

    }
    return total // return total after for loop
}

// calculator 
function calculate() {

    // assigning variables from the get_args() in the calculate() function
    var [first_num, operand, second_num] = get_args()

    // convert strings to integers for calculation
    var first = parseInt(first_num)
    var second = parseInt(second_num)

    var ans; // return variable that will contain answer

    // if statements that check the operator type and calculates the answer
    if (operand === "+") {
        ans = first + second
    }

    if (operand === "-") {
        ans = first - second
    }

    if (operand === "x") {
        ans = first * second
    }

    if (operand === "/") {
        ans = first / second
    }

    if (operand === "^") {
        ans = first ** second
    }

    if (operand === "%") {
        ans = first % second
    }

    return ans

}

// assigns arguments to their respective variables
function get_args() {

    var first = process.argv[2] // gets first number
    var op = process.argv[3] // gets operator 
    var second = process.argv[4] // gets second number

    return [first, op, second] // return arguments
}

console.log(romanToInt())
