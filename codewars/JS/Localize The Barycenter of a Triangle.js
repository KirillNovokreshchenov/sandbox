function barTriang(p1, p2, p3){
    let x =0;
    let y = 0;
  generalArr = p1.concat(p2, p3)
    for (let key in generalArr){
    if(key%2 ===0){
        x+=generalArr[key]
    } else y+=generalArr[key]
  }
  return [+(x/3).toFixed(4),+(y/3).toFixed(4)]
}

barTriang([4, 6], [12, 4], [10, 10])