function betweenExtremes(numbers) {
    let max = numbers[0]
    let min = numbers[0]
    for (let prop of numbers){
      if (prop>max){
        max = prop
      } else if(prop<min){
        min = prop
      }
    }
  return max-min
}