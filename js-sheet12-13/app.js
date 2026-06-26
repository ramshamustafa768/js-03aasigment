// Qusetion 1

//0 - 9	48 - 57
// A - Z	65 - 90
// a - z	97 - 122

  var input = prompt("Enter a character");
 var ascii = input.charCodeAt(0);


 if (ascii >= 48 && ascii <= 57) {
     console.log("It is a number");
    
 }
  else if (ascii >= 65 && ascii <= 90) {
      console.log("it is a uppercase letters");
    
  }
   else if (ascii >= 97 && ascii <=122)  {
   console.log("It is a lowercase letters");
    
  } else{
    console.log("Invalid number");
    
  }
  
// Qusetion 2

// var num1 = +prompt("Enterafirst number");
// var num2 = +prompt ("Enter a second number");

// if (num1 > num2) {
//     console.log(num1 + " It is a larger number ");
    
// } else if (num2 > num1) {
//     console.log(num2 + " It is a larger number");
    
    
// } else {
//     console.log("It is a equal number");
    
// }


// Qusetion 3


// var num = prompt("Enter a number");

// if (num > 0) {
//     console.log("It is a positive number");
    
// }  else if (num < 0) {
//       console.log("It is a negative number");
  
// } else {
//     console.log(" It is a zero");
    
// }


// Qusetion 4

// var char = prompt("Enter a character").toLocaleLowerCase();

// if (char === "a" || char === "e" || char === "i"|| char === "o" ||char === "U") {
//     console.log("It is a vowel");
    
// } else {
//     console.log(false);
    
// }


// Qusetion 5

// var greeting;
// var hours = 13;
// if (hours < 18) {
//     console.log("GOOD DAY");
    
    
// } else {
//     console.log("GOOD EVENGIng");
    
// }

// Qusetion 6


// 0000–1159 → Good Morning
// 1200–1659 → Good Afternoon
// 1700–2059 → Good Evening
// 2100–2359 → Good Night




// var time = prompt("Enter time in 24-hour format (e.g. 1900)");
// if (time >=0 && time<=1159) {
//     console.log("GOOD MORNING");
    
// } else if (time >=1200 && time <= 1659 ) {
//         console.log("GOOD AFTERNOON");

// } else if (time >= 1700 && time <= 2059) {
//           console.log("GOOD EVENGING");
  
// } else if (time >=2100 && time <= 2359) {
//    console.log("GOOD NIGHT");

// }
// else {
//     console.log("Invalid Time");
// }



// Qusetion 7


//  var correctpassword = "abc123";
//  var userpassword = prompt("Enter your password");

//  if (userpassword === correctpassword) {
//     console.log("Correct! The password you entered matches the original password");
    
//  } else if (userpassword === "") {
//    console.log("Please enter your password");
    
//  } else{
//     console.log("Invalid password");
    
//  }
