function addPlayer () {
  const ul = document.getElementById('list')
  
  const position = document.getElementById('position').value
  const name = document.getElementById('name').value
  const number = document.getElementById('number').value

  const confirmation = confirm ('Deseja inserir o jogador ' + name + ' no time?')

  if(confirmation) {
    const li = document.createElement('li')
    li.id = 'player-' + number
    li.innerText = 'Jogador: ' + name + '\nPosição: ' + position + '\nNúmero: ' + number + '\n\n'
    ul.appendChild(li)

    document.getElementById('position').value = ''
    document.getElementById('name').value = ''
    document.getElementById('number').value = ''
  }
}

function removePlayer () {
  const numberRemove = document.getElementById('remove').value
  const idPlayerRemove = document.getElementById('player-' + numberRemove)
  
  const confirmation = confirm('Deseja excluir do time o seguinte jogador? ' + '\n' + idPlayerRemove.innerText)

  if (confirmation) {
    document.getElementById('list').removeChild(idPlayerRemove)
    document.getElementById('remove').value = ''
  }
}