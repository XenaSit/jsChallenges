// const R = [3, 2, 1, 2]
// const L = [1, 4, 5, 3, 5 ]
// const array = []

// const flip=(d, a)=>{
//     // console.log ("the d:", d,"the a:", a)
//     if (d === "R") {
//         array.push(d.sort())
//         return a
//     } else if (d !== 0) {
//         array.push(d.reverse())
//         return a
//     } else {
//         return "you wrong" 
//         // return(d, a)
//     }
// } 

// // console.log(flip(R, array));
// // console.log(flip(L, array));
// console.log("==========================================");


//   function isLeapYear(year) {
//     if (year % 400 === 0) {
//         return true
//     } 
//     else if (year % 100 === 0) {
//         return false
//     } 
//     else if (year % 4 === 0) {
//         return true
//     } 
//     else {
//       return false
//     }
//   } 

//   console.log(isLeapYear(2020));
//   console.log(isLeapYear(2000));
//   console.log(isLeapYear(2015));
//   console.log(isLeapYear(2100));


//   console.log("==========================================");
// // Trolls are attacking your comment section!
// // A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// // Your task is to write a function that takes a string and return a new string with all vowels removed.
// // For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// // Note: for this kata y isn't considered a vowel.
// console.log("==========================================");



// function disemvowel(str) {
//     let newStrArray = str.split('')
//     return newStrArray.filter((v) => {
//         let l = v.toLowerCase()
//         if (l !== "a" && l !== "o" && l !== "i" && l !== "u" && l !== "e") {
//             return newStrArray
//         }
//     }).join('');
// }
// console.log(disemvowel("This website is for losers LOL!"));
// console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"));
// console.log(disemvowel("What are you, a communist?"));

// console.log("==========================================");
// // Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
// console.log("==========================================");

// // function digitalRoot(n) {
// //     let count = 0;
// //     let str = n.toString().split('');
// //     for (let i=0; i<str.length; i++) {
// //         str.forEach((value, index) => {
// //             count += Number(value)
// //         })
// //         return count
// //     }
// // }

// function digitalRoot(n) {
//     while (n >= 10) {
//         let count = 0
//         let str = n.toString();
//         for (let i=0; i<str.length; i++) {
//             count += parseInt(str[i])
//         }
//         n = count
//     }
//     return n
// }

// console.log(digitalRoot(16));
// console.log(digitalRoot(4561));
// console.log(digitalRoot(300535));


// console.log("==========================================")

// // Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// function whatCentury(year){

//     let century = Math.floor(year / 100 + 1)
//     let centuryIndex = century.toString().charAt(1)
//     // console.log("centuryIndex", centuryIndex);
//     if ( centuryIndex == 1 && century !== 11){
//         return century+"st"
//     } else if (centuryIndex == 2 && century !== 12){
//         return century+"nd"
//     } else if (centuryIndex == 3 && century !== 13){
//         return century+"rd"
//     }  else {
//         return century+"th"
//     }
// }

// console.log(whatCentury("1999"));
// console.log(whatCentury("2011"));
// console.log(whatCentury("1124"));
// console.log(whatCentury("1111"));
// console.log(whatCentury("2222"));
// console.log(whatCentury("3333"));

// console.log("==========================================")

// // Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// // Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.



// function min(arr, toReturn) {
//     console.log(arr, toReturn);
//     let value = Math.min.apply(Math, arr)
//     let index = arr.indexOf(value)

//     if (toReturn === value) {
//         return value
//     } else {
//         return  index
//     }
//   }

// console.log("the Function", min([1,2,3,4,5]));

// console.log("==========================================")
// // In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// // For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// function repeats(arr){
//     let filteredArr = arr.filter((value, i, a) => a.indexOf(value) === a.lastIndexOf(value));
//     let sum = filteredArr.reduce((a, b) => a + b);
//     return sum;
// };




// console.log(repeats([4,5,7,5,4,8])) //15
// console.log(repeats([9, 10, 19, 13, 19, 13])) //19
// console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11])) //12
// console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13])) //22
// console.log(repeats([5, 10, 19, 13, 10, 13])) //24

// console.log("==========================================")
// // The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
// // Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// function rgb(r, g, b) {
//     r = Math.min(255, Math.max(0, r));
//     g = Math.min(255, Math.max(0, g));
//     b = Math.min(255, Math.max(0, b));
//     var rgb = (r << 16) | (g << 8) | b
//     return rgb.toString(16).padStart(6, 0).toUpperCase()
// }

// console.log(rgb(0, 0, 0)); // '000000'
// console.log(rgb(0, 0, -20)); // '000000'
// console.log(rgb(300, 255, 255)); // 'FFFFFF'
// console.log(rgb(173, 255,  47)); // 'ADFF2F'




// console.log("==========================================")
// // You are given a matrix M, of positive and negative integers. It should be sorted in an up and down column way, starting always with the lowest element placed at the top left position finishing with the highest depending on n value: at the bottom right position if the number of columns,n, is odd, or placed at the top right, if n is even.

// // M = [[-20, -4, -1], [  1,  4,  7], [  8, 10, 12]]
// // M_ = [[-20, 7, 8], [-4, 4, 10], [-1, 1, 12]]

// // function upDownColSort(matrix) {
// //     matrix.map((v, i) => {
// //         let oldArray = []
// //             if (i % 2 === 1) {
// //                 let oddIndex = v.reverse()
// //                 return oldArray.push(oddIndex)
// //             } else {
// //                 let evenIndex = v.sort((function(a, b){
// //                     return a - b
// //                 }))
// //                 return oldArray.push(evenIndex)
// //             }    
// //         });
        
// //         const newArray = [];
// //         matrix[0].map((_, index) => {
// //           const columnArray = [];
// //           matrix.map(row => columnArray.push(row[index]));
// //           newArray.push(columnArray);
// //         });
      
// //         return newArray;
// // }

// function upDownColSort(matrix) {
    
//     const flatten = matrix.reduce((acc, val) => acc.concat(val), []);
//     flatten.sort((a, b) => a - b);
//     console.log("flatte:", flatten);

//     const numRows = matrix.length;
//     console.log("numRows:", numRows);

//     const numCols = matrix[0].length;
//     console.log("numCols:", numCols);

//     const result = Array.from({ length: numRows }, () => Array(numCols).fill(0));
//     console.log("result:", result);

//     let index = 0;

//     for (let i = 0; i < numCols; i++) {
//         if (i % 2 === 0) {
//             for (let j = 0; j < numRows; j++) {
//                 result[j][i] = flatten[index++];
//             }
//         } else {
//             for (let j = numRows - 1; j >= 0; j--) {
//                 result[j][i] = flatten[index++];
//             }
//         }
//     }

//     return result;
// }


// var m1 = [[-20, -4, -1], [1, 4, 7], [8, 10, 12]];
// // output: [[-20, 7, 8], [-4, 4, 10], [-1, 1, 12]]
// var m2 = [[1,-1,4, 1], [7,-20,12,0], [8,10,-4,-3]];
// // output : [[-20, 1, 1, 12], [-4, 0, 4, 10], [-3, -1, 7, 8]]
// var m3 = [[1,-1,4, 1], [7,-20,12,0], [8,10,-4,-3], [5,6,6,8]];
// // output: [[-20, 4, 5, 12], [-4, 1, 6, 10], [-3, 1, 6, 8], [-1, 0, 7, 8]]



// console.log(upDownColSort(m1));
// console.log(upDownColSort(m2));
// console.log(upDownColSort(m3));


// console.log("==========================================")

// // Polly is 8 years old. She is eagerly awaiting Christmas as she has a bone to pick with Santa Claus. Last year she asked for a horse, and he brought her a dolls house. Understandably she is livid.

// // The days seem to drag and drag so Polly asks her friend to help her keep count of how long it is until Christmas, in days. She will start counting from the first of December.

// // Your function should take 1 argument (a Date object) which will be the day of the year it is currently. The function should then work out how many days it is until Christmas.
// // Watch out for leap years!

// // function daysUntilChristmas(year, month, days) {
// //     console.log("days", year, month, days); 
// //     const currentYear = new Date().getFullYear();
// //     console.log("currentYear", currentYear); 

// //     const christmasDay = new Date(currentYear, 11, 25);
// //     console.log("christmasDay", christmasDay); 

// //     const currentDate = new Date(currentYear, new Date().getMonth(), new Date().getDate());
// //     console.log("currentDate", currentDate); 

// //     const givenDate = new Date(year, month - 1, days);
// //     console.log("givenDate", givenDate); 


// //     if (christmasDay < currentDate) {
// //         christmasDay.setFullYear(currentYear + 1);
// //     }

// //     const differenceInMs = christmasDay.getTime() - givenDate.getTime();
// //     console.log("differenceInMs", differenceInMs);

