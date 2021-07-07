function repeatStringNumTimes(str, num) {
    var accumulatedStr = "";
    while( num > 0){
        accumulatedStr += str;
        num--;
    }
    return accumulatedStr;
  }
  
  repeatStringNumTimes("abc", 3);

  // cach khac 
  function repeatStringNumTimes(str, num){
    var a = [];
    while(a.length < num){
        a.push(str);
    }
    return a.join('');
}