function copyMachine(arr, num) {
    let newArr = [[...arr]];
    while (num > 1) {
      // Only change code below this line
       newArr = [...newArr, arr]
      // Only change code above this line
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));