/*
Your classmates asked you to copy some paperwork for them. 
You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. 
If n < 0 or m < 0 return 0.

Example:
n= 5, m=5: 25
n=-5, m=5:  0
*/

function paperwork(n, m) {
  return n < 0 || m < 0 ? 0 : n * m;
}

/*
    Approach:
    1. If n or m is less than 0, return 0.
    2. Otherwise, return n * m.

    Learned: 
    1. Ternary operator: condition ? exprIfTrue : exprIfFalse
        
*/
