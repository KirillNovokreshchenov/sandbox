function sameCase(a, b){
    if(/[A-Za-z]/g.test(a)&&/[A-Za-z]/g.test(b)){
   if(!!((a !== a.toUpperCase()?0: b === b.toUpperCase()?1:0))){
       return 1
   } else{
    return a !== a.toLowerCase()?0: b === b.toLowerCase()?1:0
   }

  }else return -1
}

  console.log(sameCase('A','^'))