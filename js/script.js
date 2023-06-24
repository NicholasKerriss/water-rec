let botaoResultado = document.getElementById("button-result");
botaoResultado.addEventListener("click", calculoAgua);

function calculoAgua() {
  const sex = document.getElementById("select__sex").value;
  const age = parseInt(document.getElementById("select__age").value);
  let resultado;

  if (sex === "men") {
    if (age >= 9 && age <= 13) {
      resultado = 2.4;
    } else if (age >= 14 && age <= 18) {
      resultado = 3.3;
    } else if (age >= 19 && age <= 70) {
      resultado = 3.7;
    }
  }

  if (sex === "woman") {
    if (age >= 9 && age <= 13) {
      resultado = 2.1;
    } else if (age >= 14 && age <= 18) {
      resultado = 2.3;
    } else if (age >= 19 && age <= 70) {
      resultado = 2.7;
    }
  }
  const resultLabel = document.getElementById("result");

  // Atualiza o texto da label com o resultado
  resultLabel.textContent = "Sua ingestão diária (em litros): " + resultado;
}

const botaoCalcular = document.getElementById("last-result");
botaoCalcular.addEventListener("click", funcaoCalculadora);

function funcaoCalculadora() {
  const waterNumber = parseFloat(document.getElementById("water-number").value);
  const calculatorNumber = parseFloat(
    document.getElementById("calculator-number").value
  );

  let resultado = waterNumber * calculatorNumber;

  const resultadoElement = document.getElementById("water-recomendation");
  resultadoElement.textContent =
    "A sua ingestão de água ideal, levando em consideração a prática de atividade física é: " +
    resultado.toFixed(1);
}
