// What is a for loop ??

// A for loop is used when you know how many times you want to repeat a block of code.
// It has three parts inside the parentheses .

// Necessary Things In Loop are :
//       (i)            (c)            (u)
//   initialization ; condition ;     updation

// General Syntax Of For Loop :

// for (icu) {
//     // Code To Run
// }

// ----------------------------------------------------------------------------------------------------

// for(let a = 1 ; a <= 7 ; a++){
//     console.log("Value of a is " + a)         // Here + joins the string "Value of a is " with the variable a.
//                                                         // The result becomes a single string.
//     console.log("Value of a is " , a)        // Comma (separate operator)
//     // console.log(typeof(a))
// }

// ---------------------------------------------------------------------------------------------------

// let students = ["ali", "anas", "saad", "zain"];
// for (i = 0; i < students.length; i++) {
//     console.log(i)
//   console.log(students[i]);
// }

// // console.log(students[i]);             // This returns undefined bcz the value of i is 4 and
//                                                    // the array has only 4 elements.
//   console.log(`Value of i outside the loop is ${i}`)

// --------------------------------------------------------------------------------------------------

// let numbers = [1, 2, 3, 4, 5]

// for (i = 0 ; i < numbers.length ; i++){
//      numbers = numbers + 1             // numbers aik array hai , aur array mein aisay addition nahi kiya jata ....
//      console.log(numbers)
// }

// This code is not Factually correct , bcz if we want to access elements of an array,
// we should write the indexes or access the indexes through square brackets ....

// For Example :

// let numbers = [1, 2, 3, 4, 5];

// for (i = 0; i < numbers.length; i++) {       // Yahan hum "<=" ki jagah sirf "<" use karein gay bcz hamaray pass array mein
// total indexes 4 hain ...
//   numbers[i] = numbers[i] + 1;
//   console.log(numbers[i]);
// }

// --------------------------------------  // Back Flow of Code : ---------------------------------------

//              Jab i = 5 :

// Code try karega numbers[5] access karne ka.
// Lekin numbers[5] exist hi nahi karta (undefined hai).

// Phir ye line chalegi:

// numbers[5] = numbers[5] + 1

// Yaani: undefined + 1
// Result banega: NaN (Not a Number).
// Aur numbers[5] ban jaayega NaN (array mein ek naya element add ho jaayega index 5 par).

// Final output hoga:
// 2
// 3
// 4
// 5
// 6
// NaN

// -----------------------------------------------------------------------------------------------------------

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// let sum = 0;

// for (i = 0; i < numbers.length; i++) {
//   sum = sum + numbers[i];
//   console.log(sum)                       // Ye console alag alag sum kar kay dikhaaye ga .....
// }
// console.log(`The total sum of the elements of the array will be:`, sum);           // Ye console final (total) sum dikhaaye ga ....

// --------------------------------------------------------------------------------

// Running Loop On The Basis Of Inputted String's Length :

// let students = prompt("Enter Your Name :")

// for(i = 0 ; i < students.length ; i++){
//   console.log(students)
// }

// This program takes an input and prints it as many times as the length of that input.

// ----------------------------------------------------------------------------------------------------------------

// Only Printing A Single "OR" Specific Part Of The Result Of A Loop (Code) :
//  "OR"
// Using Conditional Statements Inside For Loop :

// let numbers = [1, 2, 3, 4, 5];

// for (i = 0; i < numbers.length; i++) {
//   if(numbers[i] >= 3){
//     console.log(`Greater Than OR Equal To 3, includes: ${numbers[i]} `)
//   }
//   else{
//     console.log(`Numbers that are less than 3, includes: ${numbers[i]}`)
//   }
// }

// ----------------------------------------------------------------------------------------------------------------------

// Adding All Squares Of Numbers In An Array :

// Final and Efficient Code :

// let numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// let expression = "";

// console.log("   Squares of numbers:");

