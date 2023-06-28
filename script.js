function verificar(){
    var data = new Date()
    var ano = data.getFullYear() // full year e para pegar o ano com 4 digitos 
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        alert('[ERRO] Verifique os cados e tente novamente!')
    } else { 
        var fsex = document.getElementsByName('radsex') // radsex pois a duas caixinhas com o mesmo nome pois apenas uma pode ser selecionada
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto') // seria o mesmo que ir no html colocar <img id = 'foto'> 
        if (fsex[0].checked){
                genero = 'homem'
                if (idade >= 0 && idade < 10){
                    //criança
                    img.setAttribute ('src', 'bebe-M.png')
                } else if (idade < 21) { 
                    //adolecente
                    img.setAttribute ('src', 'adol-M.png')
                } else if (idade < 50) {
                    //adulto
                    img.setAttribute ('src', 'adulto-M.png')
                } else { 
                    //idoso
                    img.setAttribute ('src', 'idoso-M.png')
                }
        } else if (fsex[1].checked){
                genero ='mulher'
                if (idade >= 0 && idade < 10){
                    //criança
                    img.setAttribute ('src', 'bebe-F.png')
                } else if (idade < 21) { 
                    //adolecente
                    img.setAttribute ('src', 'adol-F.png')
                } else if (idade < 50) {
                    //adulto
                    img.setAttribute ('src', 'adulto-F.png')
                } else { 
                    //idoso
                    img.setAttribute ('src', 'idoso-F.png')
                }
            }
    }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos` // este sinal ` não sei o nome é diferente de ' fazendo com que ao introdozir o ${} ele seja considerada uma variavel a ser exibida no local do texto. 
        res.appendChild(img) // adicionar um elemento
}