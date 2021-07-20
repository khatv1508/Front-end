function testElse (val) {
    var result = "";
    if (val <= 5) {
        return "5 or Smaller";
    } else {
        return "Bigger than 5";
    }
    return result;
}
testElse(4);