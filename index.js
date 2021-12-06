/* EXERCISE 4
    Write a function called deleteOne which receives
     a string and a boolean as parameters.
    If the boolean value is true it should return the string
     without the first letter, otherwise it should remove the last one from it.
*/

function deleteOne(str, boolean){
    if(boolean===false){
        strNew=str.slice(0, -1);
    } else if (boolean===true){
        strNew=str.substring(1);
    }
    return strNew
}

const deletedString=deleteOne('Hi my name is Luca', true)

console.log(deletedString)