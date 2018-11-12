// # Write a method that prints out every number from 1 to 100. 
# i = 1
# 100.times do
#   p i
#   i += 1
# end

// # Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).
# i = 1
# 50.times do
#   p i
#   i += 2
# end

// # Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.
# def number_of_55(array)
#   count = 0
#   array.each do |element|
#     if element == 55
#       count += 1
#     end
#   end
#   count
# end

# p number_of_55([1,2,3,4,55,55,55])

// # Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
// # For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].
# def awesomesauce_dispenser(strings)
#   i = 1
#   (strings.length - 1).times do
#     strings.insert(i, "awesomesauce")
#     i += 2
#   end
#   strings
# end

# p awesomesauce_dispenser(["a", "b", "c", "d", "e"])

// # Start with the hash: item_amounts = {chair: 5, table: 2}
// # Someone just bought two chairs. Change the hash such that the chair amount is 3.
// # The final result should be: {chair: 3, table: 2}
# item_amounts = {chair: 5, table: 2}
# item_amounts[:chair] = 3
# p item_amounts

// # Start with the hash: item_amounts = {chair: 5, table: 2}
// # You received 7 desks to sell. Change the hash to include desks.
// # The final result should be: {chair: 5, table: 2, desk: 7}
# item_amounts = {chair: 5, table: 2}
# item_amounts[:desk] = 7
# p item_amounts

// # Write a method that accepts a number and returns its factorial.
// # For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
# def factorial(n)
#   (1..n).inject(:*)
# end

# p factorial(5)

// # Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
// # For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].
# def sums(array1,array2)
#   sums = []
#   array1.each do |element1|
#     array2.each do |element2|
#       sums << element1 + element2
#     end
#   end
#   sums
# end

# p sums([1, 5, 10], [100, 500, 1000])

array = (1..10)
p array
array.each do |num|
  p num
end