function bmi(weight, height) {
    let index;
    const bmIndex = weight / (height**2)
    bmIndex <=18.5 ? index = "Underweight" : bmIndex<=25 ? index ="Normal" : bmIndex <=30 ?  index ="Overweight" : index = "Obese"
    return index
  }
  console.log(bmi(80, 1.80));