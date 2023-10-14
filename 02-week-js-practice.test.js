console.log("=================================")
console.log("CHALLENG NUMER 3")
console.log("=================================")


// describe('makeItCool', () => {
//     it ('check the maksimum equal number', () => {
//         Test.assertEquals(diff(['23-32','32-23','2-6','98-98','100-101']), '23-32');
//         Test.assertEquals(diff(['22-22','56-56']), false);
//         Test.assertEquals(diff(['52542-522','0-1000000']),'0-1000000');
//     })
// })

// const a = ['23-32','32-23','2-6','98-98','100-101']
// const b = ['22-22','56-56']
// const c = ['52542-522','0-1000000']

// const makeItCool = (str) => {
//     // console.log("str:", str);
//     let newArr = []
//     str.map((value, index, array) => {
//         // let newValue = value.spit('-')
//         // console.log("v:", value, "i:",  index, "a:",  array);
//         let newValue = value.split('-')
//         let difference = newValue[0] - newValue[1]
//         // console.log("difference", difference);
//         // console.log("newValue:", newValue);
//         if (difference > Math.max.apply(difference)){
//             // console.log(value);
//             return newArr.push(difference)
//         } else {
//             return false
//         }
//     })
//     return newArr
// }


function makeItCool(str){
    let greatestDiff = 0;
    let diffValues = '';
    str.map(string => {
      const splitString = string.split('-');
      const absoluteDifference = Math.abs(splitString[0] - splitString[1]);
      if (absoluteDifference > greatestDiff) {
        diffValues = splitString.join('-');
        greatestDiff = absoluteDifference;
        }
    })
        if (greatestDiff === 0) {
        return false
        } else {
        return diffValues;
        }
  }


  
// console.log("a:", makeItCool(a));
// console.log("b:", makeItCool(b));
// console.log("c:", makeItCool(c));

// Task: Find the number couple with the greatest difference from a list of number-couples.
// Input: A list of number-couples, where each couple is represented as a string containing two positive integers separated by a hyphen ("-").
// Output: The number couple with the greatest difference, or False if there is no difference among any of the couples or in case of an empty list.
// Additional Information:
// All number couples will be given as strings.
// All numbers in the couples are positive integers.
// If multiple couples have the same greatest difference, return the first one encountered in the input list.
// If there is no difference (both numbers in a couple are equal), return False.



// 💻 Challenges

// 24 Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

describe('keepItComing', () => {
    it ('checks if you are tired or not', () => {
        expect(keepItComing("tired")).toEqual("keep drinking coffee")
        expect(keepItComing()).toEqual("keep working")
    })
})

// Create the function that will make the test pass.
const keepItComing = (mood) => {
    if (mood === "tired"){
        return "keep drinking coffee"
    } else { return "keep working"}
} 
console.log("24a:", keepItComing('tired'));
console.log("24b:", keepItComing('bo bo ga ga'));

// 25 Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
describe('keepCalmAnd', () => {
    it ('checks if you are stressed or not', () => {
        expect(keepCalmAnd("stressed")).toEqual("relax")
        expect(keepCalmAnd()).toEqual("keep going")
    })
})
// Create the function that will make the test pass.
const keepCalmAnd = (mood) => {
    if (mood === "stressed"){
        return "relax"
    } else { return "keep going"}
} 
console.log("25a:", keepCalmAnd('stressed'));
console.log("25b:", keepCalmAnd('bo bo ga ga'));

// 26 Write the test for a function that returns "in budget" if a price is lower than $300.
describe('priceIsRight', (money) => {
    it ('checks if the price is in budget', () => {
        expect(priceIsRight(money < 300)).toEqual("in budget")
        expect(priceIsRight(money)).toEqual("not in budget")
    })
})
// Create the function that will make the test pass.
const priceIsRight = (money) => {
    if (money < 300){
        return "in budget"
    } else { return "not in budget"}
} 
// console.log("26a:", priceIsRight(250));
// console.log("26b:", priceIsRight(350));

// 27 Write the test for a function that takes in two numbers and returns the smaller number.

describe('takeInNum', (num1, num2) => {
    it ('check the smallest number', () => {
        expect(takeInNum(num1 < num2)).toEqual(num1)
        expect(takeInNum(num1 > num2)).toEqual(num2)
    })
})
// Create the function that will make the test pass.
const takeInNum = (num1, num2) => {
    if (num1 < num2){
        return num1
    } else { return num2}
} 

// 28 Write the test for a function that takes in one numbers and returns whether the number is odd.
describe('oddTodd', () => {
    it ('check if the number is odd as Todd', () => {
        expect(oddTodd(3)).toEqual("well, that's odd")
        expect(oddTodd(2)).toEqual("that ain't odd")
    })
})
// Create the function that will make the test pass.
const oddTodd = (num) => {
    if (num % 2 === 1){
        return "well, that's odd"
    } else { return "that ain't odd"}
} 

// 29 Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.

describe('fruitColor', () => {
    it ('returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.', () => {
        expect(fruitColor('banana')).toEqual("yellow")
        expect(fruitColor('apple')).toEqual("red")
        expect(fruitColor('grape')).toEqual("purple")
        expect(fruitColor("uyuy")).toEqual("what?")
    })
})
// Create the function that will make the test pass.
const fruitColor = (value) => {
    if (value === 'banana'){
        return "yellow"
    } else if (value === 'apple') { 
        return "red"
    } else if (value === 'grape') {
        return "purple"
    } else {return "what?"}
} 

// 30 Write the test for a function called rick that returns "Morty".

describe('rickAndMorty', () => {
    it ('called rick that returns "Morty"', () => {
        expect(rickAndMorty('Rick')).toEqual("Morty")
        expect(rickAndMorty('Morty')).toEqual("Rick")
    })
})
// Create the function that will make the test pass.
const rickAndMorty = (value) => {
    if (value === 'Rick'){
        return "Morty"
    } else { return "Rick"}
} 


// 31 Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.


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

