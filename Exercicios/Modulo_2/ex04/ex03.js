const form = document.getElementById('orderForm')

form.addEventListener('submit', function (event) {
  event.preventDefault()

  const name = document.getElementById('name').value
  const address = document.getElementById('address').value
  const typeOfBread = document.querySelector('select').value
  const protein = document.querySelector('input[name="main"]:checked').value
  const comments = document.getElementById('observations').value

  let salad = ''
  document.querySelectorAll('input[name="salad"]:checked').forEach( function (item) {
    salad += ' - ' + item.value + '\n'
  })

  const confirmation = confirm(
    '- PEDIDO -' +
    '\n\nNome: ' + name +
    '\nEndereço: ' + address +
    '\nTipo de pão: ' + typeOfBread +
    '\nProteína: ' + protein +
    '\nSalada: \n' + salad +
    '\nObservações: ' + comments
  )

  if (confirmation) {
    alert('Pedido Confirmado!')
    console.log( {name, address, typeOfBread, protein, salad, comments})
  } else {
    alert('Preencha novamente')
  }
})