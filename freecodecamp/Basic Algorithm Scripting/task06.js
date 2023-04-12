function confirmEnding(str, target) {
    const slice = str.slice(str.length-target.length)
  if(slice===target){
    return true
  } 
  return false
  }
  
  console.log(confirmEnding("Bastian", "n"));
  