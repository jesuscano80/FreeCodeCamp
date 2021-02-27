/*Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

*/

function fearNotLetter(str) {
   let abc= "abcdefghijklmnopqrstuvwxyz";
   let firstletter= str[0];
   let letra=undefined;
   let posicion=abc.indexOf(firstletter);
   
   for (let i=0;i<str.length;i++){
   
       if (str[i]!=abc[posicion]){
           letra=abc[posicion];
           return letra;
       }
      posicion++;
   }
   
    return letra;
  }
  
  fearNotLetter("abcdefghjklmno");