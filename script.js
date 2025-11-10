// =============================
// 🧩 COMPONENTE: Botão
// =============================
function ButtonComponent(valor, aoClicar) {
  const button = document.createElement("button");
  button.textContent = valor;
  button.onclick = () => aoClicar(valor);
  return button;
}

// =============================
// ⚙️ LÓGICA PRINCIPAL
// =============================
const botoes = [
  '7', '8', '9', '/',
  '4', '5', '6', '*',
  '1', '2', '3', '-',
  '0', '.', '=', '+',
  'C'
];

// 🔁 ESTADO
let estado = {
  display: ''
};

// Referências do DOM
const display = document.getElementById('display');
const container = document.getElementById('botoes');

// Atualiza o estado
function setEstado(novoValor) {
  estado.display = novoValor;
  display.value = estado.display;
}

// Clique nos botões
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

// Renderiza os botões
botoes.forEach(valor => {
  const botao = ButtonComponent(valor, clicar);
  container.appendChild(botao);
});
