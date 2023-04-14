function getIndexToIns(arr, num) {
    const arrSort = arr.sort((a, b) => a-b).find((el)=>num-el<=0)
    if(arrSort === undefined){
        arr.push(num)
        return arr.indexOf(num)
    }
    return arr.indexOf(arrSort)
    
  }
console.log(getIndexToIns([40], 50));
getIndexToIns([40], 50);