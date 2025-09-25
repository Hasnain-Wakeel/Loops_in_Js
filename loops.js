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
//                                                                     // total indexes 4 hain ...
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

let numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
  // console.log(sum)
}
console.log(`The total sum of the elements of the array will be:`, sum);

