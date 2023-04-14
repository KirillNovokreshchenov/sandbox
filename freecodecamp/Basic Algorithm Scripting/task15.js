function mutation(arr) {
    let flag = true
    for(let prop of arr[1]){
        let reg = new RegExp(`${prop}`, 'i')
        if(!reg.test(arr[0])){
           flag = false
        
        }
    }
    return flag
  
  }
 console.log( mutation(["floorn", "form"]));
  