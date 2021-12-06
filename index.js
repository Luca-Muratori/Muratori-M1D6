/* EXERCISE G
   Write a piece of code for programmatically removing
    the last skill from the skills array inside the me object.
*/

let me={
    name: 'Luca',
    surname:'Muratori',
    age:'27',

    }


    
me.programmingSkill=['HTML', 'CSS', 'using GitHub'] //add an array

delete me.programmingSkill[2]//removing the last item 


console.log(me)