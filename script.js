import { ButtonComponent } from "./components/buttonComponent.js";

const botoes = [
  '7', '8', '9', '/',
  '4', '5', '6', '*',
  '1', '2', '3', '-',
  '0', '.', '=', '+',
  'C'
];


let estado = {
  display: ''
};


const display = document.getElementById('display');
const container = document.getElementById('botoes');


function setEstado(novoValor) {
  estado.display = novoValor;
  display.value = estado.display;
}


function clicar(valor) {
  if (valor === 'C') {
    setEstado('');
  } else if (valor === '=') {
    try {
      setEstado(eval(estado.display).toString());
    } catch {
      setEstado('Erro');
    }
  } else {
    setEstado(estado.display + valor);
  }
}


botoes.forEach(valor => {
  const botao = ButtonComponent(valor, clicar); 
  container.appendChild(botao);
});
