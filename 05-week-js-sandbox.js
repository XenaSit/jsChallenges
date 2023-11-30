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


  console.log(flip(R, array));
  console.log(flip(L, array));


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

// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    str.filter((v, i, a) => {
        let newStr = str.spliit()
        if (v === "a")
        return newStr
    })
    return str;
  }



console.log(disemvowel("This website is for losers LOL!"));
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"));
console.log(disemvowel("What are you, a communist?"));


