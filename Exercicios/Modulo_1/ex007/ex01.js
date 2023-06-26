let option = "";

do {
  option = parseFloat(
    prompt(
      "Olá! Seja Bem-Vindo(a)" +
        "\nEscolha o número da opção desejada:" +
        "\n1. Opção Um" +
        "\n2. Opção Dois" +
        "\n3. Opção Três" +
        "\n4. Opção Quatro" +
        "\n5. Sair"
    )
  );

  switch (option) {
    case 1:
      alert("Você escolheu: " + option + "º Opção");
      break;
    case 2:
      alert("Você escolheu: " + option + "º Opção");
      break;
    case 3:
      alert("Você escolheu: " + option + "º Opção");
      break;
    case 4:
      alert("Você escolheu: " + option + "º Opção");
      break;
    case 5:
      alert("Você escolheu: " + option + "º Opção");
      alert("Encerrando...");
      break;
    default:
      "Opção inválida!";
  }
} while (option !== 5);
