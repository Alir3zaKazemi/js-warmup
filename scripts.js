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

