function fearNotLetter(str) {
    for (let i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        if (char !== str.charCodeAt(0) + i) {
            /* if current character has escaped one character find previous char and return */
            return String.fromCharCode(char - 1);
          }
        }
        return undefined;
  }
  
  fearNotLetter("abce");