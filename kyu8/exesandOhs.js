function XO(str) {
    const count = {
      'x': 0,
      'o': 0,
    }
    
    let check_str = str.split('')
    for(let i = 0; i < check_str.length; i++){
      if(check_str[i].toLowerCase() === 'x'){
        count['x']++
      }
      else if(check_str[i].toLowerCase() === 'o'){
        count['o']++
      }
      else{
        continue
      }
    }
    return count.x === count.o ? true : false
    
  }