const users = {
    Alan: {
      online: false
    },
    Jeff: {
      online: true
    },
    Sarah: {
      online: false
    }
  }
  
  function countOnline(usersObj) {
    let count = 0
    // Only change code below this line
   for(let prop in usersObj){
     if(usersObj[prop].online === true){
       count++
       
     }
   }
   return count
    // Only change code above this line
  }
  console.log(countOnline(users));