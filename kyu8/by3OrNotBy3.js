function divisibleByThree(str){
    let arrStr = str.split('').map(x => parseInt(x)).reduce((a,b) => a+b)
    return arrStr % 3 === 0 ? true : false
  }