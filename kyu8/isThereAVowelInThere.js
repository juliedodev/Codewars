function isVow(a){
    let vowels = 'aeiou'
    for(let i = 0; i < a.length; i++) {
      if(a[i] === vowels.charCodeAt(0)){
        a[i] = 'a'
      }
      else if(a[i] === vowels.charCodeAt(1)){
        a[i] = 'e'
      }
      else if(a[i] === vowels.charCodeAt(2)){
        a[i] = 'i'
      }
      else if(a[i] === vowels.charCodeAt(3)){
        a[i] = 'o'
      }
      else if(a[i] === vowels.charCodeAt(4)){
        a[i] = 'u'
      }
    }
    return a
  
  }
