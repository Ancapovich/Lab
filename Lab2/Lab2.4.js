'use strict';
const average = (a, b) => (a + b) / 2; 
console.log(average(2, 6));

const square = x => x * x; 
console.log(square(5)); 

const cube = x => x ** 3; 
console.log(cube(3)); 

function calculate () { 
    const result = []; 
    for (let i = 0; i <= 9; i++) { 
        const sq = square(i);
        const cb = cube(i); 
        const avg = average(sq, cb);  
        result.push(avg);  
    }
    return result;
}
console.log(calculate()); 

module.exports = { average, square, cube, calculate }; 