function tiaosheng(failedCount){
    let count = 0
    for(let i = 1; i<=60; i++){
        count++
        for(let j = 0; j<failedCount.length; j++){
            if(i===failedCount[j]){
                count-=3
            }
        }
    }
    return count
    
  }

  console.log(tiaosheng([10, 20, 30, 40, 58]));