//working calculator
// variables
let num1 = 0;
let num2 = 0;
let num3 = 0;
let sum = 0;
let GA = 0; // GA means Go Again - meaning using the previous sum as the first number

function loop(){
    num1 = prompt("What Symbol do you wan to use? + for adding, - for subtracting, x for multiplying, and / for deviding");
    if (GA < 1){ // if the current equation is the second one or more, it uses the sum instead of the first number.
        num2 = prompt("Input first number");
    }
    num3 = prompt("Input second number");
    num2 = Number(num2); // converts the string into a number for the first number
    num3 = Number(num3); // converts the string into a number for the second number
     // first equation 
    if(num1 == "+" && GA == 0){ //if the user chooses add
        sum = num2+num3;
       console.log("Your Result is: " + sum);
       GA++;
    }
    if(num1 == "-"&& GA == 0){ // if the user chooses subtract
        sum = num2-num3;
       console.log("Your Result is: " + sum);
       GA++
    }
    if(num1 == "x"&& GA == 0){ // if the user chooses multiply
        sum = num2*num3;
       console.log("Your Result is: " + sum);
       GA++
    }
    if(num1 == "/"&& GA == 0){ // if the user chooses devide
        sum = num2/num3;
       console.log("Your Result is: " + sum);
       GA++;
    }

// SECOND OR MORE EQUATIONS

    if(num1 == "+" && GA > 0){ //if the user chooses add
        sum = sum+num3;
       console.log("Your Result is: " + sum);
  
    }
    if(num1 == "-"&& GA > 0){ // if the user chooses subtract
        sum = sum-num3;
       console.log("Your Result is: " + sum);
    
    }
    if(num1 == "x"&& GA > 0){ // if the user chooses multiply
        sum = sum*num3;
       console.log("Your Result is: " + sum);
    
    }
    if(num1 == "/"&& GA > 0){ // if the user chooses devide
        sum = sum/num3;
       console.log("Your Result is: " + sum);
    }
setTimeout(loop, 1) // setting the loop to start again after 1 millisecond, or 1/1000th of a second, after the result is given.
}
loop(); // runs the function to initaite the calculator


