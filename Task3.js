// 1. Find a Chair

// So you've found a meeting room - phew! You arrive there ready to present, and find that someone has
//  taken one or more of the chairs!! You need to find some quick.... check all the other meeting rooms 
//  to see if all of the chairs are in use.

// Your meeting room can take up to 8 chairs. need will tell you how many have been taken. You need to find that many.

// Find the spare chairs from the array of meeting rooms. Each meeting room tuple will have the number 
// of occupants as a string. Each occupant is represented by 'X'. The room tuple will also have an integer 
// telling you how many chairs there are in the room.

// You should return an array of integers that shows how many chairs you take from each room in order, 
// up until you have the required amount.

// example:
// [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX',2]] when you need 4 chairs:

// result -> [0, 1, 3] no chairs free in room 0, take 1 from room 1, take 3 from room 2. 
// no need to consider room 3 as you have your 4 chairs already.

// If you need no chairs, return "Game On". If there aren't enough spare chairs 
// available, return "Not enough!".

function meeting(x, need) {
    let borrow = [];
    if (!need)
        return 'Game On';
    for (let [used, chairs] of x) {
        chairs = Math.min(need, Math.max(0, chairs - used.length));
        borrow.push(chairs);
        need -= chairs;
        if (!need)
            return borrow;
    }
    return 'Not enough!';
}
console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4));

// 2. Tic-Tac-Toe Checker

//  If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, 
//  wouldn't we? Our goal is to create a function that will check that for us!

//  Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 
//  1 if it is an "X", or 
//  2 if it is an "O", like so:

//  [[0, 0, 1],
//   [0, 1, 2],
//   [2, 1, 0]]

//  We want our function to return:

//      -1 if the board is not yet finished AND no one has won yet (there are empty spots),
//      1 if "X" won,
//      2 if "O" won,
//      0 if it's a cat's game (i.e. a draw).

//  You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

function isSolved(board) {

    function isWinner(matrix, status) {
        if (
            (matrix[0][0] === status && matrix[0][1] === status && matrix[0][2] === status) ||
            (matrix[1][0] === status && matrix[1][1] === status && matrix[1][2] === status) ||
            (matrix[2][0] === status && matrix[2][1] === status && matrix[2][2] === status) ||
            (matrix[0][0] === status && matrix[1][0] === status && matrix[2][0] === status) ||
            (matrix[0][1] === status && matrix[1][1] === status && matrix[2][1] === status) ||
            (matrix[0][2] === status && matrix[1][2] === status && matrix[2][2] === status) ||
            (matrix[0][0] === status && matrix[1][1] === status && matrix[2][2] === status) ||
            (matrix[0][2] === status && matrix[1][1] === status && matrix[2][0] === status)) {
            return true;
        } else { return false; }
    }
    function emptyspots(matrix) {
        let empty = false;
        matrix.forEach(arr1 => {
            arr1.forEach(arr2 => {
                if (arr2 === 0) { empty = true; }
            })
        })
        return empty;
    }
    if (isWinner(board, 1)) return 1;
    else if (isWinner(board, 2)) return 2;
    else if (emptyspots(board)) return -1;
    else return 0;
}
console.log(isSolved([[1, 1, 1],
[0, 1, 2],
[2, 1, 0]]))

// 3. Choose 3 methods and write your own functions that do the same with arrays(write your own polyfills)
// Methods:
// - map
// - filter
// - every
// - reduce
// - forEach
// - split
// - slice

// 1. map

Array.prototype.myMap = function (callback) {
    const newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray[i] = callback(this[i], i);
    }
    return newArray;
}
const arr1 = [1, 2, 3];
console.log(arr1.myMap((element) => element ** 2));

//2. Filter

Array.prototype.myFilter = function (checkElement) {
    const returnArr = [];
    for (let i = 0; i < this.length; i++) {
        if (checkElement(this[i])) {
            returnArr.push(this[i]);
        }
    }
    return returnArr;
};
const arr2 = [1, 3, 5, 6, 9, 11, 26, 8, 35, 10, 7, 42, 88];
console.log(arr2.myFilter(x => x % 2 !== 0));

//3. Reduce

Array.prototype.myReduce = function (callback) {
    let accumulator = 0;
    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i]);
    }
    return accumulator;
}
const arr3 = [1, 2, 3];
console.log(arr3.myReduce((accumulator, element) => accumulator + element, 0));