// //     const onWhichDayOfCristmasSantaWillPayThePiper = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24))
// //     console.log("onWhichDayOfCristmasSantaWillPayThePiper", onWhichDayOfCristmasSantaWillPayThePiper);

// //     return onWhichDayOfCristmasSantaWillPayThePiper;
// // }
// function daysUntilChristmas(year, month, day) {
//     const currentDate = new Date(year, month - 1, day);
//     const currentYear = currentDate.getFullYear();
//     const christmasDate = new Date(currentYear, 11, 25);

//     // If the current date is after Christmas for this year, set Christmas for the next year
//     if (currentDate.getTime() > christmasDate.getTime()) {
//         christmasDate.setFullYear(currentYear + 1);
//     }

//     // Calculate the difference in milliseconds between the two dates
//     const differenceInMs = christmasDate.getTime() - currentDate.getTime();

//     // Convert milliseconds to days
//     const daysUntilChristmas = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24) - 30);

//     return daysUntilChristmas >= 0 ? daysUntilChristmas : 0;
// }
// // THIS ONE PASSED IN THE CODEWARS BUT DIDN'T PASS IN MY CODE
// // function daysUntilChristmas(date) {
// //     const currentDate = new Date(date);
// //     const currentYear = currentDate.getFullYear();
// //     const christmasDate = new Date(currentYear, 11, 25); // December 25th

// //     // If the current date is after Christmas for this year, set Christmas for the next year
// //     if (currentDate.getTime() > christmasDate.getTime()) {
// //         christmasDate.setFullYear(currentYear + 1);
// //     }

// //     // Calculate the difference in milliseconds between the two dates
// //     const differenceInMs = christmasDate.getTime() - currentDate.getTime();

// //     // Convert milliseconds to days
// //     const daysUntilChristmas = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));

// //     return daysUntilChristmas >= 0 ? daysUntilChristmas : 0;
// // }
    
// console.log(daysUntilChristmas(2016,11,8)); //17
// console.log(daysUntilChristmas(1996,11,7)); //18
// console.log(daysUntilChristmas(2015,1,23)); //305
// console.log(daysUntilChristmas(2001,6,11)); //167
// console.log(daysUntilChristmas(2000,11,9)); // 16
// console.log(daysUntilChristmas(1978,2,18)); //282


// console.log("==========================================")

// // In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// // All numbers are valid Int32, no need to validate them.
// // There will always be at least one number in the input string.
// // Output string must be two numbers separated by a single space, and highest number is first.

// function highAndLow(numbers){
//     // console.log("numbers", numbers);
//     const inToArray = numbers.split(' ').map(Number);
//     // console.log("inToArray", inToArray);
//     const smallestNumber = Math.min(...inToArray);
//     const largestNumber = Math.max(...inToArray);
//     return [largestNumber, smallestNumber].join(' ')
// }

// console.log(highAndLow("1 2 3 4 5")); //return "5 1"
// console.log(highAndLow("1 2 -3 4 5")); //return "5 -3"
// console.log(highAndLow("1 9 3 4 -5")); //return "9 -5"

// console.log("==========================================")


// // DESCRIPTION:
// // You are given an integer N. Your job is to figure out how many substrings inside of N divide evenly with N.
// // Rules:
// // -If an integer is 0, then it does NOT divide evenly into anything.
// // -Even though N can divide evenly with itself, we do not count it towards the end number. For Example:

// // N = 23, the answer will be 0.  
// // -If there are multiple instances of a number, they all get counted. For example:
// // N = 11, the answer will be 2 
// // Input:  A non negative integer.
// // Output: / The number of times you found an integer that was evenly divisible with N.

// // function getCount(n)
// // {
// //     return n % 1 || n % 2 || n % 3 || n % 4 || n % 5 || n % 6 || n % 7 || n % 8 || n % 9 || n % 10 || n % 11 || n % 12 || n%n || n%0
    
// // }
// function getCount(n) {
//     const str = n.toString(); // Convert the number to a string
//     let count = 0;
  
//     for (let i = 0; i < str.length; i++) {
//       for (let j = i + 1; j <= str.length; j++) {
//         const subStr = str.slice(i, j); // Get a substring from the number
//         const subNum = parseInt(subStr, 10); // Convert substring back to a number
  
//         if (subNum !== 0 && n % subNum === 0 && subNum !== n) {
//           count++;
//         }
//       }
//     }
  
//     return count;
//   }

// console.log(getCount(877692));

// console.log("==========================================")
// // Task
// // Write the processArray function, which takes an array and a callback function as parameters. 
// // The callback function can be, for example, a mathematical function that will be applied on each element of this array. 
// // Optionally, also write tests similar to the examples below.
// // Examples: 
// var myArray1 = [4, 8, 2, 7, 5];
// myArray1 = processArray(myArray1,function (a) {return a * 2;});  

// var myArray2 = [7, 8, 9, 1, 2];
// myArray2 = processArray(myArray2, function (a) {return a + 5;});  

// function processArray(arr, callback) {
//     // return arr.map(callback);
// }
// console.log(processArray()); // will be [ 8, 16, 4, 14, 10 ].
// console.log(processArray()); // will be [ 12, 13, 14, 6, 7 ].

// console.log("==========================================")
// // Create a function add(n)/Add(n) which returns a function that always adds n to any number
// // Note for Java: the return type and methods have not been provided to make it a bit more challenging.
// // var addOne = add(1);
// // addOne(1); // 4

// // var addThree = add(3);
// // addThree(3); // 6

// // function add(n) {
// //     console.log("n:", n);
// //     return function(num) {
// //         console.log("num:", num);
// //         return num + n;
// //     };
// // }

// // function combineAddFunctions(func1, func2) {
// //     return function(num) {
// //       return func2(func1(num));
// //     };
// //   }
  
// //   console.log(combineAddFunctions(addOne, addThree)(5))

// console.log("==========================================")

// // Find the volume of a cone whose radius and height are provided as parameters to the function volume. 
// // Use the value of PI provided by your language (for example: Math.PI in JS, math.pi in Python or Math::PI in Ruby) and round down the volume to an Interger.

// // If you complete this kata and there are no issues, please remember to give it a ready vote and a difficulty rating. :)

// function volume(r,h) {
//     return Math.floor(Math.PI*r**2)*(h/3)
//     }
// console.log(volume(7,3)); //153
// console.log(volume(56,30)); //98520
// console.log(volume(0, 10)); //0
// console.log("==========================================")

// // Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.
// // Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. 
// // In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// // Example:
// // solution(1000); // should return 'M'
// // Help:
// // Symbol   I  V   X   L   C   D   M
// // Value    1  5   10  50  100 500 1,000
// // Remember that there can't be more than 3 identical symbols in a row.
// // More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals

// function solution(number){
//     const romanNumerals = {
//         M: 1000,  CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1,
//       };
//     let result = '';

//     for (let key in romanNumerals) {
//         while (number >= romanNumerals[key]) {
//         result += key;
//         number -= romanNumerals[key];
//         }
//     }

//     return result;
//   }

//   console.log(solution(1)); // I
//   console.log(solution(11)); // XI
//   console.log(solution(22)); // XXII
//   console.log(solution(2007)); // MMVII
//   console.log(solution(1990)); // MCMXC


// console.log("==========================================")

// // Implement a function that accepts 3 integer values a, b, c. 
// // The function should return true if a triangle can be built with the sides of given length and false in any other case.
// // (In this case, all triangles must have surface greater than 0 to be accepted).


// function isTriangle(a,b,c){
//     if ( a + b <= c || a + c <= b || b + c <= a ){
//         return false;
//     } else {
//         return true
//     }
// }
// console.log(isTriangle(1,2,2)); // true
// console.log(isTriangle(4,2,3)); // true
// console.log(isTriangle(2,2,2)); // true
// console.log(isTriangle(1,2,3)); // false
// console.log(isTriangle(-5,1,3)); // false
// console.log(isTriangle(0,2,3)); // false
// console.log("==========================================")

// // Write a function that, given a string of text (possibly with punctuation and line-breaks), 
// // returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

// // Assumptions:
// // A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
// // Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
// // Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
// // Matches should be case-insensitive, and the words in the result should be lowercased.
// // Ties may be broken arbitrarily.
// // If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
// // Examples:
// // "In a village of La Mancha, the name of which I have no desire to call to
// // mind, there lived not long since one of those gentlemen that keep a lance
// // in the lance-rack, an old buckler, a lean hack, and a greyhound for
// // coursing. An olla of rather more beef than mutton, a salad on most
// // nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// // on Sundays, made away with three-quarters of his income."

// // --> ["a", "of", "on"]


// // "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"

// // --> ["e", "ddd", "aa"]


// // "  //wont won't won't"

// // --> ["won't", "wont"]
// // Bonus points (not really, but just for fun):
// // Avoid creating an array whose memory footprint is roughly as big as the input text.
// // Avoid sorting the entire array of unique words.
// var one = "In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income."
// var two = "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"
// var three = "  //wont won't won't"

