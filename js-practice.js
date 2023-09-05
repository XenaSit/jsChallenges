// 💻 Challenges
console.log("=================================")
console.log("CHALLENG NUMER 1")
console.log("=================================")
// Write the code that will log the output of 34 added to 71.
console.log(34 + 71)
// Write the code that will log the output of 67 subtracted from 123.
console.log(67-123)
// Write the code that will log the output of 56 multiplied by 23.
console.log(56*23)
// Write the code that will log the output of 45 divided by 5.
console.log(45/5)
// Write the code that will log the output of 5 to the power of 7.
console.log(5**7)
// Write the code that will log the whole number remainder of 33 divided by 6.
console.log(33 % 6)
// Write the code that will log the length of a string containing your name.
const myName = "Xena"
console.log(myName.length)
console.log("xena".length)
// Write the code that will log whether your string includes the letter "e"?
console.log(myName.includes("e"))
// Write the code that will log the character at the first index of the string.
console.log(myName[0])
// Write the code that will log the string in all uppercase letters.
console.log(myName.toUpperCase())

// Consider the variables:
const theAnswer2 = 89
const theQuestion = "life, the universe, and everything "
const theAnswer = 42
// Write the code that will log theAnswer divided by 2.
console.log(theAnswer/2)
// Write the code that will log the whole number remainder of theAnswer when divided by 3.
console.log(theAnswer%3)
// Write the code that will log the length of theQuestion.
console.log(theQuestion.length)
// Write the code that will log the length of theQuestion divided by 2.
console.log(theQuestion.length/2)
// Write the code that will log the length of theQuestion added to theAnswer.
console.log(theQuestion.length+theAnswer)
// Write the code that will log the index of the character "f" in the theQuestion.
console.log(theQuestion.indexOf("f"))
// Write the code that will log the index of the second comma in the theQuestion.
console.log(theQuestion.lastIndexOf(","))
// Write the code that will log the concatenation of the two variables.
console.log(theQuestion.concat(theAnswer))


// ##########################################################################
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// console.log(theAnswer2.concat(theQuestion))
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// ##########################################################################


// Write the code that will log the character "l" from theQuestion.
console.log(theQuestion.toUpperCase().charAt("0"))
// Write the code that will extract "the universe" from theQuestion.
console.log(theQuestion.substr(6, 12))
// Write the code that will extract "everything" from theQuestion.
console.log(theQuestion.substr(24, 34))
// Write the code that will log the last character of theQuestion without manually counting the number of characters.
console.log(theQuestion.lastIndexOf(""))


// ================================================================================

// 💻 Challenges
console.log("=================================")
console.log("CHALLENG NUMER 2")
console.log("=================================")
// Write the code that will log true or false for the following:
// Is 34 divided by 3 greater than 67 divided by 2?
console.log(34/3 > 67/2)
// Does 5 evaluate to the same as "5"?
console.log(5 == "5")
// Does 5 strictly equal "5"?
console.log(5 === "5")
// Does !3 strictly equal 3?
console.log(!3 === 3)
// Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
var learnLength = "LEARN"
var studentLength = "Student"
console.log("LEARN".length === 5 && "Student".length === 7)
// Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
console.log("LEARN".length === 5 && "Student".length === 10)
// Does "LEARN" contain the subset "RN"?
console.log("LEARN".includes("RN"))
// Does "LEARN" contain the subset "rn"?
console.log("LEARN".includes("rn"))
// Does "LEARN"[0] strictly equal "l"?
console.log("LEARN"[0] === "l")
// Modify the code from the previous question to return true.
console.log("LEARN"[0] === "L")
// Write a conditional statement for the following prompts. Make sure you try different options and change the variables to ensure properly working code.

// Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var shoes = 1000
if (shoes <= 100) {
    console.log("You alright, go ahead")
} else {
    console.log("oh hell nooo!")
} 
// Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry = "no"
if (hungry === "yes") {
    console.log("Please go take a break")
} else {
    console.log("What are you doing? You got work to do!")
} 
// Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var trafficLightLight = "sdsd"
// var trafficLightLight = "red"
// var trafficLightLight = "green"
// var trafficLightLight = "yellow"
if (trafficLightLight === "green") {
    console.log("GOGOGOGO")
} else if (trafficLightLight === "red") {
    console.log("STOP!")
} else if (trafficLightLight === "yellow") {
    console.log("slow down or speed up, either way")
} else {
    console.log("what is going on?")
}
// Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
var imSaidNumber1 = 1
var imSaidNumber2 = 100
if (imSaidNumber1 == imSaidNumber2) {
    console.log("We are the same, what? you can't see?")
} else if (imSaidNumber1 > imSaidNumber2) {
    console.log(`${imSaidNumber1} is obviously bigger than ${imSaidNumber2}`)
} else if (imSaidNumber1 < imSaidNumber2) {
    console.log(`${imSaidNumber1} is obviously smaller than ${imSaidNumber2}`)
} else {
    console.log("what is going on?")
}


