/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells 
and carries the "instructions" for the development 
and functioning of living organisms.

In DNA strings, symbols "A" and "T" are complements of each other, 
as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); 
you need to return the other complementary side. DNA strand is never empty 
or there is no DNA at all (again, except for Haskell).

Example: (input --> output)
"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

function dnaStrand(dna) {
  const complements = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  return dna
    .split("")
    .map((symbol) => complements[symbol])
    .join("");
}

/*
  Approach:
    - Create an object that maps the complements of each DNA symbol
    - Split the DNA string into an array of symbols
    - Loop through the array and replace each symbol with its complement
    - Join the array back into a string
    - Return the string
  */

/*
    What I learned:
    - I learned how to use an object to map the complements of DNA symbols
    - I learned how to use the split method to split a string into an array of symbols
    */