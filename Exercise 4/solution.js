var prompt = require('prompt-sync')();

const evenOdd = function(){
    let num = Number(prompt('Please enter a number: '));
    if(num%2 == 0)
        console.log(0)
    else
        console.log(1);
}

evenOdd();