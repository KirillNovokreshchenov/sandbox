function abbrevName(name){
    const arrName = name.split(' ')
    return `${arrName[0][0].toUpperCase()}.${arrName[1][0].toUpperCase()}`
 }