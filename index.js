const base = document.querySelector("#base");

const expoente = document.querySelector("#expoente");

const botaoCalcular = document.querySelector("#calcular");

const divResultado = document.querySelector("#divResultado");

let totalDeVezes = 0;

let calcularPotencia;

botaoCalcular.addEventListener(
  "click",
  (calcularPotencia = () => {
    let valorBase = base.value;
    let valorExpoente = expoente.value;

    let result = Math.pow(valorBase, valorExpoente);

    let conteudo = document.createElement("p");
    conteudo.textContent = result;
    let tituloRes = document.createElement("h3");
    tituloRes.textContent = "Resultado:";

    botaoCalcular.addEventListener("click", () => {
      if (totalDeVezes != 0) {
        divResultado.removeChild(tituloRes);
        divResultado.removeChild(conteudo);
        totalDeVezes = 0;
      }
    });

    divResultado.appendChild(tituloRes);
    divResultado.appendChild(conteudo);
    totalDeVezes = totalDeVezes + 1;
    console.log(totalDeVezes);
  })
);
