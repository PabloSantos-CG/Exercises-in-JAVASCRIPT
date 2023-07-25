import { functionalities, clear } from "./functionalities.js"
import { calculate } from "./calculations.js"
import { appearence } from "./appearance.js"

const input = document.getElementById('input')

document.querySelectorAll('.charKey').forEach( currentValue => {
  currentValue.addEventListener('click', () => {
    const value = currentValue.dataset.value
    input.value += value
  })
})

document.getElementById('clear').addEventListener('click', clear)
document.getElementById('equal').addEventListener('click', calculate)

appearence()
functionalities()