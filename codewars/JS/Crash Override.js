function aliasGen(first, sur){
    if(firstName[first[0].toUpperCase()] && surname[sur[0].toUpperCase()]){
      return `${firstName[first[0].toUpperCase()]} ${surname[sur[0].toUpperCase()]}`
    } else return "Your name must start with a letter from A - Z."
}