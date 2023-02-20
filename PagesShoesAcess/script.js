var count = 0;
function ClickButton(){
   count+=1
    var botao = document.getElementById('botao')

if(count % 2 == 0){
    botao.style.backgroundColor = "red"
    botao.innerText = "COMPRADO"
}
else{
    botao.style.backgroundColor = "green"   
    botao.innerText = "COMPRAR"
}
}
var modal = document.getElementById('myModal')
var btn = document.getElementById('btnform-pay')

var close = document.getElementsByClassName('close')[0]

 var numeroCartao = document.getElementsByClassName('numCartao');

var Nome = document.getElementsByClassName('Nome');

var validade = document.getElementsByClassName('validade');

var cvv = document.getElementsByClassName('cvv');

var confirma = document.getElementById('confirma')

btn.onclick = function(){
    modal.style.display = "block"
}

close.onclick = function(){
    if( Nome =="" || cvv == "" || validade =="" || numeroCartao ==""){
        document.getElementById('textValid').style.color = "red";
    }else{

        modal.style.display = "none"
    }
}











  


