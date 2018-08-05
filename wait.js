// setTimeout(function() {
//   console.log("First task done!");
// }, 2000);

// setTimeout(function() {
//   console.log("Second task done!");
// }, 4000);

// setTimeout(function() {
//   console.log("Third task done!");
// }, 6000);

for (var i = 10; i >= 0; i--) {
  setTimeout(function() {
    console.log(i);
  }, 2000);
}