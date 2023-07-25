const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const inputResult = document.getElementById('result')


//FUNCIONALIDADE (FUNCTIONALITIES)

//FUNCIONALIDADE (FUNCTIONALITIES)
const funcionalities = () => {
  
  input.addEventListener('keydown', ev => {
    ev.preventDefault()
    const verificationData = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
    
    if (verificationData.includes(ev.key)) {
      const value = ev.key
      input.value += value
    } else if (ev.key === 'Backspace') {
      input.value = input.value.slice(0, -1)
    } else if (ev.key === 'Enter') {
      calculate()
    }
  })
}

//FUNCIONALIDADE (FUNCTIONALITIES)
document.querySelectorAll('.charKey').forEach( currentValue => {
  currentValue.addEventListener('click', () => {
    const value = currentValue.dataset.value
    input.value += value
  })
})

//FUNCIONALIDADE (FUNCTIONALITIES)
document.getElementById('clear').addEventListener('click', () => {
  input.value = ''
  input.focus()
})

//CALCULO   (CALCULATES)
document.getElementById('equal').addEventListener('click', calculate)

//CALCULO   (CALCULATES)
function calculate () {
  inputResult.value = 'ERROR'
  inputResult.classList.add('error')
  const result = eval(input.value)
  inputResult.value = result
  inputResult.classList.remove('error')
}

//TROCA DE TEMA  (APPEARANCE)
document.getElementById('themeSwitcher').addEventListener('click', () => {
  if (main.dataset.theme === 'dark') {
    root.style.setProperty('--bg-color', '#f1f5f9')
    root.style.setProperty('--font-color', '#212529')
    root.style.setProperty('--primary-color', '#02712d')
    main.dataset.theme = 'ligth'
  } else if (main.dataset.theme === 'ligth') {
    root.style.setProperty('--bg-color', '#212529')
    root.style.setProperty('--font-color', '#f1f5f9')
    root.style.setProperty('--primary-color', '#4dff91')
    main.dataset.theme = 'dark'
  }
})

//TROCA DE TEMA  (APPEARANCE)
document.getElementById('copyToClipboard').addEventListener('click', ev => {
  const button = ev.currentTarget
  if (button.innerText == 'Copy') {
    button.innerText = 'Copied!'
    button.classList.add('success')
    navigator.clipboard.writeText(inputResult.value)
  } else {
    button.innerText = 'Copy'
    button.classList.remove('success')
  }
})