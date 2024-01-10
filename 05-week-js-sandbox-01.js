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

// function daysUntilChristmas(year, month, days) {
//     console.log("days", year, month, days); 
//     const currentYear = new Date().getFullYear();
//     console.log("currentYear", currentYear); 

//     const christmasDay = new Date(currentYear, 11, 25);
//     console.log("christmasDay", christmasDay); 

//     const currentDate = new Date(currentYear, new Date().getMonth(), new Date().getDate());
//     console.log("currentDate", currentDate); 

//     const givenDate = new Date(year, month - 1, days);
//     console.log("givenDate", givenDate); 


//     if (christmasDay < currentDate) {
//         christmasDay.setFullYear(currentYear + 1);
//     }

//     const differenceInMs = christmasDay.getTime() - givenDate.getTime();
//     console.log("differenceInMs", differenceInMs);

//     const onWhichDayOfCristmasSantaWillPayThePiper = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24))
//     console.log("onWhichDayOfCristmasSantaWillPayThePiper", onWhichDayOfCristmasSantaWillPayThePiper);

//     return onWhichDayOfCristmasSantaWillPayThePiper;
// }
function daysUntilChristmas(year, month, day) {
    const currentDate = new Date(year, month - 1, day);
    const currentYear = currentDate.getFullYear();
    const christmasDate = new Date(currentYear, 11, 25);

    // If the current date is after Christmas for this year, set Christmas for the next year
    if (currentDate.getTime() > christmasDate.getTime()) {
        christmasDate.setFullYear(currentYear + 1);
    }

    // Calculate the difference in milliseconds between the two dates
    const differenceInMs = christmasDate.getTime() - currentDate.getTime();

    // Convert milliseconds to days
    const daysUntilChristmas = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24) - 30);

    return daysUntilChristmas >= 0 ? daysUntilChristmas : 0;
}
// THIS ONE PASSED IN THE CODEWARS BUT DIDN'T PASS IN MY CODE
// function daysUntilChristmas(date) {
//     const currentDate = new Date(date);
//     const currentYear = currentDate.getFullYear();
//     const christmasDate = new Date(currentYear, 11, 25); // December 25th

//     // If the current date is after Christmas for this year, set Christmas for the next year
//     if (currentDate.getTime() > christmasDate.getTime()) {
//         christmasDate.setFullYear(currentYear + 1);
//     }

//     // Calculate the difference in milliseconds between the two dates
//     const differenceInMs = christmasDate.getTime() - currentDate.getTime();

//     // Convert milliseconds to days
//     const daysUntilChristmas = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));

//     return daysUntilChristmas >= 0 ? daysUntilChristmas : 0;
// }
    
console.log(daysUntilChristmas(2016,11,8)); //17
console.log(daysUntilChristmas(1996,11,7)); //18
console.log(daysUntilChristmas(2015,1,23)); //305
console.log(daysUntilChristmas(2001,6,11)); //167
console.log(daysUntilChristmas(2000,11,9)); // 16
console.log(daysUntilChristmas(1978,2,18)); //282


console.log("==========================================")

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
    // console.log("numbers", numbers);
    const inToArray = numbers.split(' ').map(Number);
    // console.log("inToArray", inToArray);
    const smallestNumber = Math.min(...inToArray);
    const largestNumber = Math.max(...inToArray);
    return [largestNumber, smallestNumber].join(' ')
}

console.log(highAndLow("1 2 3 4 5")); //return "5 1"
console.log(highAndLow("1 2 -3 4 5")); //return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); //return "9 -5"

console.log("==========================================")


// DESCRIPTION:
// You are given an integer N. Your job is to figure out how many substrings inside of N divide evenly with N.
// Rules:
// -If an integer is 0, then it does NOT divide evenly into anything.
// -Even though N can divide evenly with itself, we do not count it towards the end number. For Example:

// N = 23, the answer will be 0.  
// -If there are multiple instances of a number, they all get counted. For example:
// N = 11, the answer will be 2 
// Input:  A non negative integer.
// Output: / The number of times you found an integer that was evenly divisible with N.

// function getCount(n)
// {
//     return n % 1 || n % 2 || n % 3 || n % 4 || n % 5 || n % 6 || n % 7 || n % 8 || n % 9 || n % 10 || n % 11 || n % 12 || n%n || n%0
    
// }
function getCount(n) {
    const str = n.toString(); // Convert the number to a string
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        const subStr = str.slice(i, j); // Get a substring from the number
        const subNum = parseInt(subStr, 10); // Convert substring back to a number
  
        if (subNum !== 0 && n % subNum === 0 && subNum !== n) {
          count++;
        }
      }
    }
  
    return count;
  }

console.log(getCount(877692));

console.log("==========================================")
// Task
// Write the processArray function, which takes an array and a callback function as parameters. 
// The callback function can be, for example, a mathematical function that will be applied on each element of this array. 
// Optionally, also write tests similar to the examples below.
// Examples: 
var myArray1 = [4, 8, 2, 7, 5];
myArray1 = processArray(myArray1,function (a) {return a * 2;});  

