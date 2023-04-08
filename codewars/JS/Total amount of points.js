function points(games) {
    return games.reduce((acc, el)=>{
       if(el[0]>el[2]){ 
         return acc+=3
         }else if(el[0]===el[2]){
           return acc+=1
         } else if(el[0]<el[2]){
           return acc+=0
         }
     },0)
     
   }