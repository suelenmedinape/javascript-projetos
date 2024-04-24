function tabuada() {
    var valor = document.querySelector('input#valor')
    var msg = document.querySelector('select#msg')

    if (valor.value.length == 0) {
        window.alert('Por favor, digite um número')
    } else {
        var res = 1
        var v = Number(valor.value)
        msg.innerHTML = ''
        while (res <= 10) {
            let item = document.createElement('option')
            item.text = `${v} x ${res} = ${v*res}`
            item.value = `tab${res}`
            msg.appendChild(item)
            res++
        }
    }
    
}