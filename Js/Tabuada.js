const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(inNumero.value)
    
    let tabuada = ""
    for (let i = 1; i <= 10; i++){
        tabuada += `${num} x ${i} = ${num * i}\n`
    }

    resp.innerText = tabuada
})