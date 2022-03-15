function accum(s) {
    // your code
    let str = s.split('').map(x => x.toLowerCase())
    let arr = []
    for(let i = 0; i < str.length; i++){
      let repeat = str[i].repeat(i+1).split('')
      arr.push(repeat)
    }
  //   console.log(arr)
    
    return arr.map((x,i) => x[i][0].toUpperCase() + x[i].repeat(i)).join('-')
  //   console.log(arr.map(x => x.join('')).join('-'))
    
    
  }