var summation = function (num) {
    if(num<=0){
      return 0
    }else return num + summation(num-1)
  }

  console.log(summation(8));