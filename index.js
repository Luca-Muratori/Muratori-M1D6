/* EXERCISE 7
   Write a function called whatDayIsIt
    that should return the current day of the week.
*/

const whatDayIsIt =function(input){
    const day = new Date(input);
    const day1 =day.getDay();
    
    return  (day1===1) ? console.log(`The ${input} is a Monday`)
        :(day1===2)? console.log(`The ${input} is a Tuesday`)
        :(day1===3)? console.log(`The ${input} is a Wednesday`)
        :(day1===4)? console.log(`The ${input} is a Thursday`)
        :(day1===5)? console.log(`The ${input} is a Friday`)
        :(day1===6)? console.log(`The ${input} is a Saturday`)
        :console.log(`The ${input} is a Sunday`);
    


}

whatDayIsIt('12/05/2021')
whatDayIsIt('12/04/2021')
whatDayIsIt('12/03/2021')
whatDayIsIt('12/02/2021')
whatDayIsIt('12/01/2021')
whatDayIsIt('11/30/2021')
whatDayIsIt('11/29/2021')