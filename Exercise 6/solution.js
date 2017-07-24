var prompt = require('prompt-sync')();

const MedallaBACCalculator = function(){
    const ouncesInAMedalla = 7;
    let weight = Number(prompt('Please enter your weight in lbs: '));
    let medallas = Number(prompt('Please enter the number of Medallas you have consumed: '));
    let hours = Number(prompt('Please enter how many hours have passed since you drank them: '));
    
    let BAC = ((medallas*ouncesInAMedalla)*5.14/weight*0.69) - 0.15*hours;

    console.log('Your BAC is calcualted to be: ' + BAC);
}

MedallaBACCalculator();