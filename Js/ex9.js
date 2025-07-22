const frm = document.querySelector("form")
const resp1 = document.querySelector("#resp1")
const resp2 = document.querySelector("#resp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const valor = Number(frm.inNumero.value)

    let tempo = 0;
    let troco = 0;

    if (valor >= 3.00) {
        tempo = 120;
        troco = valor - 3.00;
    } else if (valor >= 1.75) {
        tempo = 60;
        troco = valor - 1.75;
    } else if (valor >= 1.00) {
        tempo = 30;
        troco = valor - 1.00;
    } else {
        resp1.innerText = "Valor insuficiente para estacionar.";
        resp2.innerText = "";
        return;
  }

  resp1.innerText = `Tempo de estacionamento: ${tempo} minutos`;
  resp2.innerText = `Troco: R$ ${troco.toFixed(2)}`;

})
    