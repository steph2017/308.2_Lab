// Part 1: Fizz Buzz
// To begin, solve the following classic “Fizz Buzz” problem. There are a few different ways to do this - experiment with what you think is the most efficient. Once you have solved the problem, ask yourself if there could be another way; and if so, would it be better.
// Accomplish the following:
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

// For a given number would want to log any potential "fizz" or "buzz" first and if applicable, break the iteration before logging the number. which means use continue.

// for (i = 1; i <= 100; i++) {
//     if (i % 3 != 0 && i % 5 != 0) {
//         console.log(i);
//     }
//     else if (i % 3 == 0) {
//         if (i % 5 == 0) {
//             console.log("Fizz Buzz");
//         }
//         else {
//             console.log("Fizz");
//         }
//     }
//     else {
//         console.log("Buzz");
//     }

// }

// Pt .2 Prime Time

// Write a script that accomplishes the following:
// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.
// Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.
// Be careful! If you set n to a number too large, your loop could take a long time to process.

// I've got the factor counter concept down pat - we will use it to next the next prime. This should use a while loop since the counting bounds are not known. will need to breakthe loop at some point.

let n = 5;
let factorCounter = 0;

do n++;
while (n) {
    for (i = 1; i <= n; i++) {
        if (n % i == 0) {
            factorCounter++;
        }
    }
    if (factorCounter <= 2) {
        console.log(n);
        break;
    }

}

