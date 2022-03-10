function killer(suspectInfo, dead) {
    //your code here...
    for(let [key,value] of Object.entries(suspectInfo)){
      if(dead.every(x => value.includes(x))){
        return key
      }
    }
    
  }