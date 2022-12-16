//5. Lucky tickets

// There are 2 ways to count lucky tickets:

// 1. Simple - if a six-digit number is printed on the ticket, and the sum of the
//  first three digits is equal to the sum of the last three, then this ticket is considered lucky.
// 2. Complicated - if the sum of the even digits of the ticket is equal to
// the sum of the odd digits of the ticket, then the ticket is considered lucky.

// Determine programmatically which variant of counting lucky tickets will
// give them more in a given interval.

// Input parameters: context object with min and max fields (strings)
// Output: an object with information about the winning method and the number of lucky tickets for each calculation method.

// const context = {
//     min: '123456',
//     max: '345678',
// }
// let minValLeft = Math.floor(parseFloat(context.min) / 1000)
// let minValRight = Math.floor(parseFloat(context.min) % 1000)
// console.log(minValLeft)
// console.log(minValRight)

// var ArrLeft = String(minValLeft).split("").map((minValLeft) => {
//     return Number(minValLeft)
// })

// var ArrRight = String(minValRight).split("").map((minValRight) => {
//     return Number(minValRight)
// })

// console.log(ArrLeft);
// console.log(ArrRight);

