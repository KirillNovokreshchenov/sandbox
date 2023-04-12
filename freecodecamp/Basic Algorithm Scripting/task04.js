function findLongestWordLength(str) {
    const strSplit = str.split(' ') 
    const longestWord = strSplit.reduce((el, acc) =>{
      if(el.length>acc.length){
        return el
    } else return acc

    },'')
    return longestWord.length
 }
 
 console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))