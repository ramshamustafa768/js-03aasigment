//Qusetion 1
// var studentnames = [];
// studentnames.push ("sara");
// studentnames.push (" raha ");
// console.log(studentnames);

//Qusetion 2 

// var studentnames = new Array ();

// studentnames.push("Ali");
// studentnames.push("Sara");

// console.log(studentnames);

//Qusetion 3
// var fruits = ["Apple", "Mango", "Banana", "Orange"];
// console.log(fruits);

//Qusetion 4

// var numbers = [10, 20, 30, 40, 50];

// console.log(numbers);

//Qusetion 5

// var flags = [true, false, true, false];
// console.log(flags);


//Qusetion 6
// var mixedArray = ["Raha", 18, true, "Karachi"];
// console.log(mixedArray);

//Qusetion 7

// document.write("<h2>Qualifications:</h2>");

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// document.write(qualifications[0] + "<br>");
// document.write(qualifications[1] + "<br>");
// document.write(qualifications[2] + "<br>");
// document.write(qualifications[3] + "<br>");
// document.write(qualifications[4] + "<br>");
// document.write(qualifications[5] + "<br>");
// document.write(qualifications[6] + "<br>");
// document.write(qualifications[7] + "<br>");

//Qusetion 8

// var studentNames = ["Ali", "Sara", "Ahmed"];
// var scores = [320, 450, 380];

// var totalMarks = 500;


// document.write("score of " + studentNames[0] + "is " + scores[0] + " and percentage is " +  (scores[0] / totalMarks) * 100 + " % <br>")
// document.write("score of " + studentNames[1] + "is " + scores[1] + " and percentage is " +  (scores[1] / totalMarks) * 100 + " % <br>")
// document.write("score of " + studentNames[2] + "is " + scores[2] + " and percentage is " +  (scores[2] / totalMarks) * 100 + " % <br>")

//Qusetion 9

// var scores =["340" , "490" , "120" , "540"];
// scores.sort();
// document.write(" Ordered Scores of Students: " + scores + " , ");

//Qusetion 10

// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// var selectedcities = cities.slice(0 , 3)
// document.write("Cities list: <br>");
// document.write(cities + "<br>");
// document.write("Selected cities list: <br>");
// document.write(selectedcities)


//Qusetion 11

// var arr = [ "This" , "is" , "my" , "cat"];

// document.write(arr.join(" "));

//Qusetion 12

// var devices = [];

// devices.push("Keyboard");
// devices.push("Mouse");
// devices.push("Printer");
// devices.push("Monitor");

// document.write("Devices:<br>");
// document.write(devices + "<br><br>");

// document.write("Out:<br>");
// document.write(devices.shift() + "<br>");

// document.write("Out:<br>");
// document.write(devices.shift() + "<br>");

// document.write("Out:<br>");
// document.write(devices.shift() + "<br>");

// document.write("Out:<br>");
// document.write(devices.shift() + "<br>");

//Qusetion 13

// var devices = [];

// devices.push("Keyboard");
// devices.push("Mouse");
// devices.push("Printer");
// devices.push("Monitor");

// document.write("Devices: <br>");
// document.write(devices + "<br><br>");

// document.write("Out: <br>");
// document.write(devices.pop() + "<br>");

// document.write("Out: <br>");
// document.write(devices.pop() + "<br>");

// document.write("Out: <br>");
// document.write(devices.pop() + "<br>");

// document.write("Out: <br>");
// document.write(devices.pop() + "<br>");

//Qusetion 14
// var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<select>");
// document.write("<option>" + phones[0] + "</option>");
// document.write("<option>" + phones[1] + "</option>");
// document.write("<option>" + phones[2] + "</option>");
// document.write("<option>" + phones[3] + "</option>");
// document.write("<option>" + phones[4] + "</option>");
// document.write("<option>" + phones[5] + "</option>");

//Qusetion 15

var colors = ["Red", "Green", "Blue"];

// document.write("Initial Array: " + colors + "<br>");
// a. Add color to beginning

// var beginningcolor = prompt("Enter a color to add at the beginning:")

// colors.unshift(beginningcolor);
// document.write("After adding at beginning: " + colors + "<br><br>");

// b. Add color to end

// var endcolor = prompt("Enter a color to add at the end:");
// colors.push(endcolor);
// document.write("After adding at beginning: " + colors + "<br><br>");

// c. Add two more colors to beginning

// colors.unshift("pink" , "yellow")
// document.write(colors)

// // d. Delete first color
//  colors.shift()
//  document.write(" after deleting star color " + colors)

// var addindex = +prompt("Enter index where you want to add a color:");
// var addcolors = prompt ("Enter the color name");

// colors.splice(addindex , 0 ,addcolors);
// document.write("After adding color at index " + addindex + ": " + colors + "<br>");


// g. Delete color(s) from user-defined index

var deletindex = +prompt("Enter index from where you want to delete color(s):");
var deletcount = prompt("How many colors do you want to delete?")
colors.splice(deletindex , deletcount);
document.write("After deletion: " + colors);