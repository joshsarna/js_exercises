// # Write a method that prints out every number from 1 to 100. 
// for (i = 1; i < 101; i++) {
//   console.log(i);
// }

// # Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).
// for (i = 1; i < 101; i += 2) {
//   console.log(i);
// }

// # Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.
// function numberOf55(array) {
//   var count = 0;
//   for (i = 0; i < array.length; i++) {
//     if (array[i] === 55) {
//       count ++;
//     }
//   }
//   return count;
// }

// console.log(numberOf55([1,2,3,4,55,55,55]))

// # Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
// # For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].
// function awesomesauce_dispenser(strings) {
//   var initialLength = strings.length;
//   for (i = 1; i < (2 * initialLength - 1); i += 2) {
//     strings.splice(i, 0, "awesomesauce");
//   }
//   return strings;
// }

// console.log(awesomesauce_dispenser(["a", "b", "c", "d", "e"]))

// # Start with the hash: item_amounts = {chair: 5, table: 2}
// # Someone just bought two chairs. Change the hash such that the chair amount is 3.
// # The final result should be: {chair: 3, table: 2}
// var item_amounts = {chair: 5, table: 2};
// item_amounts['chair'] = 3;
// console.log(item_amounts)

// # Start with the hash: item_amounts = {chair: 5, table: 2}
// # You received 7 desks to sell. Change the hash to include desks.
// # The final result should be: {chair: 5, table: 2, desk: 7}
// var item_amounts = {chair: 5, table: 2};
// item_amounts['desk'] = 7;
// console.log(item_amounts)

// # Write a method that accepts a number and returns its factorial.
// # For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
// function factorial(n) {
//   var product = 1;
//   for (i = 1; i <= n; i++) {
//     product *= i;
//   }
//   return product;
// }

// console.log(factorial(5))

// # Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
// # For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].
// function sums(array1,array2) {
//   var sums = [];
//   array1.forEach (function(element1) {
//     array2.forEach (function(element2) {
//       sums.push(element1 + element2);
//     })
//   })
//   return sums;
// }

// console.log(sums([1, 5, 10], [100, 500, 1000]))

var fruitColors = {apple: "red"};
console.log(fruitColors);
// console.log(fruitColors.length);
var length = Object.keys(fruitColors).length;
console.log(length);