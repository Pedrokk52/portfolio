// Mensagem especial nos projetos
document.getElementById('btnProjetos').addEventListener('click', () => {
  const mensagem = document.getElementById('mensagem-projetos');
  mensagem.style.opacity = 0;
  setTimeout(() => {
    mensagem.textContent = '🚀 Cada projeto representa um passo na minha jornada de evolução como desenvolvedor!';
    mensagem.style.opacity = 1;
  }, 350);
});

// Formulário de contato (simulação)
document.getElementById('formContato').addEventListener('submit', function(e) {
  e.preventDefault();
  const nome = this.nome.value.trim();
  const email = this.email.value.trim();
  const mensagem = this.mensagem.value.trim();
  const msgContato = document.getElementById('mensagem-contato');

  if (nome && email && mensagem) {
    msgContato.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada 🚀`;
    this.reset();
  } else {
    msgContato.textContent = 'Preencha todos os campos!';
  }
});