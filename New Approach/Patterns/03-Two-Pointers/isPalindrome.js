/**
 * It is a two pointer solution,
 * left pointer starts at the start of the string,
 * right pointer starts at end of the string
 *
 * while we counter a non alpha numeric we will
 * increament left pointer or decreament right pointer
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
    /**
     *
     * @param {string} str
     */
    const isValid = (str) => {
        let [left, right] = [0, str.length - 1];

        while (left < right) {
            // moving the left pointer to left if it is non alpha numeric
            while (left < right && isNonAlphaNumeric(str[left])) {
                left += 1;
            }
            // moving the right pointer to right if it is non alpha numeric
            while (left < right && isNonAlphaNumeric(str[right])) {
                right -= 1;
            }

            const leftChar = str[left];
            const rightChar = str[right];
            const isSame = leftChar === rightChar;
            if (!isSame) {
                // its not a palindrome
                return false;
            }
            // increament the left and right pointers
            left += 1;
            right -= 1;
        }
        return true;
    };
    const isNonAlphaNumeric = (char) => {
        const isNonAlpha = char < 'a' || 'z' < char; // a(97) - z(122)
        const isNonNumeric = char < '0' || '9' < char; // 0(48) - 9(57)

        return isNonAlpha && isNonNumeric;
    };
    s = s.toLowerCase();
    if (!s.length) {
        return true;
    }

    return isValid(s);
};
console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
