//phase4
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
function romanToInt(numerals) {

    var numerals;

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


function intToRoman(num) {

    var num = process.argv[2]
    // number to subtract from
    // converts to int
    var input = parseInt(num)

    // returning string
    var answer = "";

    // while loop that runs as long as input isn't 0 and input is less than or equal to 1000

    while (input !== 0 && input <= 1000) {

        // handles 1-3
        if (1 <= input && input < 4) {
            if (input === 1) {
                answer += "I";
                input -= 1
            }

            else if (input === 2) {
                answer += "II";
                input -= 2
            }
            else {
                answer += "III";
                input -= 3
            }

        }
        // handles 4
        else if (input === 4) {
            answer += "IV"
            input -= 4
        }

        // handles 5-8
        else if (5 <= input && input < 9) {
            answer += "V"
            input -= 5
        }

        // handles 9
        else if (input === 9) {
            answer += "IX"
            input -= 9
        }

        // handles 10-39
        else if (10 <= input && input < 40) {
            answer += "X"
            input -= 10
        }

        // handles 40-49
        else if (40 <= input && input < 50) {
            answer += "XL"
            input -= 40
        }

        // handles 50-89
        else if (50 <= input && input < 90) {
            answer += "L"
            input -= 50
        }


        // handles 90-99
        else if (90 <= input && input < 100) {
            answer += "XC"
            input -= 90
        }

        // handles 100-499
        else if (100 <= input && input < 500) {
            answer += "C"
            input -= 100
        }

        // handles 500-899
        else if (500 <= input && input < 900) {
            answer += "D"
            input -= 500
        }

        //handles 900-999
        else if (900 <= input && input < 1000) {
            answer += "CM"
            input -= 900
        }

        // handles 1000
        else if (input === 1000) {
            answer += "M"
            input -= 1000
        }

    }
    return answer // return total after for loop

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
    var numeral = intToRoman(ans) // converts result to Roman Numerals
    var both = `${ans}, ${numeral}` // places both integer and Roman Numerals in a string
    return both

}


// assigns arguments to their respective variables
function get_args() {

    var first = process.argv[2]
    var op = process.argv[3]
    var second = process.argv[4]

    // checks to see if user input is a number, if not the input is converted
    if (isNumber(first) == false || isNumber(second) == false) {
        if (isNumber(first) == false) {
            first = romanToInt(process.argv[2])
        }

        if (isNumber(second) == false) {
            second = romanToInt(process.argv[4])
        }
    }

    return [first, op, second] // return arguments
}

// function that checks if parameter is a number
function isNumber(n) {
    var input = parseInt(n)
    if (Number.isInteger(input)) {
        return true
    }
    else {
        return false
    }
}

console.log(intToRoman())
