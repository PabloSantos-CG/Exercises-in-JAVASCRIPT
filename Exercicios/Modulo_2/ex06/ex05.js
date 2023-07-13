const city = document.getElementById('city')
const neighborhood = document.getElementById('neighborhood')
const houseNumber = document.getElementById('houseNumber')
const houseState = document.getElementById('houseState')
const listOfAddres = document.getElementById('listOfAddres')
let cont = 0

document.getElementById('buttonAdd').addEventListener('click', function (ev) {
  ev.preventDefault()
  const li = document.createElement('li')
  const rowIndex = 'row-' + cont
  cont ++
  li.id = rowIndex

  const buttonRemoveLi = document.createElement('button')
  buttonRemoveLi.type = 'button'
  buttonRemoveLi.id = 'btnRemove-' + rowIndex
  buttonRemoveLi.innerText = 'Remover'

  const cityEvent = city.value
  const neighborhoodEvent = neighborhood.value
  const houseNumberEvent = houseNumber.value
  const houseStateEvent = houseState.value

  if (cityEvent && neighborhoodEvent && houseNumberEvent && houseStateEvent) {
    li.append(
      cityEvent,' , ', neighborhoodEvent,' , ', houseNumberEvent,' , ', houseStateEvent,' ', buttonRemoveLi
    )

    listOfAddres.appendChild(li)
  } else {
    alert('Você deve primeiro preencher o formulário!')
  }

  buttonRemoveLi.addEventListener('click', function () {
    listOfAddres.removeChild(li)
  })

})