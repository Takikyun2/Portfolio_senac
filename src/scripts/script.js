document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Captura os valores do formulário
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  // Formata a mensagem para o WhatsApp
  const whatsappMessage = `Olá! Meu nome é ${name}. Meu telefone é ${phone}. %0A%0A${message}`;

  // Número do WhatsApp para onde a mensagem será enviada
  const whatsappNumber = '+557582484209'; // Substitua pelo número do WhatsApp com código do país

  // Redireciona para o WhatsApp com a mensagem formatada
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  window.open(whatsappURL, '_blank');
});