// function topThreeWords(text) {
//     // console.log("text:", text);
//     let count = {}
//     let newArr = text.toLowerCase().match(/\b[a-z']+\b/g) || [];;
//     newArr.forEach((v, i) => {count[v] = (count[v] || 0) + 1})
//     let sortedWords = Object.keys(count).sort((a, b) => count[b] - count[a]);

//     return sortedWords.slice(0, 3);
// }

// console.log(topThreeWords(one)); // ["a", "of", "on"]
// console.log(topThreeWords(two)); // ["e", "ddd", "aa"]
// console.log(topThreeWords(three)); // ["won't", "wont"]

// console.log("==========================================")

// // If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? 
// // Our goal is to create a function that will check that for us!

// // Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:
// const set = [
//     [0, 0, 1], 
//     [0, 1, 2], 
//     [2, 1, 0]]
// // We want our function to return:
// // -1 if the board is not yet finished AND no one has won yet (there are empty spots),
// // 1 if "X" won,
// // 2 if "O" won,
// // 0 if it's a cat's game (i.e. a draw).
// // You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

// function isSolved(board) {
//     for (let i = 0; i < 3; i++) {
//         if (board[i][0] !== 0 && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
//             return board[i][0];
//         }
//     }
//     for (let j = 0; j < 3; j++) {
//         if (board[0][j] !== 0 && board[0][j] === board[1][j] && board[1][j] === board[2][j]) {
//             return board[0][j];
//         }
//     }
//     if (board[0][0] !== 0 && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
//         return board[0][0];
//     }
//     if (board[0][2] !== 0 && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
//         return board[0][2];
//     }
//     for (let i = 0; i < 3; i++) {
//         for (let j = 0; j < 3; j++) {
//             if (board[i][j] === 0) {
//                 return -1;
//             }
//         }
//     }
//     return 0;
// }


// console.log(isSolved(set));
// console.log("==========================================")

// // Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

// // input:   [numerator, denominator]
// // output:  [reduced numerator, reduced denominator]
// // example: [45, 120] --> [3, 8]
// // All numerators and denominators will be positive integers.

// // Note: This is an introductory Kata for a series... coming soon!
// num1 = [45, 120];
// num2 = [1000, 1];
// function reduce(fraction) {
//     const minAbs = Math.min(fraction[0], fraction[1]);
//     // console.log("minAbs:", minAbs);
//     var newArr =[]
//     for (let i = minAbs; i > 1; i--) {
//         if (fraction[0] % i === 0 && fraction[1] % i === 0) {
//             newArr.push(fraction[0]/i, fraction[1]/i)
//             return newArr
//         }
//     }
//     newArr.push(fraction[0], fraction[1]);
//     return newArr; 
//   }
// console.log(reduce(num1)); // [3, 8]
// console.log(reduce(num2)); // [1000, 1]
//   console.log("==========================================")

// //   The marketing team is spending way too much time typing in hashtags.
// // Let's help them with our own Hashtag Generator!

// // Here's the deal:

// // It must start with a hashtag (#).
// // All words must have their first letter capitalized.
// // If the final result is longer than 140 chars it must return false.
// // If the input or the result is an empty string it must return false.

// str1 = " Hello there thanks for trying my Kata"
// str2 = "    Hello     World   "
// str3 = ""
// str4 = "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
// function generateHashtag (str) {
//     // console.log(str);
//     let newStr = str.split(' ')
//     for (let i = 0; i < newStr.length; i++) {
//         newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].substring(1);
//     }
//     let newStr2 = newStr.filter(v => v!== " ").join('')
//     if (newStr2.length >= 140) {
//         console.log(newStr2.length);
//         return false;
//     } else if (newStr2 === "" || newStr2 === undefined) {
//         return false;
//     } else {

//         return "#"+newStr2
//     }
//     // return newStr
// }

// console.log(generateHashtag(str1)); //"#HelloThereThanksForTryingMyKata"
// console.log(generateHashtag(str2)); //"#HelloWorld"
// console.log(generateHashtag(str3)); //false
// console.log(generateHashtag(str4)); //false

// console.log("==========================================")
// var addOne = add1(1);
// var addThree = add1(3);
// function add1(n) { return function(num) { return num + n; }; }
// function combineAddFunctions1(func1, func2) { return function(num) { return func2(func1(num)); }; }
// console.log(combineAddFunctions1(addOne, addThree)(5))
// console.log("==========================================")
// // We want to create a function that will add numbers together when called in succession.
// // add(1)(2); // == 3
// // We also want to be able to continue to add numbers to our chain.
// // A single call should be equal to the number passed in.
// // add(1); // == 1
// // We should be able to store the returned values and reuse them.
// // We can assume any number being passed in will be valid whole number.

// // var a = add(2);
// // var b = a + 5; // == 7
// // var c = a(3); // == 5
// // var d = a(3)(5); // == 10
// // var e = add(1)(2)(3); // == 6
// // var f = add(1)(2)(3)(4); //  == 10
// // var g = add(1)(2)(3)(4)(5); // == 15

// // function add(num) {
// //     const innerAdd = function(nextNum) {
// //         return add(num + nextNum);
// //     };
// //     innerAdd.valueOf = function() {
// //         return num;
// //     };

// //     return innerAdd;
// // }

// // console.log(add(a));
// // console.log(add(b));
// // console.log(add(c));
// // console.log(add(d));
// // console.log(add(e));
// // console.log(add(f));
// // console.log(add(g));



// console.log("==========================================")

// // In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// var filter1 = [1,2,'a','b']
// var filter2 = [1,'a','b',0,15]
// var filter3 = [1,2,'aasf','1','123',123]

// function filter_list(l) {
//     return l.filter(v => typeof v === 'number');
//   }

// console.log(filter_list(filter1)); // [1,2]
// console.log(filter_list(filter2)); // [1,0,15]
// console.log(filter_list(filter3)); // [1,2,123]

// console.log("==========================================")
// // Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. 
// // Can you help him to find out, how many cakes he could bake considering his recipes?
// // Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). 
// // For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// // Examples:
// let r1 = {flour: 500, sugar: 200, eggs: 1};
// let a1 = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
// let r2 = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
// let a2 = {sugar: 500, flour: 2000, milk: 2000};

// function cakes(recipe, available) {
//     let maxCakes = Infinity; 
//     for (let ingredient in recipe) {
//         let availableAmount = available[ingredient] || 0;
//         let cakesFromIngredient = Math.floor(availableAmount / recipe[ingredient]);
//         maxCakes = Math.min(maxCakes, cakesFromIngredient);
//         if (cakesFromIngredient === 0) {
//             return 0;
//         }
//     }

//     return maxCakes;
// }
// console.log(cakes(r1, a1)); // must return 2
// console.log(cakes(r2, a2)); // must return 0
// console.log("==========================================")

// // Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

// // All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

// // Examples
// // With input "10.0.0.0", "10.0.0.50"  => return   50 
// // With input "10.0.0.0", "10.0.1.0"   => return  256 
// // With input "20.0.0.10", "20.0.1.0"  => return  246
// let ip1 = "10.0.0.0"
// let ip2 = "10.0.0.50"
// let ip3 = "10.0.0.0"
// let ip4 = "10.0.1.0"
// let ip5 = "20.0.0.10"
// let ip6 = "20.0.1.0"


// function ipsBetween(startIP, endIP){
//     function ipToNumber(ip) {
//         return ip.split('.').reduce(function (acc, octet, index, array) {
//             return acc + parseInt(octet) * Math.pow(256, (array.length - index - 1));
//         }, 0);
//     }

//     const startNumeric = ipToNumber(startIP);
//     const endNumeric = ipToNumber(endIP);

//     // Calculate the number of IP addresses
//     const numAddresses = endNumeric - startNumeric;

//     return numAddresses;
//   }

//   console.log(ipsBetween(ip1, ip2)); // return   50 
//   console.log(ipsBetween(ip3, ip4)); // return  256 
//   console.log(ipsBetween(ip5, ip6)); // return  246

// console.log("==========================================")

// // We need to sum big numbers and we require your help.
// // Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
// // The input numbers are big.
// // The input is a string of only digits
// // The numbers are positives

// function add(a, b) {
//     // Convert strings to arrays of digits
//   const digitsA = a.split('').map(Number);
//   const digitsB = b.split('').map(Number);

//   // Pad the shorter array with zeros
//   const maxLength = Math.max(digitsA.length, digitsB.length);
//   while (digitsA.length < maxLength) digitsA.unshift(0);
//   while (digitsB.length < maxLength) digitsB.unshift(0);

//   // Perform addition manually
//   let carry = 0;
//   const result = [];
//   for (let i = maxLength - 1; i >= 0; i--) {
//     const sum = digitsA[i] + digitsB[i] + carry;
//     result.unshift(sum % 10);
//     carry = Math.floor(sum / 10);
//   }

