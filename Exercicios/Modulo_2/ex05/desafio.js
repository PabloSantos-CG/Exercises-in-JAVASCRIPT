function creatLabel(text, htmlFor) {
  const label = document.createElement('label')
  label.innerText = text
  label.htmlFor = htmlFor
  return label
}

function creatInput(id, name, value, type = 'text', placeholder = '') {
  const input = document.createElement('input')
  input.id = id
  input.name = name
  input.value = value
  input.type = type
  input.placeholder = placeholder
  return input
}

const button_addTech = document.getElementById('button_addTech')
const devForm = document.getElementById('devForm')
const developers = []

let numberRows = 0

button_addTech.addEventListener('click', function () {
  const ul = document.getElementById('techList')
  const li = document.createElement('li')
  const rowsIndex = numberRows
  numberRows++
  
  li.id = 'row-' + rowsIndex
  li.className = 'line'

  const labelTechnologie = creatLabel('Tecnologia: ', 'tech-' + rowsIndex)
  const inputTechnologie = creatInput('tech-' + rowsIndex, 'technologie', null)

  const tittleExp = creatLabel(' Experiência: ')

  const id_1 = 'exp-' + rowsIndex + '.1'
  const id_2 = 'exp-' + rowsIndex + '.2'
  const id_3 = 'exp-' + rowsIndex + '.3'

  const inputRadio_1= creatInput(id_1, 'expName-' + rowsIndex, 'Até 2 anos', 'radio')
  const labelRadio_1 = creatLabel('Até 2 anos' ,id_1)

  const inputRadio_2= creatInput(id_2, 'expName-' + rowsIndex, 'Até 4 anos', 'radio')
  const labelRadio_2 = creatLabel('Até 4 anos' ,id_2)

  const inputRadio_3= creatInput(id_3, 'expName-' + rowsIndex, 'Mais de 4 anos', 'radio')
  const labelRadio_3 = creatLabel('Mais de 4 anos' ,id_3)

  const button_Remove = document.createElement('button')
  button_Remove.type = 'button'
  button_Remove.id = 'button_Remove'
  button_Remove.innerText = ' Remover'

  button_Remove.addEventListener('click', function () {
    ul.removeChild(li)
  })
  
  li.append(
    labelTechnologie, inputTechnologie, tittleExp,
    inputRadio_1, labelRadio_1,
    inputRadio_2, labelRadio_2,
    inputRadio_3, labelRadio_3,
    button_Remove
  )
    
  ul.append(li)
})

devForm.addEventListener('submit', function (ev) {
  ev.preventDefault()

  const fullName = document.getElementById('fullName').value
  const inputsRows = document.querySelectorAll('.line')
  const technologies = []

  inputsRows.forEach( function (element) {
    const capturedTechName = document.querySelector('#' + element.id + ' input[name="technologie"]').value
    const capturedTechExp = document.querySelector('#' + element.id + ' input[type="radio"]:checked').value

    let pushObject = {
      name: capturedTechName,
      experiencia: capturedTechExp
    }

  technologies.push(pushObject)
  })
  
  const developer = {
    fullName,
    technologies
  }

  developers.push(developer)
  alert('Desenvolvedor incluído')
  console.log(developers)

  fullName.value = ''
  inputsRows.forEach( function (el) {
    el.remove()
  })
})