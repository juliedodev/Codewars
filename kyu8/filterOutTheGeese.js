function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
  
    return birds.filter(x => birds.includes(x) !== geese.includes(x))            
      
  };
  