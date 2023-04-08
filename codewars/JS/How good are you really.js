function betterThanAverage(classPoints, yourPoints) {
    const classPoint = classPoints.reduce((acc,el)=>{
      return acc+=el
    },0)/classPoints.length
    return yourPoints>classPoint
  }
  