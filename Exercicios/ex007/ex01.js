/*
  1º Menu c/5 opções diferentes
  2º Iniciar mostrando as 5 opções disponíveis
  3º 4 primeiras sem funcionalidades
  4º A última deve ser a opção 'ENCERRAR'
  5º Ao clicar em alguma das 4 primeiras uma msg deve ser exibida
  depois o programa deve voltar a exibir novamente o menu com as 5 opções
  6º Deve continuar até que o usuário escolha 'ENCERRAR'
  7º Se, escolhe-la uma msg deve ser exibida dizendo que o      sistema está sendo encerrado e entao, encerrar
*/
loop = "Continuar";
do {
  let menu = prompt(
    "---- MENU ----" +
      "\nOption1" +
      "\nOption2" +
      "\nOption3" +
      "\nOption4" +
      "\nEncerrar"
  );

  switch (menu) {
    case "Option1":
      alert("chosen Option1");
      break;

    case "Option2":
      alert("chosen Option2");
      break;

    case "Option3":
      alert("chosen Option3");
      break;

    case "Option4":
      alert("chosen Option4");
      break;

    case "Encerrar":
      alert("Encerrando!");
      loop = "Encerrar";
      break;
  }
} while (loop === "Continuar");
