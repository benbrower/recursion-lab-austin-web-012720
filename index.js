// Code your solution here!
function printString(str) {
  console.log(str[0])
  if (str.length > 1){
    printString(str.substring(1, str.length))
  } else {
    return true
  }
}

function reverseString(str){
  if (str.length < 2){
    return str;
  } else {
    console.log(str.substring(1) + str[0])
    return reverseString(str.substring(1)) + str[0]
  }
}

function isPalindrome(str) {
  console.log(str, str[0], str[str.length - 1])
  if (str.length < 2) {
    return true
  } else if (str[0] === str[str.length - 1]) {
    isPalindrome(str.substring(1, str.length - 1))
  } else {return false}
}
