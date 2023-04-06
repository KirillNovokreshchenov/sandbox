function rangeOfNumbers(startNum, endNum) {
    if(startNum>endNum){
      return[]
    } else{
      const countArr = rangeOfNumbers(startNum+1, endNum)
      countArr.unshift(startNum)
      return countArr
    }
    
  };

  console.log(rangeOfNumbers(4, 4));