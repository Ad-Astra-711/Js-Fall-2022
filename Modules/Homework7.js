let myName = 'Preeya Singh            Homework 7'
console.log(`\n\n${myName}\n\n`)

/**
 * Q1. Create a function to generate abbreviation for a sentence
 * 
 * Return the final result
 * 
 * 'you live Only once' -> YLOO
 * 'you Never waLK ALONe every day' -> YNWAED
 * 'good Morning' -> 'GM'
 * 'hello dear, how are you doing?' -> HDHAYD
 */

function myFunc (sentAny) {
let splitsent = sentAny.toUpperCase().split(' ')
let abbr = ' '
    for(let i=0; i < splitsent.length; i++) {
        abbr = abbr += splitsent[i].charAt(0)
    }
    return abbr
}

console.log(myFunc('you live Only once'))
console.log(myFunc('you Never waLK ALONe every day'))
console.log(myFunc('good Morning'))
console.log(myFunc('hello dear, how are you doing?'))


/**
 * Q2. Create a function to reverse a given string (word by word)
 * 
 * 'have a great day' -> day great a have
 * 'good morning' -> morning good
 * 'Learn' -> Learn
 */
/**
 * 1. what is the purpose of the function?
 *      reverse string word by word (reverseWordString , reverseStringByWord)
 * 
 * 2. Do I need any input from user? -> Yes
 *      If Yes,
 *          a) How many inputs I need from user? 1 (string)
 * 
 * 3. Should I return any value back to user at the end of operation/function? -> Yes
 *      If Yes,
 *          what is the datatype of returned value -> string (reversedString)
 */
 function reverseStringByWord (userInput) {
    let resultString = '';

    const arr2 = userInput.split(' ');
    for (let i=arr2.length-1 ; i >= 0 ; i--) { 
        resultString = resultString + arr2[i] + ' ';
    }
    return resultString.trim();
}

console.log(reverseStringByWord('have a great day'));
console.log(reverseStringByWord('good morning'))
console.log(reverseStringByWord('Learn'))


/**
 * Q3. Create a function to convert the string value in to Titlecase
 * 
 * Return the final result
 * 
 * 
 * 'you live Only once' -> You Live Only Once
 * 'you Never waLK ALONe' -> You Never Walk Alone
 * 'have a GrEAT daY' -> 'Have A Great Day'
 */

function titleCase(sentAny) {
    let splitsent = sentAny.toUpperCase().split(' ')
    let titleWords = ' '
    for(let i=0; i < splitsent.length; i++) {
        titleWords = titleWords += splitsent[i].charAt(0) + splitsent[i].toLowerCase().slice(1) + ' '
    }
    return titleWords    
}

console.log(titleCase('you live Only once'))
console.log(titleCase('you Never waLK ALONe'))
console.log(titleCase('have a GrEAT daY'))
