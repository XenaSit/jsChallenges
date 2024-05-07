// Given an integer n, return a counter function. 
// This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
// Example 1:

// Input: 
// n = 10 
// ["call","call","call"]
// Output: [10,11,12]
// Explanation: 
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.
// Example 2:

// Input: 
// n = -2
// ["call","call","call","call","call"]
// Output: [-2,-1,0,1,2]
// Explanation: counter() initially returns -2. Then increases after each sebsequent call.
 

// Constraints:

// -1000 <= n <= 1000
// 0 <= calls.length <= 1000
// calls[i] === "call"

//   @param {number} n
//   @return {Function}

var createCounter = function(n) {
    
    var createCounter = function(n) {
        return function() {
            let result = n;
            n++;
            return result;
        };
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

console.log("==========================================")


// Code
// Testcase
// Testcase
// Test Result
// 2704. To Be Or Not To Be
// Easy
// Companies
// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
 

// Example 1:

// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.
// Example 2:

// Input: func = () => expect(5).toBe(null)
// Output: {"error": "Not Equal"}
// Explanation: 5 !== null so this expression throw the error "Not Equal".
// Example 3:

// Input: func = () => expect(5).notToBe(null)
// Output: {"value": true}
// Explanation: 5 !== null so this expression returns true.


//  @param {string} val
//  @return {Object}

var expect = function(val) {
    
    return {
        toBe: function(expected) {
            if (val === expected) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(expected) {
            if (val !== expected) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

console.log("==========================================")
// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.
 

// Example 1:

// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]
// Explanation:
// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4

// Example 2:

// Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
// Output: [1,2,1,0,0]
// Explanation:
// const counter = createCounter(0);
// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1
// counter.reset(); // 0
// counter.reset(); // 0
 

// Constraints:

// -1000 <= init <= 1000
// 0 <= calls.length <= 1000
// calls[i] is one of "increment", "decrement" and "reset"

// @param {integer} init
// @return { increment: Function, decrement: Function, reset: Function }

var createCounter = function(init) {
    let counter = init;

    return {
        increment: function() {
            return ++counter;
        },
        decrement: function() {
            return --counter;
        },
        reset: function() {
            counter = init;
            return counter;
        }
    };
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

console.log("==========================================")

// 2635. Apply Transform Over Each Element in Array
// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.

// Example 1:
var arr1 = [1,2,3]
// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one. 
// Example 2:
var arr2 = [1,2,3]
// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]
// Explanation: The function increases each value by the index it resides in.
// Example 3:
var arr3 = [10,20,30]
// Input: arr = [10,20,30], fn = function constant() { return 42; }
// Output: [42,42,42]
// Explanation: The function always returns 42.
 
// Constraints:
// 0 <= arr.length <= 1000
// -109 <= arr[i] <= 109
// fn returns a number


// @param {number[]} arr
//  @param {Function} fn
// @return {number[]}

var map = function(arr, fn) {
    console.log(arr, fn)
    let returnedArray = [];
    for (let i = 0; i < arr.length; i++) {
        returnedArray.push(fn(arr[i], i))
    } 
   return returnedArray
};

console.log("==========================================")

// 2634. Filter Elements from Array
// Easy
// Companies
// Hint
// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.

 

// Example 1:

// Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// Output: [20,30]
// Explanation:
// const newArray = filter(arr, fn); // [20, 30]
// The function filters out values that are not greater than 10
// Example 2:

// Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
// Output: [1]
// Explanation:
// fn can also accept the index of each element
// In this case, the function removes elements not at index 0
// Example 3:

// Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
// Output: [-2,0,1,2]
// Explanation:
// Falsey values such as 0 should be filtered out
 

// Constraints:

// 0 <= arr.length <= 1000
// -109 <= arr[i] <= 109


// @param {number[]} arr
// @param {Function} fn
// @return {number[]}

var filter = function(arr, fn) {
    const filteredArr = [];

  for (let i = 0; i < arr.length; i++) {
    const currentValue = arr[i];
    const passesFilter = fn(currentValue, i);

    if (passesFilter) {
      filteredArr.push(currentValue);
    }
  }

  return filteredArr;
}


console.log("==========================================")

// 2626. Array Reduce Transformation
// Easy
// Companies
// Hint
// Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.
// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.
// If the length of the array is 0, the function should return init.
// Please solve it without using the built-in Array.reduce method.

// Example 1:

// Input: 
// nums = [1,2,3,4]
// fn = function sum(accum, curr) { return accum + curr; }
// init = 0
// Output: 10
// Explanation:
// initially, the value is init=0.
// (0) + nums[0] = 1
// (1) + nums[1] = 3
// (3) + nums[2] = 6
// (6) + nums[3] = 10
// The final answer is 10.
// Example 2:

// Input: 
// nums = [1,2,3,4]
// fn = function sum(accum, curr) { return accum + curr * curr; }
// init = 100
// Output: 130
// Explanation:
// initially, the value is init=100.
// (100) + nums[0] * nums[0] = 101
// (101) + nums[1] * nums[1] = 105
// (105) + nums[2] * nums[2] = 114
// (114) + nums[3] * nums[3] = 130
// The final answer is 130.
// Example 3:

// Input: 
// nums = []
// fn = function sum(accum, curr) { return 0; }
// init = 25
// Output: 25
// Explanation: For empty arrays, the answer is always init.


// @param {number[]} nums
// @param {Function} fn
// @param {number} init
// @return {number}

var reduce = function(nums, fn, init) {
    // console.log(nums, fn, init)
    let returnedArray = init;
    for (let i = 0; i < nums.length; i++) {
        returnedArray = fn(returnedArray, nums[i]);
    } 
    return returnedArray
};

console.log("==========================================")

// 2629. Function Composition
// Easy
// Companies
// Hint
// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
// The function composition of an empty list of functions is the identity function f(x) = x.
// You may assume each function in the array accepts one integer as input and returns one integer as output.

// Example 1:

// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation:
// Evaluating from right to left ...
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65
// Example 2:

// Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
// Output: 1000
// Explanation:
// Evaluating from right to left ...
// 10 * (1) = 10
// 10 * (10) = 100
// 10 * (100) = 1000
// Example 3:

// Input: functions = [], x = 42
// Output: 42
// Explanation:
// The composition of zero functions is the identity function


// @param {Function[]} functions
// @return {Function}

var compose = function(functions) {
    // console.log("functions:", functions);
    return function(x) {
        // console.log("x:", x); 
        let result = x;
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }
        return result;
    }
};

// const fn = compose([x => x + 1, x => 2 * x])
// fn(4) // 9

// The line result = functions[i](result); is the core of the function composition. Let's break it down:
// functions[i]: This accesses the i-th function in the array of functions.
// functions[i](result): This calls the i-th function with the current value of result as its argument. In other words, it applies the i-th function to the current result.
// result = functions[i](result);: This assigns the result of applying the i-th function to the variable result. 
// So, after this line, result now holds the value produced by applying the i-th function to the previous result.

console.log("==========================================")

// 2703. Return Length of Arguments Passed
// Write a function argumentsLength that returns the count of arguments passed to it.

// Example 1:

// Input: args = [5]
// Output: 1
// Explanation:
// argumentsLength(5); // 1

// One value was passed to the function so it should return 1.
// Example 2:

// Input: args = [{}, null, "3"]
// Output: 3
// Explanation: 
// argumentsLength({}, null, "3"); // 3

// Three values were passed to the function so it should return 3.

// @param {...(null|boolean|number|string|Array|Object)} args
// @return {number}

var argumentsLength = function(...args) {
    return args.length
};


// argumentsLength(1, 2, 3); // 3


console.log("==========================================")

// 2666. Allow One Function Call
// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.
 
// Example 1:

// Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
// Output: [{"calls":1,"value":6}]
// Explanation:
// const onceFn = once(fn);
// onceFn(1, 2, 3); // 6
// onceFn(2, 3, 6); // undefined, fn was not called

// Example 2:

// Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
// Output: [{"calls":1,"value":140}]
// Explanation:
// const onceFn = once(fn);
// onceFn(5, 7, 4); // 140
// onceFn(2, 3, 6); // undefined, fn was not called
// onceFn(4, 6, 8); // undefined, fn was not called


// @param {Function} fn
// @return {Function}

var once = function(fn) {
    let called = false;
    let result;

    return function (...args) {
        if (!called) {
            called = true;
            result = fn(...args);
            return result;
        } else {
            return undefined;
        }
    };
};

// let fn = (a,b,c) => (a + b + c)
// let onceFn = once(fn)

// onceFn(1,2,3); // 6
// onceFn(2,3,6); // returns undefined without calling fn


console.log("==========================================")

// 647. Palindromic Substrings
// Medium
// Given a string s, return the number of palindromic substrings in it.
// A string is a palindrome when it reads the same backward as forward.
// A substring is a contiguous sequence of characters within the string.

// Example 1:
// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
// Example 2:
// Input: s = "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 

// Constraints:

// 1 <= s.length <= 1000
// s consists of lowercase English letters.


// @param {string} s
// @return {number}

function countSubstrings(s) {
    const n = s.length;
    let count = 0;
    const dp = Array.from({ length: n }, () => Array(n).fill(false));

    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
        count++;
    }

    for (let start = n - 1; start >= 0; start--) {
        for (let end = start + 1; end < n; end++) {
            if (s[start] === s[end]) {
                if (end - start === 1 || dp[start + 1][end - 1]) {
                    dp[start][end] = true;
                    count++;
                }
            }
        }
    }

    return count;
}

console.log("==========================================")

// 2623. Memoize
// Given a function fn, return a memoized version of that function.
// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.
// You can assume there are 3 possible input functions: sum, fib, and factorial.
// sum accepts two integers a and b and returns a + b.
// fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
// factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
 
// Example 1:

// Input:
// fnName = "sum"
// actions = ["call","call","getCallCount","call","getCallCount"]
// values = [[2,2],[2,2],[],[1,2],[]]
// Output: [4,4,1,3,2]
// Explanation:
// const sum = (a, b) => a + b;
// const memoizedSum = memoize(sum);
// memoizedSum(2, 2); // "call" - returns 4. sum() was called as (2, 2) was not seen before.
// memoizedSum(2, 2); // "call" - returns 4. However sum() was not called because the same inputs were seen before.
// // "getCallCount" - total call count: 1
// memoizedSum(1, 2); // "call" - returns 3. sum() was called as (1, 2) was not seen before.
// // "getCallCount" - total call count: 2
// Example 2:

// Input:
// fnName = "factorial"
// actions = ["call","call","call","getCallCount","call","getCallCount"]
// values = [[2],[3],[2],[],[3],[]]
// Output: [2,6,2,2,6,2]
// Explanation:
// const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
// const memoFactorial = memoize(factorial);
// memoFactorial(2); // "call" - returns 2.
// memoFactorial(3); // "call" - returns 6.
// memoFactorial(2); // "call" - returns 2. However factorial was not called because 2 was seen before.
// // "getCallCount" - total call count: 2
// memoFactorial(3); // "call" - returns 6. However factorial was not called because 3 was seen before.
// // "getCallCount" - total call count: 2
// Example 3:

// Input:
// fnName = "fib"
// actions = ["call","getCallCount"]
// values = [[5],[]]
// Output: [8,1]
// Explanation:
// fib(5) = 8 // "call"
// // "getCallCount" - total call count: 1
 

// @param {Function} fn
// @return {Function}

function memoize(fn) {
    const cache = {}; // Cache to store function results
    
    return function(...args) {
        const key = JSON.stringify(args); // Generate a unique key based on arguments

        if (cache[key] === undefined) { // Check if result is already cached
            cache[key] = fn(...args); // If not, calculate and cache the result
        }

        return cache[key]; // Return cached result
    };
}



// let callCount = 0;
// const memoizedFn = memoize(function (a, b) {
//  callCount += 1;
//   return a + b;
// })
// memoizedFn(2, 3) // 5
// memoizedFn(2, 3) // 5
// console.log(callCount) // 1 


console.log("==========================================")

// 2723. Add Two Promises
// Easy
// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.
// Example 1:
// Input: 
// promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
// promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
// Output: 7
// Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.
// Example 2:
// Input: 
// promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)), 
// promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
// Output: -2
// Explanation: The two input promises resolve with the values of 10 and -12 respectively. The returned promise should resolve with a value of 10 + -12 = -2.
 
// Constraints:
// promise1 and promise2 are promises that resolve with a number


// @param {Promise} promise1
// @param {Promise} promise2
// @return {Promise}

var addTwoPromises = async function(promise1, promise2) {
    try {
        const result1 = await promise1;
        const result2 = await promise2;
        return result1 + result2;
    } catch (error) {
        throw error; // Re-throw the error if any of the promises reject
    }
};

// addTwoPromises(Promise.resolve(2), Promise.resolve(2))
//  .then(console.log); // 4


console.log("==========================================")

// 2621. Sleep
// Easy
// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

// Example 1:  Input: millis = 100  Output: 100
// Explanation: It should return a promise that resolves after 100ms.
// let t = Date.now();
// sleep(100).then(() => { console.log(Date.now() - t); // 100 });

// Example 2: Input: millis = 200  Output: 200
// Explanation: It should return a promise that resolves after 200ms.



// @param {number} millis
// @return {Promise}

async function sleep(millis) {
    return new Promise(resolve => {
        setTimeout(resolve, millis);
    });
}

// let t = Date.now()
// sleep(100).then(() => console.log(Date.now() - t)) // 100


console.log("==========================================")

// 2149. Rearrange Array Elements by Sign
// Medium
// Hint
// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.
// You should rearrange the elements of nums such that the modified array follows the given conditions:
// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were present in nums is preserved.
// The rearranged array begins with a positive integer.
// Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

// Example 1:
// Input: nums = [3,1,-2,-5,2,-4]
// Output: [3,-2,1,-5,2,-4]
// Explanation:
// The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].
// The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
// Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do not satisfy one or more conditions.  
// Example 2:
// Input: nums = [-1,1]
// Output: [1,-1]
// Explanation:
// 1 is the only positive integer and -1 the only negative integer in nums.
// So nums is rearranged to [1,-1].


// @param {number[]} nums
// @return {number[]}

var rearrangeArray = function(nums) {
    let positives = [];
    let negatives = [];
    
    // Separate positive and negative integers into separate arrays
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) { positives.push(nums[i]); } 
        else { negatives.push(nums[i]); }
    }
    // Merge positive and negative arrays alternatively
    let result = [];
    let i = 0, j = 0;
    let isPositiveTurn = true;
    while (i < positives.length && j < negatives.length) {
        if (isPositiveTurn) { result.push(positives[i++]); } 
        else { result.push(negatives[j++]); }
        isPositiveTurn = !isPositiveTurn;
    }
    // Append remaining elements, if any
    while (i < positives.length) { result.push(positives[i++]); }
    while (j < negatives.length) { result.push(negatives[j++]); }
    return result;
};

console.log("==========================================")

// 2715. Timeout Cancellation
// Easy
// Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
// setTimeout(cancelFn, cancelTimeMs)
// Initially, the execution of the function fn should be delayed by t milliseconds.
// If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.

// Example 1:
// Input: fn = (x) => x * 5, args = [2], t = 20
// Output: [{"time": 20, "returned": 10}]
// Explanation: 
// const cancelTimeMs = 50;
// const cancelFn = cancellable((x) => x * 5, [2], 20);
// setTimeout(cancelFn, cancelTimeMs);
// The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened after the execution of fn(2) at 20ms.

// Example 2:
// Input: fn = (x) => x**2, args = [2], t = 100
// Output: []
// Explanation: 
// const cancelTimeMs = 50;
// const cancelFn = cancellable((x) => x**2, [2], 100);
// setTimeout(cancelFn, cancelTimeMs);
// The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened before the execution of fn(2) at 100ms, resulting in fn(2) never being called.

// Example 3:
// Input: fn = (x1, x2) => x1 * x2, args = [2,4], t = 30
// Output: [{"time": 30, "returned": 8}]
// Explanation: 
// const cancelTimeMs = 100;
// const cancelFn = cancellable((x1, x2) => x1 * x2, [2,4], 30);
// setTimeout(cancelFn, cancelTimeMs);
// The cancellation was scheduled to occur after a delay of cancelTimeMs (100ms), which happened after the execution of fn(2,4) at 30ms.

// @param {Function} fn
// @param {Array} args
// @param {number} t
// @return {Function}

var cancellable = function(fn, args, t) {
    console.log(fn, args, t)
     // This line declares a variable named cancellable and assigns it a function value.
    // The function takes three parameters: fn, args, and t.
    // fn is another function that we want to call later.
    // args is an array of arguments that we want to pass to fn when we call it.
    // t is a number of milliseconds that we want to wait before calling fn.

    let timer = setTimeout(() => {
    // This line creates a variable named timer and assigns it the result of calling setTimeout.
    // setTimeout is a built-in function that can execute another function after a delay.
    // The first argument of setTimeout is a function that we want to execute later.
    // The second argument of setTimeout is the delay in milliseconds.
    // In this case, we are using an arrow function as the first argument, which is a shorthand way of writing a function.
    // The arrow function has no parameters and no curly braces, which means it will execute one statement and return its value.
    fn(...args); // This is the statement that the arrow function will execute. It calls fn with the args as parameters.
    // The ... operator is called the spread operator, which can expand an array into individual elements.
    // For example, if args is [2, 3], then fn(...args) is equivalent to fn(2, 3).
    }, t);
     // The result of calling setTimeout is a numeric value that represents the timer ID. We can use this ID to cancel the timer later.
 
    return function() {
    // This line returns another function from the cancellable function. This function will act as the cancel function.
    // This function has no parameters and no name. It is an anonymous function.
 
    clearTimeout(timer); // This line calls clearTimeout, which is another built-in function that can cancel a timer created by setTimeout.
    // The argument of clearTimeout is the timer ID that we want to cancel. In this case, we use the timer variable that we created earlier.
  };
};


// const result = [];
// const fn = (x) => x * 5;
// const args = [2], t = 20, cancelTimeMs = 50;
// const start = performance.now();
// const log = (...argsArr) => {
//     const diff = Math.floor(performance.now() - start);
//     result.push({"time": diff, "returned": fn(...argsArr)});}
// const cancel = cancellable(log, args, t);
// const maxT = Math.max(t, cancelTimeMs);       
// setTimeout(cancel, cancelTimeMs);
// setTimeout(() => { console.log(result); // [{"time":20,"returned":10}] }, maxT + 15)


console.log("==========================================")

// 2971. Find Polygon With the Largest Perimeter
// Medium
// Topics
// Companies
// Hint
// You are given an array of positive integers nums of length n.
// A polygon is a closed plane figure that has at least 3 sides. The longest side of a polygon is smaller than the sum of its other sides.
// Conversely, if you have k (k >= 3) positive real numbers a1, a2, a3, ..., ak where a1 <= a2 <= a3 <= ... <= ak and a1 + a2 + a3 + ... + ak-1 > ak, then there always exists a polygon with k sides whose lengths are a1, a2, a3, ..., ak.
// The perimeter of a polygon is the sum of lengths of its sides.
// Return the largest possible perimeter of a polygon whose sides can be formed from nums, or -1 if it is not possible to create a polygon.
// Example 1:
// Input: nums = [5,5,5]
// Output: 15
// Explanation: The only possible polygon that can be made from nums has 3 sides: 5, 5, and 5. The perimeter is 5 + 5 + 5 = 15.
// Example 2:
// Input: nums = [1,12,1,2,5,50,3]
// Output: 12
// Explanation: The polygon with the largest perimeter which can be made from nums has 5 sides: 1, 1, 2, 3, and 5. The perimeter is 1 + 1 + 2 + 3 + 5 = 12.
// We cannot have a polygon with either 12 or 50 as the longest side because it is not possible to include 2 or more smaller sides that have a greater sum than either of them.
// It can be shown that the largest possible perimeter is 12.
// Example 3:
// Input: nums = [5,5,50]
// Output: -1
// Explanation: There is no possible way to form a polygon from nums, as a polygon has at least 3 sides and 50 > 5 + 5.


// @param {number[]} nums
// @return {number}

var largestPerimeter = function(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const s = Array(n + 1).fill(0);
    for (let i = 0; i < n; ++i) {
        s[i + 1] = s[i] + nums[i];
    }
    let ans = -1;
    for (let k = 3; k <= n; ++k) {
        if (s[k - 1] > nums[k - 1]) {
            ans = Math.max(ans, s[k]);
        }
    }
    return ans;
}

// in TypeScript:
// function largestPerimeter(nums: number[]): number {
//     nums.sort((a, b) => a - b);
//     const n = nums.length;
//     const s: number[] = Array(n + 1).fill(0);
//     for (let i = 0; i < n; ++i) {
//         s[i + 1] = s[i] + nums[i];
//     }
//     let ans = -1;
//     for (let k = 3; k <= n; ++k) {
//         if (s[k - 1] > nums[k - 1]) {
//             ans = Math.max(ans, s[k]);
//         }
//     }
//     return ans;
// }


console.log("==========================================")

// 1481. Least Number of Unique Integers after K Removals
// Medium
// Given an array of integers arr and an integer k. Find the least number of unique integers after removing exactly k elements.

// Example 1:
// Input: arr = [5,5,4], k = 1
// Output: 1
// Explanation: Remove the single 4, only 5 is left.

// Example 2:
// Input: arr = [4,3,1,1,3,3,2], k = 3
// Output: 2
// Explanation: Remove 4, 2 and either one of the two 1s or three 3s. 1 and 3 will be left.

// @param {number[]} arr
// @param {number} k
// @return {number}

var findLeastNumOfUniqueInts = function(arr, k) {
    const frequencyMap = new Map();
    // Step 1: Count the frequency of each integer
    arr.forEach(num => {frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);});
    // Step 2: Sort the frequencies and remove the least frequent integers
    const frequencies = [...frequencyMap.values()].sort((a, b) => a - b);
    let uniqueIntegers = frequencyMap.size; // Initially, all integers are unique
    let index = 0;

    while (k > 0 && index < frequencies.length) {
        if (frequencies[index] <= k) {
            k -= frequencies[index];
            uniqueIntegers--; // Decrease the count of unique integers
        } else {
            break; // No need to continue if k becomes 0 or negative
        }
        index++;
    }

    return uniqueIntegers;
};

// function findLeastNumOfUniqueInts(arr: number[], k: number): number {

// };

console.log("==========================================")

// 1642. Furthest Building You Can Reach
// Medium
// You are given an integer array heights representing the heights of buildings, some bricks, and some ladders.
// You start your journey from building 0 and move to the next building by possibly using bricks or ladders.
// While moving from building i to building i+1 (0-indexed),
// If the current building's height is greater than or equal to the next building's height, you do not need a ladder or bricks.
// If the current building's height is less than the next building's height, you can either use one ladder or (h[i+1] - h[i]) bricks.
// Return the furthest building index (0-indexed) you can reach if you use the given ladders and bricks optimally.

// Example 1:
// Input: heights = [4,2,7,6,9,14,12], bricks = 5, ladders = 1
// Output: 4
// Explanation: Starting at building 0, you can follow these steps:
// - Go to building 1 without using ladders nor bricks since 4 >= 2.
// - Go to building 2 using 5 bricks. You must use either bricks or ladders because 2 < 7.
// - Go to building 3 without using ladders nor bricks since 7 >= 6.
// - Go to building 4 using your only ladder. You must use either bricks or ladders because 6 < 9.
// It is impossible to go beyond building 4 because you do not have any more bricks or ladders.
// Example 2:
// Input: heights = [4,12,2,7,3,18,20,3,19], bricks = 10, ladders = 2
// Output: 7
// Example 3:
// Input: heights = [14,3,19,3], bricks = 17, ladders = 0
// Output: 3
 

// @param {number[]} heights
// @param {number} bricks
// @param {number} ladders
// @return {number}

var furthestBuilding = function(heights, bricks, ladders) {
    const n = heights.length;
    const priorityQueue = [];
    let bricksUsed = 0;
    
    for (let i = 0; i < n - 1; i++) {
        const diff = heights[i + 1] - heights[i];
        if (diff > 0) {
            bricksUsed += diff;
            // Push the negative of the difference, as we want a min heap
            priorityQueue.push(-diff);
            priorityQueue.sort((a, b) => a - b);
            // If bricks used exceeds available bricks, use a ladder if available
            if (bricksUsed > bricks) {
                if (ladders > 0) {
                    bricksUsed += priorityQueue.shift();
                    ladders--;
                } else {
                    return i; // Can't progress further
                }
            }
        }
    }
    return n - 1; // Reached the last building
};
console.log("==========================================")

// 2725. Interval Cancellation
// Easy
// Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.
// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
// setTimeout(cancelFn, cancelTimeMs)
// The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.
// Example 1:
// Input: fn = (x) => x * 2, args = [4], t = 35
// Output: 
// [ {"time": 0, "returned": 8}, {"time": 35, "returned": 8}, {"time": 70, "returned": 8}, {"time": 105, "returned": 8}, {"time": 140, "returned": 8}, {"time": 175, "returned": 8} ]
// Explanation: 
// const cancelTimeMs = 190;
// const cancelFn = cancellable((x) => x * 2, [4], 35);
// setTimeout(cancelFn, cancelTimeMs);

// Every 35ms, fn(4) is called. Until t=190ms, then it is cancelled.
// 1st fn call is at 0ms. fn(4) returns 8.
// 2nd fn call is at 35ms. fn(4) returns 8.
// 3rd fn call is at 70ms. fn(4) returns 8.
// 4th fn call is at 105ms. fn(4) returns 8.
// 5th fn call is at 140ms. fn(4) returns 8.
// 6th fn call is at 175ms. fn(4) returns 8.
// Cancelled at 190ms
// Example 2:

// Input: fn = (x1, x2) => (x1 * x2), args = [2, 5], t = 30
// Output: 
// [ {"time": 0, "returned": 10}, {"time": 30, "returned": 10}, {"time": 60, "returned": 10}, {"time": 90, "returned": 10}, {"time": 120, "returned": 10}, {"time": 150, "returned": 10} ]
// Explanation: 
// const cancelTimeMs = 165; 
// const cancelFn = cancellable((x1, x2) => (x1 * x2), [2, 5], 30) 
// setTimeout(cancelFn, cancelTimeMs)

// Every 30ms, fn(2, 5) is called. Until t=165ms, then it is cancelled.
// 1st fn call is at 0ms 
// 2nd fn call is at 30ms 
// 3rd fn call is at 60ms 
// 4th fn call is at 90ms 
// 5th fn call is at 120ms 
// 6th fn call is at 150ms
// Cancelled at 165ms
// Example 3:

// Input: fn = (x1, x2, x3) => (x1 + x2 + x3), args = [5, 1, 3], t = 50
// Output: 
// [ {"time": 0, "returned": 9}, {"time": 50, "returned": 9},  {"time": 100, "returned": 9}, {"time": 150, "returned": 9} ]
// Explanation: 
// const cancelTimeMs = 180;
// const cancelFn = cancellable((x1, x2, x3) => (x1 + x2 + x3), [5, 1, 3], 50)
// setTimeout(cancelFn, cancelTimeMs)

// Every 50ms, fn(5, 1, 3) is called. Until t=180ms, then it is cancelled. 
// 1st fn call is at 0ms
// 2nd fn call is at 50ms
// 3rd fn call is at 100ms
// 4th fn call is at 150ms
// Cancelled at 180ms
 
// @param {Function} fn
// @param {Array} args
// @param {number} t
// @return {Function}

var cancellable = function(fn, args, t) {
    console.log(fn, args, t)
    fn(...args);// Call fn once immediately
     // This line declares a variable named cancellable and assigns it a function value.
    // The function takes three parameters: fn, args, and t.
    // fn is another function that we want to call later.
    // args is an array of arguments that we want to pass to fn when we call it.
    // t is a number of milliseconds that we want to wait before calling fn.

    let interval = setInterval(() => { // Set up the interval for subsequent calls
    // This line creates a variable named timer and assigns it the result of calling setTimeout.
    // setTimeout is a built-in function that can execute another function after a delay.
    // The first argument of setTimeout is a function that we want to execute later.
    // The second argument of setTimeout is the delay in milliseconds.
    // In this case, we are using an arrow function as the first argument, which is a shorthand way of writing a function.
    // The arrow function has no parameters and no curly braces, which means it will execute one statement and return its value.
        fn(...args); // This is the statement that the arrow function will execute. It calls fn with the args as parameters.
    // The ... operator is called the spread operator, which can expand an array into individual elements.
    // For example, if args is [2, 3], then fn(...args) is equivalent to fn(2, 3).
    }, t);
     // The result of calling setTimeout is a numeric value that represents the timer ID. We can use this ID to cancel the timer later.
 
    return function() {  // Return cancellation function
    // This line returns another function from the cancellable function. This function will act as the cancel function.
    // This function has no parameters and no name. It is an anonymous function.
 
    clearTimeout(interval); // This line calls clearTimeout, which is another built-in function that can cancel a timer created by setTimeout.
    // The argument of clearTimeout is the timer ID that we want to cancel. In this case, we use the timer variable that we created earlier.
  };
};


// const result = [];

// const fn = (x) => x * 2;
// const args = [4], t = 35, cancelTimeMs = 190;
// const start = performance.now();
// const log = (...argsArr) => {
//     const diff = Math.floor(performance.now() - start);
//     result.push({"time": diff, "returned": fn(...argsArr)});
// }
// const cancel = cancellable(log, args, t);
// setTimeout(cancel, cancelTimeMs);
// setTimeout(() => {
//     console.log(result); // [
//                          //     {"time":0,"returned":8},
//                          //     {"time":35,"returned":8},
//                          //     {"time":70,"returned":8},
//                          //     {"time":105,"returned":8},
//                          //     {"time":140,"returned":8},
//                          //     {"time":175,"returned":8}
//                          // ]
//  }, cancelTimeMs + t + 15)    


console.log("==========================================")

// 268. Missing Number
// Easy
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
// Example 2:
// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
// Example 3:
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

// @param {number[]} nums
// @return {number}

var missingNumber = function(nums) {
    let sortedArr = nums.sort((a, b) => a - b);
    // If the first number is not 0, then 0 is the missing number
    if (sortedArr[0] !== 0) return 0;
    
    for (let i = 0; i < sortedArr.length - 1; i++) {
        // If the difference between consecutive numbers is greater than 1,
        // then there is a missing number between them
        if (sortedArr[i + 1] - sortedArr[i] > 1) {
            return sortedArr[i] + 1;
        }
    }
    // If no missing number is found within the array, 
    // the missing number is the last number plus 1
    return sortedArr[sortedArr.length - 1] + 1;
};

console.log("==========================================")

// 201. Bitwise AND of Numbers Range
// Medium
// Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.
// Example 1:
// Input: left = 5, right = 7
// Output: 4
// Example 2:
// Input: left = 0, right = 0
// Output: 0
// Example 3:
// Input: left = 1, right = 2147483647
// Output: 0
// Constraints:
// 0 <= left <= right <= 231 - 1

// @param {number} left
// @param {number} right
// @return {number}

function rangeBitwiseAnd(left, right) {
    // Initialize a variable to keep track of the number of right shifts
    let shift = 0;
    
    // Continue looping until left and right numbers are equal
    while (left < right) {
        // Right shift both left and right numbers by 1 bit
        left >>= 1;
        right >>= 1;
        
        // Increment the shift count
        shift++;
    }
    
    // Left shift the left number by the number of shifts performed
    // This will generate the common prefix of the binary representations of left and right numbers
    return left << shift;
}

console.log("==========================================")

// 997. Find the Town Judge
// Easy
// In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.
// If the town judge exists, then:
// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi. 
// If a trust relationship does not exist in trust array, then such a trust relationship does not exist.
// Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.
// Example 1:
// Input: n = 2, trust = [[1,2]]
// Output: 2
// Example 2:
// Input: n = 3, trust = [[1,3],[2,3]]
// Output: 3
// Example 3:
// Input: n = 3, trust = [[1,3],[2,3],[3,1]]
// Output: -1

// @param {number} n
// @param {number[][]} trust
// @return {number}

var findJudge = function(n, trust) {
    const trustCounts = new Array(n + 1).fill(0); // Initialize trust counts for each person
    
    for (const [a, b] of trust) {
        trustCounts[a]--; // Decrement trust count for person 'a'
        trustCounts[b]++; // Increment trust count for person 'b'
    }
    
    for (let i = 1; i <= n; i++) {
        if (trustCounts[i] === n - 1) { // Check if the person is trusted by everyone except themselves
            return i; // Return the label of the town judge
        }
    }
    
    return -1; // No town judge found
};

console.log("==========================================")

// 2637. Promise Time Limit
// Medium
// Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.
// The time limited function should follow these rules:
// If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
// If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".
// Example 1:
// Input: 
// fn = async (n) => { 
//   await new Promise(res => setTimeout(res, 100)); 
//   return n * n; 
// }
// inputs = [5]
// t = 50
// Output: {"rejected":"Time Limit Exceeded","time":50}
// Explanation:
// const limited = timeLimit(fn, t)
// const start = performance.now()
// let result;
// try {
//    const res = await limited(...inputs)
//    result = {"resolved": res, "time": Math.floor(performance.now() - start)};
// } catch (err) {
//    result = {"rejected": err, "time": Math.floor(performance.now() - start)};
// }
// console.log(result) // Output

// The provided function is set to resolve after 100ms. However, the time limit is set to 50ms. It rejects at t=50ms because the time limit was reached.
// Example 2:
// Input: 
// fn = async (n) => { 
//   await new Promise(res => setTimeout(res, 100)); 
//   return n * n; 
// }
// inputs = [5]
// t = 150
// Output: {"resolved":25,"time":100}
// Explanation:
// The function resolved 5 * 5 = 25 at t=100ms. The time limit is never reached.
// Example 3:
// Input: 
// fn = async (a, b) => { 
//   await new Promise(res => setTimeout(res, 120)); 
//   return a + b; 
// }
// inputs = [5,10]
// t = 150
// Output: {"resolved":15,"time":120}
// Explanation:
// ​​​​The function resolved 5 + 10 = 15 at t=120ms. The time limit is never reached.
// Example 4:
// Input: 
// fn = async () => { 
//   throw "Error";
// }
// inputs = []
// t = 1000
// Output: {"rejected":"Error","time":0}
// Explanation:
// The function immediately throws an error.

// @param {Function} fn
// @param {number} t
// @return {Function}

var timeLimit = function(fn, t) {
    return async function(...args) {
        // Create a Promise that resolves with the result of the function or rejects if the time limit is exceeded
        const promise = new Promise(async (resolve, reject) => {
            // Start a timer
            const timer = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            try {
                // Execute the provided function with the arguments
                const result = await fn(...args);
                // Clear the timer
                clearTimeout(timer);
                // Resolve with the result
                resolve(result);
            } catch (error) {
                // Clear the timer
                clearTimeout(timer);
                // Reject with the error
                reject(error);
            }
        });

        // Return the promise
        return promise;
    };
};


// const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
// limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms

console.log("==========================================")

// 2622. Cache With Time Limit
// Medium
// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.
// The class has three public methods:
// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. 
// The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.
// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.
// count(): returns the count of un-expired keys.
// Example 1:
// Input: 
// actions = ["TimeLimitedCache", "set", "get", "count", "get"]
// values = [[], [1, 42, 100], [1], [], [1]]
// timeDelays = [0, 0, 50, 50, 150]
// Output: [null, false, 42, 1, -1]
// Explanation:
// At t=0, the cache is constructed.
// At t=0, a key-value pair (1: 42) is added with a time limit of 100ms. The value doesn't exist so false is returned.
// At t=50, key=1 is requested and the value of 42 is returned.
// At t=50, count() is called and there is one active key in the cache.
// At t=100, key=1 expires.
// At t=150, get(1) is called but -1 is returned because the cache is empty.
// Example 2:

// Input: 
// actions = ["TimeLimitedCache", "set", "set", "get", "get", "get", "count"]
// values = [[], [1, 42, 50], [1, 50, 100], [1], [1], [1], []]
// timeDelays = [0, 0, 40, 50, 120, 200, 250]
// Output: [null, false, true, 50, 50, -1, 0]
// Explanation:
// At t=0, the cache is constructed.
// At t=0, a key-value pair (1: 42) is added with a time limit of 50ms. The value doesn't exist so false is returned.
// At t=40, a key-value pair (1: 50) is added with a time limit of 100ms. A non-expired value already existed so true is returned and the old value was overwritten.
// At t=50, get(1) is called which returned 50.
// At t=120, get(1) is called which returned 50.
// At t=140, key=1 expires.
// At t=200, get(1) is called but the cache is empty so -1 is returned.
// At t=250, count() returns 0 because the cache is empty.

var TimeLimitedCache = function() {
    
};

// @param {number} key
// @param {number} value
// @param {number} duration time until expiration in ms
// @return {boolean} if un-expired key already existed

TimeLimitedCache.prototype.set = function(key, value, duration) {
    
};

// @param {number} key
// @return {number} value associated with key

TimeLimitedCache.prototype.get = function(key) {
    
};

// @return {number} count of non-expired keys
TimeLimitedCache.prototype.count = function() {
    
};

// const timeLimitedCache = new TimeLimitedCache()
// timeLimitedCache.set(1, 42, 1000); // false
// timeLimitedCache.get(1) // 42
// timeLimitedCache.count() // 1

console.log("==========================================")

// 543. Diameter of Binary Tree
// Easy
// Given the root of a binary tree, return the length of the diameter of the tree.
// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
// The length of a path between two nodes is represented by the number of edges between them.
// Example 1:
// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
// Example 2:

// Input: root = [1,2]
// Output: 1
 
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// @param {TreeNode} root
// @return {number}

var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0;

    // Helper function to calculate the depth of a subtree
    const depth = function(node) {
        if (node === null) return 0;
        
        const leftDepth = depth(node.left);
        const rightDepth = depth(node.right);
        
        // Update the max diameter
        maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);
        
        // Return the depth of the current node
        return 1 + Math.max(leftDepth, rightDepth);
    };
    
    depth(root);
    
    return maxDiameter;
};