// for (let i = 0; i < numbers.length; i++) {
//     let square = numbers[i] * numbers[i];
//     console.log(`The Square of "${numbers[i]}" is "${square}"`);

//     // Making Expression, a String :
//     expression = expression + square;

//     // This adds "+" sign just before the last Number :
//     if (i < numbers.length - 1) {
//         expression = expression + " + ";     // 1 + 2 + 3 + 4 + 5
//     }

//     // Updating Value of Sum :
//     sum = sum + square;
// }

// console.log("   Sum of all Squares:");
// console.log(expression + " = " + sum);

// --------------------------------------------------------------------------------------------------------

// let students = ["asad","anas","ali","bilal","saad","saim","zain"]

// for(i = 0 ; i < students.length ; i++){
//    console.log(students[i])
// }

// -------------------------------------------------------------------------------------------------------------

// let cleanCities = ["sialkot","lahore","faislabad","islamabad","rawalpindi","multan",];
// let cityFound = false;
// let city = prompt("Enter a City :");

// for(i = 0; i < cleanCities.length; i++) {
//   if (city.toLowerCase() === cleanCities[i]) {
//     cityFound = true;
//     alert(`Yes! "${city}" is one of the Cleanest Cities`);
//     break;
//   }
// }
// if(city.toLowerCase() !== cleanCities[i]) {
//   cityFound = false;
//   alert(`"${city}" is not included in the Cleanest Cities`);
// }

// -----------------------------------------------------------------------------------------

// let cleanestCities = ["islamabad", "multan", "rawalpindi", "lahore", "faislabad", "sialkot", "murree", "abbotabad"];
// let cityMatch = false;
// let cityToCheck = prompt("Enter a City :");

// for (var i = 0; i < cleanestCities.length; i++){

//   if (cityToCheck.toLowerCase() === cleanestCities[i]) {
//       cityMatch = true;
//       alert("Yes! It's one of the cleanest cities");
//       console.log(`Yes!  It's one of the cleanest cities);
//       break;
//     }
// }
// if (cityToCheck.toLowerCase() !== cleanestCities[i]) {
//   alert("It is not included in the cleanest cities");
//   console.log("It is not included in the cleanest cities");
//   cityMatch = false;
// }

// ------------------------------------------------------------------------

// let cleanestCities = ["islamabad", "multan", "rawalpindi", "lahore", "faislabad", "sialkot", "murree", "abbotabad"];

// var cityToCheck = prompt("Enter a City :");
// var cityMatch = false;  // start with false

// for (var i = 0; i < cleanestCities.length; i++){
//   if (cityToCheck.toLowerCase() === cleanestCities[i]) {
//       cityMatch = true;
//       break; // stop the loop once match found
//   }
// }

// // Advantage of Flag:

// if (cityMatch === true) {
//   alert("Yes! It's one of the cleanest cities");
//   console.log("Yes! It's one of the cleanest cities");
// }
// else {
//   alert("It's not included in the Cleanest Cities");
//   console.log("It's not included in the Cleanest Cities");
// }

// ----------------------------------------------------------------------------------------------

// Predefined Array of Students :
// let students = ["ahmed", "ali", "asad", "bilal", "ibrahim", "saad", "saim", "zain", "kashif"];

// // Taking Input From User :
// let userName = prompt("Enter your name:").trim();

// // Flag for Checking Attendance :
// let flag = false;

// //  Using For Loop for checking the name in the Array :
// for (let i = 0; i < students.length; i++) {
//     if (students[i] === userName.toLowerCase()) {
//         flag = true;  // name found
//         break;        // no need to check further
//     }
// }

// // Final check for Attendance :
// if (flag === true) {
//     console.log(`Your Attendance is Marked, "${userName}"!`);
// }
// else {
//     console.log(`${userName}! Please mark your attendance.`);
// }

// ---------------------------------- For Loop ----------------------------------------------

// Simple Approach (not only works for equal length arrays) :

// let firstName = ["Wakeel", "Hasan", "Ali" , "Saad", "Ahsan"];
// let lastName = ["Anjum", "Khan", "Ahmed", "Sheikh"];
// let fullName = [];