var imSaidNumber3 = 1
var imSaidNumber4 = 100
if (imSaidNumber3 > imSaidNumber4) {
    console.log(`${imSaidNumber3} is obviously bigger`)
} else if (imSaidNumber3 < imSaidNumber4) {
    console.log(`${imSaidNumber4} is obviously bigger`)
} else {
    console.log("Nothing is computing in this world")
}

// Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.

var imSaidNumber5 = 2
if (imSaidNumber5 % 2 === 0) {
    console.log(`${imSaidNumber5} is obviously an Even Stieven`)
} else if (imSaidNumber5 % 2 === 1) {
    console.log(`${imSaidNumber5} is obviously an Odd Todd`)
} else {
    console.log("Nothing is computing in this world")
}

// 🏔 Stretch Goals
// Write a conditional statement for the following prompts.

// Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."
const myGradeIsWhatIsCalledPerfect = "B"
if (myGradeIsWhatIsCalledPerfect === "A") {
    // return "Perfect Score"
    console.log("Perfect Score")
}else if (myGradeIsWhatIsCalledPerfect === "B") {
    // return "Why no B? did you not try? -dad"
    console.log("Why 'B'? did you not try? -dad")
}else {
    // return "is this even possible!"
    console.log("is this even possible!")
}
// Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.
var smoothOperatorN = 4
var smoothOperatorB = true
var smoothOperatorS = "Smoooooth operaaaator"
    console.log(typeof smoothOperatorS)
    console.log(typeof smoothOperatorB)
    console.log(typeof smoothOperatorN)
// Create a password checker using a single conditional statement. 
// If a user inputs a password with 12 or more characters AND the password includes !, then log 
// "That is a mighty strong password!" 
// If the user’s password is 8 or more characters OR includes !, then log 
// "That password is strong enough." 
// Log "That is not a valid password." for every other input.
var theSecretPassWord = "hg!rere"
console.log(theSecretPassWord.length)
if (theSecretPassWord.length >= 12 && theSecretPassWord.includes("!")){
    console.log("That is a mighty strong password!")
}else if (theSecretPassWord.length > 8 || theSecretPassWord.includes("!")){
    console.log("That password is strong enough.")
}else{
    console.log ("That is not a valid password.")
}

// ================================================================================

// 💻 Challenges
console.log("=================================")
console.log("CHALLENG NUMER 3")
console.log("=================================")
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// Consider the variable:

var groceryList = ["chips", "dip", "cookies"]
// Write the code that will add "soda" to the end of the original array.
console.log(groceryList.push("soda"))
console.log(groceryList)
// Write the code that will add "granola" to the end of the array without altering the original array.
console.log(groceryList.pop("soda"))
console.log(groceryList)
console.log(groceryList.concat("granola"))
console.log(groceryList)
// Write the code that will return a subset of the array containing only "chips" and "dip".
console.log(groceryList.slice(0, 2))
console.log(groceryList.pop("cookies"))
console.log(groceryList)
// Write the code that will add "beans" to the "chips" and "dip" array.
console.log(groceryList.push("beans"))
console.log(groceryList)

// Consider the variable:

var numbers = [2, 4, 6, 8, 10]
// Write the code that will add the number 0 to the beginning of the array.
console.log(numbers.unshift(0))
console.log(numbers)
// Write the code that will add the number 12 to the end of the array.
console.log(numbers.push(12))
console.log(numbers)
// Write the code that will remove the first number from the array.
console.log(numbers.shift(0))
console.log(numbers)
// Write the code that will add the number 0 to the beginning of the array without altering the original array. HINT: it's not .unshift You'll have to get creative! ;)
console.log(numbers.splice(0, 0, 0))
console.log(numbers)


// Consider the variable:

var numSet = [2, 13, 6, 8, 4, 2]
// Write the code that finds the index of the first appearance of the number 2.
console.log(numSet.indexOf(2))
// Write the code that finds the index of the last appearance of the number 2.
console.log(numSet.lastIndexOf(2))
// Write the code that returns the number at the third index.
console.log(numSet.slice(3, 4))
// Consider the variable:

var characters = ["y", "a", "r", "r", "a"]
// Write the code that brings all the letters in the characters array together into a string.
console.log(characters.join())
console.log(characters.join(""))
console.log(characters)
// Write the code that reverses the order of the letters in the characters array and saves it into a variable called charsReversed.
var charsReversed = characters.reverse()
console.log(charsReversed)
// Write the code that brings all the letters in the charsReversed array together into a string with an asterisk between each letter.
console.log(charsReversed.join("*"))
// Write the code that brings all the letters in the charsReversed array together into a string without separators.
console.log(charsReversed.join(""))
// Create two arrays consisting of three first names of your cohort members in each array.

var theCoolFox = ["Tori", "Roniel", "Dre", "Josh", "Adrian", "Mal"]
var theChillFox = ["Xena", "Shaun", "Anabella", "Ilene", "Alejandra", "Louis"]
console.log(theCoolFox, theChillFox)
// Write the code that sorts the names in alphabetical order.
console.log(theCoolFox.sort().concat(theChillFox.sort()))
console.log(theCoolFox, theChillFox)
// Write the code that sorts the names in reverse alphabetical order.
console.log(theCoolFox.reverse().concat(theChillFox.reverse()))
console.log(theCoolFox, theChillFox)
// Write the code that sorts all the names in alphabetical order in a single array.
console.log(theCoolFox.concat(theChillFox).sort())
// Consider the variables:

