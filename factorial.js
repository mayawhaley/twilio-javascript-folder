// factorial.js

// function that finds the factorial of the given number
function factorial(n) {
    var num = 1;
    // while loop that runs until n is 0
    while (n !== 0) {
        num *= n // num equals num * n
        n -= 1 // 1 is subtracted from n 
    }
    return num
}

console.log(factorial(8))