//   // Add any remaining carry
//   if (carry > 0) {
//     result.unshift(carry);
//   }

//   // Convert array of digits back to string
//   return result.join('');
//   }

//   console.log(add("123", "321")); // -> "444";
//   console.log(add("11", "99"));   // -> "110";
//   console.log(add('63829983432984289347293874', '90938498237058927340892374089')); //"91002328220491911630239667963"

// console.log("==========================================")

// // In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// // Examples
// // makeNegative(1);    // return -1
// // makeNegative(-5);   // return -5
// // makeNegative(0);    // return 0
// // makeNegative(0.12); // return -0.12
// // Notes
// // The number can be negative already, in which case no change is required.
// // Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// function makeNegative(num) {
//     console.log("num:", num);
//     if (num === 0) {
//         return 0
//     } else if (num > 0) {
//         return -num
//     } else {
//         return num
//     }
//   }

// console.log(makeNegative(1));
// console.log(makeNegative(-5));
// console.log(makeNegative(0));
// console.log(makeNegative(0.12));
// console.log("==========================================")

// // Task
// // Connect Four its a game where 2 players, each turn, drop a colored disc in one of the columns of a grid. When a player drops a disc, this will occupy the next space available in the column. 
// // The winner is the first player that forms a line (vertical, diagonal or horizontal) of 4 discs of its own color.

// // However, in this kata there are the following twists:

// // There's no gravity, so a disc will just be placed in an XY position
// // The space of the game is virtually infinite, so a disc can be placed in any XY position
// // There can be more than 2 players
// // Given a game situation, where some discs has been already been placed, you have to determine a winner, if there's one.

// // Input
// // The input consists in an array of moves made during the game

// var gameOne = [ {p: 'R', x: 0, y: 0},  {p: 'Y', x: 100, y: 100}, {p: 'R', x: 1, y: 0}, {p: 'Y', x: 99, y: 100}, {p: 'R', x: 2, y: 0},  {p: 'Y', x: 98, y: 100}, {p: 'R', x: 3, y: 0}, {p: 'Y', x: 96, y: 100} ];
// // You can see in this example that the player R won making the line

// //   {x: 0, y: 0}{x: 1, y: 0}{x: 2, y: 0}{x: 3, y: 0}
// // Be aware that the moves ARE NOT ordered by time, this is an example that would fit well for describe a normal match but the moves you will receive will be in a random order

// // Output
// // You must return the player that won as string, in the example above, you would return 'R'

// // If there's no winner, you must return null

// // Constraints
// // As the standard rules, you must check from rows, columns and diagonals
// // If there's a winner, there will be only one
// // You will not receive empty array, nor invalid inputs
// // There will not be duplicates points

// // const connectFour = moves => {
//     // console.log(moves);
//     // let winningBoard = [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}]
//     // let playerOne = 'R'
//     // let playerTwo = 'Y'
//     // if (moves = winningBoard) {
//     //     return playerOne
//     // } else {
//     //     return playerTwo
//     // }
//     function connectFour(moves) {
//         const board = [];
    
//         // Initialize the board with empty cells
//         for (let i = 0; i < 100; i++) {
//             board[i] = [];
//             for (let j = 0; j < 100; j++) {
//                 board[i][j] = 'E';
//             }
//         }
    
//         function checkWinner(x, y, player) {
//             const directions = [
//                 [[1, 0], [-1, 0]],  // horizontal
//                 [[0, 1], [0, -1]],  // vertical
//                 [[1, 1], [-1, -1]], // diagonal /
//                 [[1, -1], [-1, 1]]  // diagonal \
//             ];
    
//             for (const dir of directions) {
//                 let count = 1;
    
//                 for (const [dx, dy] of dir) {
//                     let newX = x + dx;
//                     let newY = y + dy;
    
//                     while (board[newY] && board[newY][newX] === player) {
//                         count++;
//                         newX += dx;
//                         newY += dy;
//                     }
//                 }
    
//                 if (count >= 4) {
//                     return true;
//                 }
//             }
    
//             return false;
//         }
    
//         for (const move of moves) {
//             const { x, y, p: player } = move;
    
//             // Ensure the row is initialized
//             board[y] = board[y] || [];
    
//             board[y][x] = player;
    
//             if (checkWinner(x, y, player)) {
//                 return player;
//             }
//         }
    
//         return null;
//     }
    

//   console.log(connectFour(gameOne));


// console.log("==========================================")
// // Input : an array of integers.
// // Output : this array, but sorted in such a way that there are two wings:
// // the left wing with numbers decreasing,
// // the right wing with numbers increasing.
// // the two wings have the same length. If the length of the array is odd the wings are around the bottom, if the length is even the bottom is considered to be part of the right wing.
// // each integer l of the left wing must be greater or equal to its counterpart r in the right wing, the difference l - r being as small as possible. In other words the right wing must be nearly as steep as the left wing.

// // The function is make_valley or makeValley or make-valley.
// arrValley1 = [79, 35, 54, 19, 35, 25]
// // make_valley(a) --> [79, 35, 25, *19*, 35, 54]
// // The bottom is 19, left wing is [79, 35, 25], right wing is [*19*, 35, 54].
// // 79..................54
// //     35..........35
// //         25. 
// //           ..19

// arrValley2 = [67, 93, 100, -16, 65, 97, 92]
// // make_valley(a) --> [100, 93, 67, *-16*, 65, 92, 97]
// // The bottom is -16, left wing [100, 93, 67] and right wing [65, 92, 97] have same length.
// // 100.........................97
// //     93..........
// //                .........92
// //         67......
// //                .....65
// //             -16     

// arrValley3 = [66, 55, 100, 68, 46, -82, 12, 72, 12, 38]
// // make_valley(a) --> [100, 68, 55, 38, 12, *-82*, 12, 46, 66, 72]
// // The bottom is -82, left wing is [100, 68, 55, 38, 12]], right wing is [*-82*, 12, 46, 66, 72].

// arrValley4 = [14,14,14,14,7,14]
// // make_valley(a) => [14, 14, 14, *7*, 14, 14]

// // a = [14,14,14,14,14]
// // make_valley(a) => [14, 14, *14*, 14, 14]
// // A counter-example:
// arrValley5 = [17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1]
// // A solution could be [17, 17, 15, 14, 8, 1, 4, 4, 5, 7, 7]
// // but the right wing [4, 4, 5, 7, 7] is much flatter than the left one 
// // [17, 17, 15, 14, 8].

// // Summing the differences between left and right wing:
// // (17-7)+(17-7)+(15-5)+(14-4)+(8-4) = 44

// // Consider the following solution:
// // [17, 15, 8, 7, 4, 1, 4, 5, 7, 14, 17]
// // Summing the differences between left and right wing:
// // (17-17)+(15-14)+(8-7)+(7-5)+(4-4) = 4
// // The right wing is nearly as steep as the right one.

// function makeValley(arr) {
//     let sortedArr = arr.sort((a, b) => b - a);
//     let leftWing = [];
//     let rightWing = [];

//     for (let i = 0; i < sortedArr.length; i++) {
//         if (i % 2 === 0) {
//             leftWing.push(sortedArr[i]);
//         } else {
//             rightWing.unshift(sortedArr[i]);
//         }
//     }

//     return leftWing.concat(rightWing);
// }

// console.log(makeValley(arrValley1));
// console.log(makeValley(arrValley2));
// console.log(makeValley(arrValley3));
// console.log(makeValley(arrValley4));
// console.log(makeValley(arrValley5));
// console.log("==========================================")

// // JavaScript's indexOf does not work with arrays as input. This is because [1,2] === [1,2] will return false in JavaScript. Many other languages have similar quirks.

// // However, sometimes it is useful to search for an Array. Write a function that looks for an array within a two-dimensional array and returns the index of the first matching element. If there is no match, your function should return -1.

// // See some examples:

// var arrayToSearch1 = [[1,2],[3,4],[5,6]];
// // var query = [1,2]; // => 0
// // query = [5,6]; // => 2
// // query = [9,2]; // => -1
// // You will be required to validate the inputs on the following criteria:

// // each element of the array to be searched should be an array;
// // each sub-array in the two-dimensional array should be of length two; and
// // query should be an array of length two.
// // If the inputs are not valid you should throw an Error.

// // See some examples:

// var arrayToSearch2 = [[1,2],[3,4],[5,6],[7,8,9]]; // => throw Error
// // arrayToSearch = [1,2,3,4,5,6]; // => throw Error
// // arrayToSearch = [[1,2],[3,4],[5,6]]; // => valid input
// // var query = [1,2]; // => valid input
// // query = 5; // => throw Error
// // query = [9,2,1]; // => throw Error

