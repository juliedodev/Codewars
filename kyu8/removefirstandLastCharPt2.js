// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL




function array(arr){
    const words = arr.split(',')
      words.shift()
      words.pop()
      return words.length ? words.join(' ') : null
    }