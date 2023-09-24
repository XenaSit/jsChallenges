// 💻 Challenges
console.log("=================================")
console.log("CHALLENG NUMER 1")
console.log("=================================")

//1 Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.

const testArr1 = [3, 9, 15, 4, 10]
// // output: [9, 27, 45, 12, 30]

const beFruitfullAndMultiply = (numbersArr) => {
    return numbersArr.map((mutiByThree) => {
        return mutiByThree * 3
    })
}
console.log(beFruitfullAndMultiply(testArr1));


//2 Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// // output: [-7, 3, 5, 13]

const beAsOddAsYouWant = (oddTodd) => {
    return oddTodd.filter((beOdd) => {
        return beOdd % 2 === 1 || beOdd % 2 === -1
    })
}
console.log(beAsOddAsYouWant(testArr2));

//3 Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
const comboArr = [ 7, "n", true, "i", "c", 10, "e", -388, "w", 3, "o", 0, "r", false, "k"]
// // output: "nicework"

const thatIsNiceWork = (arrayType) => {
    return arrayType.filter((wordsIspeak) => {
        return typeof wordsIspeak === 'string' 
        // this does absolutly nothing, it can return arrayType, wordsIspeak showing array with all the string and for some reason i can not manipulate it in this return, it doesnt join the .join('') which is like wtf? Work on it... return to me...
    })
}
let wordsIdontSpeak = thatIsNiceWork(comboArr).join('')
// console.log(thatIsNiceWork(comboArr))
console.log(wordsIdontSpeak);
// console.log(thatIsNiceWork(comboArr).join(''))
// console.log(comboArr);

//4 Create a function that takes in an array of numbers and returns the sum.

const addThese1 = [1, 2, 3, 4]
// // output: 10
const addThese2 = []
// // output: 0

// // THE EVIL WAY
// sum = eval(addThese1.join("+"));
// console.log(sum);


// // HAD TO USE FOR LOOP TO SEE WHAT I AM DOING WRONG, cause i knw i had to itirate through all index values, and i couldnt figure out how to do it with map
// for (let i =0; i < addThese1.length; ++i) {
//     newSumUp += addThese1[i]
// } 
// console.log(newSumUpTry01);

// // Apparently ForEach works better than i though it would. Not .map instead use .forEach 
const sumThatThingUp = (newSumUpArray) => {
    let newSumUpTry = 0;
    newSumUpArray.forEach(value => {
        newSumUpTry += value;
    })
    return newSumUpTry;
}
console.log(sumThatThingUp(addThese1));
console.log(sumThatThingUp(addThese2));


// 5 Create a function that takes in an array of numbers and returns the index of the largest number.
const indexHighestNumber = [1, 4, 2, 3]
// output: 1

const largestOfThemAll = (array) => {
    return Math.max.apply(Math, array);
}
console.log(largestOfThemAll(indexHighestNumber)); //4
console.log(largestOfThemAll(testArr2)); //13


// 🏔 Stretch Goals

//6 Create a function that takes in two arrays and returns one array with no duplicate values.

var arrTask61 = [3, 7, 10, 5, 4, 3, 3]
var arrTask62 = [7, 8, 2, 3, 1, 5, 4]
// output: [3, 7, 10, 5, 4, 8, 2, 1]
const duplicatesIncluded = arrTask61.concat(arrTask62)
// console.log(duplicatesIncluded());
const takeOutTheDuplex = (duplex) => {
    return duplex.filter((value, index) => {
        return duplex.indexOf(value) == index
    })
} 
console.log(takeOutTheDuplex(duplicatesIncluded));



// 7 Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.

const arrayLength1 = 6
const arrayValue1 = 0
// // output: [0, 0, 0, 0, 0, 0]
const arrayLength2 = 4
const arrayValue2 = 11
// // output: [11, 11, 11, 11]


// // function name playArray 
// // input: 2 numbers 
// // output: array the length of the first number filled with the second number
// // process: for loop for iteration to create a number of values and push into array
// // create an empty array where we push the values

// function that Charlean helped me build:
const playArray = (length, value) => {
    let storageArr = []
    for (i = 0; i < length; i++) {
        storageArr.push(value)
        // console.log(storageArr);
    }
    return storageArr
}


// const playArray = (lengthOne, valueTwo) => {
//     console.log(lengthOne, valueTwo);
//         var newArr = [] // storage array
//         return newArr.push(valueTwo)
// }
// OUTPUT:
// 6 0
// this is the array length: 1
// 4 11
// this is the array length: 1

