let anosLuz = 0;
let option = "";
do {
  anosLuz = prompt("Seja Bem-Vindo(a) \nQual a distância em anos luz? ");
  option = prompt(
    "Escolha uma das opções para conversão:" +
      "\n1. Parsec (pc)" +
      "\n2. Unidade Astronômica (AU)" +
      "\n3. Quilômetros (km)" +
      "\n4. Sair do programa"
  );

  switch (option) {
    case "1":
      let pc = anosLuz * 0.306601;
      alert(
        "Distância em Anos-Luz: " + anosLuz + "\nConversão desejada: Parsec (pc) " + '\nResultado: ' + pc
      );
      break;
    case "2":
      let au = anosLuz * 63241.1;
      alert(
        "Distância em Anos-Luz: " + anosLuz + "\nConversão desejada: Unidade Astronômica (AU)" + '\nResultado: '+ au
      );
      break;
    case "3":
      let km = anosLuz * (9.5 * Math.pow(10,12));
      alert(
        "Distância em Anos-Luz: " + anosLuz + "\nConversão desejada: Quilômetros (km)" + '\nResultado: '+ km
      );
      break;
    case "4":
      alert("Encerrando o programa...");
      break;
    default:
      alert('Opção inválida')
  }

} while (option !== "4");
