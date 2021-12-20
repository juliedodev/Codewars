
function differenceInAges(ages){
    let sortedAges = ages.sort((a,b) => a - b)
    let youngestOldestDiff = []
    
    youngestOldestDiff.push(sortedAges[0])
    youngestOldestDiff.push(sortedAges[sortedAges.length-1])
    
    if(youngestOldestDiff[0] < 1){
      youngestOldestDiff[0] = 0
      let diff = youngestOldestDiff[youngestOldestDiff.length - 1] - youngestOldestDiff[0]
      youngestOldestDiff.push(diff)
    }
    else{
      let diff = youngestOldestDiff[youngestOldestDiff.length - 1] - youngestOldestDiff[0]
      youngestOldestDiff.push(diff)
    }
    return youngestOldestDiff
  }