// Importa o componente (simulação com fetch)
fetch('/component/button')
  .then(res => res.json())
  .then(buttonComponent => {
    const botoes = [
      '7', '8', '9', '/',
      '4', '5', '6', '*',
      '1', '2', '3', '-',
      '0', '.', '=', '+',
      'C'
    ];
    const container = document.getElementById('botoes');
    botoes.forEach(valor => {
      // usa o "componente" com propriedades
      const btn = document.createElement('button');
      btn.textContent = buttonComponent.render(valor); 
      btn.onclick = () => clicar(valor);
      container.appendChild(btn);
    });
  });

let display = document.getElementById('display');

function clicar(valor) {
  if (valor === 'C') {
    display.value = '';
  } else if (valor === '=') {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = 'Erro';
    }
  } else {
    display.value += valor;
  }
}
