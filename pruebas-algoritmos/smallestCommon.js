/*
Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/

function smallestCommons(arr) {
    arr1=[];
    arr2=[];
    for (i=1;i<100;i++){
        arr1.push(arr[0]*i);
        arr2.push(arr[1]*i);
    }
    console.log(arr1);
    console.log(arr2);
    for (let i=0;i<100;i++){
       if( arr2.includes(arr1[i]) ){
              console.log(arr[1]);
            return arr1[i];
        }
    }
    return arr;
  }
  
  
  smallestCommons([1,5]);