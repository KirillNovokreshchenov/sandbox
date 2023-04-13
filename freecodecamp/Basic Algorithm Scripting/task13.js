function bouncer(arr) {
    return arr.filter(el=>{
      if(el)return el
    });
  }
  
  bouncer([7, "ate", "", false, 9]);
  