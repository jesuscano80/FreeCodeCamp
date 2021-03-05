/*
Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
let string="";
let val;
str.split("");
for (let i=0;i<str.length;i++){
    console.log(str.charCodeAt(i));
    if (str.charCodeAt(i)==32 || str.charCodeAt(i)==33 || str.charCodeAt(i)==63 || str.charCodeAt(i)==46){
     string+=str[i];
    }
    else{
        if (str.charCodeAt(i)>=77){

        val=str.charCodeAt(i)-13;
        string+=String.fromCharCode(val);
        // console.log(String.fromCharCode(val));
        }
        else {
        val=str.charCodeAt(i)+13;
        string+=String.fromCharCode(val);
        }
}

}
    return string;
}
  
rot13("SERR YBIR?")