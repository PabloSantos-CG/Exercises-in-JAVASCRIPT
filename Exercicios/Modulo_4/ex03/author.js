const Post = require("./post")

class Author {
  constructor (name) {
    this.name = name
    this.posts = []
  }

  createPosts(title, body) {
    const post = new Post(this, title, body)
    this.posts.push(post)
    return post
  }
}

module.exports = Author