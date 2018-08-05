// 1. Write a function that reverses a string. Don’t use the “reverse” method! (Note: you can use the .split(“”) method to convert a string into an array of characters).

function reverse(string) {
  var reversedString = "";
  for (i = 0; i < string.length; i++) {
    // console.log(string.length);
    // console.log(string[i]);
    reversedString = string[i] + reversedString;
    console.log(reversedString)
  }
  return reversedString;
}

// console.log(reverse("hello"))  // => "olleh" 

// 2. Write a function that accepts a string and returns the number of times that the letter “a” occurs in it.

function countAs(string) {
  var count = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === 'a') {
      count++;
    }
  }
  return count;
}

// console.log(countAs("aaaaaba"))  // => 6
// console.log(countAs("And again"))  // => 3

// 3. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number to search for within in the array. The function should do a linear search and return the index at which this value is found, or it should return nil if the value is not found. See if there’s a way in which you can optimize this method to keep its number of steps to a minimum! Note: Do not use the “index” method!

function indexSearch(ascendingNumbers, soughtValue) {
  // binary search:
  // var floor = 0;
  // var ceiling = ascendingNumbers.length - 1;
  // if (ascendingNumbers(Math.floor(floor + celining / 2)) === soughtValue) {
  //   return 
  // }
  var i = 0;
  while (ascendingNumbers[i] !== soughtValue && i < ascendingNumbers.length) {
    i++ 
  }
  if (i === ascendingNumbers.length) {
    i = undefined;
  }
  return i
}

// console.log(indexSearch([1,2,3,4,5,6],5)); // => 4
// console.log(indexSearch([1,2,3,4,5,6],7)); // => undefined

// 4. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a new number that is not yet in the array. The function should return a new array with the new number inserted in the proper place. Do not use the “sort” method!

function insertAsc(ascendingNumbers, newValue) {
  var i = 0;
  while (ascendingNumbers[i] < newValue) {
    i++
  }
  ascendingNumbers.splice(i, 0, newValue);
  return ascendingNumbers;
}

// console.log(insertAsc([1,2,3,4,5,6], 4)); // =>
// console.log(insertAsc([1,2,3,4,6], 5)); // =>
// console.log(insertAsc([2,3,4,5], 1)); // =>
// console.log(insertAsc([1,2,3,4], 5)); // undefined < integer returns false, not error

// 5. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number that is contained within the array. The function should return the string “lower” if the value is found in the lower half of the array, and it should return “higher” if the value is found within the greater half of the array. Try to optimize this algorithm so that it takes a minimum number of steps!

function whichHalf(ascendingNumbers, soughtValue) {
  var half = "upper"
  if (ascendingNumbers[Math.floor(ascendingNumbers.length / 2)] > soughtValue) {
    half = "lower";
  }
  return half;
}

// console.log(whichHalf([1,2,3,4,5,6],3)) // => "lower"
// console.log(whichHalf([1,2,3,4,5,6],4)) // => "upper"