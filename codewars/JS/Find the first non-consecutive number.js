function firstNonConsecutive (arr) {
    const value = arr.find((el, index)=>el-arr[index-1]>1)
    if(value === undefined){
      return null
    } return value
 }