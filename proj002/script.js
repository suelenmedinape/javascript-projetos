

function idade() {
    var data = new Date()
    var anoatual = data.getFullYear()
    /* fullYear serve para pegar o ano completo como 2023 */
    
    var ano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (ano.value.length == 0 || Number(ano.value) > anoatual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = anoatual - Number(ano.value)
        var genero = ''
        var tipo = ''

        /* Criando um elemento img com id='foto' é como se tivesse colocado no codigo html <img id="foto"> */
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                tipo = 'Criança'
                img.setAttribute('src', 'menina.png')
            } else if (idade < 25) {
                img.setAttribute('src', 'jovem-mulher.png')
                tipo = 'Jovem'
            } else if (idade < 50) {
                tipo = 'Adulta'
                img.setAttribute('src', 'mulher-adulta.png')
            } else {
                tipo = 'Idosa'
                img.setAttribute('src', 'mulher-idosa.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                tipo = 'Criança'
                img.setAttribute('src','menino.png')
            } else if (idade < 25) {
                tipo = 'Jovem'
                img.setAttribute('src','jovem-homem.png')
            } else if (idade < 50) {
                tipo = 'Adulto'
                img.setAttribute('src','homem-adulto.png')
            } else {
                tipo = 'Idoso'
                img.setAttribute('src','homem-idoso.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${tipo} ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}