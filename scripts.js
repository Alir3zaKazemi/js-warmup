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

// numbers

// let bil = 1_000_000_000;
// console.log(bil);

// console.log(1.23e6); //1_230_000
// console.log(1.3e-3);  //0.0013

// console.log(Math.floor(3.56));

// let num = 1.35648;
// console.log(num.toFixed(2));

///////////////////////////////////////////////////////////

//parseInt and parseFloat

// console.log(parseInt("100px")); // 100
// console.log(parseInt("100.4px")); // 100
// console.log(parseFloat("100.4px")); // 100.4
// console.log(parseFloat("12.5em")); // 12.5
// console.log(parseInt("12.3")); // 12
// console.log(parseFloat("12.3.4")); //12.3

////////////////////////////////////////////////////////////

//random number between two numbers

// for (let i = 0; i < 25; i++) {
// 	console.log(Math.floor(Math.random() * (50 - 20 + 1)) + 20);
// }

/////////////////////////////////////////////////////////////

// min and max

// console.log(Math.min(-20,60,6,54,3,8,9));  //-20
// console.log(Math.max(-20,60,6,54,3,8,9));  //60

//////////////////////////////////////////////////////////

///string methods

// console.log("njhgf".length);
// console.log("njhgf".slice(3)); //gf
// console.log("njhgf".slice(1,3)); //jh
// console.log("hello".substr(2,2));
// console.log("hello".substring(1,4));

/////////////////////////////////////////////////////////

// uppercasing the first character of the string

// function ucFirst(str){
//   let newStr = str.slice(0,1).toUpperCase() + str.slice(1);
//   console.log(newStr);;
// }

// ucFirst("john");

/////////////////////////////////////////////////////////

//

// function truncate(str, maxlength){
//   let newStr = str.slice(0,maxlength) + "..." ;
//   console.log(newStr);
// }

// truncate('alireza',3)

//////////////////////////////////////////////////////////

//extracting number from string

// let num = '';

// function extractNum(str) {
// 	for (let char of str) {
// 		if (isFinite(+char)) {
// 			num += `${char}`;
// 		}
// 	}
//   return num;
// }

// console.log(+extractNum("$246545sdf8+9"));

/////////////////////////////////////////////////////////

// arrays

// console.log(['ljnhefv','ljeihrv','lijpefv'].length);
// console.log(['hi',`I'm ali`,'hello'].at(1));
// console.log(['hi',`I'm ali`,'hello'].at(-1));

// let arr = ["hi", `I'm ali`, "hello"];
// console.log(arr[arr.length - 1]); //it's because we can set negative values in []

///////////////////////////////////////////////////////

//pop push shift unshift

// let arr = ["apple", "orange", "peach"];

// console.log(arr.pop(), arr);
// console.log(arr.push('tomato'), arr);

// console.log(arr.shift(), arr);
// console.log(arr.unshift('banana'), arr);

// console.log(arr.push('jhsf','kjbuef'), arr);
// console.log(arr.unshift('lihbwproig','354'), arr);

//////////////////////////////////////////////////////

//copying an array reference

// let array1 = [1,2,3];
// let array2 = array1;
// array2[1] = 4;
// console.log(array1); //[1,4,3]

//copying each element of an array to another

// let array1 = [1,2,3];
// let array2 = [];
// for(let i in array1){
//   array2[i] = array1[i]
// }
// array2[1] = 4;
// console.log(array1,array2);

///////////////////////////////////////////////////////

//array to string

// let arr = [1,2];
// console.log(arr.toString());  //'1,2'

// let arr = [1,2,3];
// console.log(arr+1);  //'1,2,31'

///////////////////////////////////////////////////////

//  .splice()

// let arr = [1,2,3]; //referenced array for testing arr methods

// arr.splice(1,1);  //from index 1 removes 1 element
// console.log(arr);  //[1,3]

// arr.splice(0,2,4,5); //from index 0 removes 1 element and adds two new elements
// console.log(arr); //['new elem','second new elem',2,3]

