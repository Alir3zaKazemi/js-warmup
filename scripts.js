"use strict";
// a simple modal mode for checking user and pass

// let visitor = prompt("who are you?");
// let pass = "" ;

// if (visitor == "Admin") {
//   pass = prompt("whats the pass?", "");
//   (pass == "TheMaster") ? alert("Welcome") :
//   (pass == "" || null) ? alert("Canceled") :
//   alert("Wrong pass!");
// } else if (visitor == null){
//   alert("Canceled");
// } else {
//   alert("I dont know you");
// }

/////////////////////////////////////////////////

// simple modal for guesing a number greater than 100

//first way

// let userNum = "";
// while (true) {
// 	userNum = +prompt("guess the nimber: ");
// 	if (userNum > 100) {
// 		alert("Well-done, your right :) ");
// 		break;
// 	} else if (userNum == 0 || null) {
// 		alert("Canceled! ");
// 		break;
// 	} else {
// 		alert("try again ... ");
// 	}
// }

//second way

// let guess = '';
// do {
//   guess = +prompt("guess the number: ");

// } while (guess <= 100 && guess);

////////////////////////////////////////////////

// finding prime numbers lower than n

// let n = +prompt("enter value for n: ");

// out: for (let i = 1; i <= n; i++) {
//   for (let j = 2; j < i; j++) {
//     if(i % j == 0) continue out;
//   }
//   console.log(i);
// }

//////////////////////////////////////////////////

// not using break for two same conditions

// let a = +prompt("a?");

// switch (a) {
//   case 0:
//     console.log(0);
//     break;
//   case 1:
//     console.log(1);
//     break;
//   case 2:
//   case 3:
//     console.log("2,3")
//     break;
//   default:
//     console.log("its large")
//     break;
// }

//////////////////////////////////////////////////////

// x to the power of y

// function pow(x,y) {
//   let result = 1;
//   for (let i = 1; i <= y; i++) {
//     result *= x;
//   }
//   return result;
// }

// let a = +prompt("enter num 1:");
// let b = +prompt("enter num 2:");

// b < 1
// 	? console.log(
// 			pow(a, +prompt("num less than 1 is invalid. enter the b once more"))
// 	  )
// 	: console.log(pow(a, b));

// alert("check the value in console ");

/////////////////////////////////////////////////////

//function expression

// let sayHi = function(){
//   alert("hello");
// };

// sayHi();

/////////////////////////////////////////////////////

// callback function

// let ask = function(question,yes,no){
//   (confirm(question)) ? yes() : no();
// };

// let showOk = function(){
//   alert("you pressed ok")
// };

// let showCancel = function(){
//   alert("you just canceled")
// };

// ask("do you confirm or not?" , showOk , showCancel);

/////////////////////////////////////////////////////

// function ask(question, yes, no) {
// 	if (confirm(question)) yes();
// 	else no();
// }

// ask(
// 	"Do you agree?",
// 	function () {
// 		alert("You agreed.");
// 	},
// 	function () {
// 		alert("You canceled the execution.");
// 	}
// );

/////////////////////////////////////////////////////

// loops in obj

// let obj = {
//   gender:'male',
// 	name: "ali",
// 	age: 18,
// };

// for( let key in obj){
//   console.log(key)
// }
// for( let key in obj){
//   console.log(obj[key])
// }

/////////////////////////////////////////////////////

// function for summation of salaries in object

// let salaries = {
// 	John: 100,
// 	Ann: 160,
// 	Pete: 130,
// };

// let sumSalaries = (obj) => {
//   let sum = 0;
//   for (let key in obj) {
//     sum += obj[key];
//   }
//   return sum;
// }

// console.log(sumSalaries(salaries))

////////////////////////////////////////////////////

// multiplying the numeric key values in obj
// method 1

// let menu = {
// 	width: 200,
// 	height: 300,
// 	title: "My menu",
// };

// let multiplyNumeric = (obj) =>{
//   for (let key in obj){
//     if (typeof obj[key] === 'number')
//       obj[key] *= 2
//   }
// }


// multiplyNumeric(menu);
// console.log(menu)


// method 2

// let menu = {
// 	width: 200,
// 	height: 300,
// 	title: "My menu",
// };

// let multiplyNumeric = (obj) => {
// 	for (let key in obj) {
// 		if (!isNaN(obj[key])) obj[key] *= 2;
// 	}
// };

// multiplyNumeric(menu);
// console.log(menu);

///////////////////////////////////////////////////

