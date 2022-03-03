function dup(s) {
  const initail = [];
  const result = [];
  
  s.map((elm) => {
    elm.split('').reduce((acc, value, index, arr) => {
      if (arr[index] !== arr[index+1]) {
        initail.push(arr[index]);
      }
      
      if (index === arr.length-1) {
        result.push(initail.join(''));
        initail.length = 0
      }
      
    }, 0);
  });
          
  return result;
}