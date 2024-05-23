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

// let n = 29;
// let factorCounter = 0;
// do {
//     n++;
//     factorCounter = 0;
//     for (i = 1; i <= n; i++) {
//         if (n % i == 0) {
//             factorCounter++;
//         }
//     }
// }
// while (factorCounter > 2)

// console.log(n);

//  Pt. 3 Feeling Loopy 

// Your task is to write a script that accomplishes the following:
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);
// You can make the following assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than “\n”.

//  in absence of learning arrays i will assume I will represent the row as 4 variables and reuse these 4 variables for each row. So I would determine when I have reached the end of the row which is when it hits the "\n".

let cv = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
// let cv = "rest,123,456,789\n9,bl0,000,end"; my test cv
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let i = 0;
let j = 0;
// From doing test printing, I learned that JS treats "\n" as 1 character, not 2. Thus they share only 1 position in the string. Similarly, if i want to test for the existence of an escape character I test the full expression, not "\" and "n" individually. 


while (i < cv.length) {
    //Row Level printing
    //Print each character into a cell, skip commas.
    while (cv[j] != "," && cv[j] != "\n" && j < cv.length) {
        cell1 = cell1 + cv[j];
        j++;
    }
    j++;
    while (cv[j] != "," && cv[j] != "\n" && j < cv.length) {
        cell2 = cell2 + cv[j];
        j++;
    }
    j++;
    while (cv[j] != "," && cv[j] != "\n" && j < cv.length) {
        cell3 = cell3 + cv[j];
        j++;
    }
    j++;
    while (cv[j] != "," && cv[j] != "\n" && j < cv.length) {
        cell4 = cell4 + cv[j];
        j++;
    }
    console.log(cell1, cell2, cell3, cell4);
    j++;
    cell1 = cell2 = cell3 = cell4 = "";
    i = j;
}

// Conclusion - I hadn't understood the behavior of the constant variable when used in a for in loop such as "for (i in string)" .
// I thought you could reset i by reassigning it a new number in such a case , but you cannot - the iterations are fixed to how many characters are in the string.
// So I bullied this by doing a bunch of while loops, but in hindsight, I would have tried to conform to iteration where i could use the for-in loop. 
