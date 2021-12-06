

/* EXERCISE 6
   Write a function called isThisAnEmail which receives a string
 as a parameter and returns true if the string is a valid email address.
*/


const isThisAnEmail= function(input) {

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (input.match(validRegex)) {
  
      console.log(`${input} is a valid email address!"`);

    } else {
  
        console.log(`${input} is an invalid email address!`);

    }
  
  };

  isThisAnEmail('luca.muratoriotmail.it');
  isThisAnEmail('luca.muratori@hotmail.it');
 
  