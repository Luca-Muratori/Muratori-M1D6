

/* EXERCISE 6
   Write a function called isThisAnEmail which receives a string
 as a parameter and returns true if the string is a valid email address.
*/


function isThisAnEmail(input) {

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.match(validRegex)) {
  
      return("Valid email address!");

    } else {
  
      return("Invalid email address!");

    }
  
  }

  const ValidateEmail =isThisAnEmail('luca.muratori')
  console.log(ValidateEmail)