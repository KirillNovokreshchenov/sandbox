function none(arr, fun){
    for(let prop of arr){
      if(fun(prop)){
        return false
      }
    }
    return true
  }