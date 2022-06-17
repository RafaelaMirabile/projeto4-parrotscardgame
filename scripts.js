
//O usuário só poderá inserir números pares no prompt, de 4 a 14. 
//o prompt deverá ficar sendo repetido, 
// adicionar as cartas no arary --> js//
// adicinar cartas no jogo --> index query //
let quantidade;
let cartasNoJogo=[];
let face =0;
let jogo = 0;


function StartingGame(){
    let tabuleiro= document.querySelector(".cartasContainer");
    let carta = document.querySelector(".face");
    // verificar se o usuario colocou a quantidade correto//
    quantidade = Number(prompt("Com quantas cartas quer jogar? Escolha um número de 4 a 14."));

    while( quantidade < 4 ||  quantidade > 14 || quantidade % 2 !== 0 || !quantidade ){
        quantidade = Number(prompt(" Por favor escolha um número de 4 a 14."));
    }
    // colocar cartas no tabuleiro//
    while(jogo < quantidade){
        tabuleiro.innerHTML += `<div class="face"></div>`
        jogo ++
    }
        // colocar adiconar cartas no array //
        while(cartasNoJogo.length !== quantidade){
            cartasNoJogo.push(face,face);
            face ++   
        }

        cartasNoJogo.sort(comprador);
}

 function comprador(){
    return Math.random() - 0.5
 }
 
 StartingGame();
 console.log(cartasNoJogo);
