function wordSearch(query, seq){
    //  create empty array to hold matching elements
        let newArr = []
    //  loop through array "seq", which holds strings to match against
        for(let i = 0; i < seq.length; i++){
    //    lower case all elements (strings) of array to bypass case-sensitivity and assign to more readable variable
          let newSeq = seq[i].toLowerCase()
    //    conditional to check if each string matches the query
          if(newSeq.includes(query.toLowerCase())){
            newArr.push(seq[i])
          }
        }
    //  after loop is ran, conditional to check if there are no match elements, if none, return array with string named'empty'
        if(newArr.length === 0){
          newArr = ['Empty']
        }
    //  returns array after loop + conditional is read
        return newArr
      }