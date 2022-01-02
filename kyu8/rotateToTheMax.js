const rotateToMax = n => {
  
    const result = (n+'').split('').sort((a, b) => b - a).join('');
    
    // Your code
    return +result;
  }