console.log(playArray(arrayLength1, arrayValue1));
console.log(playArray(arrayLength2, arrayValue2));
// // ####### What i was doing with the problem #7##################################
// // making a function that takes in 2 parameters and passes it into a new array
// // lets make a function that takes in 2 parameters
// let arrayValueLeangthBreakMyMind = (mylength, myvalue) => {
//         // return a new array where when it loops through each value in the given array it returns god knows what, nothing, it returns absolutly nothing. Not true . TypeError: Cannot read properties of undefined (reading 'forEach'). Naturally!how would it reach the properties if it doesn't even know wtf i am saying. 
//         // return storageBox.forEach(mylength, myvalue); // no work}
//         // #########################################################
//         // take 2 arrays pass parameters for length and value
//         // naturally, we take an empty array, becuase we need something what we will alter and return
//         // here is the logic:
// var newArr = [] // storage array
// console.log(newArr.length); //0
//         let mylength = arrayLength; // give value of a length
//         let myvalue = arrayValue; // give value to the elements
//         let newArr(arrayLength) // give new array new length
//         let newArr[arrayValue] // give new array new value to each index
//         return newArr // return the array "so fresh and so clean"
// }
// // let newArr.length = arrayLength
// // let arrayLength = newArr.length
// console.log(newArr)
// console.log(arrayValueLeangthBreakMyMind(arrayLength, arrayValue));





// 8 Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
const addUp1 = 4
// 1 + 2 + 3 + 4 = 10
// output: 10
const addUp2 = 10
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// output: 55
const addUp3 = 600
// output: 180300
// ##################used an example of adding each number in the array not one number
// const addUpArrayOfNumberes = (array) => {
//   // console.log("that's new:", numArr, length);
//   let storageArr = 0
//   array.forEach(value => {
//       storageArr += value;
//   }) 
//   return storageArr
// }

const addUpArrayOfNumberes = (length) => {
    // console.log("that's new:", numArr, length);
    let storageArr = []
    let count = 0
    for (let i=0; i<length; i++) {
        storageArr.push(length-i)
        // this gives array with all numbers - one // q is how to add them
        // storageArr.forEach(value => {
            // storageArr +=  (i+1)
        // })
        count += storageArr[i]
    }
    return count
    // console.log(storageArr);
}


// const addUpArrayOfNumberes = (newArr) => {
//     let storageArr = 0;
//     newArr.forEach(value => {
//         storageArr += value;
//     })
//     return storageArr;
// }

console.log(addUpArrayOfNumberes(addUp1));
console.log(addUpArrayOfNumberes(addUp2));
console.log(addUpArrayOfNumberes(addUp3));
// 🏔 Epic Goals

// 9 Create a function called highLow that takes in a number and returns whether the number is higher or lower than the "answer".


// 10 Create an HTML page and link your JavaScript file. More info here.



// 11 As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive).

// 11 As a user, I can see if my guess is too high or too low.

// 11 As a user, if I guess the "answer" correctly I am notified that I won.

// 11 As a user, I can continue to guess the "answer" until I am correct.

// 12 STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message.

console.log("=================================")
console.log("CHALLENG NUMER 2")
console.log("=================================")

// 💻 Challenges

// 13 Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.
const arr1 = [3, 9, 15, 4, 10]
// output: [30, 90, 150, 40, 100]

const mutipleByTen = (arr) => {
    return arr.map((value) => {
        return value * 100
    })
}
console.log("13:", mutipleByTen(arr1));

// 14 Create a function that takes in an array of numbers and returns an array with all numbers divided by two.
const arr2 = [3, 9, 15, 4, 10]
// output: [1.5, 4.5, 7.5, 2, 5]

const devideByTwo = (arr) => {
    return arr.map((value) => {
        return value / 2
    })
}
console.log("14:", devideByTwo(arr2));

// 15 Create a function that takes in an array of numbers and returns an array with only odd numbers.
const arr3 = [2, 7, 3, 5, 8, 10, 13, -9]
// // output: [7, 3, 5, 13, -9]

const beOddAsTodd = (arr) => {
    return arr.filter((value) => {
        // storageCase = []
        // return value % 2 === 1
        if (value % 2 === 1 || value % 2 === -1) {
            return value
        }
        //  else { return value.reduce }
        // return arr
    })
}
console.log("15:", beOddAsTodd(arr3));

