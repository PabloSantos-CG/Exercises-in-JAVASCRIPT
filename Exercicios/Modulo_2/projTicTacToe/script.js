const span = document.querySelectorAll('#gameBoard span')
let virtualBoard = []
let currentPlayer = ''

function updatePlayer () {
  const player = document.getElementById(currentPlayer)
  document.getElementById('turnPlayer').innerText = player.value
}

function gameStartup () {
  virtualBoard = [ ['', '', ''], ['', '', ''], ['', '', ''] ]
  currentPlayer = 'player1'
  document.querySelector('h2').innerHTML = '<h2>Vez de: <span id="turnPlayer"></span></h2>'
  updatePlayer()

  span.forEach( function (element) {
    element.classList.remove('win')
    element.innerText = ''
    element.classList.add('cursor-pointer')
    element.addEventListener('click', marked)
  })
}

function removeTag (ev) {
  ev.classList.remove('cursor-pointer')
  ev.removeEventListener('click', marked)
}

function checkWinner () {
  let vBoardTester = []
  if (virtualBoard[0][0] && virtualBoard[0][0] === virtualBoard[0][1] && virtualBoard[0][0] === virtualBoard[0][2]) {
    vBoardTester.push('0.0', '0.1', '0.2')
  } else if (virtualBoard[1][0] && virtualBoard[1][0] === virtualBoard[1][1] && virtualBoard[1][0] === virtualBoard[1][2]) {
    vBoardTester.push('1.0', '1.1', '1.2')
  } else if (virtualBoard[2][0] && virtualBoard[2][0] === virtualBoard[2][1] && virtualBoard[2][0] === virtualBoard[2][2]) {
    vBoardTester.push('2.0', '2.1', '2.2')
  } else if (virtualBoard[0][0] && virtualBoard[0][0] === virtualBoard[1][0] && virtualBoard[0][0] === virtualBoard[2][0]) {
    vBoardTester.push('0.0', '1.0', '2.0')
  } else if (virtualBoard[0][1] && virtualBoard[0][1] === virtualBoard[1][1] && virtualBoard[0][1] === virtualBoard[2][1]) {
    vBoardTester.push('0.1', '1.1', '2.1')
  } else if (virtualBoard[0][2] && virtualBoard[0][2] === virtualBoard[1][2] && virtualBoard[0][2] === virtualBoard[2][2]) {
    vBoardTester.push('0.2', '1.2', '2.2')
  } else if (virtualBoard[0][0] && virtualBoard[0][0] === virtualBoard[1][1] && virtualBoard[0][0] === virtualBoard[2][2]) {
    vBoardTester.push('0.0', '1.1', '2.2')
  } else if (virtualBoard[0][2] && virtualBoard[0][2] === virtualBoard[1][1] && virtualBoard[0][2] === virtualBoard[2][0]) {
    vBoardTester.push('0.2', '1.1', '2.0')
  }

  return vBoardTester
}

function endGame (regions) {
  regions.forEach( function (region) {
  document.querySelector('[data-region="' + region + '"]').classList.add('win')
  const name = document.getElementById(currentPlayer).value
  document.querySelector('h2').innerText = 'O jogador ' + "'" + name + "'" + ' VENCEU!'

  span.forEach( function (element) {
    element.removeEventListener('click', marked)
    element.classList.remove('cursor-pointer')
    element.classList.remove('hoverStyle')
  })
  })
}

function marked (ev) {
  const span = ev.currentTarget
  const region = span.dataset.region
  const pairRowColumn = region.split('.')
  const row = pairRowColumn[0]
  const column = pairRowColumn[1]

  if (currentPlayer === 'player1') {
    span.innerText = 'X'
    virtualBoard[row][column] = 'X'

  } else {
    span.innerText = 'O'
    virtualBoard[row][column] = 'O'
  }

  removeTag(span)
  console.clear()
  console.table(virtualBoard)

  const result = checkWinner()

  if (result.length > 0) {
    endGame(result)
  } else if (virtualBoard.flat().includes('')) {
    currentPlayer = currentPlayer === 'player1' ? 'player2' : 'player1'
    updatePlayer()
  } else {
    document.querySelector('h2').innerText = 'Empate!'
  }
}

document.getElementById('start').addEventListener('click', gameStartup)