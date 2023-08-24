class Comment {
  constructor (usuario, content) {
    this.usuario = usuario
    this.content = content
    this.date = new Date()
  }
}

module.exports = Comment