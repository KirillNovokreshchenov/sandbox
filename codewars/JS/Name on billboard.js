function billboard(name, price = 30){
    let count = 0
      for(let prop of name){
        count+=price
      }
    return count
  } 