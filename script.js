function calcular(){
    var operador

    document.getElementById("resta").onclick=function(e){
        operador="-"
        resolver(operador)
    }
    document.getElementById("suma").onclick=function(e){
        operador="+"
        resolver(operador)
    }
    document.getElementById("multiplicacion").onclick=function(e){
        operador="*"
        resolver(operador)
    }
    document.getElementById("division").onclick=function(e){
        operador="/"
        resolver(operador)
    }
}

function resolver(op){
    var valorA=document.getElementById("primerValor").value
    var valorB=document.getElementById("segundoValor").value
    var res 

    switch (op) {
        case "-":
            res= parseFloat(valorA) - parseFloat(valorB)
            document.getElementById("resultados").textContent=res
            limpiar()
            break;

        case "+":
            res= parseFloat(valorA) + parseFloat(valorB)
            document.getElementById("resultados").textContent=res
            limpiar()
            break;

        case "/":
            if (valorB==0) {
                document.getElementById("resultados").textContent="No se puede dividir por 0"
            }else{
                res= parseFloat(valorA) / parseFloat(valorB)
                document.getElementById("resultados").textContent=res
                limpiar()
            }
            break;

        case "*":
            res= parseFloat(valorA) * parseFloat(valorB)
            document.getElementById("resultados").textContent=res
            limpiar()
            break;
        default:
            break;
    }
}

function validar(evt){
    var code = (evt.which) ? evt.which : evt.keyCode;
    if (code==8 || code==46) {
        return true
    }else if(code>=48 && code<=57){
        return true
    }else{
        return false
    }
}

function limpiar(){
    document.getElementById("primerValor").value=""
    document.getElementById("segundoValor").value=""
}