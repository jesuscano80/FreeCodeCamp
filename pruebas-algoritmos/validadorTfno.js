/*
Telephone Number Validator
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.
*/

function telephoneCheck(str) {
    let string="";
    let contparentesis=0;
    for (let i=0;i<str.length;i++){
        
       if  (str[i]!=" "){
           string+=str[i];
       }
    }
    console.log(string);
    let cont=0;
    let tieneparentesis=false;
    for (let i=0;i<string.length;i++){
    let regex=/[\d+]/;
    if (regex.test(string[i])){
        cont++;
    }
    if (string[i]=="(" || string[i]==")"){
        tieneparentesis=true;
        contparentesis++;
    }
    
}
console.log(contparentesis);
if (contparentesis>2){
    return false;
}

if (tieneparentesis){
    console.log(string[0]);
    console.log(string[4]);
    console.log(string[8]);
    if (string[0]=="(" && string[4]==")" && string[8]=="-"){
        
        console.log("true");
        return true
    }
    else if (string[0]==1 && string[1]=="(" && string[5]==")"){
        console.log("true");
        return true
    }
    else{ 
        console.log("false parentesis")
        return false;
    }
}

    if (cont==10 || (cont==11 && string[0]==1)){
        console.log(cont);
        console.log("true");
        return true;
    }
    else{
        console.log("FALSE");
        console.log(cont);
        return false;
    }

  }

  telephoneCheck("(555)556-6555")
