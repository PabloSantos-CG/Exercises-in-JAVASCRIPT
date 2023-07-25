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