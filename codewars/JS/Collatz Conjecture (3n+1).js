var hotpo = function(n){
    let count = 0
    if(n == 0) return 0; //Optional Handler to n = 0
  
    while(n!==1){
      if(n%2===0){
        n/=2
        count++
      } else {
        n = n*3+1
        count++
      }
    }
    return count
}
console.log(hotpo(1));