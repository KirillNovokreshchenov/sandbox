function padIt(str,n){
  
    while(n>0){
      if(n%2!==0){
        str = '*' + str 
      }else str+='*'
      n--
    }
    return str
  }

  console.log(padIt('a',6));