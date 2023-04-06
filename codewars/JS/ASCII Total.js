function uniTotal (string) {
    if(!string) return 0
    let count =0
    for(let prop of string){
      count+=prop.codePointAt()
    }
  return count
  }