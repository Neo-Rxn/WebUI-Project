// 2. Envelope Analysis

// There are two envelopes with sides (a,b) and (c,d). It is required to 
// determine whether one envelope can be enclosed in another. The program must 
// handle the input of floating point numbers.

//  Input parameters: envelope1 and envelope2 objects
// Output: Envelope (bigger one) number if nesting is possible, 0 if nesting is not possible.

const envelope1 = {
    a: 3,
    b: 5,
};
const envelope2 = {
    c: 3,
    d: 10,
};

export const isFit = (envelope1, envelope2) => {
    if (envelope1.a > envelope2.c) {
        if (envelope1.b > envelope2.d) {
            return 1;
        };
    }
    if (envelope2.c > envelope1.a) {
        if (envelope2.d > envelope1.b) {
            return 2;
        };
    }
    return 0;
}

//console.log(isFit(envelope1,envelope2))