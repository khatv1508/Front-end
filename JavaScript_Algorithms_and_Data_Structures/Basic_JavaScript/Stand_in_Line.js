function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    var remove = arr.shift();
    return remove;
    // Only change code above this line
    
  }
  
  // Setup
  var testArr = [4];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 10));
  console.log("After: " + JSON.stringify(testArr));