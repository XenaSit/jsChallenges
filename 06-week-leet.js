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

// 2816. Double a Number Represented as a Linked List
// Medium
// You are given the head of a non-empty linked list representing a non-negative integer without leading zeroes.
// Return the head of the linked list after doubling it.

// Example 1:
// Input: head = [1,8,9]
// Output: [3,7,8]
// Explanation: The figure above corresponds to the given linked list which represents the number 189. 
// Hence, the returned linked list represents the number 189 * 2 = 378.

// Example 2:
// Input: head = [9,9,9]
// Output: [1,9,9,8]
// Explanation: The figure above corresponds to the given linked list which represents the number 999. 
// Hence, the returned linked list reprersents the number 999 * 2 = 1998. 

// Definition for singly-linked list.
// function ListNode(val, next) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
// }

// @param {ListNode} head
// @return {ListNode}

var doubleIt = function(head) {
    // Helper function to reverse a linked list
    const reverseLinkedList = function(node) {
        let prev = null;
        let current = node;
        let next = null;
        
        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        
        return prev;
    };
    
    // Reverse the linked list to simplify carry handling
    let reversedHead = reverseLinkedList(head);
    
    let current = reversedHead;
    let carry = 0;

    while (current !== null) {
        let newVal = current.val * 2 + carry;
        current.val = newVal % 10;
        carry = Math.floor(newVal / 10);
        
        // If there's a carry and no next node, create one
        if (carry > 0 && current.next === null) {
            current.next = new ListNode(carry);
            break;
        }
        
        current = current.next;
    }

    // Reverse the linked list back to its original order
    reversedHead = reverseLinkedList(reversedHead);
    
    return reversedHead;
};
console.log("==========================================")

// 506. Relative Ranks
// Easy
// You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. 
// All the scores are guaranteed to be unique.
// The athletes are placed based on their scores, where the 1st place athlete has the highest score, 
// the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:
// The 1st place athlete's rank is "Gold Medal".
// The 2nd place athlete's rank is "Silver Medal".
// The 3rd place athlete's rank is "Bronze Medal".
// For the 4th place to the nth place athlete, their rank is their placement number 
// (i.e., the xth place athlete's rank is "x").
// Return an array answer of size n where answer[i] is the rank of the ith athlete.

// Example 1:
// Input: score = [5,4,3,2,1]
// Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
// Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].

// Example 2:
// Input: score = [10,3,8,9,4]
// Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
// Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th].

// @param {number[]} score
// @return {string[]}

var findRelativeRanks = function(score) {
    // Create a copy of the score array and sort it in descending order
    const sortedScores = [...score].sort((a, b) => b - a);
    // Initialize an empty array to store the ranks
    const result = [];

    // Create a map to store the rank for each athlete's score
    const rankMap = new Map();
    // Assign ranks based on position in the sorted array
    for (let i = 0; i < sortedScores.length; i++) {
        if (i === 0) {
            rankMap.set(sortedScores[i], "Gold Medal");
        } else if (i === 1) {
            rankMap.set(sortedScores[i], "Silver Medal");
        } else if (i === 2) {
            rankMap.set(sortedScores[i], "Bronze Medal");
        } else {
            rankMap.set(sortedScores[i], (i + 1).toString());
        }
    }

    // Iterate over the original scores array to get the ranks
    for (let i = 0; i < score.length; i++) {
        result.push(rankMap.get(score[i]));
    }

    return result;
};

console.log("==========================================")

// 3075. Maximize Happiness of Selected Children
// Medium
// You are given an array happiness of length n, and a positive integer k.
// There are n children standing in a queue, where the ith child has happiness value happiness[i]. 
// You want to select k children from these n children in k turns.
// In each turn, when you select a child, the happiness value of all the children that have not been selected till now decreases by 1. 
// Note that the happiness value cannot become negative and gets decremented only if it is positive.
// Return the maximum sum of the happiness values of the selected children you can achieve by selecting k children.

 

// Example 1:

// Input: happiness = [1,2,3], k = 2
// Output: 4
// Explanation: We can pick 2 children in the following way:
// - Pick the child with the happiness value == 3. The happiness value of the remaining children becomes [0,1].
// - Pick the child with the happiness value == 1. The happiness value of the remaining child becomes [0]. 
// Note that the happiness value cannot become less than 0.
// The sum of the happiness values of the selected children is 3 + 1 = 4.
// Example 2:

// Input: happiness = [1,1,1,1], k = 2
// Output: 1
// Explanation: We can pick 2 children in the following way:
// - Pick any child with the happiness value == 1. The happiness value of the remaining children becomes [0,0,0].
// - Pick the child with the happiness value == 0. The happiness value of the remaining child becomes [0,0].
// The sum of the happiness values of the selected children is 1 + 0 = 1.
// Example 3:

// Input: happiness = [2,3,4,5], k = 1
// Output: 5
// Explanation: We can pick 1 child in the following way:
// - Pick the child with the happiness value == 5. The happiness value of the remaining children becomes [1,2,3].
// The sum of the happiness values of the selected children is 5.

// @param {number[]} happiness
// @param {number} k
// return {number}

var maximumHappinessSum = function(happiness, k) {
    let ans = 0;
    let decremented = 0;

    happiness.sort((a, b) => b - a);

    for (let i = 0; i < k; i++) {
        ans += Math.max(0, happiness[i] - decremented);
        decremented++;
    }

    return ans;
};

console.log("==========================================")

// 786. K-th Smallest Prime Fraction
// Medium
// You are given a sorted integer array arr containing 1 and prime numbers, where all the integers of arr are unique.
// You are also given an integer k.
// For every i and j where 0 <= i < j < arr.length, we consider the fraction arr[i] / arr[j].
// Return the kth smallest fraction considered. 
// Return your answer as an array of integers of size 2, where answer[0] == arr[i] and answer[1] == arr[j].

// Example 1:
// Input: arr = [1,2,3,5], k = 3
// Output: [2,5]
// Explanation: The fractions to be considered in sorted order are:
// 1/5, 1/3, 2/5, 1/2, 3/5, and 2/3.
// The third fraction is 2/5.

// Example 2:
// Input: arr = [1,7], k = 1
// Output: [1,7]

// @param {number[]} arr
// @param {number} k
// @return {number[]}

var kthSmallestPrimeFraction = function(arr, k) {
    let n = arr.length;
    let ans = [0, 1];
    let l = 0;
    let r = 1;

    while (true) {
        let m = (l + r) / 2;
        ans[0] = 0;
        let count = 0;
        let j = 1;

        for (let i = 0; i < n; i++) {
            while (j < n && arr[i] > m * arr[j]) {
                j += 1;
            }
            count += n - j;
            if (j === n) {
                break;
            }
            if (ans[0] * arr[j] < ans[1] * arr[i]) {
                ans[0] = arr[i];
                ans[1] = arr[j];
            }
        }

        if (count < k) {
            l = m;
        } else if (count > k) {
            r = m;
        } else {
            return ans;
        }
    }
};
console.log("==========================================")

// 857. Minimum Cost to Hire K Workers
// Hard
// There are n workers. You are given two integer arrays quality and wage where quality[i] 
// is the quality of the ith worker and wage[i] is the minimum wage expectation for the ith worker.
// We want to hire exactly k workers to form a paid group. To hire a group of k workers, we must pay them according to the following rules:

// Every worker in the paid group must be paid at least their minimum wage expectation.
// In the group, each worker's pay must be directly proportional to their quality. 
// This means if a worker’s quality is double that of another worker in the group, 
// then they must be paid twice as much as the other worker.
// Given the integer k, return the least amount of money needed to form a paid group satisfying the above conditions. 
// Answers within 10-5 of the actual answer will be accepted.

// Example 1:
// Input: quality = [10,20,5], wage = [70,50,30], k = 2
// Output: 105.00000
// Explanation: We pay 70 to 0th worker and 35 to 2nd worker.

// Example 2:
// Input: quality = [3,1,10,10,1], wage = [4,8,2,2,7], k = 3
// Output: 30.66667
// Explanation: We pay 4 to 0th worker, 13.33333 to 2nd and 3rd workers separately.

// @param {number[]} quality
// @param {number[]} wage
// @param {number} k
// @return {number}

var mincostToHireWorkers = function(quality, wage, k) {
    const n = quality.length;
    const workers = [];
    
    // Calculate the ratio of wage to quality for each worker
    for (let i = 0; i < n; i++) {
        workers.push([wage[i] / quality[i], quality[i]]);
    }
    
    // Sort workers based on their ratio in ascending order
    workers.sort((a, b) => a[0] - b[0]);
    
    let result = Infinity;
    let totalQuality = 0;
    const heap = new MinHeap();
    
    // Iterate over the sorted workers
    for (let i = 0; i < n; i++) {
        const [ratio, quality] = workers[i];
        
        // Add quality to the total quality
        totalQuality += quality;
        heap.insert(quality);
        
        // If the group size exceeds k, remove the worker with the highest quality
        if (heap.size() > k) {
            totalQuality -= heap.extractMax(); // Corrected to extractMax
        }
        
        // If the group size reaches k, calculate total wage and update result if needed
        if (heap.size() === k) {
            result = Math.min(result, totalQuality * ratio);
        }
    }
    
    return result;
};