// // var searchArray = function (arrayToSearch, query) {
// //     for (let i = 0; i < arrayToSearch.length; i++) {
// //         if (arrayToSearch[i][0] === query[0] && arrayToSearch[i][1] === query[1]) {
// //             return i;
// //         }
// //     }
// //     return -1;
// // }
// var searchArray = function (arrayToSearch, query) {
//     if (!Array.isArray(arrayToSearch) || !Array.isArray(query)) {
//         throw new Error("Invalid input: Both inputs must be arrays.");
//       }
    
//       if (!arrayToSearch.every(arr => Array.isArray(arr) && arr.length === 2) || query.length !== 2) {
//         throw new Error("Invalid input: Each sub-array in the two-dimensional array should be of length two, and the query should be an array of length two.");
//       }
    
//       // Search for the query in the two-dimensional array
//       for (let i = 0; i < arrayToSearch.length; i++) {
//         if (arrayToSearch[i][0] === query[0] && arrayToSearch[i][1] === query[1]) {
//           return i; // Return index if match is found
//         }
//       }
    
//       return -1; // Return -1 if no match is found
//     }
// // console.log(searchArray(arrayToSearch1));
// // console.log(searchArray(arrayToSearch2));

// console.log("==========================================")

// Implement a function move_zeros which takes two arguments first an array of numbers arrNum and second a Boolean value isRight (default is true) 
// and returns the array with all zero to right if isRight is true else to left if isRight is false.

// Example:
arrNum1 = [12, 0, 10, 0, 8];
// move_zeros(arrNum, true) //=> returns [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]
arrNum2 = [12, 0, 10, 0, 1];
// move_zeros(arrNum, false) //=> returns [0, 0, 0, 0, 12, 10, 8, 12, 7, 6, 4, 10, 12]
arrNum3 = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
// move_zeros(arrNum) //=> returns [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]

function move_zeros(arrNum, isRight){
    // console.log(arrNum, "isRight:", isRight);
    // for (let i = 0; i < arrNum.length; i++) {
    //     if (arrNum[i] === 0) {
    //         arrNum.slice(i,1)
    //         if (isRight === true) {
    //             arrNum.push(0);
    //         } else {
    //             arrNum.unshift(0);
    //         }
    //         return arrNum
    //     }
    // }
    let zeros = 0
    arrNum = arrNum.filter(num => {
        if (num === 0) {
            zeros++
            return false;
        } else {
            return true
        }
    })
    if (isRight === false) {
        while (zeros > 0) {
            arrNum.unshift(0);
            zeros--;
        }
    } else {
        while (zeros > 0) {
            arrNum.push(0);
            zeros--;
        }
    }
    return arrNum
}
console.log(move_zeros(arrNum1, true));
console.log(move_zeros(arrNum2, true));
console.log(move_zeros(arrNum3, true));

console.log("==========================================")

// You will be given a certain array of length n, such that n > 4, having positive and negative integers but there will be no zeroes and all the elements will occur once in it.
// We may obtain an amount of n sub-arrays of length n - 1, removing one element at a time (from left to right).
// For each subarray, let's calculate the product and sum of its elements with the corresponding absolute value of the quotient, q = SubProduct/SubSum (if it is possible, SubSum cannot be 0). 
// Then we select the array with the lowest value of |q|(absolute value)
// e.g.: we have the array, arr = [1, 23, 2, -8, 5]

// Sub Arrays            SubSum    SubProduct         |q|
// [23, 2, -8, 5]         22         -1840         83.636363
// [1, 2, -8, 5]           0           -80          No value
// [1, 23, -8, 5]         21          -920         43.809524
// [1, 23, 2, 5]          31           230          7.419355  <--- selected array
// [1, 23, 2, -8]         18           368         20.444444
// Let's compare the given array with the selected subarray:

// [1, 23, 2, -8, 5]
// [1, 23, 2,     5]
// The difference between them is at the index 3 for the given array, with element -8, so we put both things for a result [3, -8].
// That means that to obtain the selected subarray we have to take out the value -8 at index 3. 
// We need a function that receives an array as an argument and outputs the pair [index, arr[index]] that generates the subarray with the lowest value of |q|.

var select_subarray1 = ([1, 23, 2, -8, 5])
// Another case:

var select_subarray2 = ([1, 3, 23, 4, 2, -8, 5, 18])
// In Javascript the function will be selectSubarray().

// We may have some special arrays that may have more than one solution as the one that follows below.

var select_subarray3 = ([10, 20, -30, 100, 200])
// If there is more than one result the function should output a 2Darray sorted by the index of the element removed from the array.
// Thanks to Unnamed for detecting the special cases when we have multiple solutions.
// Features of the random tests:

// Number of tests = 200
// length of the array, l, such that 20 <= l <= 100

function selectSubarray(arr) {
    let minQ = Infinity;
    let minIndex = -1;

    for (let i = 0; i < arr.length; i++) {
        // Create a sub-array by removing the element at index i
        const subArray = [...arr.slice(0, i), ...arr.slice(i + 1)];
        
        // Calculate the product and sum of the elements in the sub-array
        const subProduct = subArray.reduce((acc, val) => acc * val, 1);
        const subSum = subArray.reduce((acc, val) => acc + val, 0);

        // Check if the subSum is not zero
        if (subSum !== 0) {
            // Calculate the absolute value of q
            const q = Math.abs(subProduct / subSum);
            // Update minQ and minIndex if necessary
            if (q < minQ) {
                minQ = q;
                minIndex = i;
            }
        }
    }

    // Return the index and value of the removed element for the sub-array with the lowest |q|
    return [minIndex, arr[minIndex]];
}


console.log(selectSubarray(select_subarray1)); // == [3, -8]
console.log(selectSubarray(select_subarray2)); // == [2, 23]
console.log(selectSubarray(select_subarray3)); // == [[3, 100], [4, 200]]
console.log("==========================================")

// Task
// You are given string s.
// For example:
// s = "aebecda"
// Your task is to shuffle and divide this line into the lowest number of palindromes so that the length of the smallest palindrome in the chosen division is the largest 
// amongst all the smallest palindromes across all possible divisions. Return this length.
// In the above example this can be done as follows:
// s = "aba | c | ede"
// So the answer is 1.
// Here's another example:
// s = "eutxutuatgextu"  ->  "xttattx | uuegeuu"  ->  lowest(s) = 7
// Another division for the previous example could be:

//  "ttatt | xuuegeuux"  ->  lowest(s) = 5
// But the length of the smallest palindrome 5 in this division is lower than the one in the initial division 7.
// Your task is to write the function lowest(s) that returns one number - answer.

// Constraints
// 100 tests where len(s) = 10
// 100 tests where len(s) = 1000
// 100 tests where len(s) = 10000
// 100 tests where 0 ≤ len(s) ≤ 10000
// If you do not know what a palindrome is: https://examples.yourdictionary.com/palindrome-examples.html

// Examples
s1 = "aebecda"         // ->  "aba | c | ede"      ->  lowest(s) = 1
s2 = "eutxutuatgextu"  // ->  "xttattx | uuegeuu"  ->  lowest(s) = 7
s3 = "abbddc"          // ->  "bab | dcd"          ->  lowest(s) = 3
s4 = "abcd"            // ->  "a | b | c | d"      ->  lowest(s) = 1
s5 = "aabbccdd"        // ->  "abcddcba"           ->  lowest(s) = 8
s6 = ""                // ->  ""                   ->  lowest(s) = 0
// Good luck :D
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

function lowest(s) {
    if (!s) return 0;

    const n = s.length;
    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            if (isPalindrome(s.substring(j - 1, i))) {
                dp[i] = Math.min(dp[i], dp[j - 1] + 1);
            }
        }
    }

    return dp[n];
}

console.log(lowest(s1)); // 1
console.log(lowest(s2)); // 7
console.log(lowest(s3)); // 3
console.log(lowest(s4)); // 1
console.log(lowest(s5)); // 8
console.log(lowest(s6)); // 0
console.log("==========================================")

// You are given a list of unique integers arr, and two integers a and b.
// Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value 
// (True if a and b are consecutive, False otherwise).
// It is guaranteed that a and b are both present in arr.

// function consecutive(arr, a, b) {
//     for (let i = 0; i < arr.length - 1; i++) {
//       if ((arr[i] === a && arr[i + 1] === b) || (arr[i] === b && arr[i + 1] === a)) {
//         return true;
//       }
//     }
//     return false;
//   }
console.log("==========================================")

// In this kata you need to write a function that will receive two strings (n1 and n2), each representing an integer as a binary number. 
// A third parameter will be provided (o) as a string representing one of the following operators: add, subtract, multiply.
// Your task is to write the calculate function so that it will perform the arithmetic and the result returned should be a string representing the binary result.
// Examples:
// 1 + 1 === 10
// 10 + 10 === 100
// Negative binary numbers are usually preceded by several 1's. For this kata, negative numbers can be represented with the negative symbol at the beginning of the string.
// Examples of negatives:
// 1 - 10 === -1
// 10 - 100 === -10
num1 = 1
num2 = 1

