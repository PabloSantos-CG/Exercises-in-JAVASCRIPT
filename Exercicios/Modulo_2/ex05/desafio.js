const form = document.getElementById('orderForm')

const button_AddFeature = document.getElementById('addFeature')
const button_RemoveFeature = document.getElementById('removeFeature')

//campo onde vai aparecer os inputs para add features
const ul_DataField = document.getElementById('dataField')

//pegando o evento 'click' no botao adicionar recurso
button_AddFeature.addEventListener('click', function () {
  const li = document.createElement('li')
  const br = document.createElement('br')
  const brReapet = document.createElement('br')
  
  const labelText = document.createElement('label')
  const inputText = document.createElement('input')

  labelText.htmlFor = 'technology'
  labelText.innerText = 'Tecnologia: '
  inputText.id = 'technology'
  inputText.type = 'text'
  inputText.placeholder = 'Exemplo: Tailwind'

  const labelRadioGroup = document.createElement('label')

  const labelRadio1 = document.createElement('label')
  const inputRadio1 = document.createElement('input')

  const labelRadio2 = document.createElement('label')
  const inputRadio2 = document.createElement('input')

  const labelRadio3 = document.createElement('label')
  const inputRadio3 = document.createElement('input')

  labelRadioGroup.htmlFor = 'radioGroup'
  labelRadioGroup.innerText = 'Tempo de experiência: '
  inputRadio1.type = 'radio'
  inputRadio2.type = 'radio'
  inputRadio3.type = 'radio'

  inputRadio1.name = 'radioGroup'
  inputRadio2.name = 'radioGroup'
  inputRadio3.name = 'radioGroup'

  labelRadio1.htmlFor = 'radio1'
  inputRadio1.id = 'radio1'
  
  labelRadio2.htmlFor = 'radio2'
  inputRadio2.id = 'radio2'

  labelRadio3.htmlFor = 'radio3'
  inputRadio3.id = 'radio3'

  labelRadio1.innerText = 'Até 2 anos'
  labelRadio2.innerText = 'Até 4 anos'
  labelRadio3.innerText = 'Mais de 4 anos'

  li.append(
    labelText, inputText, br, labelRadioGroup, brReapet, inputRadio1, labelRadio1, inputRadio2, labelRadio2, inputRadio3, labelRadio3
  )
  
  li.style.margin= '15px 0'

  ul_DataField.append(li)
})

form.addEventListener('submit', function (ev) {
  ev.preventDefault()
})