// MinHeap implementation
class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }
    
    extractMax() { // Corrected to extractMax
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown();
        }
        return max;
    }
    
    bubbleUp() {
        let index = this.heap.length - 1;
        const element = this.heap[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];
            if (element > parent) { // Corrected to compare values directly
                this.heap[parentIndex] = element;
                this.heap[index] = parent;
                index = parentIndex;
            } else {
                break;
            }
        }
    }
    
    sinkDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        while (true) {
            let leftChildIdx = 2 * index + 1;
            let rightChildIdx = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;
            if (leftChildIdx < length) {
                leftChild = this.heap[leftChildIdx];
                if (leftChild > element) { // Corrected to compare values directly
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.heap[rightChildIdx];
                if (
                    (swap === null && rightChild > element) || // Corrected to compare values directly
                    (swap !== null && rightChild > leftChild) // Corrected to compare values directly
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }
}


console.log("==========================================")

// 2373. Largest Local Values in a Matrix
// Easy
// You are given an n x n integer matrix grid.
// Generate an integer matrix maxLocal of size (n - 2) x (n - 2) such that:
// maxLocal[i][j] is equal to the largest value of the 3 x 3 matrix in grid centered around row i + 1 and column j + 1.
// In other words, we want to find the largest value in every contiguous 3 x 3 matrix in grid.
// Return the generated matrix.

// Example 1:
// Input: grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]
// Output: [[9,9],[8,6]]
// Explanation: The diagram above shows the original matrix and the generated matrix.
// Notice that each value in the generated matrix corresponds to the largest value of a contiguous 3 x 3 matrix in grid.

// Example 2:
// Input: grid = [[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]]
// Output: [[2,2,2],[2,2,2],[2,2,2]]
// Explanation: Notice that the 2 is contained within every contiguous 3 x 3 matrix in grid.

// @param {number[][]} grid
// @return {number[][]}

var largestLocal = function(grid) {
    const n = grid.length;
    const maxLocal = [];
    
    // Iterate through the grid, skipping the first and last rows and columns
    for (let i = 1; i < n - 1; i++) {
        const row = [];
        for (let j = 1; j < n - 1; j++) {
            let max = Number.MIN_SAFE_INTEGER;
            // Iterate over the 3x3 submatrix centered at grid[i][j]
            for (let x = i - 1; x <= i + 1; x++) {
                for (let y = j - 1; y <= j + 1; y++) {
                    max = Math.max(max, grid[x][y]);
                }
            }
            row.push(max);
        }
        maxLocal.push(row);
    }
    
    return maxLocal;
};

console.log("==========================================")

// 861. Score After Flipping Matrix
// Medium
// You are given an m x n binary matrix grid.
// A move consists of choosing any row or column and toggling each value in that row or column 
// (i.e., changing all 0's to 1's, and all 1's to 0's).
// Every row of the matrix is interpreted as a binary number, and the score of the matrix is the sum of these numbers.
// Return the highest possible score after making any number of moves (including zero moves).

// Example 1:
// Input: grid = [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
// Output: 39
// Explanation: 0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39

// Example 2:
// Input: grid = [[0]]
// Output: 1

// @param {number[][]} grid
// @return {number}

var matrixScore = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    // Step 1: Ensure all rows begin with a 1
    for (let i = 0; i < rows; i++) {
        if (grid[i][0] === 0) {
            // If the first element of the row is 0, flip the row
            for (let j = 0; j < cols; j++) {
                grid[i][j] = 1 - grid[i][j];
            }
        }
    }

    // Step 2: Ensure all columns have more 1s than 0s
    for (let j = 1; j < cols; j++) {
        let countOnes = 0;
        for (let i = 0; i < rows; i++) {
            countOnes += grid[i][j];
        }
        // If the column has more 0s than 1s, flip the column
        if (countOnes < rows / 2) {
            for (let i = 0; i < rows; i++) {
                grid[i][j] = 1 - grid[i][j];
            }
        }
    }

    // Step 3: Calculate the score
    let score = 0;
    for (let i = 0; i < rows; i++) {
        let rowVal = parseInt(grid[i].join(''), 2);
        score += rowVal;
    }
    return score;
};

console.log("==========================================")

// 1219. Path with Maximum Gold
// Medium
// In a gold mine grid of size m x n, each cell in this mine has an integer representing the amount of gold in that cell, 0 if it is empty.
// Return the maximum amount of gold you can collect under the conditions:
// Every time you are located in a cell you will collect all the gold in that cell.
// From your position, you can walk one step to the left, right, up, or down.
// You can't visit the same cell more than once.
// Never visit a cell with 0 gold.
// You can start and stop collecting gold from any position in the grid that has some gold.

// Example 1:
// Input: grid = [[0,6,0],[5,8,7],[0,9,0]]
// Output: 24
// Explanation:
// [[0,6,0],
//  [5,8,7],
//  [0,9,0]]
// Path to get the maximum gold, 9 -> 8 -> 7.

// Example 2:
// Input: grid = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]
// Output: 28
// Explanation:
// [[1,0,7],
//  [2,0,6],
//  [3,4,5],
//  [0,3,0],
//  [9,0,20]]
// Path to get the maximum gold, 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7.

// @param {number[][]} grid
// @return {number}

var getMaximumGold = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let maxGold = 0;

    const dfs = (row, col, currentGold) => {
        if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === 0) {
            // Out of bounds or no gold in this cell
            maxGold = Math.max(maxGold, currentGold);
            return;
        }

        const goldInCurrentCell = grid[row][col];
        const originalValue = goldInCurrentCell;

        // Mark this cell as visited by changing its value to 0 temporarily
        grid[row][col] = 0;

        // Explore all four directions
        dfs(row + 1, col, currentGold + originalValue); // Down
        dfs(row - 1, col, currentGold + originalValue); // Up
        dfs(row, col + 1, currentGold + originalValue); // Right
        dfs(row, col - 1, currentGold + originalValue); // Left

        // Restore the original value of the cell
        grid[row][col] = originalValue;
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] !== 0) {
                // Start DFS from each cell with nonzero gold
                dfs(i, j, 0);
            }
        }
    }

    return maxGold;
};

console.log("==========================================")

// 2812. Find the Safest Path in a Grid
// Medium
// You are given a 0-indexed 2D matrix grid of size n x n, where (r, c) represents:
// A cell containing a thief if grid[r][c] = 1
// An empty cell if grid[r][c] = 0
// You are initially positioned at cell (0, 0). In one move, you can move to any adjacent cell in the grid, including cells containing thieves.
// The safeness factor of a path on the grid is defined as the minimum manhattan distance from any cell in the path to any thief in the grid.
// Return the maximum safeness factor of all paths leading to cell (n - 1, n - 1).
// An adjacent cell of cell (r, c), is one of the cells (r, c + 1), (r, c - 1), (r + 1, c) and (r - 1, c) if it exists.
// The Manhattan distance between two cells (a, b) and (x, y) is equal to |a - x| + |b - y|, where |val| denotes the absolute value of val.

// Example 1:
// Input: grid = [[1,0,0],[0,0,0],[0,0,1]]
// Output: 0
// Explanation: All paths from (0, 0) to (n - 1, n - 1) go through the thieves in cells (0, 0) and (n - 1, n - 1).

// Example 2:
// Input: grid = [[0,0,1],[0,0,0],[0,0,0]]
// Output: 2
// Explanation: The path depicted in the picture above has a safeness factor of 2 since:
// - The closest cell of the path to the thief at cell (0, 2) is cell (0, 0). The distance between them is | 0 - 0 | + | 0 - 2 | = 2.
// It can be shown that there are no other paths with a higher safeness factor.

// Example 3:
// Input: grid = [[0,0,0,1],[0,0,0,0],[0,0,0,0],[1,0,0,0]]
// Output: 2
// Explanation: The path depicted in the picture above has a safeness factor of 2 since:
// - The closest cell of the path to the thief at cell (0, 3) is cell (1, 2). The distance between them is | 0 - 1 | + | 3 - 2 | = 2.
// - The closest cell of the path to the thief at cell (3, 0) is cell (3, 2). The distance between them is | 3 - 3 | + | 0 - 2 | = 2.
// It can be shown that there are no other paths with a higher safeness factor.

// @param {number[][]} grid
// @return {number}

class UnionFind {
    constructor(n) {
        this.n = n;
        this.p = Array(n)
            .fill(0)
            .map((_, i) => i);
    }

    find(x) {
        if (this.p[x] !== x) {
            this.p[x] = this.find(this.p[x]);
        }
        return this.p[x];
    }

    union(a, b) {
        const pa = this.find(a);
        const pb = this.find(b);
        if (pa !== pb) {
            this.p[pa] = pb;
            this.n--;
            return true;
        }
        return false;
    }
}

function maximumSafenessFactor(grid) {
    const n = grid.length;
    if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) {
        return 0;
    }
    const q = [];
    const inf = 1 << 30;
    const dist = Array(n)
        .fill(0)
        .map(() => Array(n).fill(inf));
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
            if (grid[i][j] === 1) {
                dist[i][j] = 0;
                q.push([i, j]);
            }
        }
    }
    const dirs = [-1, 0, 1, 0, -1];
    while (q.length) {
        const [i, j] = q.shift();
        for (let k = 0; k < 4; ++k) {
            const [x, y] = [i + dirs[k], j + dirs[k + 1]];
            if (x >= 0 && x < n && y >= 0 && y < n && dist[x][y] === inf) {
                dist[x][y] = dist[i][j] + 1;
                q.push([x, y]);
            }
        }
    }
    const t = [];
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
            t.push([dist[i][j], i, j]);
        }
    }
    t.sort((a, b) => b[0] - a[0]);
    const uf = new UnionFind(n * n);
    for (const [d, i, j] of t) {
        for (let k = 0; k < 4; ++k) {
            const [x, y] = [i + dirs[k], j + dirs[k + 1]];
            if (x >= 0 && x < n && y >= 0 && y < n && dist[x][y] >= d) {
                uf.union(i * n + j, x * n + y);
            }
        }
        if (uf.find(0) === uf.find(n * n - 1)) {
            return d;
        }
    }
    return 0;
}

console.log("==========================================")

