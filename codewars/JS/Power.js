function numberToPower(number, power){
    if(power ===0) return 1
    let x =number
    for(let i = 1; i<power;i++){
      x *=number
    }
    
    return x
  }