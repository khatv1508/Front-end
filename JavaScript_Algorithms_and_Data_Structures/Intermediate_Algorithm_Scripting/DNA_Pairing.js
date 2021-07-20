function pairElement(str) {
    // Return each strand as an array of two elements, the original and the pair.
    var arrDNA = [];
  
    // Function to check with strand to pair.
    var search = function(char) {
      switch (char) {
        case "A":
            arrDNA.push(["A", "T"]);
          break;
        case "T":
            arrDNA.push(["T", "A"]);
          break;
        case "C":
            arrDNA.push(["C", "G"]);
          break;
        case "G":
            arrDNA.push(["G", "C"]);
          break;
      }
    };
  
    // Loops through the input and pair.
    for (var i = 0; i < str.length; i++) {
      search(str[i]);
    }
  
    return arrDNA;
  }
  
  pairElement("GCG");

  