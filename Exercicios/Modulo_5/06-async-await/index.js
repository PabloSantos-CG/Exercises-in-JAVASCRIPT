async function calcIMC(weight, height) {
  if(typeof weight === "number" && typeof height === "number") {
    return weight / (height * height)
  } else {
    return Promise.reject("Error! This parameter is not of type number")
  }
}

async function execute(weight, height) {
  try {
    console.log(`Calculation IMC for Height ${height} and Weight ${weight}...`)

    const result =  await calcIMC(weight, height)

    console.log(`Your IMC is: ${result}`)

    if(result <= 18.5) console.log("Your situation: THINNESS\n")
    else if(result > 18.5 && result <= 24.9) console.log("Your situation: NORMAL\n")
    else if(result >= 25 && result <= 29.9) console.log("Your situation: OVERWEIGHT\n")
    else if(result >= 30 && result <= 39.9) console.log("Your situation: OBESITY\n")
    else console.log("Your situation: SEVERY OBESITY\n")

    
  } catch (error) {
    console.log(error)
  }
}

execute(71, 1.74)
execute(48, 1.60)
execute(71, "texto")
execute(82, 1.72)
execute(120, 1.80)