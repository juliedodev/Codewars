function capitalizeWord(word) {
    let arr = word.split('')
    let upper = arr.map((x, index) => index == 0 ? x.toUpperCase() : x.toLowerCase())
    return upper.join('')
  }