// 2331. Evaluate Boolean Binary Tree
// Easy
// You are given the root of a full binary tree with the following properties:
// Leaf nodes have either the value 0 or 1, where 0 represents False and 1 represents True.
// Non-leaf nodes have either the value 2 or 3, where 2 represents the boolean OR and 3 represents the boolean AND.
// The evaluation of a node is as follows:
// If the node is a leaf node, the evaluation is the value of the node, i.e. True or False.
// Otherwise, evaluate the node's two children and apply the boolean operation of its value with the children's evaluations.
// Return the boolean result of evaluating the root node.
// A full binary tree is a binary tree where each node has either 0 or 2 children.
// A leaf node is a node that has zero children.

// Example 1:
// Input: root = [2,1,3,null,null,0,1]
// Output: true
// Explanation: The above diagram illustrates the evaluation process.
// The AND node evaluates to False AND True = False.
// The OR node evaluates to True OR False = True.
// The root node evaluates to True, so we return true.

// Example 2:
// Input: root = [0]
// Output: false
// Explanation: The root node is a leaf node and it evaluates to false, so we return false.

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// @param {TreeNode} root
// @return {boolean}

var evaluateTree = function(root) {
    // Base case: if the node is null, return false
    if (!root) {
        return false;
    }
    
    // If the node is a leaf, return its boolean value
    if (!root.left && !root.right) {
        return root.val === 1;
    }
    
    // Recursively evaluate the left and right subtrees
    const leftValue = evaluateTree(root.left);
    const rightValue = evaluateTree(root.right);
    
    // Apply the boolean operation based on the node's value
    if (root.val === 2) { // OR operation
        return leftValue || rightValue;
    } else if (root.val === 3) { // AND operation
        return leftValue && rightValue;
    }
    
    return false; // Default case
};


console.log("==========================================")

// 1325. Delete Leaves With a Given Value
// Medium
// Given a binary tree root and an integer target, delete all the leaf nodes with value target.
// Note that once you delete a leaf node with value target, if its parent node becomes a leaf node and has the value target, 
// it should also be deleted (you need to continue doing that until you cannot).

// Example 1:
// Input: root = [1,2,3,2,null,2,4], target = 2
// Output: [1,null,3,null,4]
// Explanation: Leaf nodes in green with value (target = 2) are removed (Picture in left). 
// After removing, new nodes become leaf nodes with value (target = 2) (Picture in center).

// Example 2:
// Input: root = [1,3,3,3,2], target = 3
// Output: [1,3,null,null,2]

// Example 3:
// Input: root = [1,2,null,2,null,2], target = 2
// Output: [1]
// Explanation: Leaf nodes in green with value (target = 2) are removed at each step.

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// @param {TreeNode} root
// @param {number} target
// @return {TreeNode}

var removeLeafNodes = function(root, target) {
    // Helper function to recursively remove target leaf nodes
    function removeLeaf(node) {
        if (node === null) {
            return null;
        }

        // Recursively process left and right subtrees
        node.left = removeLeaf(node.left);
        node.right = removeLeaf(node.right);

        // If the current node is a leaf and its value is equal to the target, remove it
        if (node.left === null && node.right === null && node.val === target) {
            return null;
        }

        return node;
    }

    // Call the helper function with the root node
    return removeLeaf(root);
};

console.log("==========================================")

// 979. Distribute Coins in Binary Tree
// Medium
// You are given the root of a binary tree with n nodes where each node in the tree has node.val coins. T
// here are n coins in total throughout the whole tree.
// In one move, we may choose two adjacent nodes and move one coin from one node to another. 
// A move may be from parent to child, or from child to parent.
// Return the minimum number of moves required to make every node have exactly one coin.

// Example 1:
// Input: root = [3,0,0]
// Output: 2
// Explanation: From the root of the tree, we move one coin to its left child, and one coin to its right child.

// Example 2:
// Input: root = [0,3,0]
// Output: 3
// Explanation: From the left child of the root, we move two coins to the root [taking two moves]. 
// Then, we move one coin from the root of the tree to the right child.

// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = (val===undefined ? 0 : val)
//     this.left = (left===undefined ? null : left)
//     this.right = (right===undefined ? null : right)
// }

// @param {TreeNode} root
// @return {number}

var distributeCoins = function(root) {
    let moves = 0;

    // Helper function to recursively balance the coins
    function balance(node) {
        if (node === null) {
            return 0;
        }

        // Recursively balance the left and right subtrees
        let left = balance(node.left);
        let right = balance(node.right);

        // The number of coins to be moved from the current node is the excess coins it has
        // which is total coins - 1 (since each node should have exactly one coin)
        let excess = node.val + left + right - 1;

        // Increment the number of moves by the absolute value of excess coins
        moves += Math.abs(excess);

        // Return the excess coins for the parent node to handle
        return excess;
    }

    // Call the helper function with the root node
    balance(root);

    return moves;
};

console.log("==========================================")

// 3068. Find the Maximum Sum of Node Values
// Hard
// There exists an undirected tree with n nodes numbered 0 to n - 1. 
// You are given a 0-indexed 2D integer array edges of length n - 1, 
// where edges[i] = [ui, vi] indicates that there is an edge between nodes ui and vi in the tree. 
// You are also given a positive integer k, and a 0-indexed array of non-negative integers nums of length n, where nums[i] represents the value of the node numbered i.
// Alice wants the sum of values of tree nodes to be maximum, 
// for which Alice can perform the following operation any number of times (including zero) on the tree:
// Choose any edge [u, v] connecting the nodes u and v, and update their values as follows:
// nums[u] = nums[u] XOR k
// nums[v] = nums[v] XOR k
// Return the maximum possible sum of the values Alice can achieve by performing the operation any number of times.

// Example 1:
// Input: nums = [1,2,1], k = 3, edges = [[0,1],[0,2]]
// Output: 6
// Explanation: Alice can achieve the maximum sum of 6 using a single operation:
// - Choose the edge [0,2]. nums[0] and nums[2] become: 1 XOR 3 = 2, and the array nums becomes: [1,2,1] -> [2,2,2].
// The total sum of values is 2 + 2 + 2 = 6.
// It can be shown that 6 is the maximum achievable sum of values.

// Example 2:
// Input: nums = [2,3], k = 7, edges = [[0,1]]
// Output: 9
// Explanation: Alice can achieve the maximum sum of 9 using a single operation:
// - Choose the edge [0,1]. nums[0] becomes: 2 XOR 7 = 5 and nums[1] become: 3 XOR 7 = 4, and the array nums becomes: [2,3] -> [5,4].
// The total sum of values is 5 + 4 = 9.
// It can be shown that 9 is the maximum achievable sum of values.

// Example 3:
// Input: nums = [7,7,7,7,7,7], k = 3, edges = [[0,1],[0,2],[0,3],[0,4],[0,5]]
// Output: 42
// Explanation: The maximum achievable sum is 42 which can be achieved by Alice performing no operations.

// @param {number[]} nums
// @param {number} k
// @param {number[][]} edges
// @return {number}

var maximumValueSum = function(nums, k, edges) {
    // Calculate the maximum possible sum
    let maxSum = nums.reduce((sum, num) => sum + Math.max(num, num ^ k), 0);
    
    // Count how many nodes are better off with their XORed value
    let changedCount = nums.reduce((count, num) => count + ((num ^ k) > num ? 1 : 0), 0);
    
    // If the number of changes is even, return the maximum sum
    if (changedCount % 2 === 0) {
        return maxSum;
    }
    
    // Find the minimum change difference
    let minChangeDiff = Math.min(...nums.map(num => Math.abs(num - (num ^ k))));
    
    // Adjust the sum if the number of changes is odd
    return maxSum - minChangeDiff;
};


console.log("==========================================")

// 1863. Sum of All Subset XOR Totals
// Easy
// The XOR total of an array is defined as the bitwise XOR of all its elements, or 0 if the array is empty.
// For example, the XOR total of the array [2,5,6] is 2 XOR 5 XOR 6 = 1.
// Given an array nums, return the sum of all XOR totals for every subset of nums. 
// Note: Subsets with the same elements should be counted multiple times.
// An array a is a subset of an array b if a can be obtained from b by deleting some (possibly zero) elements of b.

// Example 1:
// Input: nums = [1,3]
// Output: 6
// Explanation: The 4 subsets of [1,3] are:
// - The empty subset has an XOR total of 0.
// - [1] has an XOR total of 1.
// - [3] has an XOR total of 3.
// - [1,3] has an XOR total of 1 XOR 3 = 2.
// 0 + 1 + 3 + 2 = 6

// Example 2:
// Input: nums = [5,1,6]
// Output: 28
// Explanation: The 8 subsets of [5,1,6] are:
// - The empty subset has an XOR total of 0.
// - [5] has an XOR total of 5.
// - [1] has an XOR total of 1.
// - [6] has an XOR total of 6.
// - [5,1] has an XOR total of 5 XOR 1 = 4.
// - [5,6] has an XOR total of 5 XOR 6 = 3.
// - [1,6] has an XOR total of 1 XOR 6 = 7.
// - [5,1,6] has an XOR total of 5 XOR 1 XOR 6 = 2.
// 0 + 5 + 1 + 6 + 4 + 3 + 7 + 2 = 28

// Example 3:
// Input: nums = [3,4,5,6,7,8]
// Output: 480
// Explanation: The sum of all XOR totals for every subset is 480.

// @param {number[]} nums
// @return {number}

var subsetXORSum = function(nums) {
    let totalSum = 0;

    const helper = (index, currentXOR) => {
        if (index === nums.length) {
            totalSum += currentXOR;
            return;
        }

        // Exclude the current element
        helper(index + 1, currentXOR);
        
        // Include the current element
        helper(index + 1, currentXOR ^ nums[index]);
    };

    // Start the recursive process
    helper(0, 0);

    return totalSum;
};