console.log("==========================================")

// 513. Find Bottom Left Tree Value
// Medium
// Given the root of a binary tree, return the leftmost value in the last row of the tree.
// Example 1
// Input: root = [2,1,3]
// Output: 1
// Example 2:
// Input: root = [1,2,3,4,null,5,6,null,null,7]
// Output: 7
// Constraints:
// The number of nodes in the tree is in the range [1, 104].
// -231 <= Node.val <= 231 - 1

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }
// @param {TreeNode} root
// @return {number}

var findBottomLeftValue = function(root) {
    if (!root) return null;
    
    let queue = [root];
    let leftmost = null;
    
    while (queue.length > 0) {
        const size = queue.length;
        leftmost = queue[0].val; // Update leftmost value for each level
        
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    
    return leftmost;
};

console.log("==========================================")

// 1609. Even Odd Tree
// Medium
// A binary tree is named Even-Odd if it meets the following conditions:
// The root of the binary tree is at level index 0, its children are at level index 1, their children are at level index 2, etc.
// For every even-indexed level, all nodes at the level have odd integer values in strictly increasing order (from left to right).
// For every odd-indexed level, all nodes at the level have even integer values in strictly decreasing order (from left to right).
// Given the root of a binary tree, return true if the binary tree is Even-Odd, otherwise return false.
// Example 1:
// Input: root = [1,10,4,3,null,7,9,12,8,6,null,null,2]
// Output: true
// Explanation: The node values on each level are:
// Level 0: [1]
// Level 1: [10,4]
// Level 2: [3,7,9]
// Level 3: [12,8,6,2]
// Since levels 0 and 2 are all odd and increasing and levels 1 and 3 are all even and decreasing, the tree is Even-Odd.
// Example 2:
// Input: root = [5,4,2,3,3,7]
// Output: false
// Explanation: The node values on each level are:
// Level 0: [5]
// Level 1: [4,2]
// Level 2: [3,3,7]
// Node values in level 2 must be in strictly increasing order, so the tree is not Even-Odd.
// Example 3:
// Input: root = [5,9,1,3,5,7]
// Output: false
// Explanation: Node values in the level 1 should be even integers.

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//   this.right = (right===undefined ? null : right)
// }
// @param {TreeNode} root
// @return {boolean}

function isEvenOddTree(root) {
    if (!root) return false;
    
    let queue = [root];
    let level = 0;
    
    while (queue.length > 0) {
        const size = queue.length;
        let prevVal = level % 2 === 0 ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER;
        
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            const val = node.val;
            
            if (level % 2 === 0) { // Even level
                if (val % 2 !== 1 || val <= prevVal) return false; // Not odd or not strictly increasing
            } else { // Odd level
                if (val % 2 !== 0 || val >= prevVal) return false; // Not even or not strictly decreasing
            }
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            
            prevVal = val;
        }
        
        level++;
    }
    
    return true;
}

