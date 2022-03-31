function combine() {
    let combined = {};
    for(let i = 0; i < arguments.length; i++){
      for(let key in arguments[i]){
        if(!combined[key]){
          combined[key] = arguments[i][key];
        }
        else {
          combined[key] += arguments[i][key];
        }
      }
    }
    return combined;
  }