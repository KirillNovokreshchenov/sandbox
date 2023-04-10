function multipleOfIndex(array) {
    let newArray = []
    for(let key in array){
        if (array[key]%key ===0) newArray.push(array[key])
    }
    return newArray
  }

  console.log(multipleOfIndex([68, -1, 1, -7, 10, 10]));