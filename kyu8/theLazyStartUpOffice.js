function binRota(arr){
  
    let order = []
    for(let i = 0; i < arr.length; i++){
      if((i + 1) % 2 === 0){
        arr[i].reverse()
        order.push(arr[i])
      }
      else{
        order.push(arr[i])
      }
      
    }
    return [].concat(...order)
    
  
  
  
  }