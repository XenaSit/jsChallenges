const R = [3, 2, 1, 2]
const L = [1, 4, 5, 3, 5 ]
const array = []

const flip=(d, a)=>{
    // console.log ("the d:", d,"the a:", a)
    if (d === "R") {
        array.push(d.sort())
        return a
    } else if (d !== 0) {
        array.push(d.reverse())
        return a
    } else {
        return "you wrong" 
        // return(d, a)
    }
} 

// console.log(flip(R, array));
// console.log(flip(L, array));
console.log("==========================================");


  function isLeapYear(year) {
    if (year % 400 === 0) {
        return true
    } 
    else if (year % 100 === 0) {
        return false
    } 
    else if (year % 4 === 0) {
        return true
    } 
    else {
      return false
    }
  } 

  console.log(isLeapYear(2020));
  console.log(isLeapYear(2000));
  console.log(isLeapYear(2015));
  console.log(isLeapYear(2100));


  console.log("==========================================");
// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.
console.log("==========================================");



function disemvowel(str) {
    let newStrArray = str.split('')
    return newStrArray.filter((v) => {
        let l = v.toLowerCase()
        if (l !== "a" && l !== "o" && l !== "i" && l !== "u" && l !== "e") {
            return newStrArray
        }
    }).join('');
}
console.log(disemvowel("This website is for losers LOL!"));
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"));
console.log(disemvowel("What are you, a communist?"));

console.log("==========================================");
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
console.log("==========================================");

// function digitalRoot(n) {
//     let count = 0;
//     let str = n.toString().split('');
//     for (let i=0; i<str.length; i++) {
//         str.forEach((value, index) => {
//             count += Number(value)
//         })
//         return count
//     }
// }

function digitalRoot(n) {
    while (n >= 10) {
        let count = 0
        let str = n.toString();
        for (let i=0; i<str.length; i++) {
            count += parseInt(str[i])
        }
        n = count
    }
    return n
}

console.log(digitalRoot(16));
console.log(digitalRoot(4561));
console.log(digitalRoot(300535));


console.log("==========================================")

// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

function whatCentury(year){

    let century = Math.floor(year / 100 + 1)
    let centuryIndex = century.toString().charAt(1)
    // console.log("centuryIndex", centuryIndex);
    if ( centuryIndex == 1 && century !== 11){
        return century+"st"
    } else if (centuryIndex == 2 && century !== 12){
        return century+"nd"
    } else if (centuryIndex == 3 && century !== 13){
        return century+"rd"
    }  else {
        return century+"th"
    }
}

console.log(whatCentury("1999"));
console.log(whatCentury("2011"));
console.log(whatCentury("1124"));
console.log(whatCentury("1111"));
console.log(whatCentury("2222"));
console.log(whatCentury("3333"));

console.log("==========================================")

// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.



function min(arr, toReturn) {
    console.log(arr, toReturn);
    let value = Math.min.apply(Math, arr)
    let index = arr.indexOf(value)

    if (toReturn === value) {
        return value
    } else {
        return  index
    }
  }

console.log("the Function", min([1,2,3,4,5]));

console.log("==========================================")
// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

function repeats(arr){
    let filteredArr = arr.filter((value, i, a) => a.indexOf(value) === a.lastIndexOf(value));
    let sum = filteredArr.reduce((a, b) => a + b);
    return sum;
};




console.log(repeats([4,5,7,5,4,8])) //15
console.log(repeats([9, 10, 19, 13, 19, 13])) //19
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11])) //12
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13])) //22
console.log(repeats([5, 10, 19, 13, 10, 13])) //24

console.log("==========================================")
// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

function rgb(r, g, b) {
    r = Math.min(255, Math.max(0, r));
    g = Math.min(255, Math.max(0, g));
    b = Math.min(255, Math.max(0, b));
    var rgb = (r << 16) | (g << 8) | b
    return rgb.toString(16).padStart(6, 0).toUpperCase()
}

console.log(rgb(0, 0, 0)); // '000000'
console.log(rgb(0, 0, -20)); // '000000'
console.log(rgb(300, 255, 255)); // 'FFFFFF'
console.log(rgb(173, 255,  47)); // 'ADFF2F'




