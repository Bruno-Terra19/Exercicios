const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const num = Number(frm.inNumero.value)
    let numDivisores = 0 //Cria uma variável para **contar quantos divisores** o número tem (quantos números dividem `num` sem deixar resto).
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            numDivisores++
    /* Começa com i = 1 e vai até i <= num (ou seja, de 1 até o próprio número).
    Em cada volta do loop, verifica se num é divisível por i (ou seja, se num % i === 0).
    Se for, incrementa a variável numDivisores.
    Exemplo: se o número for 7, ele será divisível apenas por 1 e 7 → ou seja, terá 2 divisores.*/
        }
    }
    if (numDivisores === 2) {
        resp1.innerText = `${num} é primo`
    } else {
        resp1.innerText = `${num} não é primo`
    }
    /* Depois do laço:
- Verifica se o número tem **exatamente 2 divisores** (por 1 e por ele mesmo).
- Se sim, é **número primo**.
- Caso contrário, **não é primo**.
- A resposta é exibida dentro do elemento `<h3>` na tela.*/
})