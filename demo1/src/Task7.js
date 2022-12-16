// 7.Fibonacci series for a range

// Output all Fibonacci numbers that satisfy the constraint passed to the function: 
// they are in the specified range or have the specified length.

// Input parameters: context object with min and max fields, or length field

// Output: array of numbers

const context = { min: 5, max: 20, lenSequence: "" }

export const fiboSeries = (obj) => {
    let phi = (1 - Math.sqrt(5)) / 2;
    let Phi = (1 + Math.sqrt(5)) / 2
    let seriesArr = [];
    let nthTerm = 0;
    if ((context.min >= 0 && context.min < context.max) && (context.max != 0)) {
        for (let i = context.min; i <= context.max; i++) {
            seriesArr.push(parseInt(((Math.pow(Phi, i)) - (Math.pow(phi, i))) / Math.sqrt(5)))
        }
        return seriesArr;
    } else if (context.lenSequence !== "") {
        seriesArr.fill(0);
        seriesArr[0] = 0;
        seriesArr[1] = 1;
        for (let i = 2; i < context.lenSequence; i++) {
            seriesArr[i] = seriesArr[i - 1] + seriesArr[i - 2];
        }
        return seriesArr;
    } else {
        return "The data is wrong, check the parameters"
    }
}

console.log(fiboSeries(context))