console.log("==========================================")
// You are given a matrix M, of positive and negative integers. It should be sorted in an up and down column way, starting always with the lowest element placed at the top left position finishing with the highest depending on n value: at the bottom right position if the number of columns,n, is odd, or placed at the top right, if n is even.

// M = [[-20, -4, -1], [  1,  4,  7], [  8, 10, 12]]
// M_ = [[-20, 7, 8], [-4, 4, 10], [-1, 1, 12]]

// function upDownColSort(matrix) {
//     matrix.map((v, i) => {
//         let oldArray = []
//             if (i % 2 === 1) {
//                 let oddIndex = v.reverse()
//                 return oldArray.push(oddIndex)
//             } else {
//                 let evenIndex = v.sort((function(a, b){
//                     return a - b
//                 }))
//                 return oldArray.push(evenIndex)
//             }    
//         });
        
//         const newArray = [];
//         matrix[0].map((_, index) => {
//           const columnArray = [];
//           matrix.map(row => columnArray.push(row[index]));
//           newArray.push(columnArray);
//         });
      
//         return newArray;
// }

function upDownColSort(matrix) {
    
    const flatten = matrix.reduce((acc, val) => acc.concat(val), []);
    flatten.sort((a, b) => a - b);
    console.log("flatte:", flatten);

    const numRows = matrix.length;
    console.log("numRows:", numRows);

    const numCols = matrix[0].length;
    console.log("numCols:", numCols);

    const result = Array.from({ length: numRows }, () => Array(numCols).fill(0));
    console.log("result:", result);

    let index = 0;

    for (let i = 0; i < numCols; i++) {
        if (i % 2 === 0) {
            for (let j = 0; j < numRows; j++) {
                result[j][i] = flatten[index++];
            }
        } else {
            for (let j = numRows - 1; j >= 0; j--) {
                result[j][i] = flatten[index++];
            }
        }
    }

    return result;
}


var m1 = [[-20, -4, -1], [1, 4, 7], [8, 10, 12]];
// output: [[-20, 7, 8], [-4, 4, 10], [-1, 1, 12]]
var m2 = [[1,-1,4, 1], [7,-20,12,0], [8,10,-4,-3]];
// output : [[-20, 1, 1, 12], [-4, 0, 4, 10], [-3, -1, 7, 8]]
var m3 = [[1,-1,4, 1], [7,-20,12,0], [8,10,-4,-3], [5,6,6,8]];
// output: [[-20, 4, 5, 12], [-4, 1, 6, 10], [-3, 1, 6, 8], [-1, 0, 7, 8]]



console.log(upDownColSort(m1));
console.log(upDownColSort(m2));
console.log(upDownColSort(m3));


console.log("==========================================")

// Polly is 8 years old. She is eagerly awaiting Christmas as she has a bone to pick with Santa Claus. Last year she asked for a horse, and he brought her a dolls house. Understandably she is livid.

// The days seem to drag and drag so Polly asks her friend to help her keep count of how long it is until Christmas, in days. She will start counting from the first of December.

// Your function should take 1 argument (a Date object) which will be the day of the year it is currently. The function should then work out how many days it is until Christmas.

// Watch out for leap years!

function daysUntilChristmas(days) {
    // console.log(days);
    const currentYear = new Date().getFullYear();
    const currentDate = new Date(currentYear, new Date().getMonth(), new Date().getDate());
    const givenDate = new Date(days[0], days[1] - 1, days[2]);
    const christmasDay = new Date(currentYear, 11, 25);

    if (christmasDay < currentDate) {
        christmasDay.setFullYear(currentYear + 1);
    }

    const differenceInMs = christmasDay.getTime() - givenDate.getTime();
    const onWhichDayOfCristmasSantaWillPayThePiper = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24))

    return onWhichDayOfCristmasSantaWillPayThePiper;
}

    
console.log(daysUntilChristmas(2016,11,8)); //17
// console.log(daysUntilChristmas(1996,11,7)); //18
// console.log(daysUntilChristmas(2015,1,23)); //305
// console.log(daysUntilChristmas(2001,6,11)); //167
// console.log(daysUntilChristmas(2000,11,9)); // 16
// console.log(daysUntilChristmas(1978,2,18)); //282