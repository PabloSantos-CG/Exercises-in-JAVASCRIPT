const input = document.getElementById('iname')

document.getElementById('btn').addEventListener('click', function () {
  input.value = input.value === '' ? input.value = 'Tu é gay' : ''
})
document.getElementById('btn_type').addEventListener('click', function () {
  input.type = input.type !== 'date' ? 'date' : 'text'
})