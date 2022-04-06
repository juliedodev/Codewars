function splitTheBill(x) {

    let total = Object.values(x).reduce((a,b) => a + b) 
    let average = total / Object.keys(x).length
    let obj = {}
    for(key in x){
      obj[key] = Math.round((x[key] - average) * 100) / 100;
      
    }
    return obj
    
    
    
  
}