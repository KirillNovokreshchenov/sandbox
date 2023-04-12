function findElement(arr, func) {
    return arr.find(func);
}
  
console.log(  findElement([1, 3, 5, 9], num => num % 2 === 0));