console.log("==========================================")

// 977. Squares of a Sorted Array
// Easy
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
// Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
// Constraints:
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.

// @param {number[]} nums
// @return {number[]}

var sortedSquares = function(nums) {
    let numbers = nums.map(num => num * num);
    return numbers.slice().sort((a, b) => a - b);
};

console.log("==========================================")

// 19. Remove Nth Node From End of List
// Medium
// Given the head of a linked list, remove the nth node from the end of the list and return its head.
// Example 1:
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:
// Input: head = [1], n = 1
// Output: []
// Example 3:
// Input: head = [1,2], n = 1
// Output: [1]
 
// Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }
// @param {ListNode} head
// @param {number} n
// @return {ListNode}

var removeNthFromEnd = function(head, n) {
        // Initialize dummy node to handle edge cases
        let dummy = new ListNode(0);
        dummy.next = head;
        let first = dummy;
        let second = dummy;
    
        // Move the first pointer n+1 steps ahead
        for (let i = 0; i <= n; i++) {
            first = first.next;
        }
    
        // Move both pointers until the first pointer reaches the end
        while (first !== null) {
            first = first.next;
            second = second.next;
        }
    
        // Remove the nth node from the end
        second.next = second.next.next;
    
        return dummy.next; // Return the modified list
};

console.log("==========================================")

// 948. Bag of Tokens
// Medium
// You start with an initial power of power, an initial score of 0, and a bag of tokens given as an integer array tokens, where each tokens[i] donates the value of tokeni.
// Your goal is to maximize the total score by strategically playing these tokens. In one move, you can play an unplayed token in one of the two ways (but not both for the same token):
// Face-up: If your current power is at least tokens[i], you may play tokeni, losing tokens[i] power and gaining 1 score.
// Face-down: If your current score is at least 1, you may play tokeni, gaining tokens[i] power and losing 1 score.
// Return the maximum possible score you can achieve after playing any number of tokens.
// Example 1:
// Input: tokens = [100], power = 50
// Output: 0
// Explanation: Since your score is 0 initially, you cannot play the token face-down. You also cannot play it face-up since your power (50) is less than tokens[0] (100).
// Example 2:
// Input: tokens = [200,100], power = 150
// Output: 1
// Explanation: Play token1 (100) face-up, reducing your power to 50 and increasing your score to 1.
// There is no need to play token0, since you cannot play it face-up to add to your score. The maximum score achievable is 1.
// Example 3:
// Input: tokens = [100,200,300,400], power = 200
// Output: 2
// Explanation: Play the tokens in this order to get a score of 2:
// Play token0 (100) face-up, reducing power to 100 and increasing score to 1.
// Play token3 (400) face-down, increasing power to 500 and reducing score to 0.
// Play token1 (200) face-up, reducing power to 300 and increasing score to 1.
// Play token2 (300) face-up, reducing power to 0 and increasing score to 2.
// The maximum score achievable is 2.

// @param {number[]} tokens
// @param {number} power
// @return {number}

var bagOfTokensScore = function(tokens, power) {
    tokens.sort((a, b) => a - b); // Sort tokens in ascending order
    let score = 0;
    let maxScore = 0;
    let left = 0;
    let right = tokens.length - 1;

    while (left <= right) {
        if (power >= tokens[left]) { // Play token face-up
            power -= tokens[left++];
            score++;
            maxScore = Math.max(maxScore, score);
        } else if (score > 0) { // Play token face-down if score > 0
            power += tokens[right--];
            score--;
        } else {
            break;
        }
    }

    return maxScore;
};

console.log("==========================================")

// 1750. Minimum Length of String After Deleting Similar Ends
// Medium
// Given a string s consisting only of characters 'a', 'b', and 'c'. You are asked to apply the following algorithm on the string any number of times:
// Pick a non-empty prefix from the string s where all the characters in the prefix are equal.
// Pick a non-empty suffix from the string s where all the characters in this suffix are equal.
// The prefix and the suffix should not intersect at any index.
// The characters from the prefix and suffix must be the same.
// Delete both the prefix and the suffix.
// Return the minimum length of s after performing the above operation any number of times (possibly zero times).
// Example 1:
// Input: s = "ca"
// Output: 2
// Explanation: You can't remove any characters, so the string stays as is.
// Example 2:
// Input: s = "cabaabac"
// Output: 0
// Explanation: An optimal sequence of operations is:
// - Take prefix = "c" and suffix = "c" and remove them, s = "abaaba".
// - Take prefix = "a" and suffix = "a" and remove them, s = "baab".
// - Take prefix = "b" and suffix = "b" and remove them, s = "aa".
// - Take prefix = "a" and suffix = "a" and remove them, s = "".
// Example 3:
// Input: s = "aabccabba"
// Output: 3
// Explanation: An optimal sequence of operations is:
// - Take prefix = "aa" and suffix = "a" and remove them, s = "bccabb".
// - Take prefix = "b" and suffix = "bb" and remove them, s = "cca".

// @param {string} s
// @return {number}

var minimumLength = function(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right && s[left] === s[right]) {
        const char = s[left];
        // Move left pointer to the right until it reaches a different character
        while (left <= right && s[left] === char) {
            left++;
        }
        // Move right pointer to the left until it reaches a different character
        while (left <= right && s[right] === char) {
            right--;
        }
    }
    
    // The minimum length of the string after applying the algorithm is the remaining substring length
    return right - left + 1;
};
console.log("==========================================")

// 141. Linked List Cycle
// Easy
// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
// Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.
// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
// Example 2:
// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
// Example 3:
// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

// Definition for singly-linked list.
// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }
// @param {ListNode} head
// @return {boolean}

var hasCycle = function(head) {
    if (!head || !head.next) {
        return false;
    }

    let slow = head;
    let fast = head.next;

    while (slow !== fast) {
        if (!fast || !fast.next) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }

    return true;
    return right - left + 1;
};

console.log("==========================================")

// 876. Middle of the Linked List
// Easy
// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.
// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.
// Example 2:
// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 

// Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// @param {ListNode} head
// @return {ListNode}

