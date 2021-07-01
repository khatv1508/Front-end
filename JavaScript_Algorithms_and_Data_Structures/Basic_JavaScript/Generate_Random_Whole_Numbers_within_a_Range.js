function randomRange(myMin, myMax) {
    var result = 1;
    result = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
    return result;
  }