const Comment = require("./comment")

class Post {
  constructor (author, title, body) {
    this.author = author
    this.title = title
    this.body = body
    this.comments = []
    this.date = new Date()
  }

  addNewComments(usuario, content) {
    this.comments.push(new Comment(usuario, content))
  }
}

module.exports = Post