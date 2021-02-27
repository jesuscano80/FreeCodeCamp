/*Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
*/
function translatePigLatin(str) {
    let sentenceSplitted=str.split("");
    
  
    if (/[aeiou]/i.test(sentenceSplitted[0])){
    sentenceSplitted.push("way");
    sentenceSplitted=sentenceSplitted.join("");  
    }
    else{
      let hasta;
      for (let i=0;i<sentenceSplitted.length;i++){
        if (/[aeiou]/i.test(sentenceSplitted[i])){
          hasta=i;
          i=sentenceSplitted.length;
      }
      else{
        if(i==sentenceSplitted.length-1){
         
          sentenceSplitted.push("ay")
          sentenceSplitted=sentenceSplitted.join("");
          console.log(sentenceSplitted);
          return sentenceSplitted;
        }
    }
      }
     let añadido=sentenceSplitted.join("").substring(0,hasta);
      sentenceSplitted.push(añadido);     
      sentenceSplitted.push("ay");
      console.log(sentenceSplitted);
      sentenceSplitted=sentenceSplitted.join("");  
      sentenceSplitted=sentenceSplitted.substring(hasta);
    }
    console.log(sentenceSplitted);
    return sentenceSplitted
    
  }
  
  translatePigLatin("rythm");