var prompt = require('prompt-sync')();

const switcharoo = function(){
    let x = Number(prompt('Please enter your first number (x): '));
    let y = Number(prompt('Please enter your second number (y): '));
    
    let result = (x%y==0) ? 'yes':'no';

    console.log('x is divisible by y: ' + result);

    result = (y%x==0) ? 'yes':'no';

    console.log('y is divisible by x: ' + result);
}

switcharoo();