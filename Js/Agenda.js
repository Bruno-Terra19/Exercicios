const frm = document.querySelector("form")
const Lista = document.querySelector("pre")
const Organizar = document.querySelector("h3")
const BotaoAdd = document.querySelector("#btAdd")
const BotaoClear = document.querySelector("#btClear")

const compromissos = []

BotaoAdd.addEventListener("click", () => {

    const compromisso = frm.inText.value
    const horario = frm.inTime.value

    if (compromisso === "" || !horario ) {
        alert("Por favor, preencha os campos!")
        frm.inText.focus()
        return
    }

    if (compromissos.includes(horario)) {
        alert("Você já adiciou um compromisso para esse horário!")
    } else {
        compromissos.push({ compromisso: compromisso, horario: horario})
        let lista = "Compromissos agendados:\n"
        compromissos.forEach((comp, hora) => {
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

    if(compromissos.length === 0) {
        alert("Não há compromissos agendados...")
        frm.inText.focus()
        return
    }

    const toMinutos = (horario) => {
    const [h, m] = horario.split(":").map(Number)
    return h * 60 + m
    }

    const organizados = compromissos.slice().sort((a, b) => toMinutos(a.horario) - toMinutos(b.horario))
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