var middleNode = function(head) {
    // if (Array.isArray(head)) {
    //     if (head.length % 2 === 1) {
    //         return head.slice(2);
    //     } else {
    //         return head.slice(3);
    //     }
    // } else {
    //     // Handle the case where head is not an array
    //     return "Input is not an array";
    // }
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

console.log("==========================================")

// 3005. Count Elements With Maximum Frequency
// Easy
// You are given an array nums consisting of positive integers.
// Return the total frequencies of elements in nums such that those elements all have the maximum frequency.
// The frequency of an element is the number of occurrences of that element in the array.
// Example 1:
// Input: nums = [1,2,2,3,1,4]
// Output: 4
// Explanation: The elements 1 and 2 have a frequency of 2 which is the maximum frequency in the array.
// So the number of elements in the array with maximum frequency is 4.
// Example 2:
// Input: nums = [1,2,3,4,5]
// Output: 5
// Explanation: All elements of the array have a frequency of 1 which is the maximum.
// So the number of elements in the array with maximum frequency is 5.
// @param {number[]} nums
// @return {number}

var maxFrequencyElements = function(nums) {
    // Step 1: Create a map to store the frequency of each element
    let frequencyMap = new Map();
    for (let num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    
    // Step 2: Find the maximum frequency
    let maxFrequency = Math.max(...frequencyMap.values());
    
    // Step 3: Count the total frequencies of elements with maximum frequency
    let totalCount = 0;
    for (let [num, frequency] of frequencyMap) {
        if (frequency === maxFrequency) {
            totalCount += frequency;
        }
    }
    
    return totalCount;
};

console.log("==========================================")

// 2540. Minimum Common Value
// Easy
// Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. 
// If there is no common integer amongst nums1 and nums2, return -1.
// Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.
// Example 1:
// Input: nums1 = [1,2,3], nums2 = [2,4]
// Output: 2
// Explanation: The smallest element common to both arrays is 2, so we return 2.
// Example 2:
// Input: nums1 = [1,2,3,6], nums2 = [2,3,4,5]
// Output: 2
// Explanation: There are two common elements in the array 2 and 3 out of which 2 is the smallest, so 2 is returned.

// @param {number[]} nums1
// @param {number[]} nums2
// @return {number}

var getCommon = function(nums1, nums2) {
    let i = 0, j = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            return nums1[i];
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }
    return -1;
};

console.log("==========================================")

// 349. Intersection of Two Arrays
// Easy
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

// @param {number[]} nums1
// @param {number[]} nums2
// @return {number[]}

var intersection = function(nums1, nums2) {
    const set = new Set();
    const result = [];
    const set1 = new Set(nums1);
    for (let num of nums2) {
        if (set1.has(num) && !set.has(num)) {
            result.push(num);
            set.add(num);
        }
    }
    
    return result;
};

console.log("==========================================")

// 791. Custom Sort String
// Medium
// You are given two strings order and s. All the characters of order are unique and were sorted in some custom order previously.
// Permute the characters of s so that they match the order that order was sorted. 
// More specifically, if a character x occurs before a character y in order, then x should occur before y in the permuted string.
// Return any permutation of s that satisfies this property.
// Example 1:
// Input:  order = "cba", s = "abcd" 
// Output:  "cbad" 
// Explanation: "a", "b", "c" appear in order, so the order of "a", "b", "c" should be "c", "b", and "a".
// Since "d" does not appear in order, it can be at any position in the returned string. "dcba", "cdba", "cbda" are also valid outputs.
// Example 2:
// Input:  order = "bcafg", s = "abcd" 
// Output:  "bcad" 
// Explanation: The characters "b", "c", and "a" from order dictate the order for the characters in s. The character "d" in s does not appear in order, so its position is flexible.
// Following the order of appearance in order, "b", "c", and "a" from s should be arranged as "b", "c", "a". "d" can be placed at any position since it's not in order. 
// The output "bcad" correctly follows this rule. Other arrangements like "bacd" or "bcda" would also be valid, as long as "b", "c", "a" maintain their order.

// @param {string} order
// @param {string} s
// @return {string}

var customSortString = function(order, s) {
    // Create a hashmap to store the frequency of characters in s
    const freqMap = {};
    for (const char of s) {
        freqMap[char] = (freqMap[char] || 0) + 1;
    }
    
    let result = '';
    // Append characters from order according to their frequency in s
    for (const char of order) {
        if (char in freqMap) {
            result += char.repeat(freqMap[char]);
            // Remove the character from freqMap to mark it as processed
            delete freqMap[char];
        }
    }
    
    // Append any remaining characters in s that are not in order
    for (const char in freqMap) {
        result += char.repeat(freqMap[char]);
    }
    
    return result;
};

console.log("==========================================")

// 1171. Remove Zero Sum Consecutive Nodes from Linked List
// Medium
// Given the head of a linked list, we repeatedly delete consecutive sequences of nodes that sum to 0 until there are no such sequences.
// After doing so, return the head of the final linked list.  You may return any such answer.
// (Note that in the examples below, all sequences are serializations of ListNode objects.)
// Example 1:
// Input: head = [1,2,-3,3,1]
// Output: [3,1]
// Note: The answer [1,2,1] would also be accepted.
// Example 2:
// Input: head = [1,2,3,-3,4]
// Output: [1,2,4]
// Example 3:
// Input: head = [1,2,3,-3,-2]
// Output: [1]

// Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// @param {ListNode} head
// @return {ListNode}
 
var removeZeroSumSublists = function(head) {
    // Dummy node at the start of the list to simplify edge cases.
  const dummy = { val: 0, next: head };
  // A map to store the cumulative sum of nodes and their last occurrences.
  const lastOccurrenceOfSum = new Map();
  let sum = 0;

  // First pass: Compute the cumulative sum and track the last occurrence of each sum.
  for (let currentNode = dummy; currentNode; currentNode = currentNode.next) {
    sum += currentNode.val;
    lastOccurrenceOfSum.set(sum, currentNode);
  }

  sum = 0; // Reset sum for the second pass.

  // Second pass: Use the last occurrence map to skip over zero-sum sublists.
  for (let currentNode = dummy; currentNode; currentNode = currentNode.next) {
    sum += currentNode.val;
    // The next node will be the one after the last occurrence of the current sum.
    // As we have removed zero-sum sublists, the sums will not repeat in the new list.
    currentNode.next = lastOccurrenceOfSum.get(sum).next;
  }

  // Return the modified list, sans the dummy node.
  return dummy.next;
};


console.log("==========================================")

// 2485. Find the Pivot Integer
// Easy
// Given a positive integer n, find the pivot integer x such that:
// The sum of all elements between 1 and x inclusively equals the sum of all elements between x and n inclusively.
// Return the pivot integer x. If no such integer exists, return -1. It is guaranteed that there will be at most one pivot index for the given input.
// Example 1:
// Input: n = 8
// Output: 6
// Explanation: 6 is the pivot integer since: 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21.
// Example 2:
// Input: n = 1
// Output: 1
// Explanation: 1 is the pivot integer since: 1 = 1.
// Example 3:
// Input: n = 4
// Output: -1
// Explanation: It can be proved that no such integer exist.

// @param {number} n
// @return {number}

var pivotInteger = function(n) {
    if (n === 1) return 1; // Special case: n equals 1
    
    let totalSum = (n * (n + 1)) / 2; // Sum of all elements from 1 to n
    
    for (let x = 2; x <= n; x++) {
        let leftSum = (x * (x - 1)) / 2; // Sum of all elements from 1 to x-1
        let rightSum = totalSum - leftSum - x; // Sum of all elements from x+1 to n
        
        if (leftSum === rightSum) {
            return x;
        }
    }
    
    return -1;
};


console.log("==========================================")

// 930. Binary Subarrays With Sum
// Medium
// Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.
// A subarray is a contiguous part of the array.
// Example 1:
// Input: nums = [1,0,1,0,1], goal = 2
// Output: 4
// Explanation: The 4 subarrays are bolded and underlined below:
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// Example 2:
// Input: nums = [0,0,0,0,0], goal = 0
// Output: 15

// @param {number[]} nums
// @param {number} goal
// @return {number}

var numSubarraysWithSum = function(nums, goal) {
    let count = 0;
    let sum = 0;
    const sumCount = new Map();
    sumCount.set(0, 1); // Initialize with sum 0 with count 1

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        const complement = sum - goal;
        if (sumCount.has(complement)) {
            count += sumCount.get(complement);
        }
        sumCount.set(sum, (sumCount.get(sum) || 0) + 1);
    }

    return count;
};


console.log("==========================================")

// 238. Product of Array Except Self
// Medium
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.
// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// @param {number[]} nums
// @return {number[]}

var productExceptSelf = function(nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);
    
    // Calculate the product of all elements to the left of each element
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        result[i] *= leftProduct;
        leftProduct *= nums[i];
    }
    
    // Calculate the product of all elements to the right of each element
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }
    
    return result;
};

console.log("==========================================")

// 525. Contiguous Array
// Medium
// Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.
// Example 1:
// Input: nums = [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.
// Example 2:
// Input: nums = [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.

// @param {number[]} nums
// @return {number}

var findMaxLength = function(nums) {
    var findMaxLength = function(nums) {
        let maxLen = 0;
        let sum = 0;
        const map = new Map();
        map.set(0, -1); // Initialize the map with the sum 0 at index -1 (helps in case the first equal count is encountered)
    
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i] === 0 ? -1 : 1; // Convert 0 to -1 and 1 to 1, then add to the sum
            
            if (map.has(sum)) {
                // If the current sum has been seen before, update maxLen with the difference between current index and the index where the sum occurred previously
                maxLen = Math.max(maxLen, i - map.get(sum));
            } else {
                // If the current sum is encountered for the first time, store it in the map with the current index
                map.set(sum, i);
            }
        }
    
        return maxLen;
    };
};

console.log("==========================================")

// 57. Insert Interval
// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] 
// represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. 
// You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
// Insert newInterval into intervals such that intervals is still sorted in ascending order 
// by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
// Return intervals after the insertion.
// Note that you don't need to modify intervals in-place. You can make a new array and return it.
// Example 1:
// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:
// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

// @param {number[][]} intervals
// @param {number[]} newInterval
// @return {number[][]}

