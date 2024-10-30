// Exemplo: Alerta ao clicar em 'Comprar'
const buttons = document.querySelectorAll('.btn-buy');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Obrigado por escolher a AutoLux! Entraremos em contato em breve.');
  });
});


// Mostra o botão quando o usuário rolar 20px para baixo
window.onscroll = function() { mostrarBotaoTopo() };

function mostrarBotaoTopo() {
  const btnTopo = document.getElementById("btnTopo");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
}

// Função para rolar suavemente de volta ao topo quando o botão for clicado
function voltarAoTopo() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Rolagem suave
  });
}


// Função de rolagem suave para âncoras internas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
  
          const target = document.querySelector(this.getAttribute('href'));
          target.scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
  


// Seleciona o contêiner que contém todos os itens de navegação móvel
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenu.addEventListener('click', function (event) {
  // Verifica se o elemento clicado possui a classe 'mobile-item'
  if (event.target.classList.contains('mobile-item')) {
    // Remove a classe 'active' de todos os itens
    document.querySelectorAll('.mobile-item').forEach(item => item.classList.remove('active'));

    // Adiciona a classe 'active' ao item clicado
    event.target.classList.add('active');
  }
});
