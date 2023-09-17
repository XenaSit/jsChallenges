
const selfInvokingFunc = () => {
    var selfInvokeYourself = "World!"
    return "Hello" + " " + selfInvokeYourself
}
console.log(selfInvokingFunc());
// console.log(selfInvokeYourself());
// //ReferenceError: selfInvokeYourself is not defined
// // #########################################################################
// create a function that will return a leangth of the array with new values inside.
const newArr = [1, 2, 3]

// const withParam = (one, two) => {
//     let one = arr.length
//     let two = arr
// }
// // #########################################################################
// // create an array with a specificly assigned length, and value to pass into the array = 4.
// // create a function that will .push new info to it.
    // const withParam = (one, two) => {
    //     let arrayLength = one.length;
    //     let valueInsert = two[4]
    //     return arrayLength, valueInsert
    // }
    // console.log(withParam(newArr));
    // TypeError: Cannot read properties of undefined (reading '4')
// // ##########################################################################
// // return array being multiplyed by 3
    // const withParam2 = (oneThing, twoThing) => {
    //     return newArr.map(oneThing * 3)
    // }
    // console.log(withParam2(newArr));
    // // TypeError: NaN is not a function
// // ##########################################################################
// // 
    // const withParam3 = (oneThing, twoThing) => {
    //     return newArr.length = newArr[oneThing]
    // }
    // console.log(withParam3(newArr[65]));
    // RangeError: Invalid array length
// // #########################################################################
    // const withParam4 = (oneThing, twoThing) => {
    //     return newArr.length[oneThing]
    // }
    // console.log(withParam4(newArr));
    // undefined
// // #########################################################################
    // const withParam4 = (oneThing, twoThing) => {
    //     const withExtraParam ((longLength) => {
    //         retrun 
    //     })
    // }
    // console.log(withParam4(newArr));
    // // ##########################################################################
// // return array being multiplyed by 3
    // const withParam2 = (oneThing, twoThing) => {
    //     return newArr.map(oneThing * 3)
    // }
    // console.log(withParam2(newArr));
    // // TypeError: NaN is not a function



    // // create a function name withParam6 that will .push new info to an empty array
    // input: an array, 2 params first [.length = [6]] 
    // output: it is an array with a new length and new values passed inside it
    // process: create function and pass 2 params


    // 7 Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.

// const arrayLength = 6
// const arrayValue = 0
// // output: [0, 0, 0, 0, 0, 0]
const arrayLength = 4
const arrayValue = 11
// // output: [11, 11, 11, 11]


// // function name playArray 
// // input: 2 numbers 
// // output: array the length of the first number filled with the second number
// // process: for loop for iteration to create a number of values and push into array
// // create an empty array where we push the values

// function
const playArray = (num1, num2) => {
    let storageArr = []
    for (i = 0; i < num1; i++) {
        storageArr.push(num2)
    }
    return storageArr
}

console.log(playArray(arrayLength, arrayValue));

