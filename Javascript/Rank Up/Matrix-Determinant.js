/*
Write a function that accepts a square matrix (N x N 2D array) and returns the determinant of the matrix.

How to take the determinant of a matrix -- it is simplest to start with the smallest cases:

A 1x1 matrix |a| has determinant a.

A 2x2 matrix [ [a, b], [c, d] ] or

|a  b|
|c  d|
has determinant: a*d - b*c.

The determinant of an n x n sized matrix is calculated by reducing the problem to the calculation of the determinants of n matrices ofn-1 x n-1 size.

For the 3x3 case, [ [a, b, c], [d, e, f], [g, h, i] ] or

|a b c|  
|d e f|  
|g h i|  
the determinant is: a * det(a_minor) - b * det(b_minor) + c * det(c_minor) where det(a_minor) refers to taking the determinant of the 2x2 matrix created by crossing out the row and column in which the element a occurs:

|- - -|
|- e f|
|- h i|  
Note the alternation of signs.

The determinant of larger matrices are calculated analogously, e.g. if M is a 4x4 matrix with first row [a, b, c, d], then:

det(M) = a * det(a_minor) - b * det(b_minor) + c * det(c_minor) - d * det(d_minor)


*/

function determinant(m) {
  // return the determinant of the matrix passed in
  const n = m.length;
  if (n === 1) {
    return m[0][0];
  } else if (n === 2) {
    return m[0][0] * m[1][1] - m[0][1] * m[1][0];
  } else {
    let det = 0;
    for (let i = 0; i < n; i++) {
      let minor = m
        .slice(1)
        .map((row) => row.filter((value, index) => index !== i));

      det += m[0][i] * determinant(minor) * (i % 2 === 0 ? 1 : -1);
    }
    return det;
  }
}

/*
    Approach:
        1. Check if the matrix is 1x1 or 2x2
        2. If yes, return the determinant of the matrix
        3. Else, iterate through the matrix and calculate the determinant of the matrix
        4. Return the determinant

    What did I learn from this?
        1. Recursion - calling a function from within itself
        2. Matrix operations - determinant of a matrix
        3. Conditional statements - if-else
        4. Looping - for loop
  */
