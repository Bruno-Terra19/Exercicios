const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const valor = frm.inData.value
    if (!valor) {
        alert("Informe a data de nascimento")
        return
    // valor recebe o conteúdo do campo inData (tipo date).Se o campo estiver vazio, exibe um alerta e interrompe o código com return.
    }

    const partes = valor.split("-") 
    const anoNasc = Number(partes[0]) 
    const mesNasc = Number(partes[1])
    const diaNasc = Number(partes[2])
    // A data vem no formato "aaaa-mm-dd", então usamos .split("-") para quebrar em partes.Depois, convertemos cada parte para número.

    const hoje = new Date() // Cria um objeto Date com a data atual.
    const anoAtual = hoje.getFullYear() // getFullYear() retorna o ano (ex: 2025).
    const mesAtual = hoje.getMonth() + 1 // getMonth() retorna o mês (de 0 a 11), por isso precisa de +1.
    const diaAtual = hoje.getDate() // getDate() retorna o dia do mês.

    let idade = anoAtual - anoNasc

    if (mesAtual < mesNasc || (mesAtual === mesNasc && diaAtual < diaNasc)) {
        idade--
    // Se o mês atual for menor que o mês de nascimento, ou se for o mesmo mês, mas o dia ainda não chegou, então ainda não fez aniversário → subtrai 1 da idade.
    }

    resp.innerText = `Você tem ${idade} anos.`
})