function calculate(n1, n2, o) {
    let binaryNum1 = parseInt(n1, 2);
    let binaryNum2 = parseInt(n2, 2);
    let result;

    switch (o) {
        case 'add':
            result = binaryNum1 + binaryNum2;
            break;
        case 'subtract':
            result = binaryNum1 - binaryNum2;
            break;
        case 'multiply':
            result = binaryNum1 * binaryNum2;
            break;
        default:
            return "Invalid operation";
    }

    return result.toString(2);
}
console.log(calculate(num1, num2, "add"))
console.log("==========================================")

// A non-empty array a of length n is called an array of all possibilities if it contains all numbers between 0 and a.length - 1 (both inclusive).
// Write a function that accepts an integer array and returns true if the array is an array of all possibilities, else false.
// Examples:
// [1,2,0,3] => True
// # Includes all numbers between 0 and a.length - 1 (4 - 1 = 3)
// [0,1,2,2,3] => False
// # Doesn't include all numbers between 0 and a.length - 1 (5 - 1 = 4)
// [0] => True
// # Includes all numbers between 0 and a.length - 1 (1 - 1 = 0).
function isAllPossibilities(x) {
    const n = x.length;
    const numSet = new Set(x);

    // Check if each number from 0 to n-1 is present in the array
    for (let i = 0; i < n; i++) {
        if (!numSet.has(i)) {
            return false; // If any number is missing, return false
        }
    }

    return true; // All numbers from 0 to n-1 are present
}


console.log("==========================================")

// Fast Fibonacci
// The generic implementation of the fibonacci algorithm is usually something like the following

// function fib(num) {
//   if (num < 2) return num;
//   return fib(num - 1) + fib(num - 2);
// }
// Now thats all and well and good but that function isn't too efficient. If I wanted to get the 1000th number in the series, I'd have to wait... days? maybe years?

// Your task
// Write a more efficient fibonacci function that can calculate the 1000th+ number series without breaking a sweat. Read up on tail call optimization for some help.

// Starting values
// fib(0) = 0;
// fib(1) = 1;


function fib(num) {
    if (num < 2) return num;
    let a = 0;
    let b = 1;
    for (let i = 2; i <= num; i++) {
        const temp = b;
        b = a + b;
        a = temp;
    }
    return b;
}

console.log("==========================================")

// Simple Fun #131: Learn Charitable Game
// Instructions
// You have some people who are betting money, and they all start with the same amount of money (this number>0).
// Find out if the given end-state of amounts is possible after the betting is over and money is redistributed.
// Input/Output
// [input] integer array arr
// the proposed end-state showing final amounts for each player
// [output] a boolean value
// true if this is a possible end-state and false otherwise
// Examples
var charArr1 = [0, 56, 100] // the output should be true.
// Three players start with the same amount of money 52.
// At the end of game, player 1 lose 52, player2 win 4, and player3 win 48.
var charArr2 = [0, 0, 0] // the output should be false.
// Players should start with a positive number of of money.
var charArr3 = [11] // the output should be true.
// One player always keep his money at the end of game.
var charArr4 = [100, 100, 100, 90, 1, 0, 0] // the output should be false.
// These players can not start with the same amount of money.

function learnCharitableGame(arr) {
    // Step 1: Check if all initial amounts are non-negative
    if (arr.some(amount => amount < 0)) {
      return false; // If any initial amount is negative, return false
    }
    
    // Step 2: Calculate the total sum of the final amounts
    const finalSum = arr.reduce((sum, amount) => sum + amount, 0);
    
    // Step 3: Check if the final sum is divisible by the number of players
    const numPlayers = arr.length;
    if (finalSum % numPlayers !== 0) {
      return false; // Redistribution not possible, return false
    }
    
    // Step 4: Check if redistribution results in non-negative amounts for all players
    const redistributedAmount = finalSum / numPlayers;
    return arr.every(amount => amount >= redistributedAmount);
  }

console.log("==========================================")

// 1190. Reverse Substrings Between Each Pair of Parentheses
// Medium
// You are given a string s that consists of lower case English letters and brackets.
// Reverse the strings in each pair of matching parentheses, starting from the innermost one.
// Your result should not contain any brackets.

// Example 1:
// Input: s = "(abcd)"
// Output: "dcba"

// Example 2:
// Input: s = "(u(love)i)"
// Output: "iloveu"
// Explanation: The substring "love" is reversed first, then the whole string is reversed.

// Example 3:
// Input: s = "(ed(et(oc))el)"
// Output: "leetcode"
// Explanation: First, we reverse the substring "oc", then "etco", and finally, the whole string.

// @param {string} s
// @return {string}

var reverseParentheses = function(s) {
    let stack = [];
    
    for (let char of s) {
        if (char === ')') {
            let temp = [];
            while (stack.length && stack[stack.length - 1] !== '(') {
                temp.push(stack.pop());
            }
            stack.pop(); // remove the '('
            for (let item of temp) {
                stack.push(item);
            }
        } else {
            stack.push(char);
        }
    }
    
    return stack.join('');
};
console.log("==========================================")

// 1717. Maximum Score From Removing Substrings
// Medium
// You are given a string s and two integers x and y. You can perform two types of operations any number of times.
// Remove substring "ab" and gain x points.
// For example, when removing "ab" from "cabxbae" it becomes "cxbae".
// Remove substring "ba" and gain y points.
// For example, when removing "ba" from "cabxbae" it becomes "cabxe".
// Return the maximum points you can gain after applying the above operations on s.

// Example 1:
// Input: s = "cdbcbbaaabab", x = 4, y = 5
// Output: 19
// Explanation:
// - Remove the "ba" underlined in "cdbcbbaaabab". Now, s = "cdbcbbaaab" and 5 points are added to the score.
// - Remove the "ab" underlined in "cdbcbbaaab". Now, s = "cdbcbbaa" and 4 points are added to the score.
// - Remove the "ba" underlined in "cdbcbbaa". Now, s = "cdbcba" and 5 points are added to the score.
// - Remove the "ba" underlined in "cdbcba". Now, s = "cdbc" and 5 points are added to the score.
// Total score = 5 + 4 + 5 + 5 = 19.

// Example 2:
// Input: s = "aabbaaxybbaabb", x = 5, y = 4
// Output: 20

// @param {string} s
// @param {number} x
// @param {number} y
// @return {number}

var maximumGain = function(s, x, y) {
    let stack = [];
    let score = 0;
    let first, second, firstScore, secondScore;

    if (x > y) {
        first = 'a';
        second = 'b';
        firstScore = x;
        secondScore = y;
    } else {
        first = 'b';
        second = 'a';
        firstScore = y;
        secondScore = x;
    }

    // Remove the more valuable pair first
    for (let char of s) {
        if (stack.length && stack[stack.length - 1] === first && char === second) {
            stack.pop();
            score += firstScore;
        } else {
            stack.push(char);
        }
    }

    // Process the remaining characters to remove the second pair
    let tempStack = [];
    for (let char of stack) {
        if (tempStack.length && tempStack[tempStack.length - 1] === second && char === first) {
            tempStack.pop();
            score += secondScore;
        } else {
            tempStack.push(char);
        }
    }

    return score;
};

console.log("==========================================")

// 2751. Robot Collisions
// Hard
// There are n 1-indexed robots, each having a position on a line, health, and movement direction.
// You are given 0-indexed integer arrays positions, healths, and a string directions (directions[i] is either 'L' for left or 'R' for right). 
// All integers in positions are unique.
// All robots start moving on the line simultaneously at the same speed in their given directions. 
// If two robots ever share the same position while moving, they will collide.
// If two robots collide, the robot with lower health is removed from the line, and the health of the other robot decreases by one. 
// The surviving robot continues in the same direction it was going. If both robots have the same health, they are both removed from the line.
// Your task is to determine the health of the robots that survive the collisions, in the same order that the robots were given, i.e. 
// final heath of robot 1 (if survived), final health of robot 2 (if survived), and so on. If there are no survivors, return an empty array.
// Return an array containing the health of the remaining robots (in the order they were given in the input), after no further collisions can occur.
// Note: The positions may be unsorted.

// Example 1:
// Input: positions = [5,4,3,2,1], healths = [2,17,9,15,10], directions = "RRRRR"
// Output: [2,17,9,15,10]
// Explanation: No collision occurs in this example, since all robots are moving in the same direction. 
// So, the health of the robots in order from the first robot is returned, [2, 17, 9, 15, 10].

