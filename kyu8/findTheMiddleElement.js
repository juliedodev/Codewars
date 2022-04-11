function gimme (triplet) {
    let sorted = triplet.map(x => x).sort((a,b) => a - b)
    return triplet.indexOf(sorted[1])
  }