console.log("==========================================")

// 78. Subsets
// Medium
// Given an integer array nums of unique elements, return all possible 
// subsets
//  (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example 1:
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// Example 2:
// Input: nums = [0]
// Output: [[],[0]]

// Constraints:
// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10
// All the numbers of nums are unique.

// @param {number[]} nums
// @return {number[][]}

var subsets = function(nums) {
    const result = [];

    const backtrack = (start, currentSubset) => {
        // Add the current subset to the result
        result.push([...currentSubset]);

        for (let i = start; i < nums.length; i++) {
            // Include the current element
            currentSubset.push(nums[i]);

            // Recur with the current element included
            backtrack(i + 1, currentSubset);

            // Backtrack by removing the current element
            currentSubset.pop();
        }
    };

    // Start the backtracking process
    backtrack(0, []);

    return result;
};

console.log("==========================================")

// 131. Palindrome Partitioning
// Medium
// Given a string s, partition s such that every  substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

// Example 1:
// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]

// Example 2:
// Input: s = "a"
// Output: [["a"]]

// @param {string} s
// @return {string[][]}

var partition = function(s) {
    const results = [];
    const isPalindrome = (str) => {
        let left = 0;
        let right = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    };

    const backtrack = (currentPartition, startIndex) => {
        if (startIndex === s.length) {
            results.push(currentPartition.slice()); // Add a copy of currentPartition
            return;
        }

        for (let i = startIndex; i < s.length; i++) {
            const subString = s.substring(startIndex, i + 1);
                if (isPalindrome(subString)) {
                    currentPartition.push(subString);
                    backtrack(currentPartition, i + 1);
                    currentPartition.pop(); // Backtrack by removing the substring
                }
        }
    };

    backtrack([], 0);
    return results;
};

console.log("==========================================")

// 2597. The Number of Beautiful Subsets
// Medium
// You are given an array nums of positive integers and a positive integer k.
// A subset of nums is beautiful if it does not contain two integers with an absolute difference equal to k.
// Return the number of non-empty beautiful subsets of the array nums.
// A subset of nums is an array that can be obtained by deleting some (possibly none) elements from nums. 
// Two subsets are different if and only if the chosen indices to delete are different.

// Example 1:
// Input: nums = [2,4,6], k = 2
// Output: 4
// Explanation: The beautiful subsets of the array nums are: [2], [4], [6], [2, 6].
// It can be proved that there are only 4 beautiful subsets in the array [2,4,6].

// Example 2:
// Input: nums = [1], k = 1
// Output: 1
// Explanation: The beautiful subset of the array nums is [1].
// It can be proved that there is only 1 beautiful subset in the array [1].

// @param {number[]} nums
// @param {number} k
// @return {number}

var beautifulSubsets = function(nums, k) {
    let result = 0;

    const backtrack = (index, subset, freq) => {
        if (subset.length > 0) {
            result++;
        }
        for (let i = index; i < nums.length; i++) {
            let num = nums[i];
            if (!freq[num - k] && !freq[num + k]) {
                subset.push(num);
                freq[num] = (freq[num] || 0) + 1;
                backtrack(i + 1, subset, freq);
                freq[num]--;
                subset.pop();
            }
        }
    };

    backtrack(0, [], {});
    return result;
};

console.log("==========================================")

// 1255. Maximum Score Words Formed by Letters
// Hard
// Given a list of words, list of  single letters (might be repeating) and score of every character.
// Return the maximum score of any valid set of words formed by using the given letters (words[i] cannot be used two or more times).
// It is not necessary to use all characters in letters and each letter can only be used once. 
// Score of letters 'a', 'b', 'c', ... ,'z' is given by score[0], score[1], ... , score[25] respectively.

// Example 1:
// Input: words = ["dog","cat","dad","good"], letters = ["a","a","c","d","d","d","g","o","o"], score = [1,0,9,5,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0]
// Output: 23
// Explanation:
// Score  a=1, c=9, d=5, g=3, o=2
// Given letters, we can form the words "dad" (5+1+5) and "good" (3+2+2+5) with a score of 23.
// Words "dad" and "dog" only get a score of 21.

// Example 2:
// Input: words = ["xxxz","ax","bx","cx"], letters = ["z","a","b","c","x","x","x"], score = [4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,10]
// Output: 27
// Explanation:
// Score  a=4, b=4, c=4, x=5, z=10
// Given letters, we can form the words "ax" (4+5), "bx" (4+5) and "cx" (4+5) with a score of 27.
// Word "xxxz" only get a score of 25.

// Example 3:
// Input: words = ["leetcode"], letters = ["l","e","t","c","o","d"], score = [0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0]
// Output: 0
// Explanation:
// Letter "e" can only be used once.

// @param {string[]} words
// @param {character[]} letters
// @param {number[]} score
// @return {number}

var maxScoreWords = function(words, letters, score) {
    // Step 1: Create a frequency map for the letters
    const letterCount = Array(26).fill(0);
    for (let letter of letters) {
        letterCount[letter.charCodeAt(0) - 97]++;
    }

    // Step 2: Calculate the score and letter frequency for each word
    const wordScores = [];
    const wordLetters = [];
    for (let word of words) {
        let wordScore = 0;
        const currentWordLetterCount = Array(26).fill(0);
        for (let letter of word) {
            let index = letter.charCodeAt(0) - 97;
            wordScore += score[index];
            currentWordLetterCount[index]++;
        }
        wordScores.push(wordScore);
        wordLetters.push(currentWordLetterCount);
    }

    // Step 3: Backtracking function to explore all combinations
    function backtrack(index, currentLetterCount) {
        if (index === words.length) {
            return 0;
        }

        // Option 1: Skip the current word
        let maxScore = backtrack(index + 1, currentLetterCount);

        // Option 2: Include the current word if possible
        let canIncludeWord = true;
        for (let i = 0; i < 26; i++) {
            if (wordLetters[index][i] > currentLetterCount[i]) {
                canIncludeWord = false;
                break;
            }
        }

        if (canIncludeWord) {
            for (let i = 0; i < 26; i++) {
                currentLetterCount[i] -= wordLetters[index][i];
            }
            maxScore = Math.max(maxScore, wordScores[index] + backtrack(index + 1, currentLetterCount));
            for (let i = 0; i < 26; i++) {
                currentLetterCount[i] += wordLetters[index][i];
            }
        }

        return maxScore;
    }

    // Step 4: Start backtracking from the first word
    return backtrack(0, letterCount);
};
console.log("==========================================")

// 140. Word Break II
// Hard
// Given a string s and a dictionary of strings wordDict, add spaces in s to construct a sentence where each word is a valid dictionary word. 
// Return all such possible sentences in any order.
// Note that the same word in the dictionary may be reused multiple times in the segmentation.

// Example 1:
// Input: s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]
// Output: ["cats and dog","cat sand dog"]

// Example 2:
// Input: s = "pineapplepenapple", wordDict = ["apple","pen","applepen","pine","pineapple"]
// Output: ["pine apple pen apple","pineapple pen apple","pine applepen apple"]
// Explanation: Note that you are allowed to reuse a dictionary word.

// Example 3:
// Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
// Output: []

// @param {string} s
// @param {string[]} wordDict
// @return {string[]}

var wordBreak = function(s, wordDict) {
    const wordSet = new Set(wordDict);
    const memo = {};

    const backtrack = (start) => {
        if (start in memo) return memo[start];
        if (start === s.length) return [''];

        const result = [];
        for (let end = start + 1; end <= s.length; end++) {
            const word = s.slice(start, end);
            if (wordSet.has(word)) {
                const subSentences = backtrack(end);
                for (const subSentence of subSentences) {
                    const space = subSentence.length > 0 ? ' ' : '';
                    result.push(word + space + subSentence);
                }
            }
        }
        memo[start] = result;
        return result;
    };

    return backtrack(0);
};

console.log("==========================================")

// 552. Student Attendance Record II
// Hard
// An attendance record for a student can be represented as a string where each character signifies whether the student was absent, 
// late, or present on that day. The record only contains the following three characters:
// 'A': Absent.
// 'L': Late.
// 'P': Present.
// Any student is eligible for an attendance award if they meet both of the following criteria:
// The student was absent ('A') for strictly fewer than 2 days total.
// The student was never late ('L') for 3 or more consecutive days.
// Given an integer n, return the number of possible attendance records of length n that make a student eligible for an attendance award. The answer may be very large, so return it modulo 109 + 7.

// Example 1:
// Input: n = 2
// Output: 8
// Explanation: There are 8 records with length 2 that are eligible for an award:
// "PP", "AP", "PA", "LP", "PL", "AL", "LA", "LL"
// Only "AA" is not eligible because there are 2 absences (there need to be fewer than 2).

// Example 2:
// Input: n = 1
// Output: 3

// Example 3:
// Input: n = 10101
// Output: 183236316

// @param {number} n
// @return {number}

