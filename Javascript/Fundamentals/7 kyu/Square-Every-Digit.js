/*
You are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out,
because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 
because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

Note: The function accepts an integer and returns an integer.
*/

function squareDigits(num) {
  return parseInt(
    num
      .toString()
      .split("")
      .map((n) => n ** 2)
      .join("")
  );
}

/*
  Approach:
    1. Create a function that takes an integer as an argument
    2. Square every digit of the number
    3. Concatenate the squared digits
    4. Return the concatenated squared digits
  
    What I learned:
        - I learned to use the toString() method to convert the number to a string
        - I learned to use the split() method to split the string into an array of characters
        - I learned to use the map() method to square every digit of the number
        - I learned to use the join() method to concatenate the squared digits
        - I learned to use the parseInt() method to convert the concatenated squared digits to an integer
  
        "**": The exponentiation (**) operator raises the first operand to the power of the second operand.
  */
