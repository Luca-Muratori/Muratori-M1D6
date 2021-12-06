

/*EXERCISE C
Create a variable called random and assign to it a random number 
between 0 and 20 (it should be randomly created at each execution).*/

function casualNumber (){
    num=Math.round(Math.random()*20)
        for (i = 1; i < 20; i++) {
            num = Math.round(Math.random()*20);
    return num
        }
}
const random=casualNumber()
console.log(`You're thinking of ${random}`)



