//1. Next Palindromic Number.

// There were and still are many problem in CW about palindrome numbers and palindrome strings. 
//We suposse that you know which kind of numbers they are. If not, you may search about them using your favourite search engine.
// In this kata you will be given a positive integer, val and you have to create the function 
//next_pal()(nextPal Javascript) that will output the smallest palindrome number higher than val.

// Let's see:

// next_pal(11) == 22
// next_pal(188) == 191
// next_pal(191) == 202
// next_pal(2541) == 2552

const nextPal = (val) => {
    val += 1;
    let flag = true;
    while (flag) {
        let str = val.toString();
        let reverse = "";
        for (let i = str.length - 1; i >= 0; i--) {
            reverse += str[i]
        }
        if (reverse == str) {
            return parseInt(str);
        }
        val += 1;
    }
}

console.log(nextPal(2541))

//2. 

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string
// of those numbers in the form of a phone number.
// Example

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

const createPhoneNumber = (Arr) => {
    let PhoneNumber = "(";
    for (let i = 0; i <= 2; i++) {
        PhoneNumber += Arr[i].toString();
    }
    PhoneNumber += ") "
    for (let i = 3; i <= 5; i++) {
        PhoneNumber += Arr[i].toString();
    }
    PhoneNumber += "-"
    for (let i = 6; i <= Arr.length - 1; i++) {
        PhoneNumber += Arr[i].toString();
    }
    return PhoneNumber;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

//3. The Hashtag Generator

//The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

//     It must start with a hashtag (#).
//     All words must have their first letter capitalized.
//     If the final result is longer than 140 chars it must return false.
//     If the input or the result is an empty string it must return false.

// Examples

// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false




const hashTag = (sentence) => {

    if (sentence == "") {
        return false;
    } else {
        const words = sentence.trim().split(" ");
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].trim()[0].toUpperCase() + words[i].substr(1);
        }
        let str = words.join("").toString();
        let tag = '#';
        let finalWord = `${tag}${str}`
        if (finalWord > 140) {
            return false
        } else {
            return finalWord;
        }
    }
}

console.log(hashTag(" Hello there thanks for trying my Kata"));
console.log(hashTag(""));
