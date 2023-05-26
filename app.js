// console.log("hello world");


// for (initialization; condition; afterthought) {
// 	statements
// }

// for (let i = 0; i < 10; i++) {
// 	console.log(i);
// }


// Count down from 10 to 1.
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }
//  RAHEEM EX
// for (let i = 10; i > 0; i--) {
//     console.log(i);
// }




// Output odd numbers from 1 to 10.
// for (let i = 1; i < 10; i ++) {
//     if (i%2 === 1){
//         console.log(i);
//     }
// }



// Output even number from 1 to 10. 
// for (let i = 1; i < 10; i ++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


// Output multiples of 3, starting at 6 and ending at 60.
// for (let i = 6; i <= 60; i += 3) {
//     console.log(i);
// }




// Output an increasing number of # symbols, from 1 to 7, as shown below.
// for (let i = "#"; i <= "#######"; i += "#") {
//     console.log(i);
// }
// ----------------------- RAHEEM EX - debugger practice
// let output = "";
// for (let i = 1; i <= 7; i++) {
//     output += "#";
//     console.log(output);
// }


// --------Iterables

// const str = "Hello World";
// console.log(str.length);
// console.log([0]);
//  above: replace 0 with any number to test
// for (let i = 0; i <str.length; i++) {
//     console.log(str[i]);
// }


// ------------In Loops (do not use this....... "for in" with strings because everything inherits from the object)
// const str = "Hello World";
// for (const i in str) {
//     console.log(str[i]);
// }


// -----------Of Loops (to iterate through a string/ cannot use "for of" on an object)
// const str = "Hello World";
// for (const c of str) {
//     console.log(c);
// }


// --------Continue Statement in "For Loops" (note)
// const str = "Hello World";

// for (let i = 0; i < str.length; i++) {
// 	if (str[i] == "l" || str[i] == "o") {
// 		continue;
// 	}

// 	console.log(str[i]);
// }
                    // continue vs. break
// const str = "Hello World";

// for (let i = 0; i < str.length; i++) {
// 	if (str[i] == "o") {
// 		break;
// 	}

// 	console.log(str[i]);
// }


// -----------While Loop structure
// variable is x, equals 30. loop says while x is greater than 0 (for loops are used exactly when we know the eamount of times we want to implement the for loop, while is more undetermined). 
// let x = 30;

// while (x > 0) {
// 	x /= 2; //will equal 15
// 	x--; //reduce by 1, equals 14
// // if x modulo 1 is not equal to 0... 
// 	if (x % 1 != 0) {
// 		break;
// 	}
	
// 	console.log(x);
// }

// note: "print" in python is similar to to console.log in js 


// EXERCISES
// --------Count down to 0 from a given number.
// let x = 10;

// while (x > 0) {
//     x--;
//     console.log(x);
// }


// -----Log integers in multiples of 3 as long as they are less than 35.
// let x = 0;

// while (x <= 35) {
//     x += 3;
//     if (x === 36) {
//         break);
//     }
// 	console.log(x);
// }


// -----Print integers in multiples of 5 as long as they are less than 100.
// let x = 0;
// while (x <100) {
//     x += 5;
//     console.log(x);
// }

// *Print integers between 0 and 20 with the following conditions:

// -------All numbers divisible by 2 should be multiplied by 3 before they are output. +All other integers should not be output.
// let x = 0;
// while (x < 20) {
//     if (x % 2 === 0) { // if x is divided by 2 and equals 0, move on to clg x multiply by 3
//         console.log(x * 3);
//     }
//     x++;
// }


// ---------Print all prime numbers between 0 and 20.
//work on later

//----------Romeo went to the vending machine to buy himself a cookie, which costs $4. He paid with a $10 bill, and the vending machine gave him his change in quarters. + Write a loop that outputs how many quarters Romeo received.
// as long as change is equal to or greater than .25, change decrements by .25, then quarters increases by 1
// let cost = 4;
// let bill = 10;
// let change = bill - cost;
// let quarters = 0;

// while (change >= 0.25) {
//     change -= 0.25;
//     quarters++;
// }

// console.log("Quarters received:", quarters);

//------Do While Loop - expects to loop AT LEAST once

// let x = 10;

// do {
// 	x--;
// 	console.log(x);
// } while (x > 50);

// -----Labeled Statements

// let x = 1;
// let y = 1;
// //clg outer loop, increment x by 1
// myLoop: while (true) {
// 	console.log(`Outer loop ${x}.`);
// 	x++;
// //clg inner loop, increment y by 1
// 	while (true) {
// 		console.log(`Inner loop ${y}.`);
// 		y++;
// //inifinite loop unless we specify the following:
// // if x is equal to 5 and y is divisible by 5, then we will break myLoop. if this condition is not met then moves on to ELSE
// 		if (x == 5 && y % 5 == 0) {
// 			break myLoop;
// // if y is divisible 5, stop. repeat loop
// 		} else if (y % 5 == 0) {
// 			break;
// 		}
// 	}
// }

//ADDITIONAL PRACTICE

//reverse a string using a for loop(no using .reverse())

// ex for reference
// function reverseString(str) {
//     var newString = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }
// reverseString('hello');

// let str = "javascript";
// let rvsStr = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     rvsStr += str[i];
// }

// console.log(rvsStr);


//Write a for loop that calculates and prints the sum of all numbers from 1 to 100.
// let sum = 0;
// for (let i = 0; i <= 100; i ++) {
// sum = sum + i;
// }
// console.log(sum);


//Write a for loop that prints the multiplication table for a given number(you can set your condition to stop at 10)
// let sum;
// let i;
// for (let i = 1; i <= 10; i++) {
//     sum = i * 5;
//     console.log("5 x ", i, " = ", sum);
// }