const menorValor = 1;
const maiorValor = 100;

const numeroSecreto = () => {
  return parseInt(Math.random() * maiorValor + 1);
};

const elementoMenorValor = document.getElementById("menor-valor");
elementoMenorValor.innerText = menorValor;

const elementoMaiorValor = document.getElementById("maior-valor");
elementoMaiorValor.innerText = maiorValor;