var checkRecord = function(n) {
    const MOD = 1000000007;

    // Initialize DP arrays for sequences without 'A'
    let P = Array(n + 1).fill(0);
    let PL = Array(n + 1).fill(0);
    let PLL = Array(n + 1).fill(0);

    // Initialize DP arrays for sequences with exactly one 'A'
    let PA = Array(n + 1).fill(0);
    let PLA = Array(n + 1).fill(0);
    let PLLA = Array(n + 1).fill(0);

    // Base case: Length 0 sequence (1 way, the empty sequence)
    P[0] = 1;
    PL[0] = 0;
    PLL[0] = 0;

    PA[0] = 0;
    PLA[0] = 0;
    PLLA[0] = 0;

    // Base case: Length 1 sequences
    P[1] = 1; // "P"
    PL[1] = 1; // "L"
    PLL[1] = 0; // "LL" is not valid for length 1

    PA[1] = 1; // "A"
    PLA[1] = 0; // "LA" is not valid for length 1
    PLLA[1] = 0; // "LLA" is not valid for length 1

    for (let i = 2; i <= n; i++) {
        P[i] = (P[i - 1] + PL[i - 1] + PLL[i - 1]) % MOD;
        PL[i] = P[i - 1] % MOD;
        PLL[i] = PL[i - 1] % MOD;

        PA[i] = (PA[i - 1] + PLA[i - 1] + PLLA[i - 1] + P[i - 1] + PL[i - 1] + PLL[i - 1]) % MOD;
        PLA[i] = PA[i - 1] % MOD;
        PLLA[i] = PLA[i - 1] % MOD;
    }

    let result = (P[n] + PL[n] + PLL[n] + PA[n] + PLA[n] + PLLA[n]) % MOD;

    return result;
};

console.log("==========================================")

// 1608. Special Array With X Elements Greater Than or Equal X
// Easy
// You are given an array nums of non-negative integers. 
// nums is considered special if there exists a number x such that there are exactly x numbers in nums that are greater than or equal to x.
// Notice that x does not have to be an element in nums.
// Return x if the array is special, otherwise, return -1. It can be proven that if nums is special, the value for x is unique.

// Example 1:
// Input: nums = [3,5]
// Output: 2
// Explanation: There are 2 values (3 and 5) that are greater than or equal to 2.

// Example 2:
// Input: nums = [0,0]
// Output: -1
// Explanation: No numbers fit the criteria for x.
// If x = 0, there should be 0 numbers >= x, but there are 2.
// If x = 1, there should be 1 number >= x, but there are 0.
// If x = 2, there should be 2 numbers >= x, but there are 0.
// x cannot be greater since there are only 2 numbers in nums

// Example 3:
// Input: nums = [0,4,3,0,4]
// Output: 3
// Explanation: There are 3 values that are greater than or equal to 3.

// @param {number[]} nums
// @return {number}

var specialArray = function(nums) {
    nums.sort((a, b) => a - b); // Step 1: Sort the array in ascending order.
    
    for (let x = 0; x <= nums.length; x++) { // Step 2: Iterate through possible values of x from 0 to nums.length.
        // Step 3: Count how many numbers in nums are greater than or equal to x.
        let count = nums.filter(num => num >= x).length;
        
        // Step 4: Check if the count equals x.
        if (count === x) {
            return x;
        }
    }
    
    return -1; // If no such x is found, return -1.
};

console.log("==========================================")

// 1208. Get Equal Substrings Within Budget
// Medium
// You are given two strings s and t of the same length and an integer maxCost.
// You want to change s to t. Changing the ith character of s to ith character of t costs |s[i] - t[i]| 
// (i.e., the absolute difference between the ASCII values of the characters).
// Return the maximum length of a substring of s that can be changed to be the same as the corresponding substring of t with a cost less than or equal to maxCost. 
// If there is no substring from s that can be changed to its corresponding substring from t, return 0.

// Example 1:
// Input: s = "abcd", t = "bcdf", maxCost = 3
// Output: 3
// Explanation: "abc" of s can change to "bcd".
// That costs 3, so the maximum length is 3.

// Example 2:
// Input: s = "abcd", t = "cdef", maxCost = 3
// Output: 1
// Explanation: Each character in s costs 2 to change to character in t,  so the maximum length is 1.

// Example 3:
// Input: s = "abcd", t = "acde", maxCost = 0
// Output: 1
// Explanation: You cannot make any change, so the maximum length is 1.

// @param {string} s
// @param {string} t
// @param {number} maxCost
// @return {number}

var equalSubstring = function(s, t, maxCost) {
    let left = 0;
    let currentCost = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        currentCost += Math.abs(s[right].charCodeAt() - t[right].charCodeAt());

        while (currentCost > maxCost) {
            currentCost -= Math.abs(s[left].charCodeAt() - t[left].charCodeAt());
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

console.log("==========================================")

// 1404. Number of Steps to Reduce a Number in Binary Representation to One
// Medium
// Given the binary representation of an integer as a string s, return the number of steps to reduce it to 1 under the following rules:
// If the current number is even, you have to divide it by 2.
// If the current number is odd, you have to add 1 to it.
// It is guaranteed that you can always reach one for all test cases.

// Example 1:
// Input: s = "1101"
// Output: 6
// Explanation: "1101" corressponds to number 13 in their decimal representation.
// Step 1) 13 is odd, add 1 and obtain 14. 
// Step 2) 14 is even, divide by 2 and obtain 7.
// Step 3) 7 is odd, add 1 and obtain 8.
// Step 4) 8 is even, divide by 2 and obtain 4.  
// Step 5) 4 is even, divide by 2 and obtain 2. 
// Step 6) 2 is even, divide by 2 and obtain 1.  

// Example 2:
// Input: s = "10"
// Output: 1
// Explanation: "10" corressponds to number 2 in their decimal representation.
// Step 1) 2 is even, divide by 2 and obtain 1.  

// Example 3:
// Input: s = "1"
// Output: 0

// @param {string} s
// @return {number}

var numSteps = function(s) {
    let steps = 0;
    let carry = 0;
    
    // Start from the least significant bit and move left
    for (let i = s.length - 1; i > 0; i--) {
        if (s[i] === '1') {
            if (carry === 1) {
                steps += 1; // We are already in the "add 1" scenario, so just count the step
            } else {
                carry = 1; // Set carry because adding 1 to a 1 gives us 10 (binary)
                steps += 2; // One for adding 1 (making it even), another for dividing by 2
            }
        } else {
            if (carry === 1) {
                steps += 2; // We are in a carry scenario, 0 + 1 = 1 (make it odd and add 1 more step)
            } else {
                steps += 1; // Just divide by 2 (remove the trailing 0)
            }
        }
    }
    
    // Finally, if there's still a carry left, it means we have to account for it
    if (carry === 1) {
        steps += 1;
    }
    
    return steps;
};

console.log("==========================================")

// 1442. Count Triplets That Can Form Two Arrays of Equal XOR
// Medium
// Given an array of integers arr.
// We want to select three indices i, j and k where (0 <= i < j <= k < arr.length).
// Let's define a and b as follows:
// a = arr[i] ^ arr[i + 1] ^ ... ^ arr[j - 1]
// b = arr[j] ^ arr[j + 1] ^ ... ^ arr[k]
// Note that ^ denotes the bitwise-xor operation.
// Return the number of triplets (i, j and k) Where a == b.

// Example 1:
// Input: arr = [2,3,1,6,7]
// Output: 4
// Explanation: The triplets are (0,1,2), (0,2,2), (2,3,4) and (2,4,4)

// Example 2:
// Input: arr = [1,1,1,1,1]
// Output: 10

// @param {number[]} arr
// @return {number}

var countTriplets = function(arr) {
    let count = 0;
    const n = arr.length;

    for (let i = 0; i < n; ++i) {
        let xor = 0;
        for (let k = i; k < n; ++k) {
            xor ^= arr[k];
            if (xor === 0 && k > i) {
                count += (k - i);
            }
        }
    }

    return count;
};

console.log("==========================================")

// 260. Single Number III
// Medium
// Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice. 
// Find the two elements that appear only once. You can return the answer in any order.
// You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

// Example 1:
// Input: nums = [1,2,1,3,2,5]
// Output: [3,5]
// Explanation:  [5, 3] is also a valid answer.

// Example 2:
// Input: nums = [-1,0]
// Output: [-1,0]

// Example 3:
// Input: nums = [0,1]
// Output: [1,0]

// @param {number[]} nums
// @return {number[]}

var singleNumber = function(nums) {
    // Step 1: XOR all numbers to find xor of the two unique numbers
    let xor = 0;
    for (let num of nums) {
        xor ^= num;
    }

    // Step 2: Find a set bit (rightmost set bit) in the xor result
    let setBit = xor & -xor;

    // Step 3: Partition numbers into two groups and XOR within each group
    let num1 = 0, num2 = 0;
    for (let num of nums) {
        if ((num & setBit) === 0) {
            num1 ^= num;
        } else {
            num2 ^= num;
        }
    }

    return [num1, num2];
};

console.log("==========================================")

// 3110. Score of a String
// Easy
// You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.
// Return the score of s.

// Example 1:
// Input: s = "hello"
// Output: 13
// Explanation:
// The ASCII values of the characters in s are: 'h' = 104, 'e' = 101, 'l' = 108, 'o' = 111. So, the score of s would be |104 - 101| + |101 - 108| + |108 - 108| + |108 - 111| = 3 + 7 + 0 + 3 = 13.

// Example 2:
// Input: s = "zaz"
// Output: 50
// Explanation:
// The ASCII values of the characters in s are: 'z' = 122, 'a' = 97. So, the score of s would be |122 - 97| + |97 - 122| = 25 + 25 = 50.

// @param {string} s
// @return {number}

var scoreOfString = function(s) {
    let score = 0;
    
    for (let i = 1; i < s.length; i++) {
        let diff = Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
        score += diff;
    }
    
    return score;
};

console.log("==========================================")

// 344. Reverse String
// Easy
// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// @param {character[]} s
// @return {void} Do not return anything, modify s in-place instead.

var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        // Swap the elements at left and right
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        
        // Move the pointers towards each other
        left++;
        right--;
    }
};

console.log("==========================================")

// 2486. Append Characters to String to Make Subsequence
// Medium
// You are given two strings s and t consisting of only lowercase English letters.
// Return the minimum number of characters that need to be appended to the end of s so that t becomes a subsequence of s.
// A subsequence is a string that can be derived from another string by deleting some 
// or no characters without changing the order of the remaining characters.

