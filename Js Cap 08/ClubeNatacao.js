const frm = document.querySelector("form")
const resp = document.querySelector("pre")

let atleta = {}
// Como só existe um registro de cada vez, faz sentido usar um objeto {}.
// Um array faz sentido quando você quer guardar uma lista de atletas (vários objetos) [].

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = frm.inNome.value
    const idade = Number(frm.inIdade.value)

    if(!nome || isNaN(idade)) { // Se o nome estiver vazio ou a idade não for número → mostra um alerta e interrompe. Senão → cria o objeto atleta com nome e idade.
        alert("Preencha todos os campos para primeiro!") 
        frm.inNome.focus()
        return
    } else {
        atleta = {nome: nome, idade: idade}
    }

    let resultado = ""
  for (let i = 0; i < nome.length; i++) {
    resultado += (nome[i] === " ") ? " " : "-"
  }
// Faz um loop letra por letra do nome. Se for espaço, mantém espaço. Se for letra, substitui por "-". 👉 Exemplo: "Ana Paula" → "--- -----".

    if(atleta.idade <= 12) {
        resp.innerText = `${nome}\n${resultado}\nCategoria: Infantil`
    } else if(atleta.idade > 12 && idade <= 18) {
        resp.innerText = `${nome}\n${resultado}\nCategoria: Juvenil`
    } else {
        resp.innerText = `${nome}\n${resultado}\nCategoria: Adulto`
    }
}) 