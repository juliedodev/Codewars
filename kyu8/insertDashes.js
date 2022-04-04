function insertDash(num) {
    //code me
   let strNum = num.toString()
   let arrStrNum = strNum.split('')
   let result = []
   for(let i = 1; i < arrStrNum.length; i++){
     let prev = parseInt(arrStrNum[i -1])
     let curr = parseInt(arrStrNum[i])
     result.push(arrStrNum[i-1])
     if(prev % 2 !== 0 && curr % 2 !== 0){
       result.push('-')
       
     }
   }
   result.push(arrStrNum[arrStrNum.length - 1])
   return result.join('')
 }
