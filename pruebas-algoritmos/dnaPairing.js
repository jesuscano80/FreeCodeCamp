/*
DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/
function pairElement(str) {
    let arr=[];
    for (let i=0;i<str.length;i++){
        switch (str[i]){
            case "A": arr.push(["A","T"])
            break;
            case "T": arr.push(["T","A"]);
            break;
            case "G" : arr.push(["G","C"]);
            break;
            case "C" : arr.push(["C","G"]);
            break;
        }
    }
    console.log(arr);
    return arr;
  }
  
  pairElement("GCG");