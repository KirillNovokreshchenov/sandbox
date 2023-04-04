var humanYearsCatYearsDogYears = function(humanYears) {
    switch(humanYears){
        case 0: return [0, 0, 0]
        case 1: return [1, 15, 15]
        case 2: return [1, 24, 24]
        default: return [humanYears, 24+(humanYears-2)*4, 24+(humanYears-2)*5]  
    }
   
  }

  console.log(humanYearsCatYearsDogYears(10)); 



