function titleCase(str) {
    const strArr = str.split(' ')
    const arrMap = strArr.map(el=>{
        el = el.toLowerCase()
        el= el[0].toUpperCase() + el.slice(1)
        return el
                
    })
    return arrMap.join(' ')
  }
  
  console.log(titleCase("I'm a little tea pot"));
  titleCase("I'm a little tea pot");