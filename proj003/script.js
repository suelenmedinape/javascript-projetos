

 function calc() {
    var txtInicio = document.getElementById('txtinicio')
    var txtFim = document.querySelector('input#txtfim')
    var txtPasso = document.querySelector('input#txtpasso')
    var msg = document.querySelector('div#msg')

    

    if (txtInicio.value.length == 0 || txtFim.value.length == 0 || txtPasso.value.length == 0) {
        msg.innerHTML = 'Impossivel Contar'
        window.alert('[ERRO] Faltam dados!')
    } else {
        msg.innerHTML = 'Contando: '
        var inicio = Number(txtInicio.value)
        var fim = Number(txtFim.value)
        var passo = Number(txtPasso.value)
        if (passo <= 0) {
            window.alert('Passo invalido| PASSO = 1')
            passo = 1
        }
        if (inicio < fim) {
            for (let i = inicio; i <= fim; i+=passo) {
                msg.innerHTML += `${i} \u{1F449} `
            }
        } else {
            for (let i = inicio; i >= fim; i-=passo) {
                msg.innerHTML += `${i} \u{1F449} `
            }
        }
        msg.innerHTML += `\u{1F3C1}`
    }
    
 }