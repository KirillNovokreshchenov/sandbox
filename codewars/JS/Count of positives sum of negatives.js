function countPositivesSumNegatives(input) {
    let countPositive = 0;
    let sumNegative = 0;
    if(input==null||!input.some(el => el!==0)){return []}
    input.forEach(el=>{
      el>0 ? countPositive++ : sumNegative+=el
    });
    return [countPositive, sumNegative]
  }