// arr.splice(1,0,7,8);
// console.log(arr);   //[1,7,8,2,3]
// console.log(arr.splice(2,3,9));  //[8,2,3]
// console.log(arr);  //[1,7,9]

//////////////////////////////////////

//  .slice()

// let arr = [1,2,3,4];
// console.log(arr.slice(1,3));  //[2,3]
// console.log(arr.slice(1));  //[2,3,4]

// let arr = [1, 2, 3, 4];
// let brr = arr.slice(); //copying array to sth else
// brr[2] = 6; //it wont change the otherone
// console.log(brr, arr); //[1,2,6,4] -- [1,2,3,4]

// let arr1 = [1,2];
// let arr2 = [4,6,8];
// console.log(arr1.concat(arr2));  //[1,2,4,6,8]
// console.log(arr1, arr2);   //[1,2] -- [4,6,8]
// console.log(arr1.concat(10,35,69));  //[1,2,10,35,69]
// console.log(arr2.concat([10,35,69]));  //[4,6,8,10,35,69]

// .forEach()

// let array = [1,2,3];
// array.forEach((item, index, array) => {
//   console.log(`so ${item} is at index ${index} of the [${array}]`);
// })

// .find()

// let users = [
// 	{ id: 1, name: "John" },
// 	{ id: 2, name: "Pete" },
// 	{ id: 3, name: "Mary" },
// ];

// let user = users.find((item) => item.id == 1);
// console.log(user.name);
// console.log(users.find(item => item.id == 3));

// .filter()  .map()

// let users = [
// 	{ id: 1, name: "John" },
// 	{ id: 2, name: "Peter" },
// 	{ id: 3, name: "Mary" },
// ];

// console.log(users.filter(item => item.id < 3));  //[{id: 1, name: "John"}, {id: 2, name: "Pete"}]

// console.log(users.map(item => item.name.length)); //[4,4,4]

//////////////////////////////////////////////////////////

// .sort()

// let arr = [1,15,22,8,10];
// console.log(arr.sort());  //[1, 10, 15, 22, 8]
// console.log(arr.sort((a, b) => (a > b ? 1 : b > a ? -1 : 0)));  //[1, 8, 10, 15, 22]

// .split()

// let names = "john, peter, ali";
// let arrNames = names.split(', ');
// console.log(arrNames);

// let names = "john, peter, ali";
// let arrNames = names.split(', ',2);
// console.log(arrNames);

//.join()

// let arr = ['ali', 'john'];
// let str = arr.join(';');
// console.log(str);

//.reduce()

// let arr = [1,2,3];
// let result = arr.reduce((multiple, item) => multiple * item, 1);

// console.log(result);  //6

//////////////////////////////////////////////////////////

// Important (to CamelCase)

// let str = "my-very-first-code";
// console.log(toCamel(str));

// function toCamel(string) {
// 	return string
// 		.split("-")
// 		.map((word, index) => {
// 			return index == 0 ? word : word[0].toUpperCase() + word.slice(1);
// 		})
// 		.join('');
// }

//////////////////////////////////////////////////////////

//Important

// let arr = [5,3,8,1];
// let filtered = filterRange(arr, 1 ,4);

// function filterRange(array, x, y){
//   return array.filter(item => item >= x && item < y ? item : null)
// }

// console.log(filtered);  // [3,1]
// console.log(arr);  // [5,3,8,1]

//////////////////////////////////////////////////////////

//Important

// let arr = [5, 3, 8, 1];

// function filterRangeInPlace(array, low, high) {
// 	let filterd = [];
// 	let filterArr = [];
// 	filterArr = array.map((item) => {
// 		if (item >= low && item <= high) {
// 			filterd.push(item);
// 		}
// 	});

// 	return filterd;
// }

// console.log(filterRangeInPlace(arr, 1, 4));

//////////////////////////////////////////////////////////

// .sort()

// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a
// );
// console.log(arr);

/////////////////////////////////////////////////////////

// .sort()  without modifying the original array

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// function copySorted(array){
//   return array.slice().sort();
// }

