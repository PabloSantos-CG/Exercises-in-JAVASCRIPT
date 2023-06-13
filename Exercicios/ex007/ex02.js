let option = "";
let balance = parseFloat(prompt("Seja Bem-Vindo!" + "\nInsira seu saldo:"));

do {
  option = parseFloat(
    prompt(
      "Saldo Disponível: R$ " +
        balance +
        "\nOpções:" +
        "\n1. Adicionar Dinheiro" +
        "\n2. Remover Dinheiro" +
        "\n3. Sair"
    )
  );

  switch (option) {
    case 1:
      balance += parseFloat(prompt("Adicionar: R$ "));
      break;
    case 2:
      balance -= parseFloat(prompt("Remover: R$ "));
      break;
    case 3:
      alert("Encerrando...");
      break;
    default:
      alert("Opção inválida!");
  }
} while (option !== 3);