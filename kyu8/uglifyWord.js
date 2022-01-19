
function uglifyWord(s) {
    return s.replace(/[a-z]+/ig, x => x.split``.map((y, i) => i % 2? y.toLowerCase(): y.toUpperCase()).join``)
  }
  // Answer 3
  function uglifyWord(s) {
    let flag = true
    return s.split('').map(char => {
      if (char.match(/[A-Z]/i)) {
        flag = !flag
        return flag ? char.toLowerCase() : char.toUpperCase()
      } else {
        flag = true
        return char
      }
    }).join('')
  }