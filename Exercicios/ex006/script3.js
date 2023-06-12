const name = prompt("Digite seu nome: ");
response = prompt("Já visitou alguma cidade? (SIM/NAO)");
qtd = 0;

while (response === "SIM") {
  cidade = prompt("Qual cidade visitou?");
  responsive = prompt("Já visitou outra cidade? (SIM/NAO)");
  if (responsive === "NAO") {
    break;
  }
  qtd++;
}
alert('A quantidade de cidades visitada é: ' + qtd);
