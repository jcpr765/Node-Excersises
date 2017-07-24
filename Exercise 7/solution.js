var prompt = require('prompt-sync')();

const ranges = function(){
    let x, y, z;
    do{
    x = Number(prompt('Please enter your first number (x): '));
    y = Number(prompt('Please enter your second number (y): '));
    z = Number(prompt('Please enter your third number (z): '));
    }while((x < y) || (z > x) || (z < y));
    let result = 0;

    if(y < z && z < x){
        result = 0;
    }
    else if(y < x && x < z){
        result = 1;
    }
    else if(z < y && y < x){
        result = -1;
    }
    console.log(result);
}
ranges();