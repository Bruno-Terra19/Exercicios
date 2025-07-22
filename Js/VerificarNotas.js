const frm = document.querySelector("form")
const ListaNomes = document.querySelector("#outLista")
const Aprovados = document.querySelector("#outAprovados")
const BotaoAdd = document.querySelector("#btAdd")
const BotaoNV = document.querySelector("#btNV")

const alunos = []
let notaMin = null

window.onload = function () {
    while (notaMin === null || notaMin.trim() === "" || isNaN(notaMin) || parseInt(notaMin) <= 0) {
        notaMin = prompt("Digite a nota mínima para aprovação (maior que 0):");
        if (notaMin !== null) notaMin = notaMin.trim();
    }

    notaMin = parseInt(notaMin);
/*Quando a página terminar de carregar, roda essa função.
Ela abre um prompt() pedindo que o usuário digite a nota mínima para aprovação.
Enquanto o usuário não digitar algo válido (não vazio, número e maior que zero), o prompt volta a aparecer.
Quando digitado corretamente, converte o valor para número inteiro e guarda em notaMin.*/
}

BotaoAdd.addEventListener("click", () => {

    const nome = frm.inNome.value
    const nota = Number(frm.inNumero.value)

    if (nome === "" || nota === 0 || isNaN(nota)) {
        alert("Prencha ambos os campos para adicionar")
        frm.inNome.focus()
        return
    }
// Faz uma validação para garantir que ambos os campos estejam preenchidos.

    const acertosNota = parseInt(nota) // Transforma a nota em inteiro.
    alunos.push({ nome: nome, nota: acertosNota }) // Adiciona um objeto {nome, nota} no array alunos.

    let lista = "Alunos cadastrados:\n"
    alunos.forEach((aluno, index) => {
        lista += `${index + 1}. ${aluno.nome} - ${aluno.nota} acertos\n`
    })

    ListaNomes.innerText = lista
    frm.inNome.value = ""
    frm.inNome.focus()
    frm.inNumero.value = ""
/*Monta uma string com a lista de alunos cadastrados e suas notas.
Exibe essa lista na tela (no elemento com id outLista).
Limpa os campos e coloca o foco de volta no input do nome para facilitar a digitação.*/

})

frm.addEventListener("submit", (e) => {
    e.preventDefault()

        if (alunos.length === 0) {
            alert("Nenhum aluno cadastrado.")
            frm.inNome.focus()
            return
        }
//Verifica se há alunos cadastrados. Se não, alerta e foca no campo nome.

    const aprovados = alunos.filter(aluno => aluno.nota >= notaMin).sort((a, b) => b.nota - a.nota)
// Cria um novo array aprovados com alunos cuja nota é maior ou igual à nota mínima.

    let resultado = ""
    if (aprovados.length > 0) {
        resultado += "Aprovados:\n"
        aprovados.forEach((aluno, i) => {
            resultado += `${i + 1}. ${aluno.nome} - ${aluno.nota} acertos\n`
        })
    } else {
        resultado += "Nenhum aluno foi aprovado."
    }

    Aprovados.innerText = resultado
    ListaNomes.innerText = ""
/*Ordena os aprovados por nota, do maior para o menor.
Monta uma string para exibir os aprovados.
Se ninguém foi aprovado, exibe a mensagem correspondente.
Exibe a lista dos aprovados na tela (no elemento com id outAprovados).
Limpa a lista geral de alunos da tela para destacar só os aprovados.*/

})

BotaoNV.addEventListener("click", () => {

    alunos.length = 0
    notaMin = null
    ListaNomes.innerText = "Alunos cadastrados:"
    Aprovados.innerText = ""
    frm.inNome.value = ""
    frm.inNome.focus()
    frm.inNumero.value = ""
 
    while (notaMin === null || notaMin.trim() === "" || isNaN(notaMin) || parseInt(notaMin) <= 0) {
        notaMin = prompt("Digite a nota mínima para aprovação (maior que 0):");
        if (notaMin !== null) notaMin = notaMin.trim();
    }

    notaMin = parseInt(notaMin);
/*Limpa o array alunos.
Zera a variável notaMin para forçar a entrada da nova nota mínima.
Limpa as listas que estavam na tela.
Limpa os campos do formulário e coloca o foco no nome para digitar novamente.
Exibe o prompt pedindo uma nova nota mínima válida.
Salva a nova nota mínima convertida para número.*/
})