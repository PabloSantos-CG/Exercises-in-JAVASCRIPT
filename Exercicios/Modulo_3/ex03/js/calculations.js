export const calculate = () => {
  const inputResult = document.getElementById('result')

  inputResult.value = 'ERROR'
  inputResult.classList.add('error')
  const result = eval(input.value)
  inputResult.value = result
  inputResult.classList.remove('error')
}