function numero(num){
    var soma = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML= soma+num
}

function limpar(){
    document.getElementById('resultado').innerHTML = "";
}

    function voltar(){
        var resul = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML= resul.substring(0,resul.length -1)
    }

    function calcular(){
        var resul = document.getElementById('resultado').innerHTML;
        if(resul){
        document.getElementById('resultado').innerHTML = eval(resul)}
        else{
            document.getElementById('resultado').innerHTML = 'vazio'
        }
    }