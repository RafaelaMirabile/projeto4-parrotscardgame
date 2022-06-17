
//O usuário só poderá inserir números pares no prompt, de 4 a 14. 
//o prompt deverá ficar sendo repetido, 
// adicionar as cartas no arary --> js//
// adicinar cartas no jogo --> index query //
let quantidade;
let cartasNoJogo=[];
let carta =0;
let conjunto=[];
let i=0;

function StartingGame(){
    let tabuleiro= document.querySelector(".cartasContainer");
    // verificar se o usuario colocou a quantidade correto//
    quantidade = Number(prompt("Com quantas cartas quer jogar? Escolha um número de 4 a 14."));

    while( quantidade < 4 ||  quantidade > 14 || quantidade % 2 !== 0 || !quantidade ){
        quantidade = Number(prompt(" Por favor escolha um número de 4 a 14."));
    }
            // colocar adiconar cartas no array //
            while(cartasNoJogo.length !== quantidade){
                cartasNoJogo.push(carta,carta);
                carta ++   
            }
    let cartasEmbaralhadas = cartasNoJogo.sort(comparador);


    // colocar cartas no tabuleiro//
    while(i < cartasEmbaralhadas.length){
        conjunto += `<div class="carta">
        <div class="frente carta">
            <img src="images/${cartasEmbaralhadas[i]}.gif" alt="">
        </div>
        <div class="tras carta">
            <img src="images/front.png" alt="">
        </div>
    </div>`
        i ++
    }
    tabuleiro.innerHTML = conjunto;
    console.log(cartasEmbaralhadas);


}
StartingGame();

// Função para embaralhar as cartas //
function comparador() { 
	return Math.random() - 0.5; 
}

    
    
    


