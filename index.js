/* EXERCISE 1
    Write a function called dice; it should
     randomize an integer number between 1 and 6.
*/

function dice(){
    num=Math.round(Math.random()*6)
        for (i = 1; i < 6; i++) {
            num = Math.round(Math.random()*6)+1;
        return num
        }
}
const randomDice=dice()
console.log(randomDice)