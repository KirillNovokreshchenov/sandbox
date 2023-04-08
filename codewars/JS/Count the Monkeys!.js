function monkeyCount(n) {
    if(n<=0){
      return []
    }
   const arr = monkeyCount(n-1)
   arr.push(n)
   return arr
 }
 console.log(monkeyCount(9));