var insert = function(intervals, newInterval) {
    const result = [];
    let i = 0;
    const n = intervals.length;

    // Add all intervals that end before the new interval starts
    while (i < n && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }

    // Merge intervals that overlap with the new interval
    while (i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    result.push(newInterval);

    // Add remaining intervals
    while (i < n) {
        result.push(intervals[i]);
        i++;
    }

    return result;
};

console.log("==========================================")

// 452. Minimum Number of Arrows to Burst Balloons
// Medium
// There are some spherical balloons taped onto a flat wall that represents the XY-plane. 
// The balloons are represented as a 2D integer array points where points[i] = [xstart, xend] denotes a balloon 
// whose horizontal diameter stretches between xstart and xend. You do not know the exact y-coordinates of the balloons.
// Arrows can be shot up directly vertically (in the positive y-direction) from different points along the x-axis. 
// A balloon with xstart and xend is burst by an arrow shot at x if xstart <= x <= xend. There is no limit to the number of arrows that can be shot. 
// A shot arrow keeps traveling up infinitely, bursting any balloons in its path.
// Given the array points, return the minimum number of arrows that must be shot to burst all balloons.
// Example 1:
// Input: points = [[10,16],[2,8],[1,6],[7,12]]
// Output: 2
// Explanation: The balloons can be burst by 2 arrows:
// - Shoot an arrow at x = 6, bursting the balloons [2,8] and [1,6].
// - Shoot an arrow at x = 11, bursting the balloons [10,16] and [7,12].
// Example 2:
// Input: points = [[1,2],[3,4],[5,6],[7,8]]
// Output: 4
// Explanation: One arrow needs to be shot for each balloon for a total of 4 arrows.
// Example 3:
// Input: points = [[1,2],[2,3],[3,4],[4,5]]
// Output: 2
// Explanation: The balloons can be burst by 2 arrows:
// - Shoot an arrow at x = 2, bursting the balloons [1,2] and [2,3].
// - Shoot an arrow at x = 4, bursting the balloons [3,4] and [4,5].

// @param {number[][]} points
// @return {number}

var findMinArrowShots = function(points) {
    if (points.length === 0) return 0;
    
    // Sort the points based on their end points
    points.sort((a, b) => a[1] - b[1]);
    
    let arrows = 1; // Initialize the number of arrows needed
    let end = points[0][1];
    
    // Iterate through the points to find overlapping intervals
    for (let i = 1; i < points.length; i++) {
        if (points[i][0] > end) {
            // If the current balloon starts after the end of the previous overlapping interval,
            // we need to shoot another arrow and update the end point
            arrows++;
            end = points[i][1];
        }
    }
    
    return arrows;
};

console.log("==========================================")

// 621. Task Scheduler
// Medium
// You are given an array of CPU tasks, each represented by letters A to Z, and a cooling time, n.
// Each cycle or interval allows the completion of one task. Tasks can be completed in any order, 
// but there's a constraint: identical tasks must be separated by at least n intervals due to cooling time.
// ​Return the minimum number of intervals required to complete all tasks.
// Example 1:
// Input: tasks = ["A","A","A","B","B","B"], n = 2
// Output: 8
// Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.
// After completing task A, you must wait two cycles before doing A again. The same applies to task B. 
// In the 3rd interval, neither A nor B can be done, so you idle. 
// By the 4th cycle, you can do A again as 2 intervals have passed.
// Example 2:
// Input: tasks = ["A","C","A","B","D","B"], n = 1
// Output: 6
// Explanation: A possible sequence is: A -> B -> C -> D -> A -> B.
// With a cooling interval of 1, you can repeat a task after just one other task.
// Example 3:
// Input: tasks = ["A","A","A", "B","B","B"], n = 3
// Output: 10
// Explanation: A possible sequence is: A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B.
// There are only two types of tasks, A and B, which need to be separated by 3 intervals. This leads to idling twice between repetitions of these tasks.

// @param {character[]} tasks
// @param {number} n
// @return {number}

var leastInterval = function(tasks, n) {
    // Step 1: Create a hash map to store the frequency of each task
    const taskFrequency = new Map();
    for (const task of tasks) {
        taskFrequency.set(task, (taskFrequency.get(task) || 0) + 1);
    }
    
    // Step 2: Find the maximum frequency
    let maxFrequency = 0;
    for (const frequency of taskFrequency.values()) {
        maxFrequency = Math.max(maxFrequency, frequency);
    }
    
    // Step 3: Count the number of tasks with the same maximum frequency
    let maxCount = 0;
    for (const frequency of taskFrequency.values()) {
        if (frequency === maxFrequency) {
            maxCount++;
        }
    }
    
    // Step 4: Calculate the number of intervals without considering the cooling time
    const partCount = maxFrequency - 1;
    const partLength = n - (maxCount - 1);
    const emptySlots = partCount * partLength;
    const availableTasks = tasks.length - maxFrequency * maxCount;
    const idleSlots = Math.max(0, emptySlots - availableTasks);
    
    // Step 5: Calculate the total number of intervals required, considering the cooling time
    return tasks.length + idleSlots;
};


console.log("==========================================")

// 1669. Merge In Between Linked Lists
// Medium
// You are given two linked lists: list1 and list2 of sizes n and m respectively.
// Remove list1's nodes from the ath node to the bth node, and put list2 in their place.
// The blue edges and nodes in the following figure indicate the result:
// Build the result list and return its head.
// Example 1:
// Input: list1 = [10,1,13,6,9,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]
// Output: [10,1,13,1000000,1000001,1000002,5]
// Explanation: We remove the nodes 3 and 4 and put the entire list2 in their place. The blue edges and nodes in the above figure indicate the result.
// Example 2:
// Input: list1 = [0,1,2,3,4,5,6], a = 2, b = 5, list2 = [1000000,1000001,1000002,1000003,1000004]
// Output: [0,1,1000000,1000001,1000002,1000003,1000004,6]
// Explanation: The blue edges and nodes in the above figure indicate the result.
// Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// @param {ListNode} list1
// @param {number} a
// @param {number} b
// @param {ListNode} list2
// @return {ListNode}

var mergeInBetween = function(list1, a, b, list2) {
    let prevA = null;
    let nextB = null;
    let current = list1;
    let count = 0;
    
    // Find the node at position a-1
    while (current !== null) {
        if (count === a - 1) {
            prevA = current;
        }
        if (count === b + 1) {
            nextB = current;
            break;
        }
        current = current.next;
        count++;
    }
    
    // Find the tail of list2
    let tailList2 = list2;
    while (tailList2.next !== null) {
        tailList2 = tailList2.next;
    }
    
    // Link prevA to list2 and list2 to nextB
    prevA.next = list2;
    tailList2.next = nextB;
    
    return list1;
};


console.log("==========================================")

// 206. Reverse Linked List
// Easy
// Given the head of a singly linked list, reverse the list, and return the reversed list.
// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:
// Input: head = [1,2]
// Output: [2,1]
// Example 3:
// Input: head = []
// Output: []
// Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// @param {ListNode} head
// @return {ListNode}

var reverseList = function(head) {
    let prev = null;
    let current = head;
    
    while (current !== null) {
        const nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    
    return prev;
};

console.log("==========================================")

// 234. Palindrome Linked List
// Easy
// Given the head of a singly linked list, return true if it is a 
// palindrome
//  or false otherwise.
// Example 1:
// Input: head = [1,2,2,1]
// Output: true
// Example 2:
// Input: head = [1,2]
// Output: false
// Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// @param {ListNode} head
// @return {boolean}

var isPalindrome = function(head) {
    let values = [];
    let current = head;
    
    // Traverse the linked list and store node values in an array
    while (current !== null) {
        values.push(current.val);
        current = current.next;
    }
    
    // Use two pointers approach to check if the array is a palindrome
    let left = 0;
    let right = values.length - 1;
    
    while (left < right) {
        if (values[left] !== values[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
};

console.log("==========================================")

// 143. Reorder List
// Medium
// You are given the head of a singly linked-list. The list can be represented as:
// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:
// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.
// Example 1:
// Input: head = [1,2,3,4]
// Output: [1,4,2,3]
// Example 2:
// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]

// Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// @param {ListNode} head
// @return {void} Do not return anything, modify head in-place instead.

var reorderList = function(head) {
    if (!head || !head.next) return;

    // Step 1: Find the middle of the linked list
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the linked list
    let prev = null;
    let curr = slow.next;
    while (curr) {
        const nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }
    slow.next = null;

    // Step 3: Merge the first half and the reversed second half alternately
    let p1 = head;
    let p2 = prev;
    while (p1 && p2) {
        const nextP1 = p1.next;
        const nextP2 = p2.next;
        p1.next = p2;
        p2.next = nextP1;
        p1 = nextP1;
        p2 = nextP2;
    }
};

console.log("==========================================")

// 287. Find the Duplicate Number
// Medium
// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and uses only constant extra space.
// Example 1:
// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:
// Input: nums = [3,1,3,4,2]
// Output: 3
// Example 3:
// Input: nums = [3,3,3,3,3]
// Output: 3

// @param {number[]} nums
// @return {number}

var findDuplicate = function(nums) {
    let tortoise = nums[0];
    let hare = nums[0];
    
    // Phase 1: Detect if a cycle exists
    do {
        tortoise = nums[tortoise];
        hare = nums[nums[hare]];
    } while (tortoise !== hare);
    
    // Phase 2: Find the entrance to the cycle
    tortoise = nums[0];
    while (tortoise !== hare) {
        tortoise = nums[tortoise];
        hare = nums[hare];
    }
    
    return tortoise;
};

console.log("==========================================")

// 442. Find All Duplicates in an Array
// Medium
// Topics
// Companies
// Given an integer array nums of length n where all the integers of nums are in the range [1, n] 
// and each integer appears once or twice, return an array of all the integers that appears twice.
// You must write an algorithm that runs in O(n) time and uses only constant extra space.
// Example 1:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]
// Example 2:
// Input: nums = [1,1,2]
// Output: [1]
// Example 3:
// Input: nums = [1]
// Output: []

// @param {number[]} nums
// @return {number[]}

var findDuplicates = function(nums) {
    const result = [];
    
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1; // Get the corresponding index (zero-based)
        
        // If the number at nums[index] is negative, it means we've seen it before
        if (nums[index] < 0) {
            result.push(index + 1); // Add the number to the result array
        }
        
        // Mark the number at nums[index] as seen by negating it
        nums[index] = -nums[index];
    }
    
    return result;
};

console.log("==========================================")

// 713. Subarray Product Less Than K
// Medium
// Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.
// Example 1:
// Input: nums = [10,5,2,6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are:
// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
// Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
// Example 2:
// Input: nums = [1,2,3], k = 0
// Output: 0

// @param {number[]} nums
// @param {number} k
// @return {number}


var numSubarrayProductLessThanK = function (nums, k) {
    if (k <= 1) return 0; // If k is less than or equal to 1, no subarray can have a product less than k
    let count = 0;
    let product = 1;
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
        product *= nums[right]; // Extend the window by multiplying with the right element
        while (product >= k) {
            product /= nums[left]; // Shrink the window by dividing by the left element
            left++;
        }
        count += right - left + 1; // Count subarrays ending at the current right pointer
    }
    return count;
};

console.log("==========================================")

//41. First Missing Positive
//Har
//Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.
//You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.
//Example 1:
//Input: nums = [1,2,0]
//Output: 3
//Explanation: The numbers in the range [1,2] are all in the array.
//Example 2:
//Input: nums = [3,4,-1,1]
//Output: 2
//Explanation: 1 is in the array but 2 is missing.
//Example 3:
//Input: nums = [7,8,9,11,12]
//Output: 1
//Explanation: The smallest positive integer 1 is missing

var firstMissingPositive = function(nums) {
    const n = nums.length;

    // Mark elements within range [1, n]
    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            // Swap nums[i] and nums[nums[i] - 1]
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
        }
    }

    // Find the first missing positive integer
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    return n + 1;
};
console.log("==========================================")

// 2958. Length of Longest Subarray With at Most K Frequency
// Medium
// You are given an integer array nums and an integer k.
// The frequency of an element x is the number of times it occurs in an array.
// An array is called good if the frequency of each element in this array is less than or equal to k.
// Return the length of the longest good subarray of nums.
// A subarray is a contiguous non-empty sequence of elements within an array.
// Example 1:
// Input: nums = [1,2,3,1,2,3,1,2], k = 2
// Output: 6
// Explanation: The longest possible good subarray is [1,2,3,1,2,3] since the values 1, 2, and 3 occur at most twice in this subarray. 
// Note that the subarrays [2,3,1,2,3,1] and [3,1,2,3,1,2] are also good.
// It can be shown that there are no good subarrays with length more than 6.
// Example 2:
// Input: nums = [1,2,1,2,1,2,1,2], k = 1
// Output: 2
// Explanation: The longest possible good subarray is [1,2] since the values 1 and 2 occur at most once in this subarray. Note that the subarray [2,1] is also good.
// It can be shown that there are no good subarrays with length more than 2.
// Example 3:
// Input: nums = [5,5,5,5,5,5,5], k = 4
// Output: 4
// Explanation: The longest possible good subarray is [5,5,5,5] since the value 5 occurs 4 times in this subarray.
// It can be shown that there are no good subarrays with length more than 4.

// @param {number[]} nums
// @param {number} k
// @return {number}

var maxSubarrayLength = function(nums, k) {
    let ans = 0;
  const count = new Map();
  
  for (let l = 0, r = 0; r < nums.length; ++r) {
    const num = nums[r];
    count.set(num, (count.get(num) || 0) + 1);
    
    while (count.get(num) === k + 1) {
      count.set(nums[l], count.get(nums[l]) - 1);
      l++;
    }
    
    ans = Math.max(ans, r - l + 1);
  }
  
  return ans;
};


console.log("==========================================")

// 2962. Count Subarrays Where Max Element Appears at Least K Times
// Medium
// You are given an integer array nums and a positive integer k.
// Return the number of subarrays where the maximum element of nums appears at least k times in that subarray.
// A subarray is a contiguous sequence of elements within an array.
// Example 1:
// Input: nums = [1,3,2,3,3], k = 2
// Output: 6
// Explanation: The subarrays that contain the element 3 at least 2 times are: [1,3,2,3], [1,3,2,3,3], [3,2,3], [3,2,3,3], [2,3,3] and [3,3].
// Example 2:
// Input: nums = [1,4,2,1], k = 3
// Output: 0
// Explanation: No subarray contains the element 4 at least 3 times.

// @param {number[]} nums
// @param {number} k
// @return {number}

var countSubarrays = function(nums, k) {
    let maxNum = Math.max(...nums);
    let ans = 0;
    let count = 0;

    let l = 0;
    for (let r = 0; r < nums.length; r++) {
        if (nums[r] === maxNum) {
            count += 1;
        }
        // Keep the window to include k - 1 times of the maximum number.
        while (count === k) {
            if (nums[l] === maxNum) {
                count -= 1;
            }
            l += 1;
        }
        // If l > 0, nums[l:r+1] has k - 1 times of the maximum number. For any
        // subarray nums[i:r+1], where i < l, it will have at least k times of the
        // maximum number, since nums[l - 1] equals the maximum number.
        ans += l;
    }

    return ans;
};

console.log("==========================================")


// 992. Subarrays with K Different Integers
// Hard
// Given an integer array nums and an integer k, return the number of good subarrays of nums.
// A good array is an array where the number of different integers in that array is exactly k.
// For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.
// A subarray is a contiguous part of an array.
// Example 1:
// Input: nums = [1,2,1,2,3], k = 2
// Output: 7
// Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]
// Example 2:
// Input: nums = [1,2,1,3,4], k = 3
// Output: 3
// Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].

// @param {number[]} nums
// @param {number} k
// @return {number}

var subarraysWithKDistinct = function(nums, k) {
    function atMostKDistinct(nums, k) {
        const freq = {};
        let count = 0,
            left = 0;
        
        for (let right = 0; right < nums.length; right++) {
            if (!freq[nums[right]]) {
                freq[nums[right]] = 0;
                k--;
            }
            freq[nums[right]]++;
            
            while (k < 0) {
                freq[nums[left]]--;
                if (freq[nums[left]] === 0) k++;
                left++;
            }
            
            count += right - left + 1;
        }
        
        return count;
    }
    
    function exactlyKDistinct(nums, k) {
        return atMostKDistinct(nums, k) - atMostKDistinct(nums, k - 1);
    }
    
    return exactlyKDistinct(nums, k);
};

console.log("==========================================")

// 2444. Count Subarrays With Fixed Bounds
// Hard
// You are given an integer array nums and two integers minK and maxK.
// A fixed-bound subarray of nums is a subarray that satisfies the following conditions:
// The minimum value in the subarray is equal to minK.
// The maximum value in the subarray is equal to maxK.
// Return the number of fixed-bound subarrays.
// A subarray is a contiguous part of an array.
// Example 1:
// Input: nums = [1,3,5,2,7,5], minK = 1, maxK = 5
// Output: 2
// Explanation: The fixed-bound subarrays are [1,3,5] and [1,3,5,2].
// Example 2:
// Input: nums = [1,1,1,1], minK = 1, maxK = 1
// Output: 10
// Explanation: Every subarray of nums is a fixed-bound subarray. There are 10 possible subarrays.

// @param {number[]} nums
// @param {number} minK
// @param {number} maxK
// @return {number}

var countSubarrays = function(nums, minK, maxK) {
    let ans = 0;
    let j = -1;
    let prevMinKIndex = -1;
    let prevMaxKIndex = -1;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (num < minK || num > maxK) {
            j = i;
        }
        if (num === minK) {
            prevMinKIndex = i;
        }
        if (num === maxK) {
            prevMaxKIndex = i;
        }
        ans += Math.max(0, Math.min(prevMinKIndex, prevMaxKIndex) - j);
    }

    return ans;
};

console.log("==========================================")

// 58. Length of Last Word
// Easy
// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.
// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:
// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:
// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

// @param {string} s
// @return {number}

var lengthOfLastWord = function(s) {
    // Trim the input string to remove leading and trailing spaces
    s = s.trim();
    
    // Split the trimmed string by spaces to get an array of words
    const words = s.split(' ');
    
    // Access the last element of the array to get the last word
    const lastWord = words[words.length - 1];
    
    // Return the length of the last word
    return lastWord.length;
};

console.log("==========================================")

// 205. Isomorphic Strings
// Easy
// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. 
// No two characters may map to the same character, but a character may map to itself.
// Example 1:
// Input: s = "egg", t = "add"
// Output: true
// Example 2:
// Input: s = "foo", t = "bar"
// Output: false
// Example 3:
// Input: s = "paper", t = "title"
// Output: true

// @param {string} s
// @param {string} t
// @return {boolean}

var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false; // If the lengths of s and t are different, they cannot be isomorphic
    }
    
    const mapS = {}; // Store mappings from characters in s to characters in t
    const mapT = {}; // Store mappings from characters in t to characters in s
    
    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];
        
        if ((mapS[charS] && mapS[charS] !== charT) || (mapT[charT] && mapT[charT] !== charS)) {
            return false; // If mappings conflict, return false
        }
        
        mapS[charS] = charT;
        mapT[charT] = charS;
    }
    
    return true; // If no conflicts found, strings are isomorphic
};

console.log("==========================================")

// 79. Word Search
// Medium
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.
// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. 
// The same letter cell may not be used more than once.
// Example 1:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true
// Example 2:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true
// Example 3:
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false

// @param {character[][]} board
// @param {string} word
// @return {boolean}

var exist = function(board, word) {
    const dfs = (i, j, k) => {
        // Base case: If k equals the length of the word, then all characters have been found
        if (k === word.length) return true;
        
        // Check boundaries and if current cell matches the word character
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] !== word[k]) return false;
        
        // Temporarily mark the current cell as visited
        const temp = board[i][j];
        board[i][j] = '#';
        
        // Check the neighbors recursively
        const found = dfs(i + 1, j, k + 1) || dfs(i - 1, j, k + 1) || dfs(i, j + 1, k + 1) || dfs(i, j - 1, k + 1);
        
        // Restore the original value of the current cell
        board[i][j] = temp;
        
        return found;
    };
    
    // Iterate through each cell and check if the word exists
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }
    
    return false; // Word not found
};

var exist = function (board, word) {
    const rows = board.length;
    const cols = board[0].length;
  
    // Function to check if word can be formed starting from a cell
    const dfs = (row, col, index) => {
      // Base cases:
      // - Out of bounds
      if (row < 0 || row >= rows || col < 0 || col >= cols) return false;
      // - Character mismatch
      if (board[row][col] !== word[index]) return false;
      // - Word found
      if (index === word.length - 1) return true;
  
      // Mark cell as visited (to avoid revisiting and infinite loops)
      const temp = board[row][col];
      board[row][col] = '#';
  
      // Check all 8 directions (up, down, left, right, and diagonals)
      const directions = [
        [-1, 0], // Up
        [1, 0],  // Down
        [0, -1], // Left
        [0, 1],  // Right
        [-1, -1], // Top-left diagonal
        [-1, 1],  // Top-right diagonal
        [1, -1], // Bottom-left diagonal
        [1, 1],  // Bottom-right diagonal
      ];
  
      // Recursively search in each direction
      for (const [dRow, dCol] of directions) {
        const newRow = row + dRow;
        const newCol = col + dCol;
        if (dfs(newRow, newCol, index + 1)) {
          return true;
        }
      }
  
      // Backtrack: reset the cell value after checking all directions
      board[row][col] = temp;
      return false;
    };
  
    // Iterate through the board and start searching from each cell
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        if (board[row][col] === word[0] && dfs(row, col, 0)) {
          return true;
        }
      }
    }
  
    // If no match found
    return false;
  };
console.log("==========================================")

// 1614. Maximum Nesting Depth of the Parentheses
// Easy
// A string is a valid parentheses string (denoted VPS) if it meets one of the following:
// It is an empty string "", or a single character not equal to "(" or ")",
// It can be written as AB (A concatenated with B), where A and B are VPS's, or
// It can be written as (A), where A is a VPS.
// We can similarly define the nesting depth depth(S) of any VPS S as follows:
// depth("") = 0
// depth(C) = 0, where C is a string with a single character not equal to "(" or ")".
// depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's.
// depth("(" + A + ")") = 1 + depth(A), where A is a VPS.
// For example, "", "()()", and "()(()())" are VPS's (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.
// Given a VPS represented as string s, return the nesting depth of s.
// Example 1:
// Input: s = "(1+(2*3)+((8)/4))+1"
// Output: 3
// Explanation: Digit 8 is inside of 3 nested parentheses in the string.
// Example 2:
// Input: s = "(1)+((2))+(((3)))"
// Output: 3

// @param {string} s
// @return {number}

var maxDepth = function(s) {
    let maxDepth = 0;
    let currentDepth = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            currentDepth++;
            maxDepth = Math.max(maxDepth, currentDepth);
        } else if (s[i] === ')') {
            currentDepth--;
        }
    }
    
    return maxDepth;
};

console.log("==========================================")

// 1544. Make The String Great
// Easy
// Given a string s of lower and upper case English letters.
// A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:
// 0 <= i <= s.length - 2
// s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
// To make the string good, you can choose two adjacent characters that make the string bad and remove them. 
// You can keep doing this until the string becomes good.
// Return the string after making it good. The answer is guaranteed to be unique under the given constraints.
// Notice that an empty string is also good.
// Example 1:
// Input: s = "leEeetcode"
// Output: "leetcode"
// Explanation: In the first step, either you choose i = 1 or i = 2, both will result "leEeetcode" to be reduced to "leetcode".
// Example 2:
// Input: s = "abBAcC"
// Output: ""
// Explanation: We have many possible scenarios, and all lead to the same answer. For example:
// "abBAcC" --> "aAcC" --> "cC" --> ""
// "abBAcC" --> "abBA" --> "aA" --> ""
// Example 3:
// Input: s = "s"
// Output: "s"

// @param {string} s
// @return {string}

var makeGood = function(s) {
    const stack = [];
    
    for (const char of s) {
        if (stack.length && Math.abs(char.charCodeAt(0) - stack[stack.length - 1].charCodeAt(0)) === 32) {
            stack.pop(); // Remove the previous character
        } else {
            stack.push(char); // Add the current character
        }
    }
    
    return stack.join(''); // Convert the stack back to string
};

console.log("==========================================")

// 1249. Minimum Remove to Make Valid Parentheses
// Medium
// Given a string s of '(' , ')' and lowercase English characters.
// Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.
// Formally, a parentheses string is valid if and only if:
// It is the empty string, contains only lowercase characters, or
// It can be written as AB (A concatenated with B), where A and B are valid strings, or
// It can be written as (A), where A is a valid string.
// Example 1:
// Input: s = "lee(t(c)o)de)"
// Output: "lee(t(c)o)de"
// Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
// Example 2:
// Input: s = "a)b(c)d"
// Output: "ab(c)d"
// Example 3:
// Input: s = "))(("
// Output: ""
// Explanation: An empty string is also valid.

// @param {string} s
// @return {string}

var minRemoveToMakeValid = function(s) {
    const stack = [];
    const toRemove = new Set();
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else if (s[i] === ')') {
            if (stack.length === 0) {
                toRemove.add(i);
            } else {
                stack.pop();
            }
        }
    }
    
    // Add unmatched opening parentheses to toRemove set
    while (stack.length > 0) {
        toRemove.add(stack.pop());
    }
    
    // Construct result string excluding characters to remove
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (!toRemove.has(i)) {
            result += s[i];
        }
    }
    
    return result;
};

