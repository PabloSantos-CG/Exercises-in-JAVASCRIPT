// function SomaRaizQ (n1, n2){
//     const Block = (x) => x * x;
    
//       let nBlock1 = Block(n1);
//       let nBlock2 = Block(n2);
//       let tot = nBlock1 + nBlock2;
    
//       console.log('A soma da raiz quadrada de ', n1, '+', n2, 'é', tot);
//     }
    
//     SomaRaizQ(2,3);
    
    // let exemple ['position1', 2, 'position3', [5,6,7] ];

    let consessionaria = {
      chefiaGeral: 'Sun Tzu',
      valuetion: 12000000.6,
      localizacao: 'Belo Horizonte',
      unidade: [ 
        {id: 0, nomeUnidade: 'NovoTempo', gestor: 'Paulo', localizacao: 'Salvador', estoqueGeral: 90},
    
        {id: 1, nomeUnidade: 'VelhoTempo', gestor: 'Ana', localizacao: 'Lauro de Freitas', estoqueGeral: 30},
    
        {id: 2, nomeUnidade: 'HondaOrigi', gestor: 'Cleiton', localizacao: 'Camaçari', estoqueGeral: 235}
      ]
    }
    
    console.log('A chefia Geral desta empresa se chama: ' + consessionaria.chefiaGeral);
    
    console.log('nosso valuetion representa atualmente R$' + consessionaria.valuetion);
    
    console.log('Nossa unidade com maior estoque é',  consessionaria.unidade[2].nomeUnidade, 'e seu estoque equivale à: ', consessionaria.unidade[2].estoqueGeral, 'UNIDADES');