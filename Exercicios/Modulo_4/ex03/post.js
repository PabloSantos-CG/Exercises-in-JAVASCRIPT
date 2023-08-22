class Post {
  constructor (title, content, date) {
    this.title = title
    this.content = content
    this.date = date
  }

  addComment () {
    return 
  }
}

const daily = new Post('Massacre', 'As carteiras de todos estão sangrando!', '22/08/2023')

console.log(daily)

daily.addComment('ROMBO! 28bi', 'Americanas descobre rombo bilionário!', '10/04/2023')

console.log(daily)