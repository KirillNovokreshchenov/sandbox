function contamination(text, char){
    if (!text){
        return ""
    }
    text = text.slice(0, text.length - 1)
    
    return char+contamination(text, char)
  }

  function contaminationTwo(text, char){
    
    return char.repeat(text.length)
  }


  console.log(contaminationTwo('qwerty','z'));