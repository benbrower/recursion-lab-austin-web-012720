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
  
}
