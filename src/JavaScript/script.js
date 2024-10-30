document.getElementById('mobile_btn').addEventListener('click', function() {
      const menu = document.getElementById('mobile_menu');
      menu.classList.toggle('open');
    });

  // Adiciona evento de clique para links da navbar
  const navLinks = document.querySelectorAll('#nav_list a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Impede o comportamento padrão do link

      const targetId = this.getAttribute('href'); // Obtém o ID do destino
      const targetElement = document.querySelector(targetId); // Seleciona o elemento alvo

      // Rola suavemente até o elemento alvo
      targetElement.scrollIntoView({
        behavior: 'smooth' // Comportamento suave
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll("#nav_list .nav-item");
  
    // Adiciona um evento de clique para cada item da navbar
    navItems.forEach(item => {
      item.addEventListener("click", function() {
        // Remove a classe 'active' de todos os itens
        navItems.forEach(el => el.classList.remove("active"));
  
        // Adiciona a classe 'active' ao item clicado
        this.classList.add("active");
      });
    });
  });



// Seleção dos elementos //
const chatbotButton = document.getElementById('chatbotButton');
const chatbotWindow = document.getElementById('chatbotWindow');
const closeChatbot = document.getElementById('closeChatbot');
const sendChatbot = document.getElementById('sendChatbot');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotMessages = document.getElementById('chatbotMessages');

// Função para abrir o chatbot
chatbotButton.addEventListener('click', () => {
    chatbotWindow.style.display = 'flex';
    chatbotButton.style.display = 'block';
});

// Função para fechar o chatbot //
closeChatbot.addEventListener('click', () => {
    chatbotWindow.style.display = 'none';
    chatbotButton.style.display = 'block';
});

// Função para adicionar mensagem na área de mensagens
function addMessage(sender, text) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', sender);
    const messageContent = document.createElement('span');
    messageContent.classList.add('message-content');
    messageContent.textContent = text;
    messageDiv.appendChild(messageContent);
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Função para responder as mensagens // alterar e adicionar na pag Sobre
function getBotResponse(message) {
    const msg = message.toLowerCase();
    if (msg.includes('olá') || msg.includes('oi')) {
        return 'Olá! Como posso ajudar você hoje?';
    } else if (msg.includes('preço')) {
        return 'Nossos preços variam de acordo com o plano. Você gostaria de saber mais sobre os planos?';
    } else if (msg.includes('planos')) {
        return 'Temos Plano Básico, Intermediário e Avançado. Qual deles você gostaria de saber mais?';
    } else if (msg.includes('plano básico')) {
        return 'O Plano Básico custa R$ 499,00 e inclui 1 página personalizada, design responsivo, suporte básico e 1 formulário de contato.';
    } else if (msg.includes('plano intermediário')) {
        return 'O Plano Intermediário custa R$ 999,00 e inclui até 5 páginas personalizadas, design responsivo, integração com redes sociais, otimização para SEO e suporte prioritário.';
    } else if (msg.includes('plano avançado')) {
        return 'O Plano Avançado custa R$ 1.999,00 e inclui páginas ilimitadas, design exclusivo e responsivo, integração com e-commerce, manutenção mensal, otimização SEO avançada e suporte premium.';
    } else {
        return 'Desculpe, não entendi. Você poderia reformular a pergunta?';
        /*COLOCAR AS MENSAGENS DE APOIO PARA USAR O CHAT*/
    }
}

// Evento de envio de mensagem
sendChatbot.addEventListener('click', () => {
    const userMessage = chatbotInput.value.trim();
    if (userMessage !== '') {
        addMessage('user', userMessage);
        chatbotInput.value = '';
        
        // Simular tempo de resposta
        setTimeout(() => {
            const botResponse = getBotResponse(userMessage);
            addMessage('bot', botResponse);
        }, 1000);
    }
});

// Permitir envio de mensagem pressionando Enter
chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendChatbot.click();
    }
});
setTimeout(() => {
    addMessage('bot', 'Olá! Bem-vindo ao NovoWeb Chatbot. Como posso te ajudar hoje?');
}, 500); 