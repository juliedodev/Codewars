function isPalindrome(x) {
  let reverse = x.toLowerCase().split('').reverse().join('')

  return (reverse == x.toLowerCase()) ? true : false


}
isPalindrome('nope')