function findDifference(a, b) {
    const res  = Math.abs(a.reduce((acc,rec)=>{
        return acc=acc*rec
    },1) - b.reduce((acc,rec)=>{
        return acc=acc*rec
    },1))
    return res
  }

  console.log(findDifference([3, 2, 5], [1, 4, 4]));