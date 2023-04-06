let count = 0;

function cc(card) {
  if(card>=2 && card<=6){
    count += 1
  } else if(card>=7&&card<=9){
    count+=0
  }else if(card===10||'JQKA'.includes(card)){
    count-=1
  }

 if(count<=0){
   return `${count} Hold`
 } return `${count} Bet`
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');