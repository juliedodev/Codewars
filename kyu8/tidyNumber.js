function tidyNumber(n){
    //your code here
    
    let numStr = n.toString()
    let arr = numStr.split('').map(x => parseInt(x))
    let trueArr = []
    for(let i = 1; i < arr.length; i++){
      let prev = arr[i - 1]
      if(prev <= arr[i]){
        trueArr.push(true)
      }
      else{
        trueArr.push(false)
      }
      
    }
    if(trueArr.every(x => x === true)){
      return true
    }
    else{
      return false
    }
    
    
  }