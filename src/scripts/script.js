// ? - form contato

document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Captura os valores do formulário
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validações
  let isValid = true;

  // Validação do Nome
  if (name === '') {
    document.getElementById('nameError').textContent = 'Por favor, insira seu nome.';
    isValid = false;
  } else {
    document.getElementById('nameError').textContent = '';
  }

  // Validação do Número
  if (phone === '') {
    document.getElementById('phoneError').textContent = 'Por favor, insira seu número.';
    isValid = false;
  } else if (!/^\d+$/.test(phone)) {
    document.getElementById('phoneError').textContent = 'O número deve conter apenas dígitos.';
    isValid = false;
  } else {
    document.getElementById('phoneError').textContent = '';
  }

  // Validação da Mensagem
  if (message === '') {
    document.getElementById('messageError').textContent = 'Por favor, insira sua mensagem.';
    isValid = false;
  } else {
    document.getElementById('messageError').textContent = '';
  }

  // Se o formulário for válido, redireciona para o WhatsApp
  if (isValid) {
    // Formata a mensagem para o WhatsApp
    const whatsappMessage = `Olá! Meu nome é ${name}. Meu telefone é ${phone}. %0A%0A${message}`;

    // Número do WhatsApp para onde a mensagem será enviada
    const whatsappNumber = '+557582484209'; // Substitua pelo número do WhatsApp com código do país

    // Redireciona para o WhatsApp com a mensagem formatada
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    window.open(whatsappURL, '_blank');
  }
});

// ! - form LGPD

document.getElementById('lgpdForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Captura os valores do formulário
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const finalidade = Array.from(document.querySelectorAll('input[name="finalidade[]"]:checked')).map(el => el.value).join(', ');
  const compartilhamento = Array.from(document.querySelectorAll('input[name="compartilhamento[]"]:checked')).map(el => el.value).join(', ');
  const consentimento = document.querySelector('input[name="consentimento"]:checked').value;
  const data = document.getElementById('data').value;
  const outros_finalidade = document.getElementById('outros_finalidade').value.trim();
  const outros_compartilhamento = document.getElementById('outros_compartilhamento').value.trim();

  // Validações
  let isValid = true;

  // Validação do Nome
  if (nome === '') {
    document.getElementById('nomeError').textContent = 'Por favor, insira seu nome.';
    isValid = false;
  } else {
    document.getElementById('nomeError').textContent = '';
  }

  // Validação do E-mail
  if (email === '') {
    document.getElementById('emailError').textContent = 'Por favor, insira seu e-mail.';
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById('emailError').textContent = 'Por favor, insira um e-mail válido.';
    isValid = false;
  } else {
    document.getElementById('emailError').textContent = '';
  }

  // Validação do Consentimento
  if (!consentimento) {
    document.getElementById('consentimentoError').textContent = 'Por favor, selecione uma opção.';
    isValid = false;
  } else {
    document.getElementById('consentimentoError').textContent = '';
  }

  // Validação da Data
  if (data === '') {
    document.getElementById('dataError').textContent = 'Por favor, insira a data.';
    isValid = false;
  } else {
    document.getElementById('dataError').textContent = '';
  }

  // Se o formulário for válido, redireciona para o WhatsApp
  if (isValid) {
    // Monta a mensagem para o WhatsApp
    let mensagem = `Olá! Meu nome é ${nome}. Meu e-mail é ${email}.%0A%0A`;
    mensagem += `Finalidade do Tratamento de Dados: ${finalidade}.%0A`;
    mensagem += `Outros (Finalidade): ${outros_finalidade}.%0A`;
    mensagem += `Compartilhamento de Dados: ${compartilhamento}.%0A`;
    mensagem += `Outros (Compartilhamento): ${outros_compartilhamento}.%0A`;
    mensagem += `Consentimento: ${consentimento}.%0A`;
    mensagem += `Data: ${data}.`;

    // Número do WhatsApp para onde a mensagem será enviada
    const whatsappNumber = '+557582484209'; // Substitua pelo seu número

    // Redireciona para o WhatsApp com a mensagem formatada
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${mensagem}`;
    window.open(whatsappURL, '_blank');
  }
});
