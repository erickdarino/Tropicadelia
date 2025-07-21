
document.addEventListener('DOMContentLoaded', function (){
    const buttons = document.querySelectorAll('[data-tab-button]');

    console.log('ola')


    for ( let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao){
            botao.preventDefault();
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            aba.classList.add('lineup__shows--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('button-is--active');

            AOS.refresh();
        })
    }
    AOS.init()
})
function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for ( let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('button-is--active')
    }
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('lineup__shows--is-active')
    }
}

const dataDoEvento = new Date("Sep 27, 2025 15:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60

    const diasAteOEvento= Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento %  horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    console.log(minutosAteOEvento);
    console.log(segundosAteOEvento);
    
    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0 ) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Este evento ja aconteceu!'
    }
}, 1000)

