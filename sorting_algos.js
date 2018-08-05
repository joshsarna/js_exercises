// def bubble_sort(array)
//   n = array.length
//   loop do
//     swapped = false

//     (n-1).times do |i|
//       if array[i] > array[i+1]
//         array[i], array[i+1] = array[i+1], array[i]
//         swapped = true
//       end
//     end

//     break if not swapped
//   end

//   array
// end

function bubbleSort(array) {
  for (var i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      var x = array[i];
      array[i] = array[i + 1];
      array[i + 1] = x;
      for (var i2 = i; i2 > 0; i2 -= 1) {
        if (array[i2] < array[i2 - 1]) {
          x = array[i2];
          array[i2] = array[i2 - 1];
          array[i2 - 1] = x;
        }
      }
    }
  }
  return array;
}

console.log(bubbleSort([1,9,2,8,3,7,4,6,5]));