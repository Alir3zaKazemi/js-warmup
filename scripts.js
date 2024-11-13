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

//assigning an obj to another

// let user = {
// 	name: "John",
// 	age: 30,
// };

// let clone = Object.assign({}, user);

// user.age = 65;

// console.log(clone.name); // John
// console.log(clone.age); // 30
// console.log(user.age); // 65
// console.log(clone);

/////////////////////////////////////////////////////

//difference of copying reference and the obj itself

// let user = {
// 	name: "John",
// 	sizes: {
// 		height: 182,
// 		width: 50,
// 	},
// };

// let clone = Object.assign({}, user);

// console.log(user.sizes === clone.sizes); // true, same object

// user.name = 'ali';

// console.log(user.name)  //ali
// console.log(clone.name) //john

// user.sizes.width = 60; // change a property from one place
// console.log(user.sizes.width);  //60
// console.log(clone.sizes.width);  //60

//////////////////////////////////////////////////////////////

// structure cloning an object

// let user = {
//   name: "John",
//   sizes: {
//     height: 182,
//     width: 50
//   }
// };

// let clone = structuredClone(user);

// console.log( user.sizes == clone.sizes ); // false, different objects

// // user and clone are totally unrelated now
// user.sizes.width = 60;    // change a property from one place
// console.log(user.sizes.width);  // 60
// console.log(clone.sizes.width); // 50, not related

///////////////////////////////////////////////////////////////////

//this keyword

// let user = {
// 	name: "John",
// 	age: 30,

// 	sayHi() {
// 		console.log(this.name); // if this was user.name then it would be an error
// 	},
// };

// let admin = user;
// user = null;

// admin.sayHi();

//////////////////////////////////////////////////////////////////

// calculator with functions in obj  ******

// let calculator = {
//   read(){
//     this.a = +prompt("first");
// 		this.b = +prompt("second");
//   },
//   sum(){
//     return this.a + this.b;
//   },
//   mul(){
//     return this.a * this.b;
//   }
// };

// calculator.read();
// console.log(calculator)
// console.log(calculator.sum());
// console.log(calculator.mul());

//////////////////////////////////////////////////////////

//constructor function and keywords ("this" "new")

// function Video(title) {
// 	this.name = title;
//   console.log("this is the 'this' keyword in constructor function",this);
// }

// let user = new Video("arcane");
// let second = new Video("pinguein");

// console.log("this is the user",user)
// console.log("this is the second",second)

//////////////////////////////////////////////////////////

// this in constructor

// function Calculator(){
//   this.read= () => {
//     this.a = +prompt("num 1 ");
//     this.b = +prompt("num 2 ");
//   };
//   this.sum = () => {
//     return this.a + this.b;
//   };
//   this.mul = () => {
//     return this.a * this.b
//   };
// }



// let calculator = new Calculator();
// calculator.read();

// console.log("Sum=" + calculator.sum());
// console.log("Mul=" + calculator.mul());

//////////////////////////////////////////////////////////

// constructor function as accumulator

// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = () => {
//     this.value += +prompt("??");
//   };
// }

// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// console.log(accumulator.value);

/////////////////////////////////////////////////////////

// adding a function to an object as a property

// let user = {
//   name : "ali",
//   age : 15,
// };

// user.sayHi = () => {console.log("Hello mate")};
// user.sayHi();
// console.log(user)

///////////////////////////////////////////////////////////

// let user = {
// 	name: "John",
// };

// let id1 = Symbol("id");

// user[id1] = 1;

// console.log(user[id1]);
// console.log(user);

///////////////////////////////////////////////////////////

//object conversion 

// let user = {
// 	name: "John",
// 	money: 1000,

// 	[Symbol.toPrimitive](hint) {
// 		alert(`hint: ${hint}`);
// 		return hint == "string" ? `{name: "${this.name}"}` : this.money;
// 	},
// };

// // conversions demo:
// alert(user); // hint: string -> {name: "John"}
// alert(+user); // hint: number -> 1000
// alert(user + 500);

//////////////////////////////////////////////////////////