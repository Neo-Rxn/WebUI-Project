// 4. Palindrome

// Check if a number or part of it is a palindrome. For example, the number 
// 1234437 is not a palindrome, but its part 3443 is a palindrome. Numbers less 
// than 10 are not considered a palindrome.

// Input parameters: number
// Output: the palindrome extracted from the number, or 0 if the extraction failed.

export const is_Palindrome = (str1) => {
    let rev = str1.split("").reverse().join("");
    return str1 == rev;
}

export const longest_palindrome = (number) => {
    let max_length = 0,
        maxp = '';
        if (number ===undefined) return 0;
        let str1 = number.toString();
    for (let i = 0; i < str1.length; i++) {
        let subs = str1.substr(i, str1.length);
        for (let j = subs.length; j >= 0; j--) {
            let sub_subs_str = subs.substr(0, j);
            if (sub_subs_str.length <= 1)
                continue;
            if (is_Palindrome(sub_subs_str)) {
                if (sub_subs_str.length > max_length) {
                    max_length = sub_subs_str.length;
                    maxp = sub_subs_str;
                }
            }
        }
    }
    if (maxp == "") {
        return 0;
    } else {
        return maxp;
    }
}
//console.log(longest_palindrome(1212));