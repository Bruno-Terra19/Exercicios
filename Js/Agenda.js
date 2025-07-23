const frm = document.querySelector("form")
const Lista = document.querySelector("pre")
const Organizar = document.querySelector("h3")
const BotaoAdd = document.querySelector("#btAdd")
const BotaoClear = document.querySelector("#btClear")

const compromissos = []

BotaoAdd.addEventListener("click", () => {

    const compromisso = frm.inText.value
    const horario = frm.inTime.value

    if (compromisso === "" || !horario ) { // Verifica se algum campo está vazio:
        alert("Por favor, preencha os campos!")
        frm.inText.focus()
        return
    }

    if (compromissos.some(c => c.horario === horario)) { //.some(...) É um método que: Percorre o array. E retorna true se pelo menos um dos elementos atender à condição. 
    // O horário (c.horario) do compromisso atual é igual ao horário que o usuário digitou?
        alert("Você já adiciou um compromisso para esse horário!")
    } else {
        compromissos.push({ compromisso: compromisso, horario: horario}) // Se for um novo horário, adiciona ao array:
        let lista = "Compromissos agendados:\n"
        compromissos.forEach((comp, hora) => { // Atualiza a tela com todos os compromissos:
            lista += `${hora+ 1}. ${comp.compromisso} - Horário: ${comp.horario}\n`
        })
        Lista.innerText = lista
        frm.inText.value = ""
        frm.inTime.value = ""
        frm.inText.focus()
    }
})

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    if(compromissos.length === 0) { // Verifica se há compromissos:
        alert("Não há compromissos agendados...")
        frm.inText.focus()
        return
    }

    const toMinutos = (horario) => { // Cria função toMinutos para converter "HH:MM" em minutos:
    const [h, m] = horario.split(":").map(Number)
    return h * 60 + m
    /* horario.split(":")
Suponha que horario = "14:30" (duas e meia da tarde).
O método .split(":") quebra essa string em duas partes: ["14", "30"]
.map(Number)
Transforma cada parte da string em número: ["14", "30"] → [14, 30]
const [h, m] = ...
Aqui usamos desestruturação para guardar os dois números em variáveis: h = 14 / m = 30
return h * 60 + m
Agora fazemos a conversão total para minutos: 14 * 60 = 840 / 840 + 30 = 870 minutos
Isso significa que "14:30" equivale a 870 minutos desde meia-noite.
Serve para converter um horário como "14:30" em minutos totais (870), para que você possa:
Comparar horários
Ordenar do mais cedo para o mais tarde.*/
    }

    const organizados = compromissos.slice().sort((a, b) => toMinutos(a.horario) - toMinutos(b.horario))
//O slice() evita modificar o array original. O sort(...) ordena com base no horário convertido.     
    let resultado = ""
        if(compromissos.length > 0)
            resultado += "Compromissos:\n"
            organizados.forEach((comp, i) => {
                resultado += `${i + 1}. ${comp.compromisso} - Horário: ${comp.horario}\n`
            })

        Organizar.innerText = resultado
        Lista.innerText = ""
})

BotaoClear.addEventListener("click", () => {

    compromissos.length = 0
    Lista.innerText = "Compromissos Agendados:"
    Organizar.innerText = ""
    frm.inText.value = ""
    frm.inTime.value = ""
    frm.inText.focus()
})