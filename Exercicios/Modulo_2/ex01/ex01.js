const vagas = [];

//Função para listar as vagas
function exibirVagas() {
  const exibirVagas = vagas.reduce(function (acumulador, valorAtual, indice) {
    acumulador += "Índice: " + indice + " º " + "\n";
    acumulador += "Vaga: " + valorAtual.nome + "\n";
    acumulador +=
      "Candidatos inscritos: " + valorAtual.candidatos.length + "\n";
    return acumulador;
  }, "");

  if (!exibirVagas) {
    alert("Sem vagas no momento");
    return;
  }

  alert(exibirVagas);
}

// Função para criar uma vaga
function criarVaga() {
  const nome = prompt("Informe o nome da vaga: ");
  const descricao = prompt("Informe a descrição da vaga: ");
  const dataLimite = prompt("Informe a data limite da vaga: ");

  if(!nome || !descricao || !dataLimite) {
    alert('Você deve preencher os campos')
    return
  }

  const confirmacao = confirm(
    "Confirme a criação da seguinte vaga: " +
      "\n\nNome da vaga: " +
      nome +
      "\nDescrição: " +
      descricao +
      "\nData limite: " +
      dataLimite
  );

  if (confirmacao) {
    const vaga = { nome, descricao, dataLimite, candidatos: [] };
    vagas.push(vaga);
    alert("Vaga criada com sucesso.");
    return;
  }
}

//Função visualizar uma vaga
function visualizarUmaVaga() {
  const indice = prompt("Informe o índice da vaga: ");
  const vaga = vagas[indice];

  if (!vaga) {
    alert("Vaga não existe");
    return;
  }

  const candidatosEmTexto = vaga.candidatos.reduce(function (
    acumulador,
    valorAtual
  ) {
    return acumulador + "\n - " + valorAtual;
  },
  "");

  alert(
    "Vaga nº " +
      indice +
      "\nNome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite +
      "\nCandidatos inscritos: " +
      vaga.candidatos.length +
      "\nCandidatos: " +
      candidatosEmTexto
  );
}

//Função inscrever um candidato
function inscreverUmCandidato() {
  const indice = parseFloat(prompt("Informe o índice da vaga: "));
  const nomeCandidato = prompt("Informe o nome do candidato: ");

  if(!indice || !nomeCandidato) {
    alert('Você deve preencher os campos')
    return
  }

  const vaga = vagas[indice];

  if (!vaga) {
    alert("Vaga não existe");
    return;
  }

  const confirmacao = confirm(
    "Deseja inscrever o candidato " +
      nomeCandidato +
      " na seguinte vaga? " +
      "\nVaga nº " +
      indice +
      "\nNome: " +
      vaga.nome +
      "\nData limite: " +
      vaga.dataLimite
  );

  if (confirmacao) {
    vaga.candidatos.push(nomeCandidato);
    alert("Candidato " + nomeCandidato + " inscrito com sucesso.");
    return;
  }
}

//Função para excluir uma vaga
function excluirVaga() {
  const indice = prompt("Informe o índice da vaga: ");
  const vaga = vagas[indice];

  if (!vaga) {
    alert("Vaga não existe");
    return;
  }

  const confirmacao = confirm(
    "Deseja excluir a seguinte vaga? " +
      "\nNome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite
  );

  if (confirmacao) {
    vagas.splice(indice, 1);
    alert("Vaga excluída com sucesso.");
    return;
  }
}

function menu() {
  return prompt(
    "Seja Bem-Vindo(a) ao ▼ Cadastro Positivo ▼" +
      "\nEscolha uma das opções abaixo:" +
      "\n\n1. Exibir vagas disponíveis" +
      "\n2. Criar uma vaga" +
      "\n3. Visualizar uma vaga" +
      "\n4. Inscrever um(a) candidato(a)" +
      "\n5. Excluir uma vaga" +
      "\n6. Sair"
  );
}

function executar() {
  let option = "";
  do {
    option = menu();

    switch (option) {
      case "1":
        exibirVagas();
        break;
      case "2":
        criarVaga();
        break;
      case "3":
        visualizarUmaVaga();
        break;
      case "4":
        inscreverUmCandidato();
        break;
      case "5":
        excluirVaga();
        break;
      case "6":
        alert("Encerrando programa...");
        break;
      default:
        alert("Opção inválida");
    }
  } while (option !== "6");
}


