const frm = document.querySelector("form")

const TAXA_MULTA = 2 / 100 // 2%
const TAXA_JUROS = 0.33 / 100 // 0,33% por dia

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const dataVenc = frm.inDataVenc.value
    const valor = Number(frm.inValor.value)
    const hoje = new Date()
    const vencto = new Date()

    const partes = dataVenc.split("-") // Vai transformar essa string em um array: partes = ["2025", "07", "27"]
    vencto.setDate(Number(partes[2])) // dia 27
    vencto.setMonth(Number(partes[1]) - 1) // julho. Number(partes[1]) - 1 → faz a subtração: 7 - 1 = 6. Porque o JavaScript representa os meses de 0 a 11 (começa do zero)
    vencto.setFullYear(Number(partes[0])) // Define o ano corretamente

    const atraso = hoje - vencto
    let multa = 0
    let juros = 0

    if (atraso > 0) { // Se o resultado de hoje - vencto for positivo, então a conta está atrasada.Se for 0 ou menor (data atual igual ou antes do vencimento), não aplica multa nem juros.
        const dias = atraso / 86400000 // 1 dia tem 86.400.000 milissegundos
        multa = valor * TAXA_MULTA
        juros = valor * TAXA_JUROS * dias
    // Multa é fixa, 2% sobre o valor da conta.
    //Juros é diário, 0,33% multiplicado pelos dias em atraso.
    }

    const total = valor + multa + juros

    frm.outMulta.value = multa.toFixed(2)
    frm.outJuros.value = juros.toFixed(2)
    frm.outTotal.value = total.toFixed(2)
})