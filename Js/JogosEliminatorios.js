const frm = document.querySelector("form")
const lista = document.querySelector("pre")
const TabJogos = document.querySelector("h3")
const BotaoAdd = document.querySelector("#btAdd")
const BotaoExibir = document.querySelector("#btExibir")
const BotaoNovoSorteio = document.querySelector("#btNewTab")

const clubes = []

BotaoAdd.addEventListener("click", () => {

    const nome = frm.inName.value.trim()

    if (!nome) {
        alert("Digite o nome do clube primeiro!")
        frm.inName.focus()
        return
    }

    const existe = clubes.some(time => time.toLowerCase() === nome.toLowerCase())

    if (clubes.length >= 10) {
        alert("Você já adicionou o número de clubes permitidos!")
    } else {
        if (existe) {
            alert("Você já adicionou esse clube!")
        } else {
            clubes.push(nome)
        }
    }

    frm.inName.value = ""
    frm.inName.focus()
})

BotaoExibir.addEventListener("click", () => {

    if (clubes.length === 0) {
        alert("Adicione clubes primeiro!")
        frm.inName.focus()
        return
    }
    
    lista.innerText = `Clubes:\n- ${clubes.join("\n- ")}`
})

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    if (clubes.length < 10) {
        alert("Precisa de 10 times para o sorteio de confrontos.")
        frm.inName.focus()
        return
    }

    let confrontos = ""
    let i = 0

    for (const clube of clubes) {
        if (i >= clubes.length / 2) break;

        const clube2 = clubes[clubes.length - 1 - i]
        confrontos += `${clube} x ${clube2}\n`
        i++
    }

    TabJogos.innerText = confrontos
})

BotaoNovoSorteio.addEventListener("click", () => {

    clubes.length = 0
    TabJogos.innerText = ""
    lista.innerText = ""
    frm.inName.value = ""
    frm.inName.focus()
})