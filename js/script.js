function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if(num.value.length == 0){
        
        alert('Por favor, insira algum número!')
        tab.innerHTML = '<option>☝️ Digite um número acima ! </option>'

    }else{
        var n = Number(num.value)
        document.getElementById('seltab')
        tab.innerHTML = ''
        for(var c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild (item)
        }
    }
}

function contar(){
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        
        res.innerHTML = 'Impossível a contagem!'

    }else{

        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if(p <= 0){
            alert('Passo de número inválido! Passe a considerar passo como 1! ')
            p = 1
        }
        if(i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1f449}`
            }
        }else{
            for(var c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1f449}` 
            }
        }
        res.innerHTML += '\u{1f3c1}'

    }
}