// 16 Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.

const pumbaa = "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"
// output: ["a", "wonderful", "ain't", "passing", "craze"]

const hakunaNotMatata = (string) => {
    // return string.length // 74 
    let pumbaaRocks =  string.split(' ') //12
    return pumbaaRocks.filter((value, i) => {
        // console.log("total:", value, i);
        if (value.length % 2 === 1) {
            return i
        }
    })

}
// console.log(pumbaa.split(' ').length);

console.log("16:", hakunaNotMatata(pumbaa));




// 17 Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArrArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // output: "nicework"

const typeOfNiceWork = (array) => {
    return array.filter((value, index) => {
        if (typeof value === 'string') {
            return array.join('')
        }
        // return array
    })
}

console.log("17:", typeOfNiceWork(comboArrArr));
// console.log(comboArrArr.join(''));
// const thatIsNiceWork1 = (arrayType) => {
//     return arrayType.filter((wordsIspeak) => {
//         return typeof wordsIspeak === 'string'
//     })
// }
// let wordsIdontSpeak1 = thatIsNiceWork1(comboArr).join('')
// console.log(wordsIdontSpeak1)

// 18 Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
// const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // output: [58, "abcd", true]

// 19 Create a function that takes in an array of strings and returns an array of strings with every other letter capitalized.
// const makesWackyWords = ["simba", "nala", "zazu", "rafiki"]
// // output: ["sImBa", "nAlA", "zAzU", "rAfIkI"]

// 20 Create a function that takes in a string and returns a new string with all the vowels removed.
// const str = "javascript is awesome"
// // output: "jvscrpt s wsm"

// 21 Create a function that takes in a string containing numbers and returns an array with each number at its own index and converted to the data type of number.
// const stringOfNumbers = "4574328"
// // output: [4, 5, 7, 4, 3, 2, 8]

// 🏔 Stretch Goals

// 22 Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3]
// const arr2 = [7, 8, 2, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]

// 23 Create a function that takes in an array of mixed data types and returns the first value that is a string. HINT: look into the JavaScript .find() method.
// const allTheData = [7, null, true, 2, "yo!", false, 4, "hello!"]
// // output: "yo!"

console.log("=================================")
console.log("CHALLENG NUMER 3")
console.log("=================================")

// 💻 Challenges

// 24 Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Create the function that will make the test pass.

// 25 Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Create the function that will make the test pass.

// 26 Write the test for a function that returns "in budget" if a price is lower than $300.
// Create the function that will make the test pass.

// 27 Write the test for a function that takes in two numbers and returns the smaller number.
// Create the function that will make the test pass.

// 28 Write the test for a function that takes in one numbers and returns whether the number is odd.
// Create the function that will make the test pass.

// 29 Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Create the function that will make the test pass.

// 30 Write the test for a function called rick that returns "Morty".
// Create the function that will make the test pass.

// 31 Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Create the function that will make the test pass.

// 32 Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Create the function that will make the test pass.

// 33 Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Create the function that will make the test pass.

// 34 Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Create the function that will make the test pass.

// 35 Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Create the function that will make the test pass.

// 36 Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
// Create the function that will make the test pass.


console.log("=================================")
console.log("CHALLENG NUMER 4")
console.log("=================================")

// 💻 Challenges
// Consider this variable:

// const person = {
//   firstName: "Arthur",
//   lastName: "Dent"
// }

// 37 Write the code that accesses the first name of the person object.

// 38 Write the code that accesses the last name of the person object.

// 39 Write the code that gives the person object a property of homePlanet and set it to 'Earth'.

// 40 Update the person object with a method that logs "Arthur Dent is from planet Earth".

// Consider this variable:

// const product = {
//   name: "chair",
//   price: 24.99
// }

// 41 Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".

// 42 Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.

// Consider this variable:

// const lunch = {
//   name: "PB and Banana",
//   type: "sandwich",
//   ingredients: ["bread", "peanut butter", "banana"]
// }

// 43 Write the code that accesses the ingredients property.

// 44 Write the code that access the third ingredient of the lunch object.

// 45 Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

// 46 Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

// Consider this variable:

// const animals = [
//   { name: "Waffles", type: "dog", age: 7 },
//   { name: "Fluffy", type: "cat", age: 14 },
//   { name: "Spelunky", type: "dog", age: 4 },
//   { name: "Hank", type: "cat", age: 11 }
// ]

