function maps(x){
    let newX = []
    for(let i = 0; i < x.length; i++){
      let doubleX = x[i] * 2
      newX.push(doubleX)
    }
    return newX
  }