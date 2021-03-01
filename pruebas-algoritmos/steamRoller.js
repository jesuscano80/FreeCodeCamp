/*
Steamroller
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
    let result=[];
    for (let i=0;i<arr.length;i++){
        // console.log(arr[i])
        if(Array.isArray(arr[i])){
            let num=0;
            console.log(`arri es ${arr[i]} y num es ${num} que hace referencia a ${arr[i][num]} es`); 
            while(Array.isArray(arr[i][num])){
                // console.log(arr[i][num]);
               
                num++
            }
            result.push(arr[i][num])
        }

        else{
            result.push(arr[i])
        }
    }
    console.log(result);
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);

