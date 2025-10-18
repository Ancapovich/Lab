'use strict';

const fn = () => {
    const obj1 = { name: "Michael" };
    let obj2 = { name: "Max" };

    obj1.name = "Mykhailo"; 
    obj2.name = "Maksym"; 

    return { obj1, obj2 };
}

function createUser(name, city) {
    return { name, city };
}
console.log(createUser('Maksym', 'Rivne'));
module.exports = { fn, createUser };