window.alert("Ta fununciando")

function tocaSomAplausos(){
    document.getElementById('#som_tecla_aplausos').play()
}
function tocaSomVaia(){
    document.getElementById('#som_tecla_vaia').play();
}
function tocaSomRisada(){
    document.getElementById('#som_tecla_risada').play();
}
function tocaSomErrado(){
    document.getElementById('#som_tecla_errado').play();
}
function tocaSomGrilo(){
    document.getElementById('#som_tecla_grilo').play();
}
function tocaSomTambores(){
    document.getElementById('#som_tecla_tambores').play();
}
function tocaSomTrombeta(){
    document.getElementById('#som_tecla_trombeta').play();
}
function tocaSomDinheiro(){
    document.getElementById('#som_tecla_dinheiro').play();
}
function tocaSomVitoria(){
    document.getElementById('#som_tecla_vitoria').play();
}

document.querySelector('.tecla_aplausos').onclick = tocaSomAplausos;
document.querySelector('.tecla_vaia').onclick = tocaSomVaia;
document.querySelector('.tecla_risada').onclick = tocaSomRisada;
document.querySelector('.tecla_errado').onclick = tocaSomErrado;
document.querySelector('.tecla_grilo').onclick = tocaSomGrilo;
document.querySelector('.tecla_tambores').onclick = tocaSomTambores;
document.querySelector('.tecla_trombeta').onclick = tocaSomTrombeta;
document.querySelector('.tecla_dinheiro').onclick = tocaSomDinheiro;
document.querySelector('.tecla_vitoria').onclick = tocaSomVitoria;
