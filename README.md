# Exercise 3
### Author:    LARON, AILA MAE M.
### Student Number: 2019-04049
### Section: UV-7L

## App Description
Create a JavaScript file called functions.js that exports the following 2 functions:

1. generateUniqueID()
    - Input parameters: first name (string), last name (string)
    - Create and return a unique id by concatenating the first letter of the first name (converted to lowercase), the last name (converted to lowercase), and a “unique” alphanumeric string of length 8
    - Use the uuid package to get a unique alphanumeric string. Trim as needed. 

    e.g.
    generateUniqueID(“Alan”, “Turing”)
    returns: “aturing5133f34e”

2. addAccount()
    - Input parameter: An array with the following contents: first name (string), last name (string), email (string), age (number)

    e.g addAccount([“Alan”, ”Turing”, “aturing@w3c.com”, 58]);

    - If the following conditions are true
        a. all fields are present
        b. the first name, last name, and email are non-empty strings
        c. the email is in a valid format (use the validator package)
        d. age is at least 18
    - save the data into a new line of file called users.txt in the following format:
        first name,last name,email,age,uniqueID
    - Use the function from Item #1 to generate the uniqueID for the user.
    - If the user was saved, return true. Else, return false


Test your files by calling them in a 2nd file called test.js