// Example 2:
// Input: positions = [3,5,2,6], healths = [10,10,15,12], directions = "RLRL"
// Output: [14]
// Explanation: There are 2 collisions in this example. Firstly, robot 1 and robot 2 will collide, 
// and since both have the same health, they will be removed from the line. 
// Next, robot 3 and robot 4 will collide and since robot 4's health is smaller, it gets removed, and robot 3's health becomes 15 - 1 = 14. 
// Only robot 3 remains, so we return [14].

// Example 3:
// Input: positions = [1,2,5,6], healths = [10,10,11,11], directions = "RLRL"
// Output: []
// Explanation: Robot 1 and robot 2 will collide and since both have the same health, they are both removed. Robot 3 and 4 will collide and since both have the same health, they are both removed. So, we return an empty array, [].

// @param {number[]} positions
// @param {number[]} healths
// @param {string} directions
// @return {number[]}

var survivedRobotsHealths = function(positions, healths, directions) {
    // Combine the inputs into a single array for easier sorting and processing
    let robots = positions.map((pos, index) => ({
        position: pos,
        health: healths[index],
        direction: directions[index],
        originalIndex: index
    }));
    
    // Sort robots by their positions
    robots.sort((a, b) => a.position - b.position);
    
    let stack = [];
    
    // Process each robot
    for (let robot of robots) {
        if (robot.direction === 'R') {
            stack.push(robot);
        } else {
            // Handle collisions with robots in the stack moving to the right
            while (stack.length > 0 && stack[stack.length - 1].direction === 'R') {
                let topRobot = stack[stack.length - 1];
                
                if (topRobot.health > robot.health) {
                    // Top robot survives, current robot is destroyed
                    topRobot.health -= 1;
                    robot = null; // Mark current robot as destroyed
                    break;
                } else if (topRobot.health < robot.health) {
                    // Top robot is destroyed, current robot's health decreases by 1
                    robot.health -= 1;
                    stack.pop();
                } else {
                    // Both robots have the same health, both are destroyed
                    stack.pop();
                    robot = null; // Mark current robot as destroyed
                    break;
                }
            }
            
            // If the current robot survived the collision process, push it to the stack
            if (robot) {
                stack.push(robot);
            }
        }
    }
    
    // Extract the surviving robots' healths and sort them back to the original order
    let survivors = stack.map(robot => ({
        health: robot.health,
        originalIndex: robot.originalIndex
    }));
    
    // Sort survivors back to the original order
    survivors.sort((a, b) => a.originalIndex - b.originalIndex);
    
    // Return the final healths of the surviving robots
    return survivors.map(robot => robot.health);
};

console.log("==========================================")

// 726. Number of Atoms
// Hard
// Given a string formula representing a chemical formula, return the count of each atom.
// The atomic element always starts with an uppercase character, then zero or more lowercase letters, representing the name.
// One or more digits representing that element's count may follow if the count is greater than 1. If the count is 1, no digits will follow.
// For example, "H2O" and "H2O2" are possible, but "H1O2" is impossible.
// Two formulas are concatenated together to produce another formula.
// For example, "H2O2He3Mg4" is also a formula.
// A formula placed in parentheses, and a count (optionally added) is also a formula.
// For example, "(H2O2)" and "(H2O2)3" are formulas.
// Return the count of all elements as a string in the following form: the first name (in sorted order), 
// followed by its count (if that count is more than 1), followed by the second name (in sorted order), 
// followed by its count (if that count is more than 1), and so on.

// The test cases are generated so that all the values in the output fit in a 32-bit integer.

// Example 1:
// Input: formula = "H2O"
// Output: "H2O"
// Explanation: The count of elements are {'H': 2, 'O': 1}.

// Example 2:
// Input: formula = "Mg(OH)2"
// Output: "H2MgO2"
// Explanation: The count of elements are {'H': 2, 'Mg': 1, 'O': 2}.

// Example 3:
// Input: formula = "K4(ON(SO3)2)2"
// Output: "K4N2O14S4"
// Explanation: The count of elements are {'K': 4, 'N': 2, 'O': 14, 'S': 4}.

// @param {string} formula
// @return {string}

var countOfAtoms = function(formula) {
    let i = 0;

    const parse = () => {
        let counts = new Map();

        while (i < formula.length) {
            if (formula[i] === '(') {
                i++;
                let innerCounts = parse();
                let num = parseNumber();
                for (let [elem, cnt] of innerCounts) {
                    counts.set(elem, (counts.get(elem) || 0) + cnt * num);
                }
            } else if (formula[i] === ')') {
                i++;
                break;
            } else {
                let name = parseName();
                let num = parseNumber();
                counts.set(name, (counts.get(name) || 0) + num);
            }
        }

        return counts;
    };

    const parseName = () => {
        let start = i;
        i++;
        while (i < formula.length && formula[i] >= 'a' && formula[i] <= 'z') {
            i++;
        }
        return formula.slice(start, i);
    };

    const parseNumber = () => {
        if (i < formula.length && formula[i] >= '0' && formula[i] <= '9') {
            let start = i;
            while (i < formula.length && formula[i] >= '0' && formula[i] <= '9') {
                i++;
            }
            return parseInt(formula.slice(start, i));
        }
        return 1;
    };

    let counts = parse();
    let elements = Array.from(counts.keys()).sort();

    let result = '';
    for (let elem of elements) {
        result += elem;
        if (counts.get(elem) > 1) {
            result += counts.get(elem);
        }
    }

    return result;
};

console.log("==========================================")

// 2196. Create Binary Tree From Descriptions
// Medium
// You are given a 2D integer array descriptions where descriptions[i] = [parenti, childi, isLefti] 
// indicates that parenti is the parent of childi in a binary tree of unique values. Furthermore,
// If isLefti == 1, then childi is the left child of parenti.
// If isLefti == 0, then childi is the right child of parenti.
// Construct the binary tree described by descriptions and return its root.
// The test cases will be generated such that the binary tree is valid.

// Example 1:
// Input: descriptions = [[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]]
// Output: [50,20,80,15,17,19]
// Explanation: The root node is the node with value 50 since it has no parent.
// The resulting binary tree is shown in the diagram.

// Example 2:
// Input: descriptions = [[1,2,1],[2,3,0],[3,4,1]]
// Output: [1,2,null,null,3,4]
// Explanation: The root node is the node with value 1 since it has no parent.
// The resulting binary tree is shown in the diagram.

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// @param {number[][]} descriptions
// @return {TreeNode}

// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var createBinaryTree = function(descriptions) {
    const nodeMap = new Map(); // To store the TreeNode by their value
    const children = new Set(); // To track all child nodes

    // Iterate through each description
    for (const [parentVal, childVal, isLeft] of descriptions) {
        // Create parent node if it doesn't exist
        if (!nodeMap.has(parentVal)) {
            nodeMap.set(parentVal, new TreeNode(parentVal));
        }
        // Create child node if it doesn't exist
        if (!nodeMap.has(childVal)) {
            nodeMap.set(childVal, new TreeNode(childVal));
        }
        
        // Get the parent and child nodes from the map
        const parent = nodeMap.get(parentVal);
        const child = nodeMap.get(childVal);

        // Link the parent and child nodes appropriately
        if (isLeft) {
            parent.left = child;
        } else {
            parent.right = child;
        }

        // Add the child to the set of children
        children.add(childVal);
    }

    // The root is the node that is not a child of any node
    let root = null;
    for (const [parentVal] of descriptions) {
        if (!children.has(parentVal)) {
            root = nodeMap.get(parentVal);
            break;
        }
    }

    return root;
};

console.log("==========================================")

// 2096. Step-By-Step Directions From a Binary Tree Node to Another
// Medium
// You are given the root of a binary tree with n nodes. Each node is uniquely assigned a value from 1 to n. 
// You are also given an integer startValue representing the value of the start node s, 
// and a different integer destValue representing the value of the destination node t.
// Find the shortest path starting from node s and ending at node t. 
// Generate step-by-step directions of such path as a string consisting of only the uppercase letters 'L', 'R', and 'U'. 
// Each letter indicates a specific direction:

// 'L' means to go from a node to its left child node.
// 'R' means to go from a node to its right child node.
// 'U' means to go from a node to its parent node.
// Return the step-by-step directions of the shortest path from node s to node t.

// Example 1:
// Input: root = [5,1,2,3,null,6,4], startValue = 3, destValue = 6
// Output: "UURL"
// Explanation: The shortest path is: 3 → 1 → 5 → 2 → 6.

// Example 2:
// Input: root = [2,1], startValue = 2, destValue = 1
// Output: "L"
// Explanation: The shortest path is: 2 → 1.

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// @param {TreeNode} root
// @param {number} startValue
// @param {number} destValue
// @return {string}

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

