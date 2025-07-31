const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
      e.preventDefault();

      const entrada = frm.inData.value.trim();
      const partes = entrada.split("/");

      if (partes.length !== 2) {
        alert("Informe no formato MM/AAAA");
        return;
      }

      const mes = Number(partes[0]) - 1; 
      const ano = Number(partes[1]);

      if (isNaN(mes) || isNaN(ano) || mes < 0 || mes > 11) {
        alert("Mês ou ano inválido!");
        return;
      }

      let domingos = 0;
      const ultimoDia = new Date(ano, mes + 1, 0).getDate();

      for (let dia = 1; dia <= ultimoDia; dia++) {
        const data = new Date(ano, mes, dia);
        if (data.getDay() === 0) {
          domingos++;
        }
      }

      resp.innerText = `O mês ${entrada} tem ${domingos} domingo(s).`;
    });