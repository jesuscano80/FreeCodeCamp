/*
Sum All Primes
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/
function sumPrimes(num) {
    let count=0;
    let resultado=[];
    for (let j=num;j>0;j--){    
        console.log(j);
         cont=0;
        for (let i=0;i<j;i++){
        
            if(j% i== 0){
            console.log("hola");
            cont++
            }
        }
        console.log(cont);
        if (cont==1){
            console.log(`El numero ${j} es primo`);
        resultado.push(j);
        }
    
    }
    let total=resultado.reduce((a,b)=> a+b);
    
    return total;
  }
  
  sumPrimes(10);