var myArray2 = [7, 8, 9, 1, 2];
myArray2 = processArray(myArray2, function (a) {return a + 5;});  

function processArray(arr, callback) {
    // return arr.map(callback);
}
console.log(processArray()); // will be [ 8, 16, 4, 14, 10 ].
console.log(processArray()); // will be [ 12, 13, 14, 6, 7 ].

console.log("==========================================")
// Create a function add(n)/Add(n) which returns a function that always adds n to any number
// Note for Java: the return type and methods have not been provided to make it a bit more challenging.
var addOne = add(1);
addOne(1); // 4

var addThree = add(3);
addThree(3); // 6

function add(n) {
    return function(num) {
        return num + n;
    };
}

function combineAddFunctions(func1, func2) {
    return function(num) {
      return func2(func1(num));
    };
  }
  
  console.log(combineAddFunctions(addOne, addThree)(5))

console.log("==========================================")

// Find the volume of a cone whose radius and height are provided as parameters to the function volume. 
// Use the value of PI provided by your language (for example: Math.PI in JS, math.pi in Python or Math::PI in Ruby) and round down the volume to an Interger.

// If you complete this kata and there are no issues, please remember to give it a ready vote and a difficulty rating. :)

function volume(r,h) {
    return Math.floor(Math.PI*r**2)*(h/3)
    }
console.log(volume(7,3)); //153
console.log(volume(56,30)); //98520
console.log(volume(0, 10)); //0
console.log("==========================================")

// Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.
// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. 
// In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:
// solution(1000); // should return 'M'
// Help:
// Symbol   I  V   X   L   C   D   M
// Value    1  5   10  50  100 500 1,000
// Remember that there can't be more than 3 identical symbols in a row.
// More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals

function solution(number){
    const romanNumerals = {
        M: 1000,  CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1,
      };
    let result = '';

    for (let key in romanNumerals) {
        while (number >= romanNumerals[key]) {
        result += key;
        number -= romanNumerals[key];
        }
    }

    return result;
  }

  console.log(solution(1)); // I
  console.log(solution(11)); // XI
  console.log(solution(22)); // XXII
  console.log(solution(2007)); // MMVII
  console.log(solution(1990)); // MCMXC


console.log("==========================================")

// Implement a function that accepts 3 integer values a, b, c. 
// The function should return true if a triangle can be built with the sides of given length and false in any other case.
// (In this case, all triangles must have surface greater than 0 to be accepted).


function isTriangle(a,b,c){
    if ( a + b <= c || a + c <= b || b + c <= a ){
        return false;
    } else {
        return true
    }
}
console.log(isTriangle(1,2,2)); // true
console.log(isTriangle(4,2,3)); // true
console.log(isTriangle(2,2,2)); // true
console.log(isTriangle(1,2,3)); // false
console.log(isTriangle(-5,1,3)); // false
console.log(isTriangle(0,2,3)); // false
console.log("==========================================")

// Write a function that, given a string of text (possibly with punctuation and line-breaks), 
// returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

// Assumptions:
// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
// Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
// Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
// Matches should be case-insensitive, and the words in the result should be lowercased.
// Ties may be broken arbitrarily.
// If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
// Examples:
// "In a village of La Mancha, the name of which I have no desire to call to
// mind, there lived not long since one of those gentlemen that keep a lance
// in the lance-rack, an old buckler, a lean hack, and a greyhound for
// coursing. An olla of rather more beef than mutton, a salad on most
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// on Sundays, made away with three-quarters of his income."

// --> ["a", "of", "on"]


// "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"

// --> ["e", "ddd", "aa"]


// "  //wont won't won't"

// --> ["won't", "wont"]
// Bonus points (not really, but just for fun):
// Avoid creating an array whose memory footprint is roughly as big as the input text.
// Avoid sorting the entire array of unique words.
var one = "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income."
var two = "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"
var three = "  //wont won't won't"

function topThreeWords(text) {
    // console.log("text:", text);
    let count = {}
    let newArr = text.toLowerCase().match(/\b[a-z']+\b/g) || [];;
    newArr.forEach((v, i) => {count[v] = (count[v] || 0) + 1})
    let sortedWords = Object.keys(count).sort((a, b) => count[b] - count[a]);

    return sortedWords.slice(0, 3);
}

console.log(topThreeWords(one)); // ["a", "of", "on"]
console.log(topThreeWords(two)); // ["e", "ddd", "aa"]
console.log(topThreeWords(three)); // ["won't", "wont"]

console.log("==========================================")

// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? 
// Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:
const set = [
    [0, 0, 1], 
    [0, 1, 2], 
    [2, 1, 0]]
// We want our function to return:
// -1 if the board is not yet finished AND no one has won yet (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

function isSolved(board) {
    for (let i = 0; i < 3; i++) {
        console.log("board:", board[i][0]);
        if (board[i][0] !== 0 && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            return board[i][0];
        } else if (board[i][1] !== 0 && board[i][1] === board[i][2] && board[i][2] === board[i][3]){
            return board[i][1];
        } else {
            return 2
        }
    }

    
    return board
}


console.log(isSolved(set));
console.log("==========================================")