// console.log(sorted);
// console.log(arr);

//////////////////////////////////////////////////////////

//very Important

// let calc = new Calculator();
// let powerCalc = new Calculator();
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// // powerCalc.addMethod("**", (a, b) => a ** b);
// function Calculator() {
// 	this.methods = {
// 		"-": (a, b) => a - b,
// 		"+": (a, b) => a + b,
// 	};

// 	this.calculate = function (str) {
// 		let split = str.split(" "),
// 			a = +split[0],
// 			op = split[1],
// 			b = +split[2];

// 		if (!this.methods[op] || isNaN(a) || isNaN(b)) {
// 			return NaN;
// 		}

// 		return this.methods[op](a, b);
// 	};

// 	this.addMethod = function (name, func) {
// 		this.methods[name] = func;
// 	};
// }

// console.log(powerCalc.calculate("2 ** 3"));
// console.log(calc.calculate("3 + 7"));

//////////////////////////////////////////////////////////

// iterating an object which is not iterable

// let range = {
// 	from: 1,
// 	to: 5,

// 	[Symbol.iterator]() {
// 		this.current = this.from;
// 		return this;
// 	},

// 	next() {
// 		if (this.current <= this.to) {
// 			return { done: false, value: this.current++ };
// 		} else {
// 			return { done: true };
// 		}
// 	},
// };

// for(let num of range){
//   console.log(num);
// }

//////check generator function section

//////////////////////////////////////////////////////////

// making an array from an object

// let arrayLike = {
//   0: "Hello",
//   1: "World",
//   length: 2
// };

// console.log(arrayLike);
// let arr = Array.from(arrayLike); // (*)
// console.log(arr);    //[Hello, World]

//////////////////////////////////////////////////////////

// making an array from a string

// let str = "iugeifv";
// let arr = Array.from(str);
// console.log(arr);

//////////////////////////////////////////////////////////

// map

// let map = new Map();

// map.set('1', 'str1');   // a string key
// map.set(1, 'num1');     // a numeric key
// map.set(true, 'bool1'); // a boolean key

//////////////////////////////////////

// let john = { name: "John" };

// // for every user, let's store their visits count
// let visitsCountMap = new Map();

// // john is the key for the map
// visitsCountMap.set(john, 123);
// console.log(visitsCountMap);
// console.log( visitsCountMap.get(john) ); // 123

///////////////////////////////////////

// iterates on maps

// let recipeMap = new Map([
// 	["cucumber", 500],
// 	["tomatoes", 350],
// 	["onion", 50],
// ]);

// // iterate over keys (vegetables)
// for (let vegetable of recipeMap.keys()) {
// 	console.log(vegetable); // cucumber, tomatoes, onion
// }

// // iterate over values (amounts)
// for (let amount of recipeMap.values()) {
// 	console.log(amount); // 500, 350, 50
// }

// // iterate over [key, value] entries
// for (let entry of recipeMap) {
// 	// the same as of recipeMap.entries()
// 	console.log(entry); // cucumber,500 (and so on)
// }

// recipeMap.forEach((value, key) => {
// 	console.log(`${key}: ${value}`); // cucumber: 500 etc
// });

//////////////////////////////////////////////////////////

// object to map

// let obj = {
// 	name: "John",
// 	age: 30,
// };

// let map = new Map(Object.entries(obj));
// console.log(Object.entries(obj));
// console.log(map);
// console.log(map.get('name'));

//////////////////////////////////////////////////////////

//  map to object

// let prices = new Map([
// 	["banana", 1],
// 	["orange", 2],
// 	["meat", 4],
// ]);

// let objFromMap = Object.fromEntries(prices);
// console.log(objFromMap);
// console.log(objFromMap.orange);

//////////////////////////////////////////////////////////

// Important

// function aclean(arr) {
// 	let map = new Map();

// 	for (let word of arr) {
// 		// split the word by letters, sort them and join back
// 		let sorted = word.toLowerCase().split("").sort().join(""); // (*)
// 		map.set(sorted, word);
// 	}

