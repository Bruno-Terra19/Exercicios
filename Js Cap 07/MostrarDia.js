const form = document.querySelector("form")
const resp = document.querySelector("pre")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const valor = form.inData.value // formato "aaaa-mm-dd"

  if (!valor) {
    resp.innerText = "Por favor, informe uma data válida."
    return
  }

  const partes = valor.split("-") // [aaaa, mm, dd]
  const ano = Number(partes[0])
  const mes = Number(partes[1]) - 1 // JavaScript usa 0 = janeiro
  const dia = Number(partes[2])

  const data = new Date(ano, mes, dia) // agora está correto no horário local

  const diasSemana = [
    "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira",
    "Quinta-feira", "Sexta-feira", "Sábado"
  ]

  const nomeDia = diasSemana[data.getDay()]

  resp.innerText = `Dia da semana: ${nomeDia}`
})
