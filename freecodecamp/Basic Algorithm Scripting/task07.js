function repeatStringNumTimes(str, num) {
    let emptyStr = ''
    while(num>0){
      emptyStr+=str
      num--
    }
    return emptyStr
  }
  
  console.log(repeatStringNumTimes("abc", 3));
  