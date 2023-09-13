
//Para armazenar as transações.
let transactions = []

/*cria a div que vai representar cada transação*/
function createTransactionContainer(id) {
  const container = document.createElement("div")
  container.classList.add("transaction")
  container.id = `transaction-${id}`
  return container
}

/*cria o elemento span que será o título da tranção*/
function createTransactionTitle(name) {
  const title = document.createElement("span")
  title.classList.add("transaction-title")
  title.textContent = name
  return title
}

/*cria o valor da transação*/
function createTransactionAmount(amount) {
  const span = document.createElement("span")
  span.classList.add('transaction-amount')

  const formater = Intl.NumberFormat("pt-BR", {
    compactDisplay: "long",
    currency: "BRL",
    style: "currency"
  })

  const formatedAmount = formater.format(amount)

  if(amount > 0) {
    span.textContent = `${formatedAmount} C`
    span.classList.add("credit")
  } else {
    span.textContent = `${formatedAmount} D`
    span.classList.add("debit")
  }

  return span
}

//cria botão que edita o valor que ja foi inserido em 'histórico de transações'
function createBtnEdit(transaction) {
  const btnEdit = document.createElement("button")
  btnEdit.classList.add("edit-btn")
  btnEdit.textContent = "Editar"
  btnEdit.addEventListener("click", () => {
    document.querySelector("#id").value = transaction.id
    document.querySelector("#name").value = transaction.name
    document.querySelector("#amount").value = transaction.amount
  })
  return btnEdit
}

//cria botão que apaga o valor que ja foi inserido em 'histórico de transações'
function createBtnDelete(id) {
  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('delete-btn')
  deleteBtn.textContent = 'Excluir'
  deleteBtn.addEventListener('click', async () => {
    await fetch(`http://localhost:3000/transactions/${id}`, { method: 'DELETE' })
    deleteBtn.parentElement.remove()
    const indexToRemove = transactions.findIndex((t) => t.id === id)
    transactions.splice(indexToRemove, 1)
    updateBalance()
  })
  return deleteBtn
}

/*renderiza os elementos*/
function renderTransaction(transaction) {
  const container = createTransactionContainer(transaction.id)
  const title = createTransactionTitle(transaction.name)
  const amount = createTransactionAmount(transaction.amount)
  const btnEdite = createBtnEdit(transaction)
  const btnDelete = createBtnDelete(transaction.id)

  container.append(title, amount, btnEdite, btnDelete)
  document.querySelector("#transactions").append(container)
}

/*função que faz o fetch*/
async function fetchTransactions() {
  return await fetch("http://localhost:3000/transactions").then(value => value.json())
}

//atualiza o saldo
function updateBalance() {
  const balanceSpan = document.querySelector("#balance")
  const balance = transactions.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0)
  const formater = Intl.NumberFormat('pt-BR', {
    compactDisplay: 'long',
    currency: 'BRL',
    style: 'currency'
  })
  balanceSpan.textContent = formater.format(balance)
}

//manda os dados do db para o array transactions
async function setup() {
  const response = await fetchTransactions()
  transactions.push(...response)
  //utiliza a desestruturação para mandar um por vez
  transactions.forEach(renderTransaction)
  updateBalance()
}

document.addEventListener("DOMContentLoaded", setup)

//função que previne o comportamento padrão do form e faz uma requisição para enviar dados
//envia os dados para o banco de dados, envia para o array e renderiza essa informação na tela
async function saveFormData(ev) {
  ev.preventDefault()

  const id = parseInt(document.querySelector("#id").value)
  const name = document.querySelector("#name").value
  const amount = parseFloat(document.querySelector("#amount").value)

  if(id) {
    const response = await fetch(`http://localhost:3000/transactions/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name, amount }),
      headers: { 
        "Content-Type": "application/json" 
      }
    })
    //como o array transactions possui uma cópia do backend, é necessário apagar a informação antiga presente no array
    const transaction = await response.json()
    const indexToRemove = transactions.findIndex((value) => value.id === id)
    transactions.splice(indexToRemove, 1, transaction)
    document.querySelector(`#transaction-${id}`).remove()
    renderTransaction(transaction)
    
  } else {
    const response = await fetch("http://localhost:3000/transactions", {
      method: "POST",
      body: JSON.stringify({ name, amount }),
      headers: { 
        "Content-Type": "application/json" 
      }
    })
  
    const transaction = await response.json()
    transactions.push(transaction)
    renderTransaction(transaction)
  }
  
  ev.target.reset()
  updateBalance()
}

document.querySelector("form").addEventListener("submit", saveFormData)