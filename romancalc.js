// phase2

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

console.log(calculate())
