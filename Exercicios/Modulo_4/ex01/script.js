class Disk {
  constructor (author, year, category, tracks) {
    this.author = author
    this.category = category
    this.releaseYear = year
    this.tracks = tracks
  }

  addNewTracks (...params) {
    this.tracks.push(...params)
  }
}

const bobMarley = new Disk('Bob Marley', '8 de Maio de 1984', 'Reggae roots', ['Get Up, Stand Up', 'Jamming', 'Exodus', 'Is This Love', 'Redemption Song'])

console.log(bobMarley)

bobMarley.addNewTracks('No Woman No Cry', 'Buffalo Soldier', 'One Love')

console.log(bobMarley)