// for (let i = 0; i < firstName.length; i++) {

//   if (lastName[i] !== undefined) {     // This checks that is there a value in Last Name ot Not :
//     fullName.push(firstName[i] + " " + lastName[i]);
//   }
//   else {
//     fullName.push(firstName[i]);   // Pushes only the First Name if there is no last name in the array :
//   }
// }

// console.log(fullName);

// ----------------------------------- Nested For Loop --------------------------------------

// let firstName = ["Wakeel", "Hasan"];
// let lastName = ["Anjum", "Khan"];
// let fullName = [];

// for (let i = 0; i < firstName.length; i++) {
//   for (let j = 0; j < lastName.length; j++) {
//     if (i === j) {
//       fullName.push(`${firstName[i]} ${lastName[j]}`);

//            // console.log(fullName)             // This prints [Wakeel Anjum] separately

//         //  Ye console pehli baar condition true honay per {0 === 0} honay per aik baar {[Wakeel Anjum]} print karay ga ,
//         //  iss liye hum final result dkhnay kay liye sirf last wala console he chalayein gay.

//       // console.log(`${firstName[i]} ${lastName[j]}`);     // Concatenates First Name with every Last Name
//     }
//   }
// }
// console.log(fullName);

// --------------------------------------------------------------------------------------------------

// Again concatenating Full Names by using For Loop (using a trick) :

// let firstName = ["Wakeel", "Hasan", "Ali", "Saad"];
// let lastName = ["Anjum", "Khan", "Khan", "Sheikh"];
// let fullName = [];

// for (let i = 0; i < firstName.length; i++) {
//   for (let j = i; j <= i; j++) {             // { j = i ; j <= i }

//      // sirf matching index par chalega
//     fullName.push(`${firstName[i]} ${lastName[j]}`);
//   }
// }
// console.log(fullName);

// -------------------------------------------------------------------------------------------------------

// Creating Table using For Loops :

// Taking a number as an input from user and printing the table of that number :

// let userInput = prompt("Wo number enter karo kay jis ka aap Table dekhna chahtay ho :").trim();
// userInput = Number(userInput);
// // userInput = +userInput
// // userInput = parseInt(userInput)

// if (isNaN(userInput) || !Number.isInteger(userInput) || userInput <= 0) {
//   // alert("Enter a valid number");
//   console.log("Please enter a valid positive number!");
// } 
// else {
//   for (i = userInput; i <= userInput; i++) {
//     for (j = 1; j <= 10; j++) {
//       console.log(`${i} x ${j} = ${i * j}`);
//     }
//   }
// }

// ------------------

// Same code but it shows Alert only:

// let userInput = prompt("Wo number enter karo kay jis ka aap Table dekhna chahtay ho :").trim();
// userInput = Number(userInput);
// // userInput = +userInput
// // userInput = parseInt(userInput)

// if (isNaN(userInput) || !Number.isInteger(userInput) || userInput <= 0) {
//   alert("Please enter a valid positive number!");
// }
// else {
//   for (i = userInput; i <= userInput; i++) {
//     for (j = 1; j <= 10; j++) {
//       console.log(`${i} x ${j} = ${i * j}`);
//     }
//   }
// }

// --------------------------------------------------------------

// Without Using Nested Loop :

// let number = prompt("Enter the number you want the multiplication table of:");

// // Converting the string into number :
// number = Number(number);
// // number = parseInt(number);
// // number = +number;

// for (let i = 1; i <= 10; i++) {
//     console.log(`${number} x ${i} = ${number * i}`);
// }

// ----------------------------------------------------------------------------------------------------

// "isNaN()" Method checks whether a value is a number or not.

// let userInput = prompt("Enter a number :");
// if (isNaN(userInput)){
//   console.log("Please enter a valid number");
// }
// else {
//   console.log("You have entered a number :");
// }

// ---------------------------------------------------------------

