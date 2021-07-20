 var obj = {
    gift: "pony", 
    pet: "kitten", 
    bed: "sleigh"
};
function checkObj(obj, checkProp) {

    if(obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
      } else {
        return "Not Found";
      }
  }
