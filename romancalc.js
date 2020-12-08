// phase1

// assigns arguments to their respective variables
function get_args() {

    var first = process.argv[2] // gets first number
    var op = process.argv[3] // gets operator 
    var second = process.argv[4] // gets second number


    return [first, op, second] // return arguments
}
let op = get_args()
console.log("The first operand is: ", op[0]);
console.log("The second operand is: ", op[2]);
console.log("The operator is: ", op[1]);
