/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/
function convertToRoman(num) {
let resultado="";
    while (num>=1000){
        
            resultado+="M"
            num-=1000;
        }
    while (num>=900){
        resultado+="CM"
        num-=900;
    }

    while (num>=500){
        resultado+="D";
        num-=500;
    }

    while (num>=400){
        resultado+="CD"
        num-=400;
    }
    
    while(num>=100){
        resultado+="C";
        num-=100;
    }

    while(num>=90){
        resultado+="XC"
        num-=90;
    }
    while(num>=50){
        resultado+="L"
        num-=50;
    }

    while(num>=40){
        resultado+="XL";
        num-=40;
    }

    while (num>=10){
        resultado+="X";
        num-=10;
    }
    while (num>=9){
        resultado+="IX";
        num-=9;
    }
    while (num>=5){
        resultado+="V";
        num-=5;
    }
    while (num>=4){
        resultado+="IV";
        num-=4;
    }
    while(num>=1){
        resultado+="I";
        num-=1;
    }
console.log(num);
console.log(resultado);
num=resultado;
    return num;
   }
   
   convertToRoman(3999);