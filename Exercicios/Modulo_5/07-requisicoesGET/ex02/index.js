function createArticle(element) {
  const article = document.createElement("article")
  article.id = element.id

  const title = document.createElement("h3")
  title.innerText = element.title

  const paragraph = document.createElement("p")
  paragraph.textContent = element.content

  const anchor = document.createElement("a")
  anchor.href = "#"
  anchor.innerText = element.author
  anchor.classList.add("anchor")

  paragraph.appendChild(anchor)
  article.append(title, paragraph)

  document.querySelector("#articles").appendChild(article)
}

async function render() {
  const response = await fetch("http://localhost:3000/articles").then(value => value.json())
  
  console.log(response)
  response.forEach(createArticle)
}

document.addEventListener("DOMContentLoaded", () => render())