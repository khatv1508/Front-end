function alphabeticalOrder(arr) {
    // Only change code below this line
    return arr.sort(function(a, b) {
        return a === b ? 0 : a < b ? -1 : 1;
        // let c;
        // if(a === b ) {
        //     c = 0;
        // } else if(a < b ) {
        //     c = -1;
        // } else {
        //     c = 1;
        // }
      });
    
    // Only change code above this line
  }
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);