export const appearence = () => {
  const root = document.querySelector(':root')
  const main = document.querySelector('main')
  const inputResult = document.getElementById('result')

  document.getElementById('themeSwitcher').addEventListener('click', () => {
    if (main.dataset.theme === 'dark') {
      root.style.setProperty('--bg-color', '#f1f5f9')
      root.style.setProperty('--font-color', '#212529')
      root.style.setProperty('--primary-color', '#02712d')
      main.dataset.theme = 'ligth'
    } else if (main.dataset.theme === 'ligth') {
      root.style.setProperty('--bg-color', '#212529')
      root.style.setProperty('--font-color', '#f1f5f9')
      root.style.setProperty('--primary-color', '#4dff91')
      main.dataset.theme = 'dark'
    }
  })

  document.getElementById('copyToClipboard').addEventListener('click', ev => {
    const button = ev.currentTarget
    if (button.innerText == 'Copy') {
      button.innerText = 'Copied!'
      button.classList.add('success')
      navigator.clipboard.writeText(inputResult.value)
    } else {
      button.innerText = 'Copy'
      button.classList.remove('success')
    }
  })
}