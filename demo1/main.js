import {drawChessBoard} from './src/Task1.js';
import {isFit} from './src/Task2.js'
import {SortingTriangles} from './src/Task3.js'
import {longest_palindrome} from './src/Task4.js'
import {numericSequence} from './src/Task6.js'
import {fiboSeries} from './src/Task7.js'


console.log(drawChessBoard(10,20,"#"));

const envelope1 = {a: 5,b: 8,};
const envelope2 = {c: 3,d: 4,};

console.log(isFit(envelope1,envelope2));

const triangles = [{ vertices: 'ABC', a: 10, b: 20, c: 22.36 },{ vertices: 'TED', a: 10, b: 20, c: 22.2 }];
console.log(SortingTriangles(triangles));

console.log(longest_palindrome(121));

console.log(numericSequence(10, 25));

const context = { min: 5, max: 20, lenSequence: "" };
console.log(fiboSeries(context));