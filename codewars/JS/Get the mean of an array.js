function getAverage(marks){
    const sum =  marks.reduce((acc, el)=>{
      return acc+=el
    },0)
    return Math.floor(sum/marks.length)
  }