function enviarMensagemWhatsApp() {
  const nome = document.getElementById('nome').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (nome === '' || mensagem === '') {
    alert('Por favor, preencha todos os campos antes de enviar.');
    return;
  }

  const texto = `Olá, meu nome é ${nome}. ${mensagem}`;
  const numero = "5551992271345"; // Substitua pelo seu número com DDD e país

  const link = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  // Abrir em nova aba
  window.open(link, '_blank');
}


