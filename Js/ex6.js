const frm = document.querySelector("form")
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inPaciente.value
    pacientes.push(nome)

    let lista = ""
    for (let i = 0; i < pacientes.length; i++){
        lista += `${i + 1}. ${pacientes[i]}\n`
    }
    respLista.innerText = lista
    frm.inPaciente.value = ""
    frm.inPaciente.focus()

    /*Quando o formulário é enviado (submit), a página não recarrega (e.preventDefault()).
    Captura o nome do paciente e adiciona ao final da fila com push.
    Recria a lista completa e exibe no <pre>, com numeração (1. Nome, 2. Nome...).
    Limpa o campo e dá foco novamente para o usuário digitar outro nome.*/
})

frm.btUrgencia.addEventListener("click", () => {
    if (!frm.checkValidity()){
        alert("Informe o nome do paciente a ser atendido em caráter de urgência")
        frm.inPaciente.focus()
        return
    }

    const nome = frm.inPaciente.value
    pacientes.unshift(nome)
    let lista = ""
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`)) // forEach É um método que serve para percorrer todos os itens de um array, e executar uma função para cada item.
    // pacientes.forEach(...) Chama a função para cada paciente da lista.
    /* (paciente, i) => (...)
    Essa é uma função arrow (função de flecha):
    paciente é o valor atual do array (nome do paciente).
    i é o índice (posição no array, começando do 0).*/
    // i + 1: transforma o índice 0 em "1", 1 em "2", etc., para mostrar a posição real na fila. ${paciente}: insere o nome do paciente.
    respLista.innerText = lista
    frm.inPaciente.value = ""

    /*Quando o botão de urgência (btUrgencia) é clicado:
    Verifica se o campo está preenchido com checkValidity().
    Se não estiver, mostra alerta e foca de volta no campo.
    Se estiver preenchido:
    Adiciona o paciente no início da fila com unshift() (prioridade).
    Recria a lista com forEach() e exibe.
    Limpa o campo e foca novamente.*/
})

frm.btAtender.addEventListener("click", () => {
    if (pacientes.length === 0) {
        alert("Nâo há pacientes na lista de espera")
        frm.inPaciente.focus()
        return
    }

    const atender = pacientes.shift()
    respNome.innerText = atender
    let lista = ""
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))
    respLista.innerText = lista
    /* Quando o botão de atender paciente é clicado:
    Verifica se há pacientes. Se não houver, mostra alerta.
    Remove o primeiro paciente da fila com shift() e guarda em atender.
    Mostra esse nome no <span>, indicando quem está sendo atendido.
    Atualiza a lista com os que ainda estão esperando.*/
})