function creatLabel(text, htmlFor) {
  const label = document.createElement('label')
  label.innerText = text
  label.htmlFor = htmlFor
  return label
}

function creatInput(id, name, value, type = 'text', placeholder = '') {
  const input = document.getElementById('input')
  input.id = id
  input.name = name
  input.value = value
  input.type = type
  input.placeholder = placeholder
  return input
}

const 