// 47 Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.

// 48 Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.

// 49 Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.

// 50 Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.

// Consider this variable:

// const author = {
//   name: "H. G. Wells",
//   genre: "science fiction"
// }

// 51 Write the code that destructures the author object so that the following code snippet will run successfully:

// console.log(`${name} is a ${genre} author`)
// // output: "H. G. Wells is a science fiction author"

// Consider this variable:

// const pokeOne = {
//   species: "Charmandar",
//   pokemon_type: "Fire"
// }

// const pokeTwo = {
//   species: "Magikarp",
//   pokemon_type: "Water"
// }

// 52 Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:

// console.log(describePokemon(pokeOne))
// // output: "Charmandar is a Fire pokemon"

// console.log(describePokemon(pokeTwo))
// // output: "Magikarp is a Water pokemon"

// Consider this variable:

// const triangleDimensions = {
//   base: 2,
//   height: 5
// }

// 53 Modify the triangleDimensions object to have a method that returns the area of the triangle.

// 54 Write the code that will update the base to be the value of 6.

// 🏔 Stretch Goals
// Consider this variable:

// const learn = {
//   cohorts: {
//     2022: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel"],
//     2023: ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliet"]
//   }
// }

// 55 Write the code that logs the name of your cohort.

// 55 Write the code that uses destructuring to log the name of your cohort.

// 56 Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.

// // output: ["2022 Alpha", "2022 Bravo", "2022 Charlie", "2022 Delta", "2022 Echo", "2022 Foxtrot", "2022 Golf", "2022 Hotel", "2023 Alpha", "2023 Bravo", "2023 Charlie", "2023 Delta", "2023 Echo", "2023 Foxtrot", "2023 Golf", "2023 Hotel", "2023 India", "2023 Juliet"]


console.log("=================================")
console.log("CHALLENG NUMER 5")
console.log("=================================")

// 💻 Challenges

// 57 Coffee Maker: copy the given Coffee class into a text editor
// 58 Write the code that makes a black coffee object
// 59 Write the code that outputs the black coffee's profile
// 60 Write the code that makes a coffee object with 1 cream and 2 sugars
// 61 Write the code that outputs the 1 cream and 2 sugars coffee profile

// class Coffee {
//   constructor(type, cream, sugar) {
//     this.type = type.toLowerCase()
//     this.cream = cream
//     this.sugar = sugar
//   }

//   coffeeProfile() {
//     return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
//   }

//   creams() {
//     if (this.cream > 1) {
//       return `${this.cream} creams`
//     } else {
//       return `${this.cream} cream`
//     }
//   }

//   sugars() {
//     if (this.sugar > 1) {
//       return `${this.sugar} sugars`
//     } else {
//       return `${this.sugar} sugar`
//     }
//   }
// }

// 62 Latte Maker: create a class for Latte
// 63 Write a Latte class that takes a flavor, a milk type, and a number of shots
// 64 Write a method for your Latte class that outputs the latte's profile
// 65 Write the code that makes a regular, single shot latte
// 66 Log the regular, single shot latte's profile
// 67 Write the code that makes a double shot, hazelnut latte with almond milk.
// 68 Log the double shot, hazelnut latte with almond milk's profile.
// 69 Volume of a Cylinder: create a class for Cylinder
// 70 Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)
// 71 Write the code that rounds the volume of the cylinder to four decimal places
// 72 Write the code that creates three unique cylinder objects


console.log("=================================")
console.log("CHALLENG NUMER 6")
console.log("=================================")

// 💻 Challenges

// Consider this function:

// const combineArrays = (arrOne, arrTwo) => {
//   return arrOne.concat(arrTwo)
// }

// console.log(combineArrays([2, 4, 2], [4, 6, 11]))

// 73 Refactor this function to use the spread operator to combine the arrays.

// Consider this function:

// const combineAndFilterOdd = (arrOne, arrTwo, arrThree) => {
//   return arrOne
//     .concat(arrTwo)
//     .concat(arrThree)
//     .filter((num) => num % 2 !== 0)
// }

// console.log(combineAndFilterOdd([3, 2, 5], [5, 8, 7], [4, 5, 6]))

// 74 Refactor this function to use the spread operator to combine the array arguments.

// 🏔 Stretch Goals

// 75 Recall the combineAndFilterOdd() function from the previous exercise. Refactor the function to take any number of arguments.