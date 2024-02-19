function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'kid.jpg')
            }
            else if (idade < 21) {
                img.setAttribute('src', 'jovemm.jpg')
                                           
            }
            else if (idade < 50){
                img.setAttribute('src', 'adulto.jpg')
            }
            else{
                img.setAttribute('src', 'vei.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'kid(a).jpg')
            }
            else if (idade < 21) {
                img.setAttribute('src', 'jovemf.jpg')
            }
            else if (idade < 50){
                img.setAttribute('src', 'adulta.jpg')
            }
            else{   
                img.setAttribute('src','veia.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Dectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}