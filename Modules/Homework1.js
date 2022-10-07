myName = 'Preeya Singh            Homework 1'
console.log(myName)


myTitle = 'Temperature Conversions'
console.log(myTitle)



firstConversion = '1. Fahrenheit to Celsius'
console.log(firstConversion)

// F -> C
// T(C°) = (T (F°)) - 32/1.8

let fTemp1 = 60;
let cTemp1 = parseFloat((fTemp1 - 32)/1.8).toFixed(2)
console.log (cTemp1)
console.log(`${fTemp1}°F is equals to ${cTemp1}°C`)




secondConversion = '2. Fahrenheit to Kelvin'
console.log(secondConversion)

// F -> K
// T(K°) = (T(°F) + 459.67) * 5/9

let fTemp2 = 55;
let kTemp1 = parseFloat((fTemp2 + 459.67) * 5/9).toFixed(2)
console.log (kTemp1)
console.log(`${fTemp2}°F is equals to ${kTemp1}°K`)




thirdConversion = '3. Celsius to Fahrenheit'
console.log(thirdConversion)

// C -> F
// T(°F) = (T(°C) * 1.8 + 32)

let cTemp2 = 65;
let fTemp3 = parseFloat(cTemp2 * 1.8 + 32).toFixed(2)
console.log (fTemp3)
console.log(`${cTemp2}°C is equals to ${fTemp3}°F`)




fourthConversion = '4. Celsius to Kelvin'
console.log(fourthConversion)

// C -> K
// T(°K) = T(°C) + 273.15

let cTemp3 = 32
let kTemp2 = parseFloat(cTemp3 + 273.15).toFixed(2)
console.log(kTemp2)
console.log(`${cTemp3}°C is equals to ${kTemp2}°K`)




fifthConversion = '5. Kelvin to Fahrenheit'
console.log(fifthConversion)

// K -> F
// T(°F) = T(°K) * 9/5 - 459.67

let kTemp3 = 200
let fTemp4 = parseFloat(kTemp3 * 9/5 - 459.67).toFixed(2)
console.log(fTemp4)
console.log(`${kTemp3}°K is equals to ${fTemp4}°F`)




sixthConversion = '6. Kelvin to Celsius'
console.log(sixthConversion)

// K -> C
// T(°C) = T(°K) - 273.15

let kTemp4 = 270
let cTemp4 = parseFloat(kTemp4 - 273.15).toFixed(2)
console.log(cTemp4)
console.log(`${kTemp4}°K is equals to ${cTemp4}°C`)