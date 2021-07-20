function palindrome(str) {
    var regux = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(regux, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  
  
  palindrome("eye");