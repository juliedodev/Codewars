function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  const average = classPoints.reduce((x, y) => x + y, 0) / classPoints.length;
  
  return average > yourPoints ? false : true
}
