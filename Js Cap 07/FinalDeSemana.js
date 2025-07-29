const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const data = frm.inData.value

    if (!data) {
    resp.innerText = "Por favor, informe uma data válida."
    return
  }

  const partes = data.split("-") // Divide a string de data em partes: ano, mês e dia. Converte cada parte para número.
  const ano = Number(partes[0])
  const mes = Number(partes[1]) - 1
  const dia = Number(partes[2])

  const Data = new Date(ano, mes, dia) // Cria um objeto Date com os valores informados.

  const diasSemana = [
    "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira",
    "Quinta-feira", "Sexta-feira", "Sábado"
  ] // Um array com os dias da semana, na ordem correta (0 = Domingo até 6 = Sábado).

  const nomeDoDia = diasSemana[Data.getDay()] // Data.getDay() retorna o número do dia da semana (0 a 6). Esse número é usado como índice para pegar o nome no array.

  if (nomeDoDia === "Sábado") {
    resp.innerText = "Sabadooou, bora curtir!"
  } else if (nomeDoDia === "Domingo") {
    resp.innerText = "Domingou, aproveite com moderação, amanhã volta a trabalhar!"
  } else {
    resp.innerText = "Dia útil :("
  }
})