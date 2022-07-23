function  acende(){

    var imagem = document.getElementById('apagada').src;
    var imagem_ligado = 'https://www.w3schools.com/js/pic_bulbon.gif';
    var imagem_desligado = 'https://www.w3schools.com/js/pic_bulboff.gif';
    
    if(imagem == imagem_ligado){
    	document.getElementById('apagada').src = imagem_desligado;
    }else{
    	document.getElementById('apagada').src = imagem_ligado;
    }
}
document.getElementById("apagada").addEventListener("click", acende);