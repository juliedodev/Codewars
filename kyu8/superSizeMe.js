function superSize(num){
    let sorted = num.toString().split('').sort((a,b) => b - a).join('')
    return Number(sorted)
  }