// 	return Array.from(map.values());
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// console.log(aclean(arr));

//////////////////////////////////////////////////////////

//array from msp keys

// let map = new Map();

// map.set("name", "John");
// console.log(map);
// let keys = Array.from(map.keys());
// keys.push("more");
// console.log(keys);

//////////////////////////////////////////////////////////

// accessing a null object from map

// let john = { name: "John" };

// let map = new Map();
// map.set(john, "...");

// john = null;

// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());

//////////////////////////////////////////////////////////

// destructuring assignment

// let [one,two,three] = new Set([1,2,3]);
// console.log(two);  //2

// let [firstName, , surname] = ['alireza', 'kazemi','kazem'];
// console.log(surname);  //kazem

// let user = {};
// [user.name, user.surname] = "John Smith".split(" ");
// console.log(user);
// console.log(user.name);

// ...rest

// let [name1, name2, ...rest] = ['ali', 'mmd', 'john', 'peter'];
// console.log(rest);  //['john', 'peter']
// console.log(rest[1]);  //peter

// switching values

// let user = 'ali';
// let admin = 'john';
// [user, admin] = [admin, user];
// console.log(admin);  //ali

//////////////////////////////////////////////////////////

//destructuring objects

// let { height, width, title } = { title: "Menu", height: 200, width: 100 };

// console.log(width);

// let obj = {
// 	title: "menu",
// };

// let { width: w = 100, height: h = 200, title } = obj;
// console.log(w);  //100

/////////////////////////////////////////////////////////

// ...rest in object destructuring

// let options = {
//   title: "Menu",
//   height: 200,
//   width: 100
// };

// // title = property named title
// // other = object with the other of properties
// let {title, ...other} = options;

// // now title="Menu", other={height: 200, width: 100}
// console.log(other);  // {height:200, width:100}
// console.log(other.width);   // 100

/////////////////////////////////////////////////////////

// let options = {
// 	size: {
// 		width: 100,
// 		height: 200,
// 	},
// 	items: ["Cake", "Donut"],
// 	extra: true,
// };

// // destructuring assignment split in multiple lines for clarity
// let {
// 	size: {
// 		// put size here
// 		width,
// 		height,
// 	},
// 	items: [item1, item2], // assign items here
// 	title = "Menu", // not present in the object (default value is used)
// } = options;

// console.log(width);  //100

/////////////////////////////////////////////////////////

// JSON

// let obj = {
//   name: 'ali',
//   age: 25,
// }

// let objJson = JSON.stringify(obj);

// console.log(objJson);

/////////////////////////////////////////////////////////

//JSON error

// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Conference",
//   participants: ["john", "ann"]
// };

// meetup.place = room;       // meetup references room
// room.occupiedBy = meetup; // room references meetup
// console.log(room);
// console.log(JSON.stringify(room));  //error

/////////////////////////////////////////////////////////

//figuring json error

// let room = {
// 	number: 23,
// };

// let meetup = {
// 	title: "Conference",
// 	participants: [{ name: "John" }, { name: "Alice" }],
// 	place: room, // meetup references room
// };

// room.occupiedBy = meetup; // room references meetup

// console.log(
// 	JSON.stringify(meetup, function replacer(key, value) {
// 		console.log(`${key}: ${value}`);
// 		return key == "occupiedBy" ? undefined : value;
// 	},2)  //this 2 is for better looking output like in cosole
// );

/////////////////////////////////////////////////////////

// JSON.parse()

// let numbers = "[0, 1, 2, 3]";
// numbers = JSON.parse(numbers);
// console.log( numbers[1] ); // 1

/////////////////////////

// let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

// let user = JSON.parse(userData);

// console.log( user.friends[1] ); // 1

/////////////////////////////////////////////////////////

// error in JSON.parse

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meetup = JSON.parse(str);

// console.log( meetup.date.getDate() ); // Error!

///////////////////////////////////////