// Example 1:
// Input: s = "coaching", t = "coding"
// Output: 4
// Explanation: Append the characters "ding" to the end of s so that s = "coachingding".
// Now, t is a subsequence of s ("coachingding").
// It can be shown that appending any 3 characters to the end of s will never make t a subsequence.

// Example 2:
// Input: s = "abcde", t = "a"
// Output: 0
// Explanation: t is already a subsequence of s ("abcde").

// Example 3:
// Input: s = "z", t = "abcde"
// Output: 5
// Explanation: Append the characters "abcde" to the end of s so that s = "zabcde".
// Now, t is a subsequence of s ("zabcde").
// It can be shown that appending any 4 characters to the end of s will never make t a subsequence.

// @param {string} s
// @param {string} t
// @return {number}

var appendCharacters = function(s, t) {
    let tIndex = 0;  // Pointer for string t

    // Iterate through string s
    for (let i = 0; i < s.length; i++) {
        if (tIndex < t.length && s[i] === t[tIndex]) {
            tIndex++;  // Move to the next character in t
        }
    }

    // The remaining characters in t (that weren't matched) need to be appended to s
    return t.length - tIndex;
};

console.log("==========================================")

// 409. Longest Palindrome
// Easy
// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome.

// Example 1:
// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

// Example 2:
// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

// @param {string} s
// @return {number}

var longestPalindrome = function(s) {
    // Create a map to store the frequency of each character
    const charCount = new Map();
    
    // Count the frequency of each character in the string
    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    let length = 0;
    let hasOddCount = false;
    
    // Calculate the length of the longest palindrome
    for (const count of charCount.values()) {
        if (count % 2 === 0) {
            length += count;
        } else {
            length += count - 1; // Use the even part
            hasOddCount = true; // Track that we have at least one odd count
        }
    }
    
    // If there is any character with an odd count, we can place one in the center
    if (hasOddCount) {
        length += 1;
    }
    
    return length;
};

console.log("==========================================")

// 1002. Find Common Characters
// Easy
// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates). 
// You may return the answer in any order.

// Example 1:
// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]

// Example 2:
// Input: words = ["cool","lock","cook"]
// Output: ["c","o"]

// @param {string[]} words
// @return {string[]}

var commonChars = function(words) {
     // Initialize an array to keep track of the minimum frequency of each character
     let minFreq = Array(26).fill(Infinity);

     // Function to count character frequency in a word
     const countChars = (word) => {
         let freq = Array(26).fill(0);
         for (let char of word) {
             freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
         }
         return freq;
     };
 
     // Update the minFreq array based on the frequencies in each word
     for (let word of words) {
         let wordFreq = countChars(word);
         for (let i = 0; i < 26; i++) {
             minFreq[i] = Math.min(minFreq[i], wordFreq[i]);
         }
     }
 
     // Construct the result array based on the minFreq array
     let result = [];
     for (let i = 0; i < 26; i++) {
         for (let j = 0; j < minFreq[i]; j++) {
             result.push(String.fromCharCode(i + 'a'.charCodeAt(0)));
         }
     }
 
     return result;
};

console.log("==========================================")

// 846. Hand of Straights
// Medium
// Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, 
// and consists of groupSize consecutive cards.

// Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, 
// return true if she can rearrange the cards, or false otherwise.

// Example 1:

// Input: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
// Output: true
// Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]

// Example 2:
// Input: hand = [1,2,3,4,5], groupSize = 4
// Output: false
// Explanation: Alice's hand can not be rearranged into groups of 4.

// @param {number[]} hand
// @param {number} groupSize
// @return {boolean}

var isNStraightHand = function(hand, groupSize) {
    if (hand.length % groupSize !== 0) return false; // Early return if the hand cannot be evenly divided into groups

    // Frequency count of each card
    let cardCount = {};
    for (let card of hand) {
        if (cardCount[card] == null) {
            cardCount[card] = 0;
        }
        cardCount[card]++;
    }

    // Sorted unique cards
    let sortedCards = Object.keys(cardCount).map(Number).sort((a, b) => a - b);

    // Try to form groups
    for (let card of sortedCards) {
        while (cardCount[card] > 0) {
            for (let i = 0; i < groupSize; i++) {
                let currentCard = card + i;
                if (cardCount[currentCard] == null || cardCount[currentCard] === 0) {
                    return false;
                }
                cardCount[currentCard]--;
            }
        }
    }

    return true;
};

console.log("==========================================")

// 648. Replace Words
// In English, we have a concept called root, which can be followed by some other word to form another longer word - 
// let's call this word derivative. For example, when the root "help" is followed by the word "ful", we can form a derivative "helpful".

// Given a dictionary consisting of many roots and a sentence consisting of words separated by spaces, 
// replace all the derivatives in the sentence with the root forming it. 
// If a derivative can be replaced by more than one root, replace it with the root that has the shortest length.

// Return the sentence after the replacement.

// Example 1:
// Input: dictionary = ["cat","bat","rat"], sentence = "the cattle was rattled by the battery"
// Output: "the cat was rat by the bat"

// Example 2:
// Input: dictionary = ["a","b","c"], sentence = "aadsfasf absbs bbab cadsfafs"
// Output: "a a b c"

// @param {string[]} dictionary
// @param {string} sentence
// @return {string}

var replaceWords = function(dictionary, sentence) {
    // Sort the dictionary by length of the roots
    dictionary.sort((a, b) => a.length - b.length);
    // Split the sentence into words
    let words = sentence.split(' ');
    // Process each word
    for (let i = 0; i < words.length; i++) {
        for (let root of dictionary) {
            // Check if the word starts with the root
            if (words[i].startsWith(root)) {
                // Replace the word with the root
                words[i] = root;
                break;  // No need to check further roots
            }
        }
    }
    // Join the words back into a sentence
    return words.join(' ');
};

console.log("==========================================")

// 523. Continuous Subarray Sum
// Medium
// Given an integer array nums and an integer k, return true if nums has a good subarray or false otherwise.
// A good subarray is a subarray where:
// its length is at least two, and
// the sum of the elements of the subarray is a multiple of k.
// Note that:
// A subarray is a contiguous part of the array.
// An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.

// Example 1:
// Input: nums = [23,2,4,6,7], k = 6
// Output: true
// Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.

// Example 2:
// Input: nums = [23,2,6,4,7], k = 6
// Output: true
// Explanation: [23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42.
// 42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer.

// Example 3:
// Input: nums = [23,2,6,4,7], k = 13
// Output: false

// @param {number[]} nums
// @param {number} k
// @return {boolean}

var checkSubarraySum = function(nums, k) {
    let modMap = new Map();
    modMap.set(0, -1); // Initialize with mod 0 at index -1 to handle cases where subarray starts from index 0
    let cumSum = 0;

    for (let i = 0; i < nums.length; i++) {
        cumSum += nums[i];
        let mod = cumSum % k;

        // Ensure the mod is non-negative
        if (mod < 0) {
            mod += k;
        }

        if (modMap.has(mod)) {
            // If we have seen this mod before, check the subarray length
            if (i - modMap.get(mod) > 1) {
                return true;
            }
        } else {
            // Store the first occurrence of this mod
            modMap.set(mod, i);
        }
    }

    return false;
};


console.log("==========================================")

// 974. Subarray Sums Divisible by K
// Medium
// Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.
// A subarray is a contiguous part of an array.

// Example 1:
// Input: nums = [4,5,0,-2,-3,1], k = 5
// Output: 7
// Explanation: There are 7 subarrays with a sum divisible by k = 5:
// [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]

// Example 2:
// Input: nums = [5], k = 9
// Output: 0

// @param {number[]} nums
// @param {number} k
// @return {number}

var subarraysDivByK = function(nums, k) {
    let count = 0;
    let prefix_sum = 0;
    let remainder_count = {0: 1};  // Initial prefix sum remainder of 0

    for (let num of nums) {
        prefix_sum += num;
        let remainder = ((prefix_sum % k) + k) % k;  // Handle negative remainders

        if (remainder_count[remainder] !== undefined) {
            count += remainder_count[remainder];
            remainder_count[remainder]++;
        } else {
            remainder_count[remainder] = 1;
        }
    }

    return count;
};

console.log("==========================================")

// 1051. Height Checker
// Easy
// A school is trying to take an annual photo of all the students. 
// The students are asked to stand in a single file line in non-decreasing order by height. 
// Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

// You are given an integer array heights representing the current order that the students are standing in. 
// Each heights[i] is the height of the ith student in line (0-indexed).

// Return the number of indices where heights[i] != expected[i].

// Example 1:
// Input: heights = [1,1,4,2,1,3]
// Output: 3
// Explanation: 
// heights:  [1,1,4,2,1,3]
// expected: [1,1,1,2,3,4]
// Indices 2, 4, and 5 do not match.

// Example 2:
// Input: heights = [5,1,2,3,4]
// Output: 5
// Explanation:
// heights:  [5,1,2,3,4]
// expected: [1,2,3,4,5]
// All indices do not match.

// Example 3:
// Input: heights = [1,2,3,4,5]
// Output: 0
// Explanation:
// heights:  [1,2,3,4,5]
// expected: [1,2,3,4,5]
// All indices match.

// @param {number[]} heights
// @return {number}

var heightChecker = function(heights) {
    // Create the expected array by sorting the heights array
    const expected = [...heights].sort((a, b) => a - b);
    
    // Initialize a counter for mismatched indices
    let mismatchCount = 0;
    
    // Compare each element in heights with the corresponding element in expected
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== expected[i]) {
            mismatchCount++;
        }
    }
    
    // Return the count of mismatched indices
    return mismatchCount;
};

