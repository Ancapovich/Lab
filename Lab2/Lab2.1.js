'use strict';
function range(start, end) {  
   const rangeArr = []; 
   for (let i = start; i <= end; i++) { 
       rangeArr.push(i); 
   }
   return rangeArr; 
}
console.log(range(15, 30));  

function rengeOdd(start, end) { 
   const rangeArr = []; 
   for (let i = start; i <= end; i++) { 
       if (i % 2 !== 0) { 
           rangeArr.push(i); 
       }
   }
   return rangeArr; 
}
console.log(rengeOdd(15, 30)); 