function countSheeps(arrayOfSheep) {
    let count = 0
    for(prop of arrayOfSheep){
      if(prop) count++
    }
    return count
  }