console.log("==========================================")

// 1122. Relative Sort Array
// Easy
// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. 
// Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

// Example 1:
// Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// Output: [2,2,2,1,4,3,3,9,6,7,19]

// Example 2:
// Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
// Output: [22,28,8,6,17,44]

// @param {number[]} arr1
// @param {number[]} arr2
// @return {number[]}

var relativeSortArray = function(arr1, arr2) {
    // Create a mapping of value to index for arr2
    const orderMap = new Map();
    arr2.forEach((value, index) => {
        orderMap.set(value, index);
    });

    // Custom sort function
    return arr1.sort((a, b) => {
        if (orderMap.has(a) && orderMap.has(b)) {
            // Both elements are in arr2, sort by their index in arr2
            return orderMap.get(a) - orderMap.get(b);
        } else if (orderMap.has(a)) {
            // Only a is in arr2, it should come before b
            return -1;
        } else if (orderMap.has(b)) {
            // Only b is in arr2, it should come before a
            return 1;
        } else {
            // Neither element is in arr2, sort by their natural order (ascending)
            return a - b;
        }
    });
};

console.log("==========================================")

// 75. Sort Colors
// Medium
// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, 
// with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Example 2:
// Input: nums = [2,0,1]
// Output: [0,1,2]

// @param {number[]} nums
// @return {void} Do not return anything, modify nums in-place instead.

var sortColors = function(nums) {
    let low = 0, mid = 0, high = nums.length - 1;
    
    while (mid <= high) {
        if (nums[mid] === 0) {
            // Swap nums[low] and nums[mid]
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else if (nums[mid] === 2) {
            // Swap nums[mid] and nums[high]
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
};

console.log("==========================================")

// 2037. Minimum Number of Moves to Seat Everyone
// Easy
// There are n seats and n students in a room. You are given an array seats of length n, 
// where seats[i] is the position of the ith seat. You are also given the array students of length n,
// where students[j] is the position of the jth student.

// You may perform the following move any number of times:

// Increase or decrease the position of the ith student by 1 (i.e., moving the ith student from position x to x + 1 or x - 1)
// Return the minimum number of moves required to move each student to a seat such that no two students are in the same seat.

// Note that there may be multiple seats or students in the same position at the beginning.

// Example 1:
// Input: seats = [3,1,5], students = [2,7,4]
// Output: 4
// Explanation: The students are moved as follows:
// - The first student is moved from from position 2 to position 1 using 1 move.
// - The second student is moved from from position 7 to position 5 using 2 moves.
// - The third student is moved from from position 4 to position 3 using 1 move.
// In total, 1 + 2 + 1 = 4 moves were used.

// Example 2:
// Input: seats = [4,1,5,9], students = [1,3,2,6]
// Output: 7
// Explanation: The students are moved as follows:
// - The first student is not moved.
// - The second student is moved from from position 3 to position 4 using 1 move.
// - The third student is moved from from position 2 to position 5 using 3 moves.
// - The fourth student is moved from from position 6 to position 9 using 3 moves.
// In total, 0 + 1 + 3 + 3 = 7 moves were used.

// Example 3:
// Input: seats = [2,2,6,6], students = [1,3,2,6]
// Output: 4
// Explanation: Note that there are two seats at position 2 and two seats at position 6.
// The students are moved as follows:
// - The first student is moved from from position 1 to position 2 using 1 move.
// - The second student is moved from from position 3 to position 6 using 3 moves.
// - The third student is not moved.
// - The fourth student is not moved.
// In total, 1 + 3 + 0 + 0 = 4 moves were used.

// @param {number[]} seats
// @param {number[]} students
// @return {number}

var minMovesToSeat = function(seats, students) {
    // Sort both the seats and students arrays
    seats.sort((a, b) => a - b);
    students.sort((a, b) => a - b);

    // Initialize a variable to keep track of the total number of moves
    let totalMoves = 0;

    // Calculate the total moves required by summing the absolute differences
    for (let i = 0; i < seats.length; i++) {
        totalMoves += Math.abs(seats[i] - students[i]);
    }

    // Return the total number of moves
    return totalMoves;
};

console.log("==========================================")

// 945. Minimum Increment to Make Array Unique
// Medium
// You are given an integer array nums. In one move, you can pick an index i where 0 <= i < nums.length and increment nums[i] by 1.
// Return the minimum number of moves to make every value in nums unique.
// The test cases are generated so that the answer fits in a 32-bit integer.

// Example 1:
// Input: nums = [1,2,2]
// Output: 1
// Explanation: After 1 move, the array could be [1, 2, 3].

// Example 2:
// Input: nums = [3,2,1,2,1,7]
// Output: 6
// Explanation: After 6 moves, the array could be [3, 4, 1, 2, 5, 7].
// It can be shown with 5 or less moves that it is impossible for the array to have all unique values.

// @param {number[]} nums
// @return {number}

var minIncrementForUnique = function(nums) {
    // Sort the array first
    nums.sort((a, b) => a - b);
    
    // Initialize the number of moves to 0
    let moves = 0;
    
    // Iterate through the sorted array
    for (let i = 1; i < nums.length; i++) {
        // If the current number is less than or equal to the previous number
        if (nums[i] <= nums[i - 1]) {
            // Calculate the increment needed to make it unique
            let increment = nums[i - 1] + 1 - nums[i];
            // Add the increment to the number of moves
            moves += increment;
            // Update the current number to the new unique value
            nums[i] = nums[i - 1] + 1;
        }
    }
    
    return moves;
};

console.log("==========================================")

// 502. IPO
// Hard
// Suppose LeetCode will start its IPO soon. In order to sell a good price of its shares to Venture Capital, 
// LeetCode would like to work on some projects to increase its capital before the IPO. 
// Since it has limited resources, it can only finish at most k distinct projects before the IPO. 
// Help LeetCode design the best way to maximize its total capital after finishing at most k distinct projects.

// You are given n projects where the ith project has a pure profit profits[i] and a minimum capital of capital[i] is needed to start it.

// Initially, you have w capital. When you finish a project, you will obtain its pure profit and the profit will be added to your total capital.

// Pick a list of at most k distinct projects from given projects to maximize your final capital, and return the final maximized capital.

// The answer is guaranteed to fit in a 32-bit signed integer.

// Example 1:
// Input: k = 2, w = 0, profits = [1,2,3], capital = [0,1,1]
// Output: 4
// Explanation: Since your initial capital is 0, you can only start the project indexed 0.
// After finishing it you will obtain profit 1 and your capital becomes 1.
// With capital 1, you can either start the project indexed 1 or the project indexed 2.
// Since you can choose at most 2 projects, you need to finish the project indexed 2 to get the maximum capital.
// Therefore, output the final maximized capital, which is 0 + 1 + 3 = 4.

// Example 2:
// Input: k = 3, w = 0, profits = [1,2,3], capital = [0,1,2]
// Output: 6

// @param {number} k
// @param {number} w
// @param {number[]} profits
// @param {number[]} capital
// @return {number}

var findMaximizedCapital = function(k, w, profits, capital) {
    let n = profits.length;
    let projects = [];
    
    // Create a list of [capital, profit] pairs and sort it by capital
    for (let i = 0; i < n; i++) {
        projects.push([capital[i], profits[i]]);
    }
    projects.sort((a, b) => a[0] - b[0]);
    
    let maxHeap = new MaxHeap();
    let i = 0;
    
    // We can complete at most k projects
    for (let j = 0; j < k; j++) {
        // Add all feasible projects to the max-heap
        while (i < n && projects[i][0] <= w) {
            maxHeap.insert(projects[i][1]);
            i++;
        }
        
        // If there are no feasible projects, break
        if (maxHeap.isEmpty()) break;
        
        // Pick the project with the maximum profit
        w += maxHeap.extractMax();
    }
    
    return w;
};

// Max-Heap implementation
class MaxHeap {
    constructor() {
        this.heap = [];
    }
    
    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }
    
    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let element = this.heap[index];
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];
            
            if (parent >= element) break;
            
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        }
    }
    
    extractMax() {
        const max = this.heap[0];
        const end = this.heap.pop();
        
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown(0);
        }
        
        return max;
    }
    
    sinkDown(index) {
        const length = this.heap.length;
        const element = this.heap[index];
        
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;
            
            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }
            
            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild > element) || 
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIndex;
                }
            }
            
            if (swap === null) break;
            
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }
    
    isEmpty() {
        return this.heap.length === 0;
    }
}

console.log("==========================================")

// 330. Patching Array
// Hard
// Given a sorted integer array nums and an integer n, add/patch elements to the array such that any number in the range [1, n] 
// inclusive can be formed by the sum of some elements in the array.

// Return the minimum number of patches required.

// Example 1:
// Input: nums = [1,3], n = 6
// Output: 1
// Explanation:
// Combinations of nums are [1], [3], [1,3], which form possible sums of: 1, 3, 4.
// Now if we add/patch 2 to nums, the combinations are: [1], [2], [3], [1,3], [2,3], [1,2,3].
// Possible sums are 1, 2, 3, 4, 5, 6, which now covers the range [1, 6].
// So we only need 1 patch.

// Example 2:
// Input: nums = [1,5,10], n = 20
// Output: 2
// Explanation: The two patches can be [2, 4].

// Example 3:
// Input: nums = [1,2,2], n = 5
// Output: 0

// @param {number[]} nums
// @param {number} n
// @return {number}

var minPatches = function(nums, n) {
    let patches = 0;
    let miss = 1;
    let i = 0;
    
    while (miss <= n) {
        if (i < nums.length && nums[i] <= miss) {
            miss += nums[i];
            i++;
        } else {
            miss += miss;
            patches++;
        }
    }
    
    return patches;
};

