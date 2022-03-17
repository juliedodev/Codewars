function maskify(cc) {
    let mask = cc.split('').reverse()
    let newArr = []
    for(let i = 0; i < mask.length; i++){
        if(i >= 4){
          newArr.push('#')
        }
        else if( i < 4){
          
          newArr.push(mask[i])
        }
    }
  //   return mask
    return newArr.reverse().join('')
  }