console.log("==========================================")

// 678. Valid Parenthesis String
// Medium
// Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.
// The following rules define a valid string:
// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".
// Example 1:
// Input: s = "()"
// Output: true
// Example 2:
// Input: s = "(*)"
// Output: true
// Example 3:
// Input: s = "(*))"
// Output: true

// @param {string} s
// @return {boolean}

var checkValidString = function(s) {
    let low = 0; // minimum possible left parentheses count
    let high = 0; // maximum possible left parentheses count

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            low++;
            high++;
        } else if (s[i] === ')') {
            low = Math.max(0, low - 1); // decrement low count if possible
            high--; // decrement high count
        } else { // wildcard '*'
            low = Math.max(0, low - 1); // decrement low count if possible
            high++; // increment high count
        }

        // If the high count becomes negative, it means too many ')' encountered without matching '(',
        // or '*'s are considered as ')' more than the actual count of '('.
        if (high < 0) return false;
    }

    // If low is 0, all open parentheses have been matched.
    return low === 0;
};

console.log("==========================================")

// 1700. Number of Students Unable to Eat Lunch
// Easy
// The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers 0 and 1 respectively. 
// All students stand in a queue. Each student either prefers square or circular sandwiches.
// The number of sandwiches in the cafeteria is equal to the number of students. The sandwiches are placed in a stack. At each step:
// If the student at the front of the queue prefers the sandwich on the top of the stack, they will take it and leave the queue.
// Otherwise, they will leave it and go to the queue's end.
// This continues until none of the queue students want to take the top sandwich and are thus unable to eat.
// You are given two integer arrays students and sandwiches where sandwiches[i] is the type of the i​​​​​​th sandwich in the stack 
// (i = 0 is the top of the stack) and students[j] is the preference of the j​​​​​​th student in the initial queue (j = 0 is the front of the queue). 
// Return the number of students that are unable to eat.
// Example 1:
// Input: students = [1,1,0,0], sandwiches = [0,1,0,1]
// Output: 0 
// Explanation:
// - Front student leaves the top sandwich and returns to the end of the line making students = [1,0,0,1].
// - Front student leaves the top sandwich and returns to the end of the line making students = [0,0,1,1].
// - Front student takes the top sandwich and leaves the line making students = [0,1,1] and sandwiches = [1,0,1].
// - Front student leaves the top sandwich and returns to the end of the line making students = [1,1,0].
// - Front student takes the top sandwich and leaves the line making students = [1,0] and sandwiches = [0,1].
// - Front student leaves the top sandwich and returns to the end of the line making students = [0,1].
// - Front student takes the top sandwich and leaves the line making students = [1] and sandwiches = [1].
// - Front student takes the top sandwich and leaves the line making students = [] and sandwiches = [].
// Hence all students are able to eat.
// Example 2:
// Input: students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]
// Output: 3

// @param {number[]} students
// @param {number[]} sandwiches
// @return {number}

var countStudents = function(students, sandwiches) {
    let circularCount = students.reduce((acc, curr) => acc + curr, 0);
    let squareCount = students.length - circularCount;
    
    for (let sandwich of sandwiches) {
        if (sandwich === 0) { // Square sandwich
            if (squareCount === 0) return circularCount; // All remaining students prefer circular sandwiches
            squareCount--;
        } else { // Circular sandwich
            if (circularCount === 0) return squareCount; // All remaining students prefer square sandwiches
            circularCount--;
        }
    }
    
    return 0; // All students were able to eat
};

console.log("==========================================")

// 2073. Time Needed to Buy Tickets
// Easy
// There are n people in a line queuing to buy tickets, where the 0th person is at the front of the line and the (n - 1)th person is at the back of the line.
// You are given a 0-indexed integer array tickets of length n where the number of tickets that the ith person would like to buy is tickets[i].
// Each person takes exactly 1 second to buy a ticket. 
// A person can only buy 1 ticket at a time and has to go back to the end of the line (which happens instantaneously) 
// in order to buy more tickets. If a person does not have any tickets left to buy, the person will leave the line.
// Return the time taken for the person at position k (0-indexed) to finish buying tickets.
// Example 1:
// Input: tickets = [2,3,2], k = 2
// Output: 6
// Explanation: 
// - In the first pass, everyone in the line buys a ticket and the line becomes [1, 2, 1].
// - In the second pass, everyone in the line buys a ticket and the line becomes [0, 1, 0].
// The person at position 2 has successfully bought 2 tickets and it took 3 + 3 = 6 seconds.
// Example 2:
// Input: tickets = [5,1,1,1], k = 0
// Output: 8
// Explanation:
// - In the first pass, everyone in the line buys a ticket and the line becomes [4, 0, 0, 0].
// - In the next 4 passes, only the person in position 0 is buying tickets.
// The person at position 0 has successfully bought 5 tickets and it took 4 + 1 + 1 + 1 + 1 = 8 seconds.

// @param {number[]} tickets
// @param {number} k
// @return {number}

var timeRequiredToBuy = function(tickets, k) {
    // Create a copy of the tickets array to avoid modifying the original
    const remainingTickets = tickets.slice();
    let totalTime = 0;
    
    // Continue looping until the person at position k has bought all their tickets
    while (remainingTickets[k] > 0) {
        // Loop through each person in the line
        for (let i = 0; i < remainingTickets.length; i++) {
            // If the person has tickets to buy, decrement their tickets and increment the total time
            if (remainingTickets[i] > 0) {
                remainingTickets[i]--;
                totalTime++;
                
                // If this person is at position k and has bought all their tickets, break the loop
                if (i === k && remainingTickets[k] === 0) {
                    break;
                }
            }
        }
    }
    
    return totalTime;
};

console.log("==========================================")

// 950. Reveal Cards In Increasing Order
// Medium
// You are given an integer array deck. 
// There is a deck of cards where every card has a unique integer. 
// The integer on the ith card is deck[i].
// You can order the deck in any order you want. 
// Initially, all the cards start face down (unrevealed) in one deck.
// You will do the following steps repeatedly until all cards are revealed:
// Take the top card of the deck, reveal it, and take it out of the deck.
// If there are still cards in the deck then put the next top card of the deck at the bottom of the deck.
// If there are still unrevealed cards, go back to step 1. Otherwise, stop.
// Return an ordering of the deck that would reveal the cards in increasing order.
// Note that the first entry in the answer is considered to be the top of the deck.
// Example 1:
// Input: deck = [17,13,11,2,3,5,7]
// Output: [2,13,3,11,5,17,7]
// Explanation: 
// We get the deck in the order [17,13,11,2,3,5,7] (this order does not matter), and reorder it.
// After reordering, the deck starts as [2,13,3,11,5,17,7], where 2 is the top of the deck.
// We reveal 2, and move 13 to the bottom.  The deck is now [3,11,5,17,7,13].
// We reveal 3, and move 11 to the bottom.  The deck is now [5,17,7,13,11].
// We reveal 5, and move 17 to the bottom.  The deck is now [7,13,11,17].
// We reveal 7, and move 13 to the bottom.  The deck is now [11,17,13].
// We reveal 11, and move 17 to the bottom.  The deck is now [13,17].
// We reveal 13, and move 17 to the bottom.  The deck is now [17].
// We reveal 17.
// Since all the cards revealed are in increasing order, the answer is correct.
// Example 2:

// Input: deck = [1,1000]
// Output: [1,1000]

// @param {number[]} deck
// @return {number[]}

function deckRevealedIncreasing(deck) {
    // Sort the deck in descending order (largest card first)
    deck.sort((a, b) => b - a);
  
    // Use an array as the queue (similar to deque)
    const queue = [];
  
    // Iterate through the sorted deck
    for (const card of deck) {
      // Simulate revealing process (move last element to front if queue is not empty)
      if (queue.length > 0) {
        queue.unshift(queue.pop());
      }
  
      // Place current card (largest) at the front
      queue.unshift(card);
    }
  
    // Return the queue (representing the reveal order)
    return queue;
  }

console.log("==========================================")

// 402. Remove K Digits
// Medium
// Given string num representing a non-negative integer num, and an integer k, 
// return the smallest possible integer after removing k digits from num.
// Example 1:
// Input: num = "1432219", k = 3
// Output: "1219"
// Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
// Example 2:
// Input: num = "10200", k = 1
// Output: "200"
// Explanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.
// Example 3:
// Input: num = "10", k = 2
// Output: "0"
// Explanation: Remove all the digits from the number and it is left with nothing which is 0.

// @param {string} num
// @param {number} k
// @return {string}

var removeKdigits = function(num, k) {
    if (k >= num.length) {
        return "0";
    }
    
    const stack = [];
    
    for (let i = 0; i < num.length; i++) {
        const currentDigit = num[i];
        
        // While we can remove elements from the stack (i.e., k > 0)
        // and the current digit is less than the top of the stack,
        // pop the stack to remove a larger digit.
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] > currentDigit) {
            stack.pop();
            k--;
        }
        
        // Add the current digit to the stack.
        stack.push(currentDigit);
    }
    
    // Remove the remaining k digits from the end of the stack if k > 0
    stack.splice(stack.length - k, k);
    
    // Join the stack to form the resulting number as a string.
    let result = stack.join("");
    
    // Remove leading zeros
    result = result.replace(/^0+/, "");
    
    // If the result is empty or reduced to an empty string, return "0"
    if (result === "") {
        return "0";
    }
    
    return result;
};

console.log("==========================================")

// 42. Trapping Rain Water
// Hard
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
// Example 1:
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. 
// In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:
// Input: height = [4,2,0,3,2,5]
// Output: 9

// @param {number[]} height
// @return {number}

var trap = function(height) {
    // Initialize pointers for left and right ends of the array
    let left = 0, right = height.length - 1;
    // Initialize variables to track the maximum height on the left and right sides
    let leftMax = 0, rightMax = 0;
    // Initialize a variable to track the total water trapped
    let waterTrapped = 0;

    // Traverse the array using the two pointers
    while (left < right) {
        if (height[left] < height[right]) {
            // If the height at left is less than the height at right
            // Update the left maximum height
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                // Calculate the water trapped at the current left index
                waterTrapped += leftMax - height[left];
            }
            // Move the left pointer to the right
            left++;
        } else {
            // If the height at right is less than or equal to the height at left
            // Update the right maximum height
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                // Calculate the water trapped at the current right index
                waterTrapped += rightMax - height[right];
            }
            // Move the right pointer to the left
            right--;
        }
    }

    // Return the total amount of water trapped
    return waterTrapped;
};

console.log("==========================================")

// 85. Maximal Rectangle
// Hard
// Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

// Example 1:
// Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
// Output: 6
// Explanation: The maximal rectangle is shown in the above picture.

// Example 2:
// Input: matrix = [["0"]]
// Output: 0

// Example 3:
// Input: matrix = [["1"]]
// Output: 1
 
// @param {character[][]} matrix
// @return {number}

var maximalRectangle = function(matrix) {
    if (matrix.length === 0) return 0;

    // Initialize heights array with zeros
    const heights = new Array(matrix[0].length).fill(0);
    let maxArea = 0;

    // Iterate through each row
    for (let row = 0; row < matrix.length; row++) {
        // Update heights based on the current row
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === '1') {
                heights[col]++;
            } else {
                heights[col] = 0;
            }
        }
        
        // Calculate the maximum rectangle area using the current heights
        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }
    
    return maxArea;
};

function largestRectangleArea(heights) {
    const stack = [];
    let maxArea = 0;
    let i = 0;
    
    while (i < heights.length) {
        // If the stack is empty or the current height is greater than the stack's top height, push index to stack
        if (stack.length === 0 || heights[i] >= heights[stack[stack.length - 1]]) {
            stack.push(i);
            i++;
        } else {
            // Pop the top element and calculate the area
            const height = heights[stack.pop()];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
    }
    
    // Final calculation for any remaining elements in the stack
    while (stack.length > 0) {
        const height = heights[stack.pop()];
        const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, height * width);
    }
    
    return maxArea;
};

console.log("==========================================")

// 404. Sum of Left Leaves
// Easy
// Given the root of a binary tree, return the sum of all left leaves.
// A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 24
// Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
// Example 2:
// Input: root = [1]
// Output: 0
 
// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }


// @param {TreeNode} root
// @return {number}

var sumOfLeftLeaves = function(root) {
    // Initialize sum of left leaves
    let sum = 0;

    // Helper function for depth-first search
    function dfs(node) {
        if (node == null) {
            // If node is null, return
            return;
        }
        
        // Check the left child
        if (node.left) {
            // Check if the left child is a leaf
            if (node.left.left === null && node.left.right === null) {
                // Add the value of the left leaf to the sum
                sum += node.left.val;
            } else {
                // Recurse on the left child
                dfs(node.left);
            }
        }
        
        // Recurse on the right child
        dfs(node.right);
    }

    // Start DFS from the root
    dfs(root);
    
    // Return the sum of left leaves
    return sum;
};

console.log("==========================================")

// 129. Sum Root to Leaf Numbers
// Medium
// You are given the root of a binary tree containing digits from 0 to 9 only.
// Each root-to-leaf path in the tree represents a number.
// For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
// Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.
// A leaf node is a node with no children.
// Example 1:
// Input: root = [1,2,3]
// Output: 25
// Explanation:
// The root-to-leaf path 1->2 represents the number 12.
// The root-to-leaf path 1->3 represents the number 13.
// Therefore, sum = 12 + 13 = 25.
// Example 2:
// Input: root = [4,9,0,5,1]
// Output: 1026
// Explanation:
// The root-to-leaf path 4->9->5 represents the number 495.
// The root-to-leaf path 4->9->1 represents the number 491.
// The root-to-leaf path 4->0 represents the number 40.
// Therefore, sum = 495 + 491 + 40 = 1026.

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// @param {TreeNode} root
// @return {number}

var sumNumbers = function(root) {
    // Initialize total sum as 0
    let totalSum = 0;

    // Helper function to perform DFS traversal
    function dfs(node, currentNumber) {
        // If the node is null, return immediately
        if (node === null) {
            return;
        }

        // Update the current number formed by the path
        currentNumber = currentNumber * 10 + node.val;

        // Check if the current node is a leaf
        if (node.left === null && node.right === null) {
            // Add the current number to total sum
            totalSum += currentNumber;
            return;
        }

        // Recursively traverse left and right children
        dfs(node.left, currentNumber);
        dfs(node.right, currentNumber);
    }

    // Start the DFS traversal from the root with the initial number as 0
    dfs(root, 0);

    // Return the total sum of all root-to-leaf numbers
    return totalSum;
};

console.log("==========================================")

// 623. Add One Row to Tree
// Medium
// Given the root of a binary tree and two integers val and depth, add a row of nodes with value val at the given depth depth.
// Note that the root node is at depth 1.
// The adding rule is:
// Given the integer depth, for each not null tree node cur at the depth depth - 1, 
// create two tree nodes with value val as cur's left subtree root and right subtree root.
// cur's original left subtree should be the left subtree of the new left subtree root.
// cur's original right subtree should be the right subtree of the new right subtree root.
// If depth == 1 that means there is no depth depth - 1 at all, 
// then create a tree node with value val as the new root of the whole original tree, 
// and the original tree is the new root's left subtree.
// Example 1:
// Input: root = [4,2,6,3,1,5], val = 1, depth = 2
// Output: [4,1,1,2,null,null,6,3,1,5]
// Example 2:
// Input: root = [4,2,null,3,1], val = 1, depth = 3
// Output: [4,2,null,1,1,3,null,null,1]

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// @param {TreeNode} root
// @param {number} val
// @param {number} depth
// @return {TreeNode}

var addOneRow = function(root, val, depth) {
    // Handle case when depth is 1
    if (depth === 1) {
        // Create a new root node with value val
        const newRoot = new TreeNode(val);
        // Set the original root as the left child of the new root
        newRoot.left = root;
        // Return the new root
        return newRoot;
    }
    
    // Function to traverse the tree recursively
    function traverseAndAdd(node, currentDepth) {
        // Base case: if node is null, return
        if (node === null) {
            return;
        }
        
        // If we are at the depth minus one level, add the new row
        if (currentDepth === depth - 1) {
            // Create new left and right nodes with value val
            const newLeftNode = new TreeNode(val);
            const newRightNode = new TreeNode(val);
            
            // Set the original left and right children as children of new nodes
            newLeftNode.left = node.left;
            newRightNode.right = node.right;
            
            // Attach the new nodes to the current node
            node.left = newLeftNode;
            node.right = newRightNode;
        } else {
            // Otherwise, recursively traverse left and right children
            traverseAndAdd(node.left, currentDepth + 1);
            traverseAndAdd(node.right, currentDepth + 1);
        }
    }
    
    // Start the recursive traversal from the root with depth 1
    traverseAndAdd(root, 1);
    
    // Return the modified root
    return root;
};

