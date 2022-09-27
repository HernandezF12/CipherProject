// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  //add the substitution alphabet given from qualified
  const alphabet = {
    a:x,
    b:o,
    c:y,
    d:q,
    e:m,
    f:c,
    g:g,
    h:r, 
    i:u,
    j:k,
    k:s,
    l:w,
    m:a,
    n:f,
    o:l,
    p:n,
    q:t,
    r:h,
    s:d,
    t:j,
    u:p,
    v:z,
    w:i,
    x:b,
    y:e,
    z:v
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
