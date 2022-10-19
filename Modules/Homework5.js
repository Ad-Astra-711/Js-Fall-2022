let myName = 'Preeya Singh            Homework 5'
console.log(`\n\n${myName}\n\n`)



/**
 * Q1. Find the average of the given numbers-array
 * 
 * [1,2,3,4,5] -> 15/5 -> 3
 * [1, -1, 2, -3, 1] -> 0/5 -> 0
 * [1, 2, 1, 1, 3, 1, 2] -> 11/7 -> 1.xxx
 * 
 **/

let numbers = [23, 12, 43, 10, 5, -10]

let totalNum = 0

for (i = 0; i < numbers.length; i++ ) {
    totalNum = totalNum += numbers[i]
    averageNumbers = totalNum / numbers.length
}
    console.log(`The average of given numbers is -> ${parseFloat(averageNumbers).toFixed(2)}\n\n`)

 
 
/**
  * Q2. Reverse a given string (word by word)
  * 
  * 'have a great day' -> day great a have
  * 'good morning' -> morning good
  * 'Learn' -> Learn
  * 
  * 
  */

/**let str2 = 'have a great day'   // day great a have
 let reverseStr2 = '';
 // code
 console.log(`reverseStr2 -> ${reverseStr2}`);   // day great a have
 **/
 
 let str2 = 'have a great day' 
 
 let arrstr2 = str2.split(' ')
 let reverseStr2 = ''
 
 for (i = arrstr2.length - 1; i >= 0; i--) { 
     reverseStr2 = reverseStr2 += arrstr2[i] + ' '
 }

 console.log(`reverseStr2 -> ${reverseStr2}\n\n`)

 
 
    /**
  * Q3. Create abbreviation for a sentence
  * 
  * 'you live Only once' -> YLOO
  * 'you Never waLK ALONe every day' -> YNWAED
  * 'good Morning' -> 'GM'
  * 'hello dear, how are you doing?' -> HDHAYD
  */

 let str3 = 'good Morning'
 let abbr = ''

 let str3UC_split = str3.toUpperCase().split(' ')
 console.log(`${str3UC_split}\n\n`)
 

 for (let i = 0; i < str3UC_split.length; i++) {
    abbr = abbr += str3UC_split[i].charAt(0)
 }
  console.log(`Abbreviation of str3 -> ${abbr}\n\n`)
 

let abbreviation = str3.toUpperCase().split(" ").map(element => element[0]).join('')
console.log(`Abbreviation in one line -> ${abbreviation}\n\n`)