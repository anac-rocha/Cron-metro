var seg=0
var min=0
var hr=0
var intervalo

function casadigito(digito){
    if(digito<10){
        return('0'+digito)
    }else{
        return(digito)
    }
}

function iniciar(){
    relogio()
    intervalo= setInterval(relogio,10)
}

function pausar(){
    clearInterval(intervalo)
}

function resetar(){
    clearInterval(intervalo)
    seg=0
    min=0
    window.alert(document.getElementById('relogio').innerText)
document.getElementById('relogio').innerText='00:00:00'
}

function relogio(){
    seg++
    if(seg==60){
        min++
        seg=0
        if(min==60){
            min=0
            hr++
        }
    }
    document.getElementById('relogio').innerText=casadigito(hr)+':'+casadigito(min)+':'+casadigito(seg)
}