var numbers = [42, 221, 71, 7, 18, 87]
var oddIndexes = []
var oddIndexes1 = []
var oddIndexes2 = []
// console.log(numbers)
// Write the code that logs the values from the numbers array that are at odd indexes.
console.log("============FOR=EACH============================")
numbers.forEach((num) => {
if (num % 2 === 1){
    oddIndexes.push(num);
    }
});
console.log(oddIndexes)

// Write the code that adds the values from odd indexes into the oddIndexes array.
// console.log(numbers)

console.log("============.FILTER=============================")
var oddTodd = numbers.filter((num) => num % 2 === 1);
console.log(oddIndexes1.concat(oddTodd))

console.log("=============.Filter=with=Function==============")
var oddTodd1 =numbers.filter(oddTheTodd);
function oddTheTodd(num){
    return num % 2 === 1
}
console.log(oddTodd1)
// ================================================================================

// 💻 Challenges
console.log("=================================")
console.log("CHALLENG NUMER 4                =")
console.log("=================================")
console.log("=============simple fruit loop==============")
// Create a for loop that logs each number from 1 - 20.
for (let i = 1; i <= 20; i++){
    console.log(i)
}
// Create a for loop that logs every other number from 1 - 20.
console.log("=============log every other #==============")
for (let i = 1; i <= 20; i++){
    if (i % 2 === 1) {
        console.log(i)
    }
}
// Create a for loop that logs the result of each number from 1 - 20 tripled.
console.log("=============log tripled nums==============")
for (let i = 1; i <= 20; i++){
        console.log(i*3)
}
// Create a for loop that logs each even number from 1-20, and in the place of every odd number, returns the word "ODD".
console.log("==========ODD or just a num return========")
for (let i = 1; i <= 20; i++){
    if (i % 2 === 0) {
        console.log(i)
    }else {
        console.log("ODD")
    }
}

// Expected output: ODD, 2, ODD, 4, ODD, 6 ...etc

// Consider this variable:

const nums = [3, 57, -9, 20, 67]

// Create the code that will log the largest number from the array.
// Create the code that will log the smallest number from the array.
// Create the code that will log the remainder of each number when divided by 2.
// Expected output: 1, 1, -1, 0, 1
// Consider this variable:

// const myString = "learn student"
// Create the code that will log the number of times the letter "e" occurs in the string.
// Create the code that will log every other character in the string.
// 🏔 Stretch Goals
// Create the code that iterates from 5 to 15. For each iteration log if the current number is odd or even.
// Expected output: "5 is odd" "6 is even" "7 is odd" ...etc
// Fizz Buzz: Create the code that will iterate from 1-100. If a number is a multiple of 3, replace it with the word fizz. If a number is a multiple of five, replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz.
// Expected output: 1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz" ...etc


// ================================================================================

// 💻 Challenges
// console.log("=================================")
// console.log("CHALLENG NUMER 5")
// console.log("=================================")
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt. Each solution requires pseudocode. Test your functions with multiple function calls.

// Write a function named marco that returns "polo".

// Write a function named greeting that takes a name as an argument and returns "Welcome, <person's name here>!"

// Write a function named oddOrEven that takes a number as an argument and returns whether the number is odd or even.

// Write a function named triple that takes a number as an argument and returns the result of that number multiplied by 3.

// Write a function named multiply that takes two numbers as arguments and returns the result of the numbers multiplied together.

// Write a function named divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// Write a function named assignGrade that takes a number score as an argument and returns the letter grade for the score.

// Write a function named isLonger that takes two strings as arguments and returns the string that contains the most characters.

// Write a function named greaterNum that takes two numbers as arguments and returns whichever number is the greater (higher) number.

// Write a function named yelling that takes a string as an argument and return the string in all uppercase case letters.

// 🏔 Stretch Goals
// The World Translator

// Write a function named helloWorld that takes a language code (e.g. "es", "de", "en") as an argument and returns "Hello World!" in the given language. Ensure you function works for at least 5 languages.
// Have your function default to returning English.
// The Pluralizer

// Write a function named pluralizer that takes a number and a singular noun as arguments and returns the number and pluralized form of the noun, if necessary.
// Enhance your function so it can handle a few collective nouns like "sheep", "goose", "child", "person" and "species".
// pluralizer(5, "cat")
// // output: "5 cats"

// pluralizer(1, "dog")
// // output: "1 dog"

// pluralizer(9, "dog")
// // output: "9 dogs"

// pluralizer(1, "people")
// // output: "1 person"

// pluralizer(3, "people")
// // output: "3 people"

// ================================================================================

// 💻 Challenges
// Create a function that determines if a user is old enough to vote (age 18 or older).
// Create a function that takes in an array of numbers and determines if the number is odd or even.

// ================================================================================



