// 1. Callback function 
function receivesAFunction(callback) {
  callback(); 
}

// 2. Named function
function returnsANamedFunction() {
  
  function namedFunction() {
    console.log("This is a named function!");
  }
  return namedFunction; 
}

// 3. Anonymous function
function returnsAnAnonymousFunction() {
  return function() {
    console.log("Anonymous");
  };
}