console.log("==========================================")

// 988. Smallest String Starting From Leaf
// Medium
// You are given the root of a binary tree where each node has a value in the range [0, 25] representing the letters 'a' to 'z'.
// Return the lexicographically smallest string that starts at a leaf of this tree and ends at the root.
// As a reminder, any shorter prefix of a string is lexicographically smaller.
// For example, "ab" is lexicographically smaller than "aba".
// A leaf of a node is a node that has no children.
// Example 1:
// Input: root = [0,1,2,3,4,3,4]
// Output: "dba"
// Example 2:
// Input: root = [25,1,3,1,3,0,2]
// Output: "adz"
// Example 3:
// Input: root = [2,2,1,null,1,0,null,0]
// Output: "abc"

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// @param {TreeNode} root
// @return {string}

var smallestFromLeaf = function(root) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

// @param {TreeNode} root
// @return {string}
var smallestFromLeaf = function(root) {
    let smallestString = null;

    function dfs(node, currentPath) {
        // If the node is null, return immediately
        if (!node) {
            return;
        }

        // Prepend the current node's value (converted to a character) to the current path
        currentPath = String.fromCharCode(97 + node.val) + currentPath;

        // If this is a leaf node, check the current path
        if (!node.left && !node.right) {
            // Compare the current path with the smallest path found so far
            if (smallestString === null || currentPath < smallestString) {
                smallestString = currentPath;
            }
            return;
        }

        // Recursively explore left and right children
        dfs(node.left, currentPath);
        dfs(node.right, currentPath);
    }

    // Start DFS traversal from the root node
    dfs(root, "");

    return smallestString;
};

console.log("==========================================")

// 463. Island Perimeter
// Easy
// You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.
// Grid cells are connected horizontally/vertically (not diagonally). 
// The grid is completely surrounded by water, and there is exactly one island 
// (i.e., one or more connected land cells).
// The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. 
// One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. 
// Determine the perimeter of the island.

// Example 1:
// Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
// Output: 16
// Explanation: The perimeter is the 16 yellow stripes in the image above.

// Example 2:
// Input: grid = [[1]]
// Output: 4

// Example 3:
// Input: grid = [[1,0]]
// Output: 4
 
// @param {number[][]} grid
// @return {number}

var islandPerimeter = function(grid) {
    let perimeter = 0;
    const rows = grid.length;
    const cols = grid[0].length;
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // If the cell is land
            if (grid[i][j] === 1) {
                // Check top
                if (i === 0 || grid[i - 1][j] === 0) {
                    perimeter++;
                }
                // Check left
                if (j === 0 || grid[i][j - 1] === 0) {
                    perimeter++;
                }
                // Check bottom
                if (i === rows - 1 || grid[i + 1][j] === 0) {
                    perimeter++;
                }
                // Check right
                if (j === cols - 1 || grid[i][j + 1] === 0) {
                    perimeter++;
                }
            }
        }
    }
    
    return perimeter;
};

console.log("==========================================")

// 200. Number of Islands
// Medium
// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
// You may assume all four edges of the grid are all surrounded by water.
// Example 1:
// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

// Example 2:
// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

// @param {character[][]} grid
// @return {number}

var numIslands = function(grid) {
    // Function to perform Depth-First Search on the grid
    function dfs(grid, row, col) {
        // Check if the current position is within bounds and is land ('1')
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === '0') {
            return;
        }
        // Mark the current cell as visited by setting it to '0' (water)
        grid[row][col] = '0';
        
        // Recursively visit the adjacent cells in four directions (up, down, left, right)
        dfs(grid, row - 1, col); // Up
        dfs(grid, row + 1, col); // Down
        dfs(grid, row, col - 1); // Left
        dfs(grid, row, col + 1); // Right
    }

    // Initialize the count of islands
    let islandCount = 0;

    // Iterate through each cell in the grid
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            // If the cell is land ('1'), start a DFS to mark all connected land cells
            if (grid[row][col] === '1') {
                dfs(grid, row, col);
                // Increment the island count as we've found a new island
                islandCount++;
            }
        }
    }

    // Return the total number of islands found
    return islandCount;
};

console.log("==========================================")

// 1992. Find All Groups of Farmland
// Medium
// You are given a 0-indexed m x n binary matrix land where a 0 represents a hectare of forested land and a 1 represents a hectare of farmland.
// To keep the land organized, there are designated rectangular areas of hectares that consist entirely of farmland.
// These rectangular areas are called groups. No two groups are adjacent, 
// meaning farmland in one group is not four-directionally adjacent to another farmland in a different group.
// land can be represented by a coordinate system where the top left corner of land is (0, 0) 
// and the bottom right corner of land is (m-1, n-1). Find the coordinates of the top left and bottom right corner of each group of farmland. 
// A group of farmland with a top left corner at (r1, c1) and a bottom right corner at (r2, c2) is represented by the 4-length array [r1, c1, r2, c2].
// Return a 2D array containing the 4-length arrays described above for each group of farmland in land. 
// If there are no groups of farmland, return an empty array. You may return the answer in any order.

// Example 1:
// Input: land = [[1,0,0],[0,1,1],[0,1,1]]
// Output: [[0,0,0,0],[1,1,2,2]]
// Explanation:
// The first group has a top left corner at land[0][0] and a bottom right corner at land[0][0].
// The second group has a top left corner at land[1][1] and a bottom right corner at land[2][2].

// Example 2:
// Input: land = [[1,1],[1,1]]
// Output: [[0,0,1,1]]
// Explanation:
// The first group has a top left corner at land[0][0] and a bottom right corner at land[1][1].

// Example 3:
// Input: land = [[0]]
// Output: []
// Explanation:
// There are no groups of farmland.

// @param {number[][]} land
// @return {number[][]}

var findFarmland = function(land) {
    const result = [];
    const m = land.length;
    const n = land[0].length;
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (land[i][j] === 1) {
                let rowEnd = i;
                let colEnd = j;
                
                // Find the bottom right corner of the group
                while (rowEnd < m && land[rowEnd][j] === 1) {
                    colEnd = j;
                    while (colEnd < n && land[rowEnd][colEnd] === 1) {
                        colEnd++;
                    }
                    rowEnd++;
                }
                rowEnd--; // Adjust to the actual bottom row
                
                // Add coordinates to the result
                result.push([i, j, rowEnd, colEnd - 1]);
                
                // Mark the current group as visited
                for (let row = i; row <= rowEnd; row++) {
                    for (let col = j; col <= colEnd - 1; col++) {
                        land[row][col] = 0;
                    }
                }
            }
        }
    }
    
    return result;
};

console.log("==========================================")

// 1971. Find if Path Exists in Graph
// Easy
// There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). 
// The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. 
// Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.
// You want to determine if there is a valid path that exists from vertex source to vertex destination.
// Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.
// Example 1:
// Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
// Output: true
// Explanation: There are two paths from vertex 0 to vertex 2:
// - 0 → 1 → 2
// - 0 → 2
// Example 2:


// Input: n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
// Output: false
// Explanation: There is no path from vertex 0 to vertex 5.
 
// @param {number} n
// @param {number[][]} edges
// @param {number} source
// @param {number} destination
// @return {boolean}

var validPath = function(n, edges, source, destination) {
    // Create an adjacency list to represent the graph
    const adjacencyList = {};
    for (let i = 0; i < edges.length; i++) {
        const [u, v] = edges[i];
        if (!adjacencyList[u]) adjacencyList[u] = [];
        if (!adjacencyList[v]) adjacencyList[v] = [];
        adjacencyList[u].push(v);
        adjacencyList[v].push(u);
    }
    
    // Create a visited array to keep track of visited vertices
    const visited = new Array(n).fill(false);
    
    // Define a DFS function to traverse the graph
    const dfs = (vertex) => {
        // Mark the current vertex as visited
        visited[vertex] = true;
        
        // If the current vertex is the destination, return true
        if (vertex === destination) return true;
        
        // Traverse all adjacent vertices
        for (const neighbor of adjacencyList[vertex]) {
            // If the neighbor vertex has not been visited, recursively call dfs
            if (!visited[neighbor] && dfs(neighbor)) {
                return true;
            }
        }
        
        // If no valid path found from this vertex, backtrack
        return false;
    };
    
    // Start DFS from the source vertex
    return dfs(source);
};

console.log("==========================================")

// 752. Open the Lock
// Medium
// You have a lock in front of you with 4 circular wheels. Each wheel has 10 slots: '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'.
// The wheels can rotate freely and wrap around: for example we can turn '9' to be '0', or '0' to be '9'. 
// Each move consists of turning one wheel one slot.
// The lock initially starts at '0000', a string representing the state of the 4 wheels.

// You are given a list of deadends dead ends, meaning if the lock displays any of these codes, 
// the wheels of the lock will stop turning and you will be unable to open it.

// Given a target representing the value of the wheels that will unlock the lock, 
// return the minimum total number of turns required to open the lock, or -1 if it is impossible.

// Example 1:
// Input: deadends = ["0201","0101","0102","1212","2002"], target = "0202"
// Output: 6
// Explanation: 
// A sequence of valid moves would be "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202".
// Note that a sequence like "0000" -> "0001" -> "0002" -> "0102" -> "0202" would be invalid,
// because the wheels of the lock become stuck after the display becomes the dead end "0102".

// Example 2:
// Input: deadends = ["8888"], target = "0009"
// Output: 1
// Explanation: We can turn the last wheel in reverse to move from "0000" -> "0009".

// Example 3:
// Input: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
// Output: -1
// Explanation: We cannot reach the target without getting stuck.

// @param {string[]} deadends
// @param {string} target
// @return {number}

var openLock = function(deadends, target) {
    const visited = new Set(deadends);
    const queue = ['0000'];
    let moves = 0;
    
    while (queue.length > 0) {
        const size = queue.length;
        
        for (let i = 0; i < size; i++) {
            const current = queue.shift();
            
            if (current === target) {
                return moves;
            }
            
            if (visited.has(current)) {
                continue;
            }
            
            visited.add(current);
            
            for (let j = 0; j < 4; j++) {
                const digit = parseInt(current[j]);
                
                for (let diff of [-1, 1]) {
                    const nextDigit = (digit + diff + 10) % 10;
                    const nextCombination = current.slice(0, j) + nextDigit + current.slice(j + 1);
                    
                    if (!visited.has(nextCombination)) {
                        queue.push(nextCombination);
                    }
                }
            }
        }
        
        moves++;
    }
    
    return -1;
};

console.log("==========================================")

// 310. Minimum Height Trees
// Medium
// A tree is an undirected graph in which any two vertices are connected by exactly one path. 
// In other words, any connected graph without simple cycles is a tree.
// Given a tree of n nodes labelled from 0 to n - 1, and an array of n - 1 edges where edges[i] = [ai, bi] 
// indicates that there is an undirected edge between the two nodes ai and bi in the tree, 
// you can choose any node of the tree as the root. When you select a node x as the root, 
// the result tree has height h. Among all possible rooted trees, those with minimum height (i.e. min(h))  
// are called minimum height trees (MHTs).
// Return a list of all MHTs' root labels. You can return the answer in any order.
// The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.

// Example 1:
// Input: n = 4, edges = [[1,0],[1,2],[1,3]]
// Output: [1]
// Explanation: As shown, the height of the tree is 1 when the root is the node with label 1 which is the only MHT.

// Example 2:
// Input: n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
// Output: [3,4]

// @param {number} n
// @param {number[][]} edges
// @return {number[]}

var findMinHeightTrees = function(n, edges) {
    if (n === 1) return [0]; // Special case when there is only one node
    
    // Step 1: Create adjacency list
    const adjacencyList = new Array(n).fill(null).map(() => []);
    const degrees = new Array(n).fill(0);
    for (const [u, v] of edges) {
        adjacencyList[u].push(v);
        adjacencyList[v].push(u);
        degrees[u]++;
        degrees[v]++;
    }
    
    // Step 2: Initialize queue with leaf nodes
    const queue = [];
    for (let i = 0; i < n; i++) {
        if (degrees[i] === 1) {
            queue.push(i);
        }
    }
    
    // Step 3: Remove leaf nodes iteratively until 1 or 2 nodes remain
    while (n > 2) {
        const size = queue.length;
        n -= size;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            for (const neighbor of adjacencyList[node]) {
                degrees[neighbor]--;
                if (degrees[neighbor] === 1) {
                    queue.push(neighbor);
                }
            }
        }
    }
    
    // Step 4: Remaining nodes in the queue are the roots of MHTs
    return queue;
};

console.log("==========================================")

// 1137. N-th Tribonacci Number
// Easy
// The Tribonacci sequence Tn is defined as follows: 
// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
// Given n, return the value of Tn.

// Example 1:
// Input: n = 4
// Output: 4
// Explanation:
// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4

// Example 2:
// Input: n = 25
// Output: 1389537

// @param {number} n
// @return {number}

var tribonacci = function(n) {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;
    
    let dp = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }
    
    return dp[n];
};

console.log("==========================================")

// 2370. Longest Ideal Subsequence
// Medium
// You are given a string s consisting of lowercase letters and an integer k. 
// We call a string t ideal if the following conditions are satisfied:
// t is a subsequence of the string s.
// The absolute difference in the alphabet order of every two adjacent letters in t is less than or equal to k.
// Return the length of the longest ideal string.
// A subsequence is a string that can be derived from another string by deleting some or no characters without 
// changing the order of the remaining characters.
// Note that the alphabet order is not cyclic. For example, the absolute difference in the alphabet order 
// of 'a' and 'z' is 25, not 1.

// Example 1:
// Input: s = "acfgbd", k = 2
// Output: 4
// Explanation: The longest ideal string is "acbd". The length of this string is 4, so 4 is returned.
// Note that "acfgbd" is not ideal because 'c' and 'f' have a difference of 3 in alphabet order.

// Example 2:
// Input: s = "abcd", k = 3
// Output: 4
// Explanation: The longest ideal string is "abcd". The length of this string is 4, so 4 is returned.


// @param {string} s
// @param {number} k
// @return {number}

var longestIdealString = function(s, k) {
    const dp = Array(26).fill(0);

    for (const c of s) {
        const i = c.charCodeAt(0) - 'a'.charCodeAt(0);
        dp[i] = 1 + getMaxReachable(dp, i, k);
    }

    return Math.max(...dp);
};

function getMaxReachable(dp, i, k) {
    const first = Math.max(0, i - k);
    const last = Math.min(25, i + k);
    let maxReachable = 0;
    for (let j = first; j <= last; j++) {
        maxReachable = Math.max(maxReachable, dp[j]);
    }
    return maxReachable;
}

console.log("==========================================")

// 514. Freedom Trail
// Hard
// In the video game Fallout 4, the quest "Road to Freedom" requires players to reach a metal dial called the 
// "Freedom Trail Ring" and use the dial to spell a specific keyword to open the door.

// Given a string ring that represents the code engraved on the outer ring and another string key 
// that represents the keyword that needs to be spelled, return the minimum number of steps 
// to spell all the characters in the keyword.

// Initially, the first character of the ring is aligned at the "12:00" direction. 
// You should spell all the characters in key one by one by rotating ring clockwise or anticlockwise 
// to make each character of the string key aligned at the "12:00" direction and then by pressing the center button.

// At the stage of rotating the ring to spell the key character key[i]:

// You can rotate the ring clockwise or anticlockwise by one place, which counts as one step. 
// The final purpose of the rotation is to align one of ring's characters at the "12:00" direction, 
// where this character must equal key[i].
// If the character key[i] has been aligned at the "12:00" direction, press the center button to spell, 
// which also counts as one step. After the pressing, you could begin to spell the next character in the key 
// (next stage). Otherwise, you have finished all the spelling.

// Example 1:
// Input: ring = "godding", key = "gd"
// Output: 4
// Explanation:
// For the first key character 'g', since it is already in place, we just need 1 step to spell this character. 
// For the second key character 'd', we need to rotate the ring "godding" anticlockwise by two steps to make it become "ddinggo".
// Also, we need 1 more step for spelling.
// So the final output is 4.

// Example 2:
// Input: ring = "godding", key = "godding"
// Output: 13


