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

// out: for (let i = 1; i < n; i++) {
//   for (let j = 2; j < i; j++) {
//     if(i % j == 0) continue out;
//   }
//   alert(i);
// }

//////////////////////////////////////////////////

