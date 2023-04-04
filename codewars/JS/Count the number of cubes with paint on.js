function countSquares(cuts){
    if(cuts === 0){
      return 1
    }
    return (cuts**2)*6 + 2
  }