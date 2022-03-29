function iTri(s){
    //its gonna be a long day!
      let total_distance = 140.6
      if(s == 0){
        return 'Starting Line... Good Luck!'
      }
      if(s <= 2.4){
        let obj = {}
        obj['Swim'] = `${(total_distance - s).toFixed(2)} to go!`
        return obj
      }
      if(s <= 114.4){
        let obj = {}
        obj['Bike'] = `${(total_distance - s).toFixed(2)} to go!`
        return obj
      }
      if(s <= 130.6){
        let obj = {}
        obj['Run'] = `${(total_distance - s).toFixed(2)} to go!`
        return obj
      }
      
      if(s <= 140.6){
        let obj = {}
        obj['Run'] = 'Nearly there!'
        return obj
      }
      else{
        return 'You\'re done! Stop running!'
      }
      
    }