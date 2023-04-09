function tiaosheng(failedCount){
    let count = 0
    for(let i = 1; i<=60; i++){
        count++
        for(let j = 0; j<failedCount.length; j++){
            if(count===failedCount[j]&&failedCount[j]+(j+1)*3<=60){
                i+=3
            } else if(count===failedCount[j]&&failedCount[j]+(j+1)*3>60){
                return failedCount[j]
            }
        }
    }
    return count
    
  }

  console.log(tiaosheng([56]));