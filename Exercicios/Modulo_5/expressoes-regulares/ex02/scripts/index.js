function validateEmail(email) {
  if(!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
    const error = new Error('Email inválido!')
    error.input = 'email'
    throw error
  }
}

function validatePassword(password) {
  if(
    !password.length < 8 ||
    !password.match(/a-z/) ||
    !password.match(/A-Z/) ||
    !password.match(/0-9/) ||
    !password.match(/[^a-zA-Z0-9\s]/)
    ) {

  }
}