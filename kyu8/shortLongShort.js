function solution(a, b) {
  return a.length < b.length ? a + b + a : b + a + b
}    
    
function solution(a, b){
    var short = a.length <= b.length ? a : b;
    var long = b.length >=a.length  ? b :a;
    return short  + long + short;
}