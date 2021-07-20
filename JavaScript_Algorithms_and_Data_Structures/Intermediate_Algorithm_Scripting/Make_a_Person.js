var Person = function(firstAndLast) {
    var fullName = firstAndLast;

    // get va set full name
    this.getFullName = function() {
        return fullName;
    };

    this.setFullName = function(name) {
        fullName = name;
    }

     // get va set first name
    this.getFirstName = function() {
        return fullName.split(" ")[0];
      };

      this.setFirstName = function(name) {
        fullName = name + " " + fullName.split(" ")[1];
    };

     // get va set last name
    this.getLastName = function() {
        return fullName.split(" ")[1];
    };

    this.setLastName = function(name) {
        fullName = fullName.split(" ")[0] + " " + name;
    };
  };
  
  var bob = new Person('Bob Ross');
  bob.getFullName();