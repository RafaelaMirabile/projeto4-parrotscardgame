//O usuário só poderá inserir números pares no prompt, de 4 a 14. 
//o prompt deverá ficar sendo repetido, 
// adicionar as cartas no arary --> js//
// adicinar cartas no jogo --> index query //
let quantidade;
let cartasNoJogo=[];


function StartingGame(){
    // verificar se o usuario colocou a quantidade correto//
    quantidade = Number(prompt("Com quantas cartas quer jogar? Escolha um número de 4 a 14."));

    while( quantidade < 4 ||  quantidade > 14 || quantidade % 2 !== 0 || !quantidade ){
        quantidade = Number(prompt(" Por favor escolha um número de 4 a 14."));
    }
    // colocar adiconar cartas no jogo //
    //adiconar cartas no array//


}
StartingGame()

