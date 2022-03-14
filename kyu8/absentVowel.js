function absentVowel(x){
    let vowels = ['a','e','i','o','u']
    let sentence = x.split('')
    for(let i = 0; i < vowels.length; i++){
      if(!sentence.includes(vowels[i])){
        return i 
      }
    }
  }