function grow(x){
    return x.reduce((el, acc)=>{
      return acc*=el
    },1)
 }