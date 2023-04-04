function periodIsLate(last, today, cycleLength) {
    if((today-last)/(3600*24*1000) > cycleLength){
        return true
    } else return false
    
  }