console.log("==========================================")

// 633. Sum of Square Numbers
// Medium
// Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.

// Example 1:
// Input: c = 5
// Output: true
// Explanation: 1 * 1 + 2 * 2 = 5

// Example 2:
// Input: c = 3
// Output: false

// @param {number} c
// @return {boolean}

var judgeSquareSum = function(c) {
    let a = 0;
    let b = Math.floor(Math.sqrt(c));
    
    while (a <= b) {
        let sumOfSquares = a * a + b * b;
        
        if (sumOfSquares === c) {
            return true;
        } else if (sumOfSquares < c) {
            a++;
        } else {
            b--;
        }
    }
    
    return false;
};

console.log("==========================================")

// 826. Most Profit Assigning Work
// Medium

// You have n jobs and m workers. You are given three arrays: difficulty, profit, and worker where:
// difficulty[i] and profit[i] are the difficulty and the profit of the ith job, and
// worker[j] is the ability of jth worker (i.e., the jth worker can only complete a job with difficulty at most worker[j]).
// Every worker can be assigned at most one job, but one job can be completed multiple times.

// For example, if three workers attempt the same job that pays $1, then the total profit will be $3. 
// If a worker cannot complete any job, their profit is $0.
// Return the maximum profit we can achieve after assigning the workers to the jobs.

// Example 1:
// Input: difficulty = [2,4,6,8,10], profit = [10,20,30,40,50], worker = [4,5,6,7]
// Output: 100
// Explanation: Workers are assigned jobs of difficulty [4,4,6,6] and they get a profit of [20,20,30,30] separately.

// Example 2:
// Input: difficulty = [85,47,57], profit = [24,66,99], worker = [40,25,25]
// Output: 0

// @param {number[]} difficulty
// @param {number[]} profit
// @param {number[]} worker
// @return {number}

var maxProfitAssignment = function(difficulty, profit, worker) {
    // Combine difficulty and profit into a single array of objects and sort by difficulty
    let jobs = [];
    for (let i = 0; i < difficulty.length; i++) {
        jobs.push({ difficulty: difficulty[i], profit: profit[i] });
    }
    jobs.sort((a, b) => a.difficulty - b.difficulty);
    
    // Sort the worker array
    worker.sort((a, b) => a - b);
    
    let maxProfit = 0;
    let totalProfit = 0;
    let jobIndex = 0;
    
    // Iterate over each worker
    for (let i = 0; i < worker.length; i++) {
        // Move the jobIndex to the highest profit job the worker can do
        while (jobIndex < jobs.length && jobs[jobIndex].difficulty <= worker[i]) {
            maxProfit = Math.max(maxProfit, jobs[jobIndex].profit);
            jobIndex++;
        }
        // Add the maximum profit achievable by the current worker to total profit
        totalProfit += maxProfit;
    }
    
    return totalProfit;
};

console.log("==========================================")

// 1482. Minimum Number of Days to Make m Bouquets
// Medium
// You are given an integer array bloomDay, an integer m and an integer k.
// You want to make m bouquets. To make a bouquet, you need to use k adjacent flowers from the garden.
// The garden consists of n flowers, the ith flower will bloom in the bloomDay[i] and then can be used in exactly one bouquet.
// Return the minimum number of days you need to wait to be able to make m bouquets from the garden. If it is impossible to make m bouquets return -1.

// Example 1:
// Input: bloomDay = [1,10,3,10,2], m = 3, k = 1
// Output: 3
// Explanation: Let us see what happened in the first three days. x means flower bloomed and _ means flower did not bloom in the garden.
// We need 3 bouquets each should contain 1 flower.
// After day 1: [x, _, _, _, _]   // we can only make one bouquet.
// After day 2: [x, _, _, _, x]   // we can only make two bouquets.
// After day 3: [x, _, x, _, x]   // we can make 3 bouquets. The answer is 3.

// Example 2:
// Input: bloomDay = [1,10,3,10,2], m = 3, k = 2
// Output: -1
// Explanation: We need 3 bouquets each has 2 flowers, that means we need 6 flowers. 
// We only have 5 flowers so it is impossible to get the needed bouquets and we return -1.

// Example 3:
// Input: bloomDay = [7,7,7,7,12,7,7], m = 2, k = 3
// Output: 12
// Explanation: We need 2 bouquets each should have 3 flowers.
// Here is the garden after the 7 and 12 days:
// After day 7: [x, x, x, x, _, x, x]
// We can make one bouquet of the first three flowers that bloomed. We cannot make another bouquet from the last three flowers that bloomed because they are not adjacent.
// After day 12: [x, x, x, x, x, x, x]
// It is obvious that we can make two bouquets in different ways.

// @param {number[]} bloomDay
// @param {number} m
// @param {number} k
// @return {number}

var minDays = function(bloomDay, m, k) {
    if (m * k > bloomDay.length) {
        return -1;
    }
    
    let left = Math.min(...bloomDay);
    let right = Math.max(...bloomDay);
    
    const canMakeBouquets = (days) => {
        let bouquets = 0;
        let flowers = 0;
        
        for (let i = 0; i < bloomDay.length; i++) {
            if (bloomDay[i] <= days) {
                flowers++;
                if (flowers == k) {
                    bouquets++;
                    flowers = 0;
                }
            } else {
                flowers = 0;
            }
        }
        
        return bouquets >= m;
    };
    
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (canMakeBouquets(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
};

console.log("==========================================")

// 1552. Magnetic Force Between Two Balls
// Medium
// In the universe Earth C-137, Rick discovered a special form of magnetic force between two balls if they are put in his new invented basket. 
// Rick has n empty baskets, the ith basket is at position[i], 
// Morty has m balls and needs to distribute the balls into the baskets such that the minimum magnetic force between any two balls is maximum.
// Rick stated that magnetic force between two different balls at positions x and y is |x - y|.
// Given the integer array position and the integer m. Return the required force.

// Example 1:
// Input: position = [1,2,3,4,7], m = 3
// Output: 3
// Explanation: Distributing the 3 balls into baskets 1, 4 and 7 will make the magnetic force between ball pairs [3, 3, 6]. 
// The minimum magnetic force is 3. We cannot achieve a larger minimum magnetic force than 3.

// Example 2:
// Input: position = [5,4,3,2,1,1000000000], m = 2
// Output: 999999999
// Explanation: We can use baskets 1 and 1000000000.

// @param {number[]} position
// @param {number} m
// @return {number}

var maxDistance = function(position, m) {
    // Step 1: Sort the positions
    position.sort((a, b) => a - b);
    
    // Step 2: Define the binary search boundaries
    let left = 1;
    let right = position[position.length - 1] - position[0];
    let result = 0;

    // Step 3: Binary search to find the maximum minimum distance
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (canPlaceBalls(position, m, mid)) {
            result = mid;  // Valid minimum distance found, try for a larger one
            left = mid + 1;
        } else {
            right = mid - 1;  // Minimum distance too large, try for a smaller one
        }
    }
    
    return result;
};

// Helper function to check if we can place m balls with at least `dist` distance apart
function canPlaceBalls(position, m, dist) {
    let count = 1;  // Place the first ball in the first position
    let lastPos = position[0];

    for (let i = 1; i < position.length; i++) {
        if (position[i] - lastPos >= dist) {
            count++;
            lastPos = position[i];
            if (count === m) {
                return true;
            }
        }
    }
    return false;
};

console.log("==========================================")

// 1052. Grumpy Bookstore Owner
// Medium
// There is a bookstore owner that has a store open for n minutes. Every minute, some number of customers enter the store. 
// You are given an integer array customers of length n where customers[i] is the number of the customer 
// that enters the store at the start of the ith minute and all those customers leave after the end of that minute.
// On some minutes, the bookstore owner is grumpy. You are given a binary array grumpy where grumpy[i] is 1 
// if the bookstore owner is grumpy during the ith minute, and is 0 otherwise.
// When the bookstore owner is grumpy, the customers of that minute are not satisfied, otherwise, they are satisfied.
// The bookstore owner knows a secret technique to keep themselves not grumpy for minutes consecutive minutes, but can only use it once.
// Return the maximum number of customers that can be satisfied throughout the day.

// Example 1:
// Input: customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], minutes = 3
// Output: 16
// Explanation: The bookstore owner keeps themselves not grumpy for the last 3 minutes. 
// The maximum number of customers that can be satisfied = 1 + 1 + 1 + 1 + 7 + 5 = 16.

// Example 2:
// Input: customers = [1], grumpy = [0], minutes = 1
// Output: 1

// @param {number[]} customers
// @param {number[]} grumpy
// @param {number} minutes
// @return {number}

var maxSatisfied = function(customers, grumpy, minutes) {
    let n = customers.length;
    
    // Calculate the total satisfied customers when the owner is not grumpy
    let totalSatisfied = 0;
    for (let i = 0; i < n; i++) {
        if (grumpy[i] === 0) {
            totalSatisfied += customers[i];
        }
    }
    
    // Find the maximum additional customers we can satisfy by making the owner not grumpy for `minutes` consecutive minutes
    let extraSatisfied = 0;
    let maxExtraSatisfied = 0;
    
    for (let i = 0; i < n; i++) {
        if (grumpy[i] === 1) {
            extraSatisfied += customers[i];
        }
        if (i >= minutes) {
            if (grumpy[i - minutes] === 1) {
                extraSatisfied -= customers[i - minutes];
            }
        }
        maxExtraSatisfied = Math.max(maxExtraSatisfied, extraSatisfied);
    }
    
    return totalSatisfied + maxExtraSatisfied;
};

console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// git commit -m "LEET, branch:leet, the 30 days of JS challenge: Timout Cancellation: EASY"