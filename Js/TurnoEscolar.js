const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const opcao = document.querySelector('input[name="turno"]:checked')
/*Isso seleciona o input do tipo radio com o atributo name="turno" que está marcado (checked),
  ou seja, a opção que o usuário escolheu.*/
    if (!opcao) {
    alert("Por favor, selecione um Turno.")
    return
/*Se nenhuma opção estiver marcada (!opcao), 
  aparece um alerta pedindo para selecionar um turno e interrompe a execução com return.*/
  }
    const turnoSelect = opcao.value
// Aqui, pegamos o valor da opção selecionada. Por exemplo: "manha", "tarde" ou "noite".
    if (turnoSelect === "manha") {
        resp1.innerText = `Bom dia! Estude com energia!`
    } else if (turnoSelect === "tarde") {
        resp1.innerText = `Boa tarde! Continue firme nos estudos!`
    } else {
        resp1.innerText = `Boa noite! Bom descanso após os estudos!`
    }
})