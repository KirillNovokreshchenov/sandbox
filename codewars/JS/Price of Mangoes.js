function mango(quantity, price){
    let count = 0
     while(quantity>2){
           quantity-=3
       count+=2*price
       
     }
     count+=(quantity%3)*price
     
     
     return count
   }