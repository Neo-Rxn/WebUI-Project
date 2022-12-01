//1. CSV representation of array

// Create a function that returns the CSV representation of a two-dimensional numeric array.

// Example:

// input:
//    [[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]] 

// output:
//      '0,1,2,3,4\n'
//     +'10,11,12,13,14\n'
//     +'20,21,22,23,24\n'
//     +'30,31,32,33,34'

// Array's length > 2.

const toCsvText = (array) => {
    let res = [];
    for (let i = 0; i < array.length; i++) {
        res += array[i] + '\n'
    }
    return res.trim();
}

//2. IP address finder [Code-golf]

// You are given a string representing a website's address. To calculate the IP4 address 
//you must convert all the characters into ASCII code, then calculate the sum of the values.

//     the first part of the IP number will be the result mod 256
//     the second part of the IP number will be the double of the sum mod 256
//     the third will be the triple of the sum mod 256
//     the fourth will be the quadruple of the sum mod 256

// Input

// A string representing the website address
// Output

// An array containing the four parts of the IP value
// Examples

// "www.codewars.com"  --->  [88, 176, 8, 96]
// "www.starwiki.com"  --->  [110, 220, 74, 184]

// Restrictions

//     Code length <= 77 characters
//     require is forbidden

const ipFinder = (str) =>{

    let sum = 0;
    for (const item of str) {
      sum += item.charCodeAt();
    };
        return[sum%256,sum*2%256,sum*3%256,sum*4%256]
}

console.log(ipFinder("www.google.com"));
console.log(ipFinder("www.codewars.com"));
console.log(ipFinder("www.starwiki.com"));

//3 .Pascal's Triangle #2

// Here you will create the classic Pascal's triangle.
// Your function will be passed the depth of the triangle and your code has to return the corresponding Pascal's triangle up to that depth.

// The triangle should be returned as a nested array. For example:

// pascal(5) -> [ [1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1] ]

// To build the triangle, start with a single 1 at the top, for each number in the next row you just take the two numbers above it and add them together, except for the edges, which are all 1. e.g.:

//       1
//     1   1
//   1   2   1
// 1   3   3   1



function pascal(depth) {
    if (depth === 0) return [];
    if (depth === 1) return [[1]];
    let result = [];
    for (let row = 1; row <= depth; row++) {
        let arr = [];
        for (let col = 0; col < row; col++) {
            if (col === 0 || col === row - 1) {
                arr.push(1);
            } else {
                arr.push((result[row - 2][col - 1] + result[row - 2][col]));
            }
        }
        result.push(arr);
    }
    return result;
}

console.log(pascal(4));


//4. Moving Zeros To The End

//  Write an algorithm that takes an array and moves all of the zeros to the end, 
//  preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) returns[false,1,1,2,1,3,"a",0,0]

// A JavaScript program to move all zeroes at the end of array 

// Function which pushes all zeros to end of an array. 

const pushZerosToEnd = (array) => {
    let count = 0;
    let n = array.length;
    for (let i = 0; i < n; i++)
        if (array[i] != 0)
            array[count++] = array[i];
    while (count < n) array[count++] = 0;
    return array;
}

console.log(pushZerosToEnd([1, 0, 8, 4, 0,"a", 0,{}, 2,null, 7, 0, 6, 0, 9]));
