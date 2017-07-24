var prompt = require('prompt-sync')();

const rectangles = function(){
    let width = Number(prompt('Please enter the width of the rectangle: '));
    let length = Number(prompt('Please enter the length of the rectangle: '));

    let area = width*length;
    let perimeter = 2*(length+width);

    console.log('The area of the rectangle is : ' + area);
    console.log('The perimeter of the rectangle is : ' + perimeter);
}

rectangles();