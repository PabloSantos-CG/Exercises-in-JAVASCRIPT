function SomaRaizQ (n1, n2){
    const Block = (x) => x * x;
    
      let nBlock1 = Block(n1);
      let nBlock2 = Block(n2);
      let tot = nBlock1 + nBlock2;
    
      console.log('A soma da raiz quadrada de ', n1, '+', n2, 'é', tot);
    }
    
    SomaRaizQ(2,3);
    
    // let exemple ['position1', 2, 'position3', [5,6,7] ];