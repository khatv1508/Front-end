function truthCheck(collection, pre) {
    let check = true;
    collection.forEach(element => {
        if (!element[pre]) {
            check = false;
        }
    });
    return check;
  }
  
