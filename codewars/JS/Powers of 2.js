function powersOfTwo(n){
    if(n<=0){
      return [1]
    } else{
      const countArr = powersOfTwo(n-1)
      countArr.push(2**n)
    return countArr
    }
  }

  console.log(powersOfTwo(2));