let myName = 'Preeya Singh            Homework 2'
console.log(myName)


const sentence1 = 'Hello Dear, how are you doing?';
let result1 = 0;
/**
 * if the length of sentence1 is greater than or equals to 10
 *      assign 15 in the result1
 * otherwise
 *      assign 10 in the result1
*/

result1 = sentence1.length >= 10 ? 15:10
console.log(result1)
console.log(`\n\nresult1 -> ${result1}`)





const sentence2 = 'Pages That you vIeW in tHIs WinDOw wont apPeAr in the broWSer history AND thEY wont LEaVE other TRACes';
/**
 * replace all instances of a or A with 'Alpha', print the result in console.
 */
let sentence2AfterReplace_ALL_a_A_Alpha = sentence2.replace(/a/ig, 'Alpha');
console.log(`\n\nsentence2AfterReplace_ALL_a_A_Alpha -> ${sentence2AfterReplace_ALL_a_A_Alpha}`)





const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
/**
 * print the result in console:
 * 1. the length of sentence-3
 * 2. does sentence-3 starts with 'HeaLTh' (ignore cases)
 * 3. does sentence-3 contains with 'Body' (ignore cases)
 * 4. index of 'BoDy' in sentence3  (ignore cases)
 * 5. the last-character in sentence-3
 * 6. word 'BoDy' is present only once. (true or false)
 */


let sentence3Length = sentence3.length
console.log(`\n\nsentence3Length -> ${sentence3Length}`)


let sentence3toLC = sentence3.toLowerCase()
let pattern_LowerCase = 'HeaLTh'.toLowerCase()
let sentence3startswith_HeaLTh = sentence3toLC.startsWith(pattern_LowerCase)
console.log(`\n\nsentence3startswith_HeaLTh -> ${sentence3startswith_HeaLTh}`)


let pattern_LowerCaseBody = 'Body'.toLowerCase()
let sentence3includes_Body = sentence3toLC.includes(pattern_LowerCaseBody)
console.log(`\n\nsentence3includes_Body -> ${sentence3includes_Body}`)


let indexof_Bodyinsent3 = sentence3toLC.indexOf(pattern_LowerCaseBody)
console.log(`\n\nindexof_Bodyinsent3 -> ${indexof_Bodyinsent3}`)


let charAt_70 = sentence3.charAt(70)
console.log(`\n\ncharAt_70 -> ${charAt_70}`)


let bodyOccurence = sentence3.includes('BoDy')
console.log(`\n\nbodyOccurence -> ${bodyOccurence}`)

let bodyOccurencetimesMorethanOnce = bodyOccurence > 1 ? "Yes" : "No"
console.log(`bodyOccurencetimesMorethanOnce -> ${bodyOccurencetimesMorethanOnce}`)

