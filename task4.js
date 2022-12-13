//1. Controlled Detonation Safety

// Context

// The Explosive Ordinance Disposal Unit of your country has found a small mine field near your town,
//  and is planning to perform a controlled detonation of all of the mines. They have tasked you to 
//  write an algorithm that helps them find all safe spots in the area, as they want to build a 
//  temporal base in the area where all workers can rest safely.

// All mines they found are of a special kind, as they only release explosive charge in four 
// straight lines, each pointing at a different cardinal point (north, south, east and west). 
// However, the charge stops spreading when it crosses a tree in its path because the charge 
// is not strong enough to burn them.

// In the following diagram, M represents a mine, C represents the explosive charge released 
// after its detonation, and T are the trees in the area:

// . . . . . . .    . . . . . . .
// . . . T . . .    . . . T . . .
// . . . . . . .    . . . C . . .
// . . T M . . . => . . T M C C C
// . . . . . . .    . . . C . . .
// . . . . . . .    . . . C . . .
// . . . T . . .    . . . T . . .

// Task

// Write an algorithm that, given a mine field represented as an array of arrays of size M * N, 
// returns an array of all safe positions where workers can build their temporal base. As in 
// the previous model, 'M' represents mines, 'T' represents trees, and '.' represents empty 
// spaces where explosive charge can spread. The positions in the array should be in "reading order" 
// (from left to right, and from up to down).

// For example:

// [
//   ['.', '.', '.', '.', 'M'],                      . . . . M                           C C C C M
//   ['.', 'M', '.', 'T', '.'],                      . M . T .                           C M C T C
//   ['.', '.', 'T', '.', '.'],   ==[represents]=>   . . T . .   ==[after explosion]=>   . C T . C
//   ['.', '.', 'M', '.', 'T'],                      . . M . T                           C C M C T
//   ['.', '.', '.', '.', '.']                       . . . . .                           . C C . .
//]

// This should return one of the two following arrays, depending on the language. Check sample test 
// cases for more information. Also, trees don't count as safe positions.

//     [(2,0), (2,3), (4,0), (4,3), (4,4)] //For Python
//     [[2,0], [2,3], [4,0], [4,3], [4,4]] //For JS and other languages

// Return an empty array if there are no safe positions.
// Note

// Mines will not stop explosive charge from spreading as trees do, and explosive charge won't 
// erase mines it finds in its path. Make sure you never override any mines in the field.

function controlledDetonation(minefield) {
  
    for(let i=0; i<minefield.length; i++){
      for(let j=0; j<minefield[0].length; j++){
        if(minefield[i][j] === 'M'){
          for(let a = j - 1; a >= 0; a--){
            if(minefield[i][a] === '.')minefield[i][a] = 'C';
            if(minefield[i][a] === 'T')break
          }
          for(let a = j + 1; a < minefield[0].length ; a++){
            if(minefield[i][a] === '.')minefield[i][a] = 'C';
            if(minefield[i][a] === 'T')break
          }
          for(let b = i - 1; b >= 0 ; b--){
            if(minefield[b][j] === '.')minefield[b][j] = 'C';
            if(minefield[b][j] === 'T')break
          }
          for(let b = i + 1; b < minefield.length ; b++){
            if(minefield[b][j] === '.')minefield[b][j] = 'C';
            if(minefield[b][j] === 'T')break
          }
        }
      }
    }
    let result = [];
    for(let i=0; i<minefield.length; i++){
      for(let j=0;j<minefield[0].length; j++){
        minefield[i][j] === '.' ? result.push([i,j]) : ''
      }
    }
    return result;
  }


console.log(controlledDetonation([
    ['.', '.', '.', '.', 'M'],
    ['.', 'M', '.', 'T', '.'],
    ['.', '.', 'T', '.', '.'],
    ['.', '.', 'M', '.', 'T'], 
    ['.', '.', '.', '.', '.']
  ]));


//2 .Human Readable Time

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

//     HH = hours, padded to 2 digits, range: 00 - 99
//     MM = minutes, padded to 2 digits, range: 00 - 59
//     SS = seconds, padded to 2 digits, range: 00 - 59

// The maximum time never exceeds 359999 (99:59:59)

//You can find some examples in the test fixtures.

const humanReadableTime = (time) => {
    let hour, minute, seconds, remainder;
    hour = Math.floor(time / 3600) < 10 ? '0' + Math.floor(time / 3600) : Math.floor(time / 3600);
    remainder = time % 3600;
    minute = Math.floor(remainder / 60) < 10 ? '0' + Math.floor(remainder / 60) : Math.floor(remainder / 60);
    seconds = remainder % 60 < 10 ? '0' + remainder % 60 : remainder % 60;
    return hour + ':' + minute + ':' + seconds
}
console.log(humanReadableTime(0));

//3. Pollyfill Split

String.prototype.mySplit = function(separator){
    const stringSep = String(separator);
    const stringThis = String(this);
    // console.log(this);
    // console.log(typeof this);
    if(stringSep === 'undefined' || stringSep === '[object Object]'){
        return [stringThis];
    }
}

const str = 'H1,2ell[]o, my ntrueundefinedame null i{}s .2..';

console.log('empty', str.split());
console.log('undefined', str.split(undefined));
console.log('{}', str.split({}));
console.log('empty', str.mySplit());
console.log('undefined', str.mySplit(undefined));
console.log('{}', str.mySplit({}));