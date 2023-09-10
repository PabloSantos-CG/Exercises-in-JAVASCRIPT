function calcIMC(weight, height) {
  return new Promise((resolve, reject) => {
    if(typeof weight === "number" && typeof height === "number") {
      const imc = weight / (height * height)
      resolve(imc)
    } else {
      reject("Error! This parameter is not of type number")
    }
  })
}

function returnCalcIMC(weight, height) {
  
  setTimeout(() =>{
    
    calcIMC(weight, height).then(value => {
      console.log(`The IMC result was: ${value}`)

      if(value <= 18.5) console.log("Your situation: THINNESS")
      else if(value > 18.5 && value <= 24.9) console.log("Your situation: NORMAL")
      else if(value >= 25 && value <= 29.9) console.log("Your situation: OVERWEIGHT")
      else if(value >= 30 && value <= 39.9) console.log("Your situation: OBESITY")
      else console.log("Your situation: SEVERY OBESITY")

    }).catch(error => {
      console.log(error)
    })

  }, 2000)

  console.log(`Calculation IMC for Height: ${height} and Weight: ${weight}`)
}

returnCalcIMC(71, 1.74)
returnCalcIMC(48, 1.60)
returnCalcIMC(71, "texto")
returnCalcIMC(82, 1.72)
returnCalcIMC(120, 1.80)