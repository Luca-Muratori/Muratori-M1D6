/* EXERCISE 5
   Write a function called onlyLetters which receives a string
    as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs") => returns "I have  dogs"
*/

function onlyLetters(string){
    
    let withNoDigits = string.replace(/[0-9]/g, '');
    
    return withNoDigits
    
}

let splitMeString = onlyLetters("I have 4 dogs")
console.log(splitMeString)