// @param {string} ring
// @param {string} key
// @return {number}

var findRotateSteps = function(ring, key) {
    const memo = new Map(); // Map for memoization
    
    // Helper function to calculate minimum steps
    const minSteps = (ringIndex, keyIndex) => {
        // If all characters in key are spelled
        if (keyIndex === key.length) return 0;
        
        // If result for current indices is already memoized
        const memoKey = ringIndex + '-' + keyIndex;
        if (memo.has(memoKey)) return memo.get(memoKey);
        
        const char = key[keyIndex];
        let min = Infinity;
        
        // Iterate over possible positions on the ring
        for (let i = 0; i < ring.length; i++) {
            if (ring[i] === char) {
                // Calculate steps needed to align current character
                const clockWiseSteps = Math.abs(i - ringIndex);
                const counterClockWiseSteps = ring.length - clockWiseSteps;
                
                // Recursively calculate minimum steps for the next character
                const steps = 1 + Math.min(clockWiseSteps, counterClockWiseSteps) + 
                              minSteps(i, keyIndex + 1);
                
                // Update minimum steps
                min = Math.min(min, steps);
            }
        }
        
        // Memoize the result
        memo.set(memoKey, min);
        return min;
    };
    
    // Call helper function with initial parameters
    return minSteps(0, 0);
};

console.log("==========================================")

// 834. Sum of Distances in Tree
// Hard
// There is an undirected connected tree with n nodes labeled from 0 to n - 1 and n - 1 edges.

// You are given the integer n and the array edges where edges[i] = [ai, bi] 
// indicates that there is an edge between nodes ai and bi in the tree.

// Return an array answer of length n where answer[i] is the sum of the distances 
// between the ith node in the tree and all other nodes.

// Example 1:
// Input: n = 6, edges = [[0,1],[0,2],[2,3],[2,4],[2,5]]
// Output: [8,12,6,10,10,10]
// Explanation: The tree is shown above.
// We can see that dist(0,1) + dist(0,2) + dist(0,3) + dist(0,4) + dist(0,5)
// equals 1 + 1 + 2 + 2 + 2 = 8.
// Hence, answer[0] = 8, and so on.

// Example 2:
// Input: n = 1, edges = []
// Output: [0]

// Example 3:
// Input: n = 2, edges = [[1,0]]
// Output: [1,1]

// @param {number} n
// @param {number[][]} edges
// @return {number[]}

var sumOfDistancesInTree = function(n, edges) {
    const tree = new Array(n).fill(0).map(() => []);
    const count = new Array(n).fill(1);
    const ans = new Array(n).fill(0);

    // Build the adjacency list representation of the tree
    edges.forEach(([u, v]) => {
        tree[u].push(v);
        tree[v].push(u);
    });

    // Function to perform depth-first search
    const dfs = (node, parent) => {
        for (const child of tree[node]) {
            if (child === parent) continue;
            dfs(child, node);
            count[node] += count[child];
            ans[node] += ans[child] + count[child];
        }
    };

    // Function to calculate the sum of distances for each node
    const calculateDistances = (node, parent) => {
        for (const child of tree[node]) {
            if (child === parent) continue;
            ans[child] = ans[node] - count[child] + (n - count[child]);
            calculateDistances(child, node);
        }
    };

    // Perform the depth-first search from node 0
    dfs(0, -1);
    // Calculate distances for each node
    calculateDistances(0, -1);

    return ans;
};

console.log("==========================================")

// 2997. Minimum Number of Operations to Make Array XOR Equal to K
// Medium
// You are given a 0-indexed integer array nums and a positive integer k.
// You can apply the following operation on the array any number of times:
// Choose any element of the array and flip a bit in its binary representation. 
// Flipping a bit means changing a 0 to 1 or vice versa.
// Return the minimum number of operations required to make the bitwise XOR of all elements 
// of the final array equal to k.
// Note that you can flip leading zero bits in the binary representation of elements. 
// For example, for the number (101)2 you can flip the fourth bit and obtain (1101)2.

// Example 1:
// Input: nums = [2,1,3,4], k = 1
// Output: 2
// Explanation: We can do the following operations:
// - Choose element 2 which is 3 == (011)2, we flip the first bit and we obtain (010)2 == 2. nums becomes [2,1,2,4].
// - Choose element 0 which is 2 == (010)2, we flip the third bit and we obtain (110)2 = 6. nums becomes [6,1,2,4].
// The XOR of elements of the final array is (6 XOR 1 XOR 2 XOR 4) == 1 == k.
// It can be shown that we cannot make the XOR equal to k in less than 2 operations

// Example 2:
// Input: nums = [2,0,2,0], k = 0
// Output: 0
// Explanation: The XOR of elements of the array is (2 XOR 0 XOR 2 XOR 0) == 0 == k. So no operation is needed.

// @param {number[]} nums
// @param {number} k
// @return {number}

var minOperations = function(nums, k) {
    for (const num of nums) {
        k ^= num
      }
      return k.toString(2).replaceAll(/0/g, "").length
};

console.log("==========================================")

// 1915. Number of Wonderful Substrings
// Medium
// A wonderful string is a string where at most one letter appears an odd number of times.
// For example, "ccjjc" and "abab" are wonderful, but "ab" is not.
// Given a string word that consists of the first ten lowercase English letters ('a' through 'j'),
// return the number of wonderful non-empty substrings in word. 
// If the same substring appears multiple times in word, then count each occurrence separately.
// A substring is a contiguous sequence of characters in a string.

// Example 1:
// Input: word = "aba"
// Output: 4
// Explanation: The four wonderful substrings are underlined below:
// - "aba" -> "a"
// - "aba" -> "b"
// - "aba" -> "a"
// - "aba" -> "aba"

// Example 2:
// Input: word = "aabb"
// Output: 9
// Explanation: The nine wonderful substrings are underlined below:
// - "aabb" -> "a"
// - "aabb" -> "aa"
// - "aabb" -> "aab"
// - "aabb" -> "aabb"
// - "aabb" -> "a"
// - "aabb" -> "abb"
// - "aabb" -> "b"
// - "aabb" -> "bb"
// - "aabb" -> "b"

// Example 3:
// Input: word = "he"
// Output: 2
// Explanation: The two wonderful substrings are underlined below:
// - "he" -> "h"
// - "he" -> "e"

// @param {string} word
// @return {number}

var wonderfulSubstrings = function(word) {
    const map = new Map();
    map.set(0, 1);
    let mask = 0;
    let result = 0;
    
    for (const char of word) {
        const charIndex = char.charCodeAt(0) - 'a'.charCodeAt(0);
        mask ^= 1 << charIndex;
        result += map.get(mask) || 0;
        
        for (let i = 0; i < 10; i++) {
            const newMask = mask ^ (1 << i);
            result += map.get(newMask) || 0;
        }
        
        map.set(mask, (map.get(mask) || 0) + 1);
    }
    
    return result;
};

console.log("==========================================")

// 2000. Reverse Prefix of Word
// Easy
// Given a 0-indexed string word and a character ch, 
// reverse the segment of word that starts at index 0 and ends at the index of the first occurrence 
// of ch (inclusive). If the character ch does not exist in word, do nothing.

// For example, if word = "abcdefd" and ch = "d", 
// then you should reverse the segment that starts at 0 and ends at 3 (inclusive). 
// The resulting string will be "dcbaefd".
// Return the resulting string.

// Example 1:
// Input: word = "abcdefd", ch = "d"
// Output: "dcbaefd"
// Explanation: The first occurrence of "d" is at index 3. 
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".

// Example 2:
// Input: word = "xyxzxe", ch = "z"
// Output: "zxyxxe"
// Explanation: The first and only occurrence of "z" is at index 3.
// Reverse the part of word from 0 to 3 (inclusive), the resulting string is "zxyxxe".

// Example 3:
// Input: word = "abcd", ch = "z"
// Output: "abcd"
// Explanation: "z" does not exist in word.
// You should not do any reverse operation, the resulting string is "abcd".

// @param {string} word
// @param {character} ch
// @return {string}

var reversePrefix = function(word, ch) {
    const index = word.indexOf(ch); // Find the index of the first occurrence of ch
    
    if (index !== -1) { // If ch exists in word
        const prefix = word.substring(0, index + 1); // Extract the substring to be reversed
        const reversedPrefix = prefix.split('').reverse().join(''); // Reverse the substring
        return reversedPrefix + word.substring(index + 1); // Concatenate the reversed prefix with the rest of word
    }
    
    return word; // If ch doesn't exist, return the original word
};

console.log("==========================================")

// 2441. Largest Positive Integer That Exists With Its Negative
// Easy
// Given an integer array nums that does not contain any zeros, find the largest positive integer k such that -k also exists in the array.
// Return the positive integer k. If there is no such integer, return -1.

// Example 1:
// Input: nums = [-1,2,-3,3]
// Output: 3
// Explanation: 3 is the only valid k we can find in the array.

// Example 2:
// Input: nums = [-1,10,6,7,-7,1]
// Output: 7
// Explanation: Both 1 and 7 have their corresponding negative values in the array. 7 has a larger value.

// Example 3:
// Input: nums = [-10,8,6,7,-2,-3]
// Output: -1
// Explanation: There is no a single valid k, we return -1.

// @param {number[]} nums
// @return {number}

var findMaxK = function(nums) {
    let maxK = -1;
    const numSet = new Set(nums);

    for (let num of nums) {
        if (num > 0 && numSet.has(-num)) {
            maxK = Math.max(maxK, num);
        }
    }

    return maxK;
};

console.log("==========================================")

// 165. Compare Version Numbers
// Medium
// Given two version numbers, version1 and version2, compare them.
// Version numbers consist of one or more revisions joined by a dot '.'. 
// Each revision consists of digits and may contain leading zeros. 
// Every revision contains at least one character. 
// Revisions are 0-indexed from left to right, with the leftmost revision being revision 0, 
// the next revision being revision 1, and so on. For example 2.5.33 and 0.1 are valid version numbers.
// To compare version numbers, compare their revisions in left-to-right order. 
// Revisions are compared using their integer value ignoring any leading zeros. 
// This means that revisions 1 and 001 are considered equal. 
// If a version number does not specify a revision at an index, then treat the revision as 0. For example, 
// version 1.0 is less than version 1.1 because their revision 0s are the same, but their revision 1s are 0 and 1 respectively, and 0 < 1.
// Return the following:

// If version1 < version2, return -1.
// If version1 > version2, return 1.
// Otherwise, return 0.
 

// Example 1:
// Input: version1 = "1.01", version2 = "1.001"
// Output: 0
// Explanation: Ignoring leading zeroes, both "01" and "001" represent the same integer "1".

// Example 2:
// Input: version1 = "1.0", version2 = "1.0.0"
// Output: 0
// Explanation: version1 does not specify revision 2, which means it is treated as "0".

// Example 3:
// Input: version1 = "0.1", version2 = "1.1"
// Output: -1
// Explanation: version1's revision 0 is "0", while version2's revision 0 is "1". 0 < 1, so version1 < version2.

// @param {string} version1
// @param {string} version2
// @return {number}

var compareVersion = function(version1, version2) {
    const v1Revisions = version1.split('.');
    const v2Revisions = version2.split('.');
    
    const maxLength = Math.max(v1Revisions.length, v2Revisions.length);
    
    for (let i = 0; i < maxLength; i++) {
        const v1Rev = parseInt(v1Revisions[i] || '0');
        const v2Rev = parseInt(v2Revisions[i] || '0');
        
        if (v1Rev < v2Rev) return -1;
        if (v1Rev > v2Rev) return 1;
    }
    
    return 0;
};

console.log("==========================================")

// 881. Boats to Save People
// Medium
// You are given an array people where people[i] is the weight of the ith person, 
// and an infinite number of boats where each boat can carry a maximum weight of limit. 
// Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.
// Return the minimum number of boats to carry every given person.

// Example 1:
// Input: people = [1,2], limit = 3
// Output: 1
// Explanation: 1 boat (1, 2)

// Example 2:
// Input: people = [3,2,2,1], limit = 3
// Output: 3
// Explanation: 3 boats (1, 2), (2) and (3)

// Example 3:
// Input: people = [3,5,3,4], limit = 5
// Output: 4
// Explanation: 4 boats (3), (3), (4), (5)

// @param {number[]} people
// @param {number} limit
// @return {number}

var numRescueBoats = function(people, limit) {
    // Step 1: Sort the array of people
    people.sort((a, b) => a - b);
    
    // Step 2: Initialize pointers and boat count
    let left = 0;
    let right = people.length - 1;
    let boats = 0;
    
    // Step 4: Iterate through the array
    while (left <= right) {
        // Step 4a: Check if both people can fit on the boat
        if (people[left] + people[right] <= limit) {
            left++; // Increment left pointer
            right--; // Decrement right pointer
        } else {
            right--; // Decrement right pointer (only one person can fit)
        }
        // Step 5: Increment boat count
        boats++;
    }
    
    // Step 6: Return boat count
    return boats;
};


console.log("==========================================")

// 237. Delete Node in a Linked List
// Medium
// There is a singly-linked list head and we want to delete a node node in it.
// You are given the node to be deleted node. You will not be given access to the first node of head.
// All the values of the linked list are unique, and it is guaranteed 
// that the given node node is not the last node in the linked list.
// Delete the given node. Note that by deleting the node, we do not mean removing it from memory. We mean:
// The value of the given node should not exist in the linked list.
// The number of nodes in the linked list should decrease by one.
// All the values before node should be in the same order.
// All the values after node should be in the same order.
// Custom testing:
// For the input, you should provide the entire linked list head and the node to be given node. node should not be the last node of the list and should be an actual node in the list.
// We will build the linked list and pass the node to your function.
// The output will be the entire list after calling your function.
 
// Example 1:
// Input: head = [4,5,1,9], node = 5
// Output: [4,1,9]
// Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.

// Example 2:
// Input: head = [4,5,1,9], node = 1
// Output: [4,5,9]
// Explanation: You are given the third node with value 1, the linked list should become 4 -> 5 -> 9 after calling your function.

// Definition for singly-linked list.
// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }

// @param {ListNode} node
// @return {void} Do not return anything, modify node in-place instead.

var deleteNode = function(node) {
    if (!node || !node.next) return; // Check if the node or its next node is null
    
    // Copy the value of the next node to the current node
    node.val = node.next.val;
    
    // Remove the next node by skipping it
    node.next = node.next.next;
};

console.log("==========================================")

// 2487. Remove Nodes From Linked List
// Medium
// You are given the head of a linked list.
// Remove every node which has a node with a greater value anywhere to the right side of it.
// Return the head of the modified linked list.

// Example 1:
// Input: head = [5,2,13,3,8]
// Output: [13,8]
// Explanation: The nodes that should be removed are 5, 2 and 3.
// - Node 13 is to the right of node 5.
// - Node 13 is to the right of node 2.
// - Node 8 is to the right of node 3.

// Example 2:
// Input: head = [1,1,1,1]
// Output: [1,1,1,1]
// Explanation: Every node has value 1, so no nodes are removed.

// Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// @param {ListNode} head
// @return {ListNode}

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

var removeNodes = function(head) {
    if (!head) return head;

    let dummy = new ListNode(-1);
    dummy.next = head;
    let current = head;
    let prev = dummy;
    let stack = [];

    while (current) {
        // Traverse the stack and remove nodes with greater values
        while (stack.length > 0 && stack[stack.length - 1].val < current.val) {
            stack.pop();
        }
        // Add the current node to the stack
        stack.push(current);
        // Move to the next node
        current = current.next;
    }

    // Link the nodes from the stack
    prev.next = stack[0];
    for (let i = 0; i < stack.length; i++) {
        stack[i].next = (i + 1 < stack.length) ? stack[i + 1] : null;
    }

    return dummy.next;
};

console.log("==========================================")

2816. Double a Number Represented as a Linked List
Medium
Topics
Companies
Hint
You are given the head of a non-empty linked list representing a non-negative integer without leading zeroes.

Return the head of the linked list after doubling it.

 

Example 1:


Input: head = [1,8,9]
Output: [3,7,8]
Explanation: The figure above corresponds to the given linked list which represents the number 189. 
Hence, the returned linked list represents the number 189 * 2 = 378.
Example 2:


Input: head = [9,9,9]
Output: [1,9,9,8]
Explanation: The figure above corresponds to the given linked list which represents the number 999. 
Hence, the returned linked list reprersents the number 999 * 2 = 1998. 

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var doubleIt = function(head) {
    
};
console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// git commit -m "LEET, branch:leet, the 30 days of JS challenge: Timout Cancellation: EASY"