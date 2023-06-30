function criarContato () {
  const contato = document.getElementById('boxContact')
  
  const h3 = document.createElement('h3')
  h3.innerText = 'Contato'
  contato.appendChild(h3)

  const ul = document.createElement('ul')

  const liName = document.createElement('li')
  liName.innerText = 'Nome: '
  const inputName = document.createElement('input')
  inputName.type = 'text'
  liName.appendChild(inputName)
  
  const liPhone = document.createElement('li')
  liPhone.innerText = 'Número: '
  const inputPhone = document.createElement('input')
  inputPhone.type = 'text'
  liPhone.appendChild(inputPhone)

  const br = document.createElement('br')

  ul.append(liName, br, liPhone)
  contato.appendChild(ul)
}

function removerContato () {
  const contact = document.getElementById('boxContact')

  const tittle = document.getElementsByTagName('h3')
  const contactInfo = document.getElementsByTagName('ul')

  contact.removeChild(tittle[tittle.length - 1])
  contact.removeChild(contactInfo[contactInfo.length - 1])
}