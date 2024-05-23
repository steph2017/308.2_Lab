// Part 1: Fizz Buzz
// To begin, solve the following classic “Fizz Buzz” problem. There are a few different ways to do this - experiment with what you think is the most efficient. Once you have solved the problem, ask yourself if there could be another way; and if so, would it be better.
// Accomplish the following:
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

// For a given number would want to log any potential "fizz" or "buzz" first and if applicable, break the iteration before logging the number. which means use continue.

for (i = 1; i <= 100; i++) {
    if (i % 3 != 0 && i % 5 != 0) {
        console.log(i);
    }
    else if (i % 3 == 0) {
        if (i % 5 == 0) {
            console.log("Fizz Buzz");
        }
        else {
            console.log("Fizz");
        }
    }
    else {
        console.log("Buzz");
    }

}
