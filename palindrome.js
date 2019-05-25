const str = "aabba";
function palindrome(str) {
  return str.split('').every((char,i) => {
    return char === str[str.length-i-1];
  });
}
palindrome(str);