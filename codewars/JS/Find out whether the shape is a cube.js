var cubeChecker = function(volume, side){
    if((volume>0&&side>0)&&side**3===volume){
      return true
    } else return false
    
  };
  console.log(cubeChecker(27, 3));