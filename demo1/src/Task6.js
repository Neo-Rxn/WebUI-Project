//6. Numeric sequence

// Output a comma-separated series of length n consisting of natural numbers whose 
// square is not less than the given m.

// Input parameters: length and value of the minimum square

// Output: a string with a series of numbers

export const numericSequence = (len, number) => {

    let lowerThan = 1;
    let sqr = 0;
    let finalString = "";

    do {
        lowerThan = lowerThan + 1;
        sqr = Math.pow(lowerThan, 2);
        console.log(sqr);
    } while (sqr < number)

    for (let i = lowerThan; i <= len + lowerThan; i++) {
        finalString = finalString + i.toString() + ","
    }
    let result = finalString.substring(0, finalString.length - 1);
    return result;
}

console.log(numericSequence(10, 25));