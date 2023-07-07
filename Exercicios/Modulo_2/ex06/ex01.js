function ligthTheme () {
  document.body.style.backgroundColor = '#ffffff';
  document.body.style.color = '#000000';
}

function darkTheme () {
  document.body.style.backgroundColor = '#000000';
  document.body.style.color = '#ffffff';
}

document.getElementById('lightBtn').addEventListener('click', ligthTheme)
document.getElementById('darkBtn').addEventListener('click', darkTheme)