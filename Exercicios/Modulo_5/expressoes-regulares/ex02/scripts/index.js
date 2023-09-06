const inputs = {
  email: document.querySelector("#userEmail"),
  password: document.querySelector("#userPassword")
}



function validateEmail(email) {
  if(!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
    const error = new Error('Email inválido!')
    error.input = 'email'
    throw error
  } 
}

function validatePassword(password) {
  if(
    password.length < 8 ||
    !password.match(/[a-z]/) ||
    !password.match(/[A-Z]/) ||
    !password.match(/[0-9]/) ||
    !password.match(/[^a-zA-Z0-9\s]/)
    ) {
      const error = new Error('Senha inválida!')
      error.input = 'password'
      throw error
  } 
}

function resetFormStyles() {
  Object.entries(inputs).forEach(([key, value]) => {
      value.classList.remove('success', 'error')
      document.querySelector(`#${key}-error`).textContent = ''
  })
}

document.querySelector("form").addEventListener("submit", (ev) => {
  ev.preventDefault()
  resetFormStyles()

  try {
    validateEmail(inputs.email.value)
    inputs.email.classList.add('success')
    validatePassword(inputs.password.value)
    inputs.password.classList.add('success')

  } catch (error) {
    inputs[error.input].classList.add('error')
    document.querySelector(`#${error.input}-error`).textContent = error.message

    console.log(error)
  } finally {
    console.log('uma execução foi realizada')
  }
})