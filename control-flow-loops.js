/* Loops 
    Used to repeatedly execute a block of code untill a specific condition is met.
*/

/* FOR statement
    3 components:
    -initialization
    -condition;
    -arthmetic expression/afterthought;

    for (initialization; condition; afterthought) {
        statement
    }
*/

for (let x = 0; x < 5; x++) {
    console.log(x);
}

//output is 0,1,2,3,4

// x = 0 > true > display 0 > 0++ = 1
// x = 1 > true > display 1 > 1++ = 2
// ....
// x = 5 > false

for (let i = 1; i <= 5; i++) {
    console.log("Count: ", i);
}

//output is count: 1,2,3,4,5

/* WHILE statement
    while (condition) {
        statement;
    }
*/
let a = 0;

while (a < 6) {
    console.log(`the value of a = ${a}`);
    a++;
}

let count = 1;
while (count <= 5) {
    console.log("While Count:", count);
    count++;
}

//DO WHILE Loop

let j = 1;

do {
    console.log("Do-while Count: ", j);
    j++;
} while (j <= 5)

/*Activity
1)
In this activity, the user is prompted to enter a score. Based on the score entered, 
the code uses conditional statements (if, else if, and else) to determine the corresponding grade. 

    If the score is 90 or above, it assigns the grade 'A'. 
    If the score is between 80 and 89, it assigns the grade 'B'. 
    If the score is between 70 and 79, it assigns the grade 'C'. 
    If the score is between 60 and 69, it assigns the grade 'D'. 

    Otherwise, if the score is below 60, it assigns the grade 'F'. The grade is then printed to the console.

*/
let score = parseInt(prompt('Enter the score: '));
let grade;

if (score >= 90 && score < 101) {
    let grade = "A"
    console.log(`Score: ${score}, Grade: ${grade}`);
}
else if (score >= 80 && score < 90) {
    let grade = "B"
    console.log(`Score: ${score}, Grade: ${grade}`);
}
else if (score >= 70 && score < 80) {
    let grade = "C"
    console.log(`Score: ${score}, Grade: ${grade}`);
}
else if (score >= 60 && score < 70) {
    let grade = "D"
    console.log(`Score: ${score}, Grade: ${grade}`);
}
else if (score >= 0 && score < 60) {
    let grade = "F"
    console.log(`Score: ${score}, Grade: ${grade}`);
}
else {
    console.log("Score was not in correct range, please input a score between 0-100")
}

/*
2) Create a JavaScript program that prints all the numbers between a given range.
Prompt the user to enter the starting and ending numbers for the range.
Use a loop to iterate through the numbers in the range. Print each number in the console.
*/

let start = parseInt(prompt('Enter the starting number: '));
let end = parseInt(prompt('Enter the ending number: '));

for (let x = start + 1; x < end; x++) {
    console.log(`Numbers inbetween are: ${x}`);
}   