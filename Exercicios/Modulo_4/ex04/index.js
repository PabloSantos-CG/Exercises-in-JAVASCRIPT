class Login {
  #password

  constructor () {
    this.#password = 12;
  }

  newAcess(user, password) {
    this.user = user
    this.password = password

    return this.#verification(user, password)
  }

  #verification(user, password) {
    if(this.user === user && this.#password === password) {
      return 'Login Efetuado'
    }
    return 'Usuário ou senha incorretos!'
  }
}

const login = new Login()

// const retorno = 

console.log(login.newAcess('Maike', 12))
console.log(login.newAcess('Maike', 123))