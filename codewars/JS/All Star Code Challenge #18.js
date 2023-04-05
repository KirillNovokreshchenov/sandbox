function strCount(str, letter){  
    let count =0
    for(prop of str){
      if(prop === letter) count++
    }
    return count
  }