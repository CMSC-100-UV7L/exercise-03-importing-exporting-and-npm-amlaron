const user = require( './functions.js' );

//call fxn user.generateUniqueID
console.log(user.generateUniqueID("Luca", "Kaneshiro"));
console.log(user.generateUniqueID("Shu", "Yamino"));

//call fxn user.addAccount
//returns true
console.log(user.addAccount(["Alan","Turing","aturing@w3c.com", 58]));  
console.log(user.addAccount(["Tim","Berners-Lee","tim@w3c.com", 25]));
console.log(user.addAccount(["Ted","Nelson","ted.n@w3c.com", 43]));

//returns false
console.log(user.addAccount(["Mika","Melatika","mikaaa@gmail.com"]));
console.log(user.addAccount(["","Melatika","mikaaa@gmail.com", 18]));
console.log(user.addAccount([true,"Melatika","mikaaa@gmail.com", 18]));

console.log(user.addAccount(["Mika","","mikaaa@gmail.com", 18]));
console.log(user.addAccount(["Mika",4438,"mikaaa@gmail.com", 18]));
console.log(user.addAccount(["Mika","mikaaa@gmail.com", 18]));

console.log(user.addAccount(["Mika","Melatika","mikaaa@gmail", 18]));
console.log(user.addAccount(["Mika","Melatika","mikaaa.com", 18]));
console.log(user.addAccount(["Mika","Melatika","mikaaa@ .com", 18]));

console.log(user.addAccount(["Mika","Melatika","mikaaa@gmail.com", 17]));
console.log(user.addAccount(["Mika","Melatika","mikaaa@gmail.com", "18"]));
console.log(user.addAccount(["Mika","Melatika","mikaaa@gmail.com", true]));

//returns true
console.log(user.addAccount(["Mika","Melatika","mikaaa@gmail.com", 18]));