// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive)let i = 1
let i = 1
while (i < 6) {
    console.log(i)
    i++; //i=i+1
}
// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

let j = 1
do {
    console.log(j) // must be first execuion
    j++
} while (j < 6);

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
for (let i = 1; i < 6; i++) {
    console.log(i)

}

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.

let i = 10
while (i > 0) {
    console.log(i)
    i--; //i=i-1
}

//let i = 10 
do {
    console.log(i) // must be one execution
    i--
} while (i > 10);

for (let i = 10; i > 0; i--) {
    console.log(i)

}

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
let i = 7
while (i < 28) {
    console.log(i)
    i++ //i=i+1
}

let i = 7
do {
    console.log(i) // must be one executiuon
    i++
} while (i < 28);

for (let i = 7; i < 28; i++) {
    console.log(i)

}
// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
let i = 10
while (i < 101) {
    console.log(i)
    i = i + 10 // also i+=10 
}
//when I print I get 110 because it was rejected by the condition
//let i = 10
do {
    console.log(i) // must be one executiuon before the condition
    i += 10
} while (i < 101); // the code runs the condition because i must be less then 100


for (let i = 10; i <= 100; i += 10) {  // also i = 101
    console.log(i)

}




// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

let counterFour = 1; //start
while (counterFour >= -100) { //stoping condition is incorrect (counterFour < 2)
    console.log("HELP ME!");
    counterFour--;

}

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.

// fav integar is 13, while loop
let i = 0
while (i <= 13) {
    console.log(i);
    i++
}


// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

//fav number 13, while loop
//test cases 15,25, 99


let favIntegar = 13
let i = 0
while (i <= 100) {
    if (i === favIntegar) {
        console.log("my favorite number!")
    } else { //like lines of code
        console.log("not my favorite number")
    }
    i++;
}

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:

// The syntex of the diffrent loops make a difference 
// While Loop
// The while loop has lower overhead between the two iteration structures. The loop consists of the keyword while followed by an expression and curly braces. The contents of the loop — what is between the curly braces — are executed as long as the expression evaluates to true
// let i = 1;
// while(i < 10) {
//    console.log(i);
//    i++;
// }
 
// A for loop is more structured than the while loop. The keyword for is used, followed by three statements:
// initialization: executed before the loop begins
// expression: evaluated before each iteration, exits the loop when false
// increment: executed at the end of each iteration
// let i= 0
// for(i=1; i < 10; i++) {
//    console.log(i);
// }
// The increment does not have be ++, but you’ll see that most commonly.
// The while loop has a looser syntax and the for loop has a more rigid syntax. A while loop expects some sort of modification to the variable in the body, whereas everything is in the for loop’s definition.

// Deciding which loop to use is ultimately a judgment call. 
// With that said, my rule for choosing between a while loop and for loop is that I use while loops when I do not know the number of iterations ahead of time and for loops when I do know.
// I prefer while loops because the syntex is easier
// Google refernce: 
// Use a for loop to iterate over an array.
// Use a for loop when you know the loop should execute n times.
// Use a while loop for reading a file into a variable.
// Use a while loop when asking for user input.
// Use a while loop when the increment value is nonstandard.



// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3 /*???*/; outsideCounter++) {
    console.log("counting down from", outsideCounter);
    for (let insideCounter = outsideCounter /*???*/ /*???*/;insideCounter > 0; insideCounter--) {
        console.log("inside" /*???*/,insideCounter); // should print number
    }
    console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//It wasn't as diiflicult but it was time consuming. 

// Email your file to us or commit your file to GitHub and email us a link.