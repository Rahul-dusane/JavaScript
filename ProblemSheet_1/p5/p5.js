var str = prompt("Enter The String : ");
console.log(str);

function ispalindrome(s) {

    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        if (s[i] != s[j]) {
            return false;
        }
    }
    return true;
}

if (ispalindrome(str)) {
    console.log("String IS palindrome  :");
} else {
    console.log("String Is Not palindrome  :");
}