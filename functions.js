const fs = require('fs');
const uuid = require('uuid');
const validator = require('validator');

const generateUniqueID = (firstName, lastName) => {
    const erMessage = 'INVALID. Check your inputs.';
    //if inputs are invalid, send an error message
    if(firstName == '' || typeof firstName !== 'string') console.log(erMessage);
    else if(lastName == '' || typeof lastName !== 'string') console.log(erMessage);
    //else,
    //return a unique id : <1st letter of firstName in lowercase><last name in lowercase><unique alphanumeric string on length 8>
    else{
        const str= uuid.v4().slice(0,8); //generate a unique alphanumeric string of length 8
        return (firstName.charAt(0).toLowerCase() +  lastName.toLowerCase() + str);
    }
}


const addAccount = (array) => {
    const firstName = array[0];
    const lastName = array[1];
    const email = array[2];
    const age = array[3];
    const erMessage = 'INVALID. Check your inputs.';

    //if inputs are invalid, send an error message
    if(typeof array !== 'object' || array.length !== 4) {console.log(erMessage); return false;}
    else if(firstName == '' || typeof firstName !== 'string') {console.log(erMessage); return false;}
    else if(lastName == '' || typeof lastName !== 'string') {console.log(erMessage); return false;}
    else if(email == '' || !(validator.isEmail(email))) {console.log(erMessage); return false;}
    else if(age < 18 || typeof age !== 'number') {console.log(erMessage); return false;}
    //else, save the data into a new line of file called users.txt
    else{
        const id = generateUniqueID(firstName, lastName)
        if(fs.existsSync('./users.txt')){   //if file exists, append
            fs.appendFileSync('users.txt', `\n${firstName},${lastName},${email},${age},${id}`);
        }else{                              //else, write
            fs.writeFileSync('users.txt', `${firstName},${lastName},${email},${age},${id}`);
        }
        return true
    }
}

exports.generateUniqueID = generateUniqueID;
exports.addAccount = addAccount;