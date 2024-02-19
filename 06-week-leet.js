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
 
console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// console.log("==========================================")
// git commit -m "LEET, branch:leet, the 30 days of JS challenge: Timout Cancellation: EASY"