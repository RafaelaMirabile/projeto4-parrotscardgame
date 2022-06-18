let quantidade;
let cartasNoJogo=[];
let carta =0;
let jogo=[];
let i=0;
let jogadas = 0;
let primeiroClick;
let segundoClick;

function StartingGame(){
    let jogo= document.querySelector(".cartasContainer");
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
        jogo.innerHTML += `<div class="carta" onclick="virar(this)">
        <div class="frente face">
            <img src="images/front.png" alt="">
        </div>
        <div class="tras face">
            <img src="images/${cartasEmbaralhadas[i]}.gif" alt="">
        </div>
    </div>`
        i ++
    }
    console.log(jogo);
    console.log(cartasNoJogo);

}
StartingGame();

// Função para embaralhar as cartas //
function comparador() { 
	return Math.random() - 0.5; 
}

function virar(cartaClicada){

    if(cartaClicada.classList.contains("virada")){
        return;
    }
    jogadas++;

    cartaClicada.classList.add("virada");

    if(primeiroClick === undefined){
        primeiroClick = cartaClicada;
    } else{
        segundoClick = cartaClicada;
    }

}
    
    
    


