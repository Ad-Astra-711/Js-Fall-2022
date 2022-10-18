let myName = 'Preeya Singh            Homework 4'
console.log(`\n\n${myName}\n\n`)

/**Q1:
 * 
 * const sports = ['Football', 'Soccer', 'Baseball', 'Rugby'];
 * 
 * if BASKETBALL is present but not in index-2, print "BASKETBALL is mentioned in the sports array"
 * if BASKETBALL is present in index-2, print "BASKETBALL is present at index-2"
 * if BASKETBALL is NOT present in the array, replace index-2 value with BASKETBALL and print the value which you replaced value.
 * 
 **/

let sports = ['Football', 'Soccer', 'Baseball', 'Rugby']
let indexBasketball = sports.indexOf('BASKETBALL')
let arrContBasketBall = sports.includes('BASKETBALL')
console.log(arrContBasketBall)

if ((indexBasketball !== -1) && (indexBasketball !== 2)) {
    console.log(`\n\n Basketball is mentioned in the sports array`)
} else if (indexBasketball === 2) {
    console.log('BASKETBALL is present at index 2')
} else 
    console.log(sports.splice(2,1,'BASKETBALL'))

    console.log(sports)



/**
 * Q2:
 * 
 * let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
 * 
 * if Earth is mentioned as first name in the array, print "Earth is mentioned in expected index"
 * otherwise add Earth as first name in the array, then print the entire array.
 * 
 */

let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
let indexEarth = planets.indexOf('Earth')
console.log(`\n\n Index of Earth -> ${indexEarth}`)

    
if (indexEarth == 0) {
    console.log(`\n\nEarth is mentioned in expected index\n\n`);
    } else {(planets.unshift('Earth'));
    console.log(planets);
}


/**
 * 
 * Q3:
 * 
 * create two variables, one is to store studentScore, and another one to store maxScore
 * based on the student percentage, print the grade.
 * 
 * Grade-A : 91-100% 
 * Grade-B : 81-90.99% 
 * Grade-C : 71-80.99%
 * Grade-D : 61-70.99%
 * Grade-E : 51-60.99%
 * Grade-F : less than 51%
 * 
 * if the studentScore is invalid or more than maxScore, print "Invalid student score"
 * if student score and maxScore are valid, then print "Your percentage is XX.yy and your Grade is Z"
 * 
 * studentScore = 100
 * maxScore = 150
 * 
 * (studentScore/maxStore)*100
 * 
 */

let studentScore = 105
let maxScore = 150
let studentPercentage = parseFloat((studentScore/maxScore)*100).toFixed(2)


if ((studentScore > maxScore) || (studentScore < 0)) {
    console.log(`Invalid Student Score`)
} else if 
        ((studentPercentage >= 91 && studentPercentage <= 100)) {
        console.log(`Your pecentage is ${studentPercentage} and your Grade is A`)
} else if
        ((studentPercentage >= 81 && studentPercentage <= 90.99)) {
        console.log(`Your pecentage is ${studentPercentage} and your Grade is B`);
} else if
        ((studentPercentage >= 71 && studentPercentage <= 80.99)) {
        console.log(`Your pecentage is ${studentPercentage} and your Grade is C`);
} else if
        ((studentPercentage >= 61 && studentPercentage <= 70.99)) {
        console.log(`Your pecentage is ${studentPercentage} and your Grade is D`); 
} else if
        ((studentPercentage >= 51 && studentPercentage <= 60.99)) {
        console.log(`Your pecentage is ${studentPercentage} and your Grade is E`);
} else if
        ((studentPercentage < 51)) 
        (console.log(`Your pecentage is ${studentPercentage} and your Grade is F`))
        
    

/**
 * 
 * Q4:
 * 
 * Create a variable and store any value in it.
 * if the myNumber is divisible by 5, print "divisible by 5"
 * if the myNumber is divisible by 3, print "divisible by 3"
 * if the myNumber is divisible by 5 and by 3, print "divisible by 5 and 3"
 * if the myNumber is NOT divisible by 5 and by 3, print the value in myNumber
 *
 * 
 * myNumber = 
 * 
 * 10, 12, 15, 19
 * 
 * 
 */

let myNum = 12
let numDivisBy5 = myNum%5 === 0
let numDivisBy3 = myNum%3 === 0

 if (numDivisBy5) {
        console.log('divisible by 5');
} else if
    (numDivisBy3) {
        console.log('divisible by 3');
} else if (numDivisBy5 && numDivisBy3) {
        console.log('divisibly by 5 and 3');
} else
        (console.log(`${myNum}`))