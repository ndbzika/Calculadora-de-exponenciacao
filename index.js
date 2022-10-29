//Selecionando input's da base e do expoente

const base = document.querySelector("#base");
const expoente = document.querySelector("#expoente");

//Selecionando botão e div que irão aparecer os resultados
const botaoCalcular = document.querySelector("#calcular");

const divResultado = document.querySelector("#divResultado");

//Contador para saber se o código foi executado
let totalDeVezes = 0;

//Arrow Function para calcular potenciação
let calcularPotencia = () => {
  //Pegando o valor do input da base e do expoente
  let valorBase = base.value;
  let valorExpoente = expoente.value;

  //Variável que recebe o calculo da potenciação
  let result = Math.pow(valorBase, valorExpoente);

  //Criando titulo para área do resultado
  let tituloRes = document.createElement("h3");
  tituloRes.textContent = "Resultado:";

  //Criando elemento p que recebe o calculo da potenciação como conteudo
  let conteudo = document.createElement("p");
  conteudo.textContent = result;

  //Se o input não há nada no input, no elemento conteúdo peça algum valor ao usuário
  if (base.value.length === 0 || expoente.value.length === 0) {
    conteudo.textContent = "Digite algum valor!";
  }
  //Adicionando classe ao conteudo
  conteudo.classList.add("resultado");

  //Se o resultado da potenciação não for um número, informe ao usuário que não é um número
  if (isNaN(result)) {
    conteudo.textContent = "Valor inválido!";
  }

  //Colocando na div de resultado o título e resposta da potenciação
  divResultado.appendChild(tituloRes);
  divResultado.appendChild(conteudo);

  //Atualizando contador, pois o código foi executado uma vez
  totalDeVezes = totalDeVezes + 1;

  //Função para quando se clicar no botão
  botaoCalcular.addEventListener("click", () => {
    //Se o código for executado uma vez, limpe o título e conteudo e reinicie o contador
    //obs.: essa parte é para não poluir e não confudir quando o usuário clicar no botao com um valor diferente
    if (totalDeVezes !== 0) {
      divResultado.removeChild(tituloRes);
      divResultado.removeChild(conteudo);
      totalDeVezes = 0;
    }
  });
};

//Execute a função calcularPotencia quando o usuário clicar no botão
botaoCalcular.addEventListener("click", calcularPotencia);
