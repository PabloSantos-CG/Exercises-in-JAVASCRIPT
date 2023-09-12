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

//Método de renderização
async function render() {
  const response = await fetch("http://localhost:3000/articles").then(value => value.json())
  
  console.log(response)
  response.forEach(createArticle)
}

document.addEventListener("DOMContentLoaded", () => render())

//Fazer com que os dados sejam atualizados
const form = document.querySelector("form")

form.addEventListener("submit", async (ev) => {
  ev.preventDefault()

  const articleData = {
    title: document.querySelector("#title").value,
    author: document.querySelector("#author").value,
    content: document.querySelector("#content").value
  }

  const response = await fetch("http://localhost:3000/articles", {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(articleData)
  })

  const responseInJson = await response.json()
  
  form.reset()
  createArticle(responseInJson)
  console.log(responseInJson)
})