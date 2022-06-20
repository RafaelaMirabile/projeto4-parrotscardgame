let quantidade;
let cartasNoJogo=[];
let carta =0;
let i=0;
let jogadas = 0;
let primeiroClick;
let segundoClick;
let acertos = 0;

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

}
StartingGame();


function virar(cartaClicada){

    console.log(cartaClicada.classList);  

    if(cartaClicada.classList.contains("virada") || segundoClick !== undefined){
        primeiroClick = undefined;
        segundoClick= undefined;
    }
    console.log(cartaClicada , "verifica;'ap");
    jogadas++;
    
    console.log(jogadas);

    cartaClicada.classList.add("virada");

    if(primeiroClick === undefined){
        primeiroClick = cartaClicada;

    } else {
        segundoClick = cartaClicada;
    
    if (primeiroClick.innerHTML === segundoClick.innerHTML){
        acertos+= 2;
        console.log(acertos, "cartaIgual");
        fimdeJogo();
    }
    else{
        setTimeout(desvirar, 1000);

    }  
}

}
function desvirar(){
    primeiroClick.classList.remove("virada");
    segundoClick.classList.remove("virada");
    primeiroClick = undefined;
    segundoClick= undefined;
    console.log(primeiroClick, "primeira");
    console.log(segundoClick,  "segunda");
}

function fimdeJogo(){
    if (acertos === quantidade){
        alert("Você venceu em " + jogadas + " jogadas");
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}
    
    