// fixing json.parse error

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meetup = JSON.parse(str, function(key, value) {
//   if (key == 'date') return new Date(value);
//   return value;
// });

// console.log( meetup.date.getDate() ); // now works!

/////////////////////////////////////////////////////////

// recursion

// function inBetween(a, b) {
// 	return (x) => x >= a && x <= b;
// }
// let arr = [1,2,3,4,5,6,7,8,9]
// console.log(arr.filter(inBetween(3,6)));

/////////////////////////////////////////////////////////

// function checking arg

// function ask(question, ...handlers) {
// 	let isYes = confirm(question);
// 	for (let handler of handlers) {
//     if (handler.length == 0) {
//       //checking func arg length
// 			if (isYes) handler();
// 		} else {
// 			handler(isYes);
// 		}
// 	}
// }

// // for positive answer, both handlers are called
// // for negative answer, only the second one
// ask(
// 	"Question?",
// 	() => console.log("You said yes"),
// 	(result) => console.log(result)
// );

////////////////////////////////////////////////////////

// Important

// function makeCounter() {

//   function counter() {
//     return counter.count++;
//   };

//   counter.count = 0;

//   return counter;
// }

// let counter = makeCounter();

// counter.count = 10;
// counter();
// console.log( counter() ); // 10

/////////////////////////////////////////////////////////

// Important,

// let sayHi = function func(who) {
//   if (who) {
//     console.log(`Hello, ${who}`);
//   } else {
//     func("Guest"); // use func to re-call itself
//   }
// };

// sayHi(); // Hello, Guest

// // But this won't work:
// func(); // Error, func is not defined (not visible outside of the function)

///////////////////////////////

// let sayHi = function(who) {
//   if (who) {
//     console.log(`Hello, ${who}`);
//   } else {
//     sayHi("Guest"); // Error: sayHi is not a function
//   }
// };

// let welcome = sayHi;
// sayHi = null;

// welcome(); // Error, the nested sayHi call doesn't work any more!

///////////////////////////////

// to fix that

// let sayHi = function func(who) {
//   if (who) {
//     console.log(`Hello, ${who}`);
//   } else {
//     func("Guest"); // Now all fine
//   }
// };

// let welcome = sayHi;
// sayHi = null;

// welcome(); // Hello, Guest (nested call works)

/////////////////////////////////////////////////////////

// very important

// function sum(a) {

//   let currentSum = a;

//   function f(b) {
//     currentSum += b;
//     return f;
//   }

//   // for showing in alert
//   f.toString = function() {
//     return currentSum;
//   };

//   return f;
// }

// alert( sum(1)(2) ); // 3
// alert( sum(5)(-1)(2) ); // 6
// alert( sum(6)(-1)(-2)(-3) ); // 0
// alert( sum(0)(1)(2)(3)(4)(5) ); // 15

/////////////////////////////////////////////////////////

// setTimeout

// let timerId = setTimeout(() => alert("never happens"), 1000);
// console.log(timerId); // timer identifier

// clearTimeout(timerId);  //cancels the setTimeout of timeId
// console.log(timerId); // same identifier (doesn't become null after canceling)

//////////////////////////////////////

// repeat with the interval of 1 seconds
// let timerId = setInterval(() => console.log('tick'), 1000);

// // after 10 seconds stop
// setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 10000);

//////////////////////////////////////

// alternative way for interval

// let timerId = setTimeout(function tick() {
// console.log("tick");
// setTimeout(tick, 2000); // (*)
// }, 5000);

///////////////////////////////////////

// zero delay setTimeout

// setTimeout(() => console.log('world'));
// console.log('hello');

//out put is fist 'hello' and then 'world'

////////////////////////////////////////

// important

// function printNumbers(from, to) {
// 	let current = from;

// 	function go() {
// 		console.log(current);
// 		if (current == to) {
// 			clearInterval(timerId);
// 		}
// 		current++;
// 	}

// 	// go();  //being this makes the first output to be shown faster than the case that we dont write go()
// 	let timerId = setInterval(go, 1000);
// }

// printNumbers(5, 10);

//////////////////////////////////////////

//important

// function printNumbers(from, to) {
// 	let current = from;

// 	setTimeout(function go() {
// 		console.log(current);
// 		if (current < to) {
// 			setTimeout(go, 1000);
// 		} else {
// 			setTimeout(() => console.log("finished"), 1000);
// 		}

// 		current++;
// 	}, 1000);
// }

// // usage:
// printNumbers(5, 12);

///////////////////////////////////////////////////////

// decorators

// function slow(x) {
// 	// there can be a heavy CPU-intensive job here
// 	console.log(`Called with ${x}`);
// 	return x;
// }

// function cachingDecorator(func) {
//   let cache = new Map();

//   return function(x) {
//     if (cache.has(x)) {    // if there's such key in cache
//       return cache.get(x); // read the result from it
//     }

//     let result = func(x);  // otherwise call func

//     cache.set(x, result);  // and cache (remember) the result
//     return result;
//   };
// }

// slow = cachingDecorator(slow);  //the func syntax of slow has been changed and modified, if its the first time call the original slow func will run otherwise the result will be read from the cache
// console.log(slow);
// console.log( slow(1) ); // slow(1) is cached and the result returned
// console.log( "Again: " + slow(1) ); // slow(1) result returned from cache

// console.log( slow(2) ); // slow(2) is cached and the result returned
// console.log( "Again: " + slow(2) ); // slow(2) result returned from cache

/////////////////////////////////////////////////////////

// decorators for objects which have methods

// let worker = {
//   someMethod() {
//     return 1;
//   },

//   slow(x) {
//     console.log("Called with " + x);
//     return x * this.someMethod(); // (*)
//   }
// };

// function cachingDecorator(func) {
//   let cache = new Map();
//   return function(x) {
//     if (cache.has(x)) {
//       return cache.get(x);
//     }
//     let result = func.call(this, x); // "this" is passed correctly now
//     cache.set(x, result);
//     return result;
//   };
// }

// worker.slow = cachingDecorator(worker.slow); // now make it caching

// console.log( worker.slow(2) ); // works
// console.log( worker.slow(2) ); // works, doesn't call the original (cached)

////////////////////////////////////////////////////////

// decorating an object method which has more than one argument

// let worker = {
//   slow(min, max) {
//     console.log(`Called with ${min},${max}`);
//     return min + max;
//   }
// };

// function cachingDecorator(func, hash) {
//   let cache = new Map();
//   return function() {
//     let key = hash(arguments); // (*)
//     if (cache.has(key)) {
//       return cache.get(key);
//     }

//     let result = func.call(this, ...arguments); // (**)
//     cache.set(key, result);
//     return result;
//   };
// }

// function hash(args) {
//   return args[0] + ',' + args[1];
// }

// worker.slow = cachingDecorator(worker.slow, hash);

// console.log( worker.slow(3, 5) ); // works
// console.log( "Again " + worker.slow(3, 5) ); // same (cached)

/////////////////////////////////////////////////////////

//  function binding

// let user = {
//   firstName: "John"
// };

// function func() {
//   console.log(this.firstName);
// }

// let funcUser = func.bind(user);
// funcUser();

////////////////////////////////////

// object method binding

// let user = {
//   firstName: "John",
//   sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//   }
// };

// let sayHi = user.sayHi.bind(user); // (*)

// // can run it without an object
// sayHi(); // Hello, John!

// setTimeout(sayHi, 1000); // Hello, John!

/////////////////////////////////////////////////////

// DOM

// let title = document.querySelector('#title');
// title.style.color = 'red';
// title.style.fontSize = '32px';
// title.style.fontWeight = 'bold';
// title.style.textTransform = 'capitalize';

///////////////////////////////

// manipulating elements in html

// let olList = document.getElementById('list');
// olList.before('<p>beginig</p>');
// olList.prepend('Hi');
// let newLi = document.createElement('li');
// newLi.textContent='im an elem';
// olList.append(newLi);
// olList.insertAdjacentHTML('afterbegin','<li>adjacent</li>')

/////////////////////////////////

//adding an element and removing with setTimeout

// let newDiv = document.createElement("div");
// newDiv.innerHTML =
// 	"<h2> new div </h2><hr><p>jnvfeojnvonsofnvslknfvlskjnljvnljnlsfjnlknl<br>dfvnodjnfvonoisdnvosindvoinsoidnvosinlknlkms dlvnoniosdnvinsdvnl<br>dfvnouendovnosidnv</p>";

// document.body.append(newDiv);

// // setTimeout(() => newDiv.setAttribute('hidden',''), 2500);
// // or
// setTimeout(()=>newDiv.remove(), 2500);

//////////////////////////////////////////

// best way of clearing whole chikdren of an element

// let list = document.getElementById('list')
// list.innerHTML=''

/////////////////////////////////////////////

// create li list from prompt

// let input = '' ;
// let list = document.getElementById('list');

// do {
//   input = prompt('enter')
//   let li = document.createElement('li');
//   li.textContent = input;
//   list.append(li);
// } while (input);

///////////////////////////////////////////

// ***********

// let data = {
// 	Fish: {
// 		trout: {},
// 		salmon: {},
// 	},

// 	Tree: {
// 		Huge: {
// 			sequoia: {},
// 			oak: {},
// 		},
// 		Flowering: {
// 			"apple tree": {},
// 			magnolia: {},
// 		},
// 	},
// };

// function createTree(container, obj) {
// 	container.append(createTreeDom(obj));
// }

// function createTreeDom(obj){

//   let ul = document.createElement('ul');

//   for( let key in obj){
//     let li = document.createElement('li');
//     li.textContent = key;
//     ul.append(li);

//     let childLi = createTreeDom(obj[key]);
//     console.log(childLi);
//     li.append(childLi)

//   }

//   return ul;
// }

// let container = document.getElementById("container");
// createTree(container, data);

////////////////////////////////////////////////

// cloning an object and defining property

// let obj = {
//   name : 'john',
//   second : 123
// }

// let clone = Object.defineProperties({},Object.getOwnPropertyDescriptors(obj));

// Object.defineProperty(clone, 'age', {
//   value : 25
// })

// console.log(clone);

/////////////////////////////

//defining properties

// let obj = {};

// Object.defineProperties(obj,{
//   name:{value : 'ali'},
//   age:{value : 24},
//   gender: {value : 'male'}
// })

// console.log(obj);

//////////////////////////////////////////////////

// get and set in objects

// let user = {
//   name: "John",
//   surname: "Smith",

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },

//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   }
// };

// // user before modifying
// console.log(user);

// // before setting value for fullName
// console.log(user.fullName);

// // set fullName is executed with the given value.
// user.fullName = "Alice Cooper";

// console.log(user.name); // Alice
// console.log(user.surname); // Cooper

// console.log(user);

///////////////////////////////////////////////////

// prototype in objects

// let animal = {
//   eats: true
// };
// let rabbit = {
//   jumps: true
// };

// rabbit.__proto__ = animal; // (*)

// // we can find both properties in rabbit now:
// console.log( rabbit.eats ); // true (**)
// console.log( rabbit.jumps ); // true

//////////////////////////

// __proto__

// let user = {
// 	name: "John",
// 	surname: "Smith",

// 	set fullName(value) {
// 		[this.name, this.surname] = value.split(" ");
// 	},

// 	get fullName() {
// 		return `${this.name} ${this.surname}`;
// 	},
// };

// let admin = {
// 	__proto__: user,
// 	isAdmin: true,
// };

// admin.name = 'alireza';
// console.log(admin.fullName);  //alireza smith

///////////////////////////////////////////////////

// modern way of setting prototype

// let animal = {
//   eats : true
// };

// let rabbit = Object.create(animal);

// console.log(rabbit.eats);  //true

///////////////////////////////////////////////////

// object.create with more properties

// let animal = {
// 	eats: true,
// };

// let rabbit = Object.create(animal, {
// 	jumps: {
// 		value: true,
// 	},
// });

// console.log(rabbit.jumps);

//////////////////////////////////////////////////

// try catch

// try {
//   const x = 1235;
//   x = 4568;
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
//   console.log(error.stack);
// }

/////////////////////////////

// throw

// let json = '{ "age": 30 }'; // incomplete data

// try {
// 	let user = JSON.parse(json); // <-- no errors

// 	if (!user.name) {
// 		throw new SyntaxError("Incomplete data: no name"); // (*) jumps to the catch
// 	}

// 	console.log(user.name);
// } catch (err) {
// 	console.log("JSON Error: " + err.message); // JSON Error: Incomplete data: no name
// }

//////////////////////////////////

//3543544********

// function readData() {
//   let json = '{ "age": 30 }'; // incomplete data
//   try {
// 		let user = JSON.parse(json);

// 		if (!user.name) {
//       throw new SyntaxError("Incomplete data: no name");
// 		}

//     blabla(); // unexpected error

// 		console.log(user.name);
//   } catch (err) {
// 		if (err instanceof SyntaxError) {
// 			console.log("JSON Error: " + err.message);
// 		}
// 		if (!(err instanceof SyntaxError)) {
// 			throw err; // rethrow (don't know how to deal with it)
// 		}
//   }
// }

// try {
// 	readData();
// } catch (err) {
// 	console.log("External catch got: " + err); // caught it!
// }

///////////////////////////////////////////////////

// generator functions

// function* generateSequence() {
// 	yield 1;
// 	yield 2;
// 	return 3;
// }

// let generator = generateSequence();

// let one = generator.next();
// let two = generator.next();
// let three = generator.next();

// console.log(one);  //{value: 1, done: false}
// console.log(two);  //{value: 2, done: false}
// console.log(three);    //{value: 3, done: true}

/////////////////////////////

//better way for making an object iterable **

// let range = {
//   from: 1,
//   to: 5,

//   *[Symbol.iterator]() { // a shorthand for [Symbol.iterator]: function*()
//     for(let value = this.from; value <= this.to; value++) {
//       yield value;
//     }
//   }
// };

// console.log( [...range] ); // 1,2,3,4,5

/////////////////////////////////////////////

// Async generators

// async function* generateSequence(start, end) {
// 	for (let i = start; i <= end; i++) {
// 		// Wow, can use await!
// 		await new Promise((resolve) => setTimeout(resolve, 1000));

// 		yield i;
// 	}
// }

// (async () => {
// 	let generator = generateSequence(1, 5);
// 	for await (let value of generator) {
// 		console.log(value); // 1, then 2, then 3, then 4, then 5 (with delay between)
// 	}
// })();

/////////////////////////////////////////////

// asynchronously  iterable obj

// let range = {
// 	from: 1,
// 	to: 5,

// 	[Symbol.asyncIterator]() {
// 		// (1)
// 		return {
// 			current: this.from,
// 			last: this.to,

// 			async next() {
// 				// (2)

// 				// note: we can use "await" inside the async next:
// 				await new Promise((resolve) => setTimeout(resolve, 1000)); // (3)

// 				if (this.current <= this.last) {
// 					return { done: false, value: this.current++ };
// 				} else {
// 					return { done: true };
// 				}
// 			},
// 		};
// 	},
// };

// (async () => {
// 	for await (let value of range) {
// 		// (4)
// 		console.log(value); // 1,2,3,4,5
// 	}
// })();


/////////////////////////////////////////////

// yield*

// function* generateSequence(start, end) {
// 	for (let i = start; i <= end; i++) yield i;
// }

// function* generatePasswordCodes() {
// 	// 0..9
// 	yield* generateSequence(48, 57);

// 	// A..Z
// 	yield* generateSequence(65, 90);

// 	// a..z
// 	yield* generateSequence(97, 122);
// }

// let str = "";

// for (let code of generatePasswordCodes()) {
// 	str += String.fromCharCode(code);
// }

// console.log(str);

/////////////////////////////////////////////////

