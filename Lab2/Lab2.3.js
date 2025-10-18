const phoneBook = [ 
    {name : "Andrii" , phone : "+380123456789" },
    {name : "Oleksandr" , phone : "+380213456789"}, 
    {name : "Artem" , phone : "+380312456789"},
    {name : "Denys" , phone : "+380412356789"}
];

function findPhoneByName(name) { 
    for (let i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].name === name) {
            return phoneBook[i].phone;
        }
    }
    return "Name not found";
}
function findNameByPhone(phone) { 
    for (let i = 0; i < phoneBook.length; i++) { 
        if (phoneBook[i].phone === phone) { 
            return phoneBook[i].name; 
        }
    }
    return "phone not found";
}

console.log(findPhoneByName("Andrii")); // +380123456789
console.log(findPhoneByName("Denys")); // +380412356789
console.log(findPhoneByName("Stepan")); // Name not found

console.log(findNameByPhone("+380123456789")); // Andrii
console.log(findNameByPhone("+380412356789")); // Denys
console.log(findNameByPhone("+380987654321")); // Phone not found