var getDirections = function(root, startValue, destValue) {
    const findPath = (node, target, path) => {
        if (!node) return false;
        if (node.val === target) return true;

        path.push('L');
        if (findPath(node.left, target, path)) return true;
        path.pop();

        path.push('R');
        if (findPath(node.right, target, path)) return true;
        path.pop();

        return false;
    }

    const startPath = [];
    const destPath = [];

    findPath(root, startValue, startPath);
    findPath(root, destValue, destPath);

    let i = 0;
    while (i < startPath.length && i < destPath.length && startPath[i] === destPath[i]) {
        i++;
    }

    const upMoves = 'U'.repeat(startPath.length - i);
    const downMoves = destPath.slice(i).join('');
    return upMoves + downMoves;
};

console.log("==========================================")

// 1110. Delete Nodes And Return Forest
// Medium
// Given the root of a binary tree, each node in the tree has a distinct value.
// After deleting all nodes with a value in to_delete, we are left with a forest (a disjoint union of trees).
// Return the roots of the trees in the remaining forest. You may return the result in any order.

// Example 1:
// Input: root = [1,2,3,4,5,6,7], to_delete = [3,5]
// Output: [[1,2,null,4],[6],[7]]

// Example 2:
// Input: root = [1,2,4,null,3], to_delete = [3]
// Output: [[1,2,4]]

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// @param {TreeNode} root
// @param {number[]} to_delete
// @return {TreeNode[]}

var delNodes = function(root, to_delete) {
    const toDeleteSet = new Set(to_delete);
    const forest = [];

    function dfs(node, isRoot) {
        if (!node) return null;
        
        const isDeleted = toDeleteSet.has(node.val);
        if (isRoot && !isDeleted) {
            forest.push(node);
        }
        
        node.left = dfs(node.left, isDeleted);
        node.right = dfs(node.right, isDeleted);
        
        return isDeleted ? null : node;
    }

    dfs(root, true);
    return forest;
};

console.log("==========================================")

// 1530. Number of Good Leaf Nodes Pairs
// Medium
// You are given the root of a binary tree and an integer distance. 
// A pair of two different leaf nodes of a binary tree is said to be good if 
// the length of the shortest path between them is less than or equal to distance.
// Return the number of good leaf node pairs in the tree.

// Example 1:
// Input: root = [1,2,3,null,4], distance = 3
// Output: 1
// Explanation: The leaf nodes of the tree are 3 and 4 and the length of the shortest path between them is 3. This is the only good pair.

// Example 2:
// Input: root = [1,2,3,4,5,6,7], distance = 3
// Output: 2
// Explanation: The good pairs are [4,5] and [6,7] with shortest path = 2. The pair [4,6] is not good because 
// the length of ther shortest path between them is 4.

// Example 3:
// Input: root = [7,1,4,6,null,5,3,null,null,null,null,null,2], distance = 3
// Output: 1
// Explanation: The only good pair is [2,5].

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// @param {TreeNode} root
// @param {number} distance
// @return {number}

var countPairs = function(root, distance) {
    let count = 0;
    
    // Helper function to perform DFS and calculate distances
    function dfs(node) {
        if (!node) return [];
        
        if (!node.left && !node.right) return [1]; // Leaf node, return distance 1
        
        let leftDistances = dfs(node.left);
        let rightDistances = dfs(node.right);
        
        // Count good pairs
        for (let ld of leftDistances) {
            for (let rd of rightDistances) {
                if (ld + rd <= distance) {
                    count++;
                }
            }
        }
        
        // Increment distances by 1 and filter out distances greater than the allowed distance
        let result = [];
        for (let d of leftDistances) {
            if (d + 1 <= distance) result.push(d + 1);
        }
        for (let d of rightDistances) {
            if (d + 1 <= distance) result.push(d + 1);
        }
        
        return result;
    }
    
    dfs(root);
    return count;
};

console.log("==========================================")

// 1380. Lucky Numbers in a Matrix
// Easy
// Given an m x n matrix of distinct numbers, return all lucky numbers in the matrix in any order.
// A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

// Example 1:
// Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
// Output: [15]
// Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column.

// Example 2:
// Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
// Output: [12]
// Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.

// Example 3:
// Input: matrix = [[7,8],[1,2]]
// Output: [7]
// Explanation: 7 is the only lucky number since it is the minimum in its row and the maximum in its column.

// @param {number[][]} matrix
// @return {number[]}

var luckyNumbers  = function(matrix) {
    let luckyNumbers = [];
    
    // Traverse each row to find the minimum element in each row
    for (let i = 0; i < matrix.length; i++) {
        let min = matrix[i][0];
        let minIndex = 0;
        
        // Find the minimum element in the row
        for (let j = 1; j < matrix[i].length; j++) {
            if (matrix[i][j] < min) {
                min = matrix[i][j];
                minIndex = j;
            }
        }
        
        // Check if the minimum element is the maximum in its column
        let isMaxInColumn = true;
        for (let k = 0; k < matrix.length; k++) {
            if (matrix[k][minIndex] > min) {
                isMaxInColumn = false;
                break;
            }
        }
        
        // If it is the max in its column, add it to the result
        if (isMaxInColumn) {
            luckyNumbers.push(min);
        }
    }
    
    return luckyNumbers;
};

console.log("==========================================")

// 1605. Find Valid Matrix Given Row and Column Sums
// Medium
// You are given two arrays rowSum and colSum of non-negative integers where rowSum[i] 
// is the sum of the elements in the ith row and colSum[j] is the sum of the elements of the jth column of a 2D matrix. 
// In other words, you do not know the elements of the matrix, but you do know the sums of each row and column.
// Find any matrix of non-negative integers of size rowSum.length x colSum.length that satisfies the rowSum and colSum requirements.
// Return a 2D array representing any matrix that fulfills the requirements. 
// It's guaranteed that at least one matrix that fulfills the requirements exists.

// Example 1:
// Input: rowSum = [3,8], colSum = [4,7]
// Output: [[3,0],
//          [1,7]]
// Explanation: 
// 0th row: 3 + 0 = 3 == rowSum[0]
// 1st row: 1 + 7 = 8 == rowSum[1]
// 0th column: 3 + 1 = 4 == colSum[0]
// 1st column: 0 + 7 = 7 == colSum[1]
// The row and column sums match, and all matrix elements are non-negative.
// Another possible matrix is: [[1,2],
//                              [3,5]]

// Example 2:
// Input: rowSum = [5,7,10], colSum = [8,6,8]
// Output: [[0,5,0],
//          [6,1,0],
//          [2,0,8]]


// @param {number[]} rowSum
// @param {number[]} colSum
// @return {number[][]}

var restoreMatrix = function(rowSum, colSum) {
    const numRows = rowSum.length;
    const numCols = colSum.length;
    const matrix = Array.from({ length: numRows }, () => Array(numCols).fill(0));

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            const minVal = Math.min(rowSum[i], colSum[j]);
            matrix[i][j] = minVal;
            rowSum[i] -= minVal;
            colSum[j] -= minVal;
        }
    }
    
    return matrix;
};

console.log("==========================================")

2392. Build a Matrix With Conditions
Hard
Topics
Companies
Hint
You are given a positive integer k. You are also given:

a 2D integer array rowConditions of size n where rowConditions[i] = [abovei, belowi], and
a 2D integer array colConditions of size m where colConditions[i] = [lefti, righti].
The two arrays contain integers from 1 to k.

You have to build a k x k matrix that contains each of the numbers from 1 to k exactly once. The remaining cells should have the value 0.

The matrix should also satisfy the following conditions:

The number abovei should appear in a row that is strictly above the row at which the number belowi appears for all i from 0 to n - 1.
The number lefti should appear in a column that is strictly left of the column at which the number righti appears for all i from 0 to m - 1.
Return any matrix that satisfies the conditions. If no answer exists, return an empty matrix.

 

Example 1:


Input: k = 3, rowConditions = [[1,2],[3,2]], colConditions = [[2,1],[3,2]]
Output: [[3,0,0],[0,0,1],[0,2,0]]
Explanation: The diagram above shows a valid example of a matrix that satisfies all the conditions.
The row conditions are the following:
- Number 1 is in row 1, and number 2 is in row 2, so 1 is above 2 in the matrix.
- Number 3 is in row 0, and number 2 is in row 2, so 3 is above 2 in the matrix.
The column conditions are the following:
- Number 2 is in column 1, and number 1 is in column 2, so 2 is left of 1 in the matrix.
- Number 3 is in column 0, and number 2 is in column 1, so 3 is left of 2 in the matrix.
Note that there may be multiple correct answers.
Example 2:

Input: k = 3, rowConditions = [[1,2],[2,3],[3,1],[2,3]], colConditions = [[2,1]]
Output: []
Explanation: From the first two conditions, 3 has to be below 1 but the third conditions needs 3 to be above 1 to be satisfied.
No matrix can satisfy all the conditions, so we return the empty matrix.




// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")

// node .\05-week-js-sandbox-01.js
// git commit -m "CODEWARS, branch:consecutive, begaan"