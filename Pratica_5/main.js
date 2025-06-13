const botao = document.getElementById("botao");
const clicks = document.getElementById("clicks");
cont = 0;

botao.addEventListener("click", Contador);

function Contador(){
    cont++;
    
    botao.innerText = `Clique\n ${cont}`;
    clicks.innerText = `Número de clicks: ${cont}`;

    if(cont%1000==0){
        clicks.innerText = `Número de clicks: ${cont} \n Parabéns pela insistência`;
    }


}