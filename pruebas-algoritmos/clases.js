/*Make a Person
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must
*/

var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let splitted= firstAndLast.split(" ");
    let nombre=  splitted[0];
    let apellido= splitted[1];
    this.getFullName = function() {
       console.log(nombre+apellido); 
      return nombre +" "+  apellido;
    };

    this.getFirstName = function(){
        let split=firstAndLast.split(" ");
      return nombre;
    };

    this.getLastName = function(){
        let split=firstAndLast.split(" ");
      return apellido;
    };

    this.setFullName = function(firstAndLast){
        let splitn=firstAndLast.split(" ");
        nombre=splitn[0];
        apellido=splitn[1];
    }

    this.setFirstName= function(first){
        nombre= first;
    }

    this.setLastName= function(last){
        apellido=last;
    }


    



    return firstAndLast;
  };
  
  var bob = new Person('Bob Ross');
  bob.getFullName();
  console.log(Object.keys(bob).length);