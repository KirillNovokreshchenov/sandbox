function arrayPlusArray(arr1, arr2) {
    const sum1 = arr1.reduce((acc, el) =>{
      return acc+=el
    },0)
    const sum2 = arr2.reduce((acc, el) =>{
      return acc+=el
    },0)
    
    return sum1 + sum2; //something went wrong
  }