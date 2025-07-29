const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const data = frm.inData.value

    if (!data){
        alert(`Por favor, selecione uma data.`)
        return
    }

    const partes = data.split("-") // Divide a string da data ("aaaa-mm-dd") em partes. Converte cada parte para número.
    const ano = Number(partes[0])
    const mes = Number(partes[1]) - 1 // mes - 1 porque em JavaScript, janeiro é 0, fevereiro é 1... até dezembro (11).
    const dia = Number(partes[2])

    const dataFutura = new Date(ano, mes, dia) // a data escolhida pelo usuário.
    const hoje = new Date() // a data atual do sistema.

    hoje.setHours(0, 0, 0, 0)
    dataFutura.setHours(0, 0, 0, 0)
    // Isso evita erros causados pela diferença de horas, minutos ou segundos.
    // Com isso, só a data (dia/mês/ano) será comparada.

  const diffMs = dataFutura - hoje // diferença entre as datas em milissegundos.
  const diffDias = Math.ceil(diffMs / 86400000) // número de milissegundos em um dia. Math.ceil() arredonda pra cima (caso a data esteja a poucas horas de distância).

  if (diffDias < 0) {
    resp.innerText = "Essa data já passou!"
  } else if (diffDias === 0) {
    resp.innerText = "A data é hoje!"
  } else {
    resp.innerText = `Faltam ${diffDias} dia(s) para a data escolhida.`
  }
})