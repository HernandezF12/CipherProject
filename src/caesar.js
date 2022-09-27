// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  //create an array alphabet which will have all the alphabets in it
  const arr = {
    a,
    b,
    c,
    d,
    e,
    f,
    g,
    h,
    i,
    j,
    k,
    l,
    m,
    n,
    o,
    p,
    q,
    r,
    s,
    t,
    u,
    v,
    w,
    x,
    y,
    z,
  };

  /*
   If the shift value isn't present, equal to 0, less than -25,
   or greater than 25, the function should return false.
   Spaces should be maintained throughout,
   as should other nonalphabetic symbols.
   Capital letters can be ignored.
   If a letter is shifted so that it goes "off" the alphabet
   (e.g., a shift of 3 on the letter z), it should wrap around to the front
   of the alphabet (e.g., z becomes c).

*/
  function caesar(input, shift, encode = true) {
    // your solution code here
    if ((encode = false)) {
      return input;
    }
    if (!shift | (shift === 0) | (shift < -25) | (shift > 25)) {
      return false;
    }
    // create a loop to loop through the array of letters
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < input.length; i++) {
        //if statement to identify which letter it is
        if (input[j] === arr[i]) {
          //within if statement stating to shift over the letter
          //dont forget about the requirement to return to the beginning of the array if it goes past z.
        }
      }
    }
  }
  //

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
