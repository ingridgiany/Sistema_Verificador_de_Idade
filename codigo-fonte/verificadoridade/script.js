function verificar() {
    var ano = document.getElementById('ano')
    var sexo = document.getElementsByName('sexo')
    var conteudo = document.getElementById('conteudo')
    var foto = document.getElementById('foto')

    var dataAtual = new Date()
    var contador = dataAtual.getFullYear() - Number(ano.value)
    var genero = ''
if (ano.value == '' || ano.value.lenght == 0 || Number(ano.value) > dataAtual.getFullYear() 
|| Number(ano.value) < 1900){
    alert('ERROR: Corrija os dados e tente novamente.')
}else {
    if (sexo[0].checked) {
        genero = 'm'
        if (contador >= 0 && contador <= 12) {
            conteudo.innerHTML = `Detectamos menino de ${contador} anos.`
            foto.innerHTML = `<img src="./fotos_idade/2.png" alt="menino">`
        } else if (contador > 12 && contador <= 17) {
            conteudo.innerHTML = `Detectamos adolescente de ${contador} anos.`
            foto.innerHTML = `<img src="./fotos_idade/4.png" alt="adolescente">`
        } else if (contador > 17 && contador < 65) {
            conteudo.innerHTML = `Detectamos homem de ${contador} anos.`
            foto.innerHTML = `<img src="./fotos_idade/6.png" alt="homem">`
        } else {
            conteudo.innerHTML = `Detectamos idoso de ${contador} anos.`
            foto.innerHTML = `<img src="./fotos_idade/8.png" alt="idoso">`
        }

    } else if(sexo[1].checked) {
        genero = 'f'
        if (contador >= 0 && contador <= 12) {
            conteudo.innerHTML = `Detectamos menina de ${contador} anos.`
            foto.innerHTML = `<img src="./fotos_idade/1.png" alt="menina">`
        } else if (contador > 12 && contador <= 17) {
            conteudo.innerHTML = `Detectamos adolescente de ${contador} anos.`
            foto.innerHTML = `<img src="./fotos_idade/3.png" alt="adolescente">`
        } else if (contador > 17 && contador < 65) {
            conteudo.innerHTML = `Detectamos mulher de ${contador} anos.`
            foto.innerHTML = `<img src="./fotos_idade/5.png" alt="mulher">`
        } else {
            conteudo.innerHTML = `Detectamos idosa de ${contador} anos.`
            foto.innerHTML = `<img src="./fotos_idade/7.png" alt="idosa">`
        }
    }
}  
}
