export const functionalities = () => {
  const input = document.getElementById('input')

  input.addEventListener('keydown', ev => {
    ev.preventDefault()
    
  const verificationData = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

  const input = document.getElementById('input')
    
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

export const clear = () => {
  const result = document.getElementById('result')
  const input = document.getElementById('input')
  const buttonCopy = document.getElementById('copyToClipboard')
  buttonCopy.innerText = 'Copy'
  buttonCopy.classList.remove('success')

  input.value = ''
  input.focus()
  result.value = ''
  result.classList.remove('error')


}