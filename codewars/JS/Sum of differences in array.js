function sumOfDifferences(arr) {
    if(arr.length===0)return 0
    arr.sort((a,b)=> b-a)
    return arr[0]-arr[arr.length-1]
  }