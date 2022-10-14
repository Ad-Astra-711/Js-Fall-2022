let myName = 'Preeya Singh            Homework 3'
console.log(`\n\n${myName}\n\n`)

/**
 *Q1: Print the length of the country name (without using string.length or length property from string-library)
 *let countryName = 'Japan';
 *countryName.length;  <-- not allowed
 **/

console.log('\n\nQ1: Print the length of the country name(without using string.length or length property from string library.\n\n')
 let countryName = 'Japan'
console.log(`Country Name is -> ${countryName}\n\n`)
countryNameSplit = countryName.split('')
console.log(`Length of Country Name -> ${countryNameSplit.length}\n\n`)

let countrylength = countryName.split('').length
console.log(`Length of the country name 'Japan' equals to -> ${countrylength}\n\n`)


/**
 *Q2: find the number of words in the given sentence.
 * 
 **/

console.log(`\n\nQ2: Find the number of words in the given sentence.`)
const sentence2 = 'HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.';
console.log(`\n\nSentence Two -> ${sentence2}`)
sentence2_split = sentence2.split(" ")
console.log(`\n\nSentence two split -> ${sentence2_split}`)
console.log(`\n\nNumber of Words in Sentence Two -> ${sentence2_split.length}\n\n`)

let number_of_words_in_sentence = sentence2.split(" ").length
console.log(`Number of Words in Sentence Two equals to-> ${number_of_words_in_sentence}\n\n`)


/**
 * Q3: Create abbreviation for a 4-word sentence
 * 
 * 'you live Only once' -> YLOO
 * 'you Never waLK ALONe' -> YNWA
 **/
console.log(`\n\nQ3: Create abbreviation for the below 4-word sentence`)
const sentence3 = 'you Never waLK ALONe';
console.log(`\n\n Sentence Three -> ${sentence3}`)
sentence3toUC = sentence3.toUpperCase()
sentence3_split = sentence3toUC.split(" ")
console.log(`\n\n Sentence Three Split -> ${sentence3_split}`)
sentence3_split_map = sentence3_split.map(element => element[0])
console.log(`\n\n Sentence Three Split Map -> ${sentence3_split_map}`)
let abbr = sentence3_split_map.join('')
console.log(`\n\n Abbreviated Text-> ${abbr}`)

let abbreviation = sentence3.toUpperCase().split(" ").map(element => element[0]).join('')
console.log(`\n\n Abbreviation in one line -> ${abbreviation}\n\n`)




/**Q4: Convert the string value in to Titlecase 
 * const sentence4 = 'have a GrEAT daY';
 * let sentence4_Titlecase = ''
 * */
console.log(`\n\nQ4: Convert the string value to Title Case`)
const sentence4 = 'have a GrEAT daY'
console.log(`\n\nSentence Four -> ${sentence4}`)
sentence4toLC = sentence4.toLowerCase()
console.log(`\n\nSentence 4 to Lower Case -> ${sentence4toLC}`)
sentence4toLC_split = sentence4toLC.split(" ")
console.log(`\n\nSentence Four Split -> ${sentence4toLC_split}`)
sentence4toLC_split_map = sentence4toLC_split.map(word => word.charAt(0).toUpperCase() + word.substr(1))
let titleCase = sentence4toLC_split_map.join(' ')
console.log(`\n\n ${titleCase}`)

let sentence4ToTitleCase = sentence4.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.substr(1)).join(' ')
console.log(`\n\nSentence Four Converted to Title Case is -> ${sentence4ToTitleCase}\n\n`)