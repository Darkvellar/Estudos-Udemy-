// Seleciona o botão e a descrição pelo ID
const button = document.getElementById('myButton');
const descricao = document.getElementById('descricao');

// Adiciona o evento de clique ao botão
button.addEventListener('click', () => {
  if (descricao.style.display === 'none' || descricao.style.maxHeight === '0px') {
    descricao.style.display = 'block';
    setTimeout(() => {
      descricao.style.opacity = 1;
      descricao.style.maxHeight = descricao.scrollHeight + 'px'; // Expande a descrição
    }, 10); // Tempo para garantir que o display seja atualizado antes da animação
    button.style.transform = 'rotate(90deg)'; // Animação de rotação do botão
  } else {
    descricao.style.opacity = 0;
    descricao.style.maxHeight = '0px'; // Colapsa a descrição
    button.style.transform = 'rotate(0deg)'; // Reseta a animação do botão
    setTimeout(() => {
      descricao.style.display = 'none';
    }, 500); // Espera a animação terminar antes de ocultar
  }
});

// Seleciona todos os botões de drop-down
const dropbtns = document.querySelectorAll('.dropbtn');

// Função para fechar todos os menus drop-down
function closeAllDropdowns(event) {
  document.querySelectorAll('.sublist').forEach(sublist => {
    if (!sublist.contains(event.target) && !sublist.previousElementSibling.contains(event.target)) {
      sublist.style.opacity = 0;
      sublist.style.maxHeight = '0px';
      setTimeout(() => {
        sublist.style.display = 'none';
      }, 500); // Tempo para a animação de fechamento
    }
  });
}

// Adiciona eventos de clique a cada botão de drop-down
dropbtns.forEach(button => {
  button.addEventListener('click', (event) => {
    event.stopPropagation(); // Impede que o evento se propague para o documento
    const sublist = button.nextElementSibling;
    if (sublist.style.display === 'none' || sublist.style.display === '') {
      closeAllDropdowns(event); // Fecha todos os outros menus
      sublist.style.display = 'block';
      setTimeout(() => {
        sublist.style.opacity = 1;
        sublist.style.maxHeight = sublist.scrollHeight + 'px';
      }, 10); // Tempo para garantir que o display seja atualizado antes da animação
    } else {
      sublist.style.opacity = 0;
      sublist.style.maxHeight = '0px';
      setTimeout(() => {
        sublist.style.display = 'none';
      }, 500); // Tempo para a animação de fechamento
    }
  });
});

// Adiciona um event listener ao documento para detectar cliques fora dos menus drop-down
document.addEventListener('click', (event) => {
  closeAllDropdowns(event); // Fecha todos os menus drop-down
});
