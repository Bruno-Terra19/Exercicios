const frm = document.querySelector("form")
const btAdd = document.querySelector("#btAdd")
const Lista = document.querySelector("#lista")
const btExibir = document.querySelector("#btExibir")

let tarefas = []

btAdd.addEventListener("click", () => {

    const tarefa = frm.text.value

    if(!tarefa) {
        alert("Digite uma tarefa")
        frm.text.focus()
        return
    } else {
        tarefas.push(tarefa)
        Lista.innerText += `\n ${tarefa}`
        frm.reset()
        frm.text.focus()
    }

    localStorage.setItem("tarefas", JSON.stringify(tarefas))
})

btExibir.addEventListener("click", () => {

    const tarefasStorage = localStorage.getItem("tarefas")
    if(tarefasStorage) {
        tarefas = JSON.parse(tarefasStorage)
        Lista.innerText = `Tarefas:\n${tarefas.join("\n")}`
        } else {
        Lista.innerText = "Nenhuma tarefa cadastrada"
    }
})