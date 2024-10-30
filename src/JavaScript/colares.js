// src/JavaScript/colares.js

document.addEventListener('DOMContentLoaded', () => {
      // Smooth Scrolling para links de navegação
      const navLinks = document.querySelectorAll('nav ul li a');
  
      navLinks.forEach(link => {
          link.addEventListener('click', function(e) {
              e.preventDefault();
              const targetId = this.getAttribute('href').substring(1);
              const targetSection = document.getElementById(targetId);
  
              if (targetSection) {
                  const headerOffset = document.querySelector('header').offsetHeight;
                  const elementPosition = targetSection.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset + 20; // Ajuste de 20px para espaçamento
  
                  window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                  });
              }
          });
      });
  
      // Animações de Fade-In ao rolar a página
      const faders = document.querySelectorAll('.fade-in');
  
      const appearOptions = {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px"
      };
  
      const appearOnScroll = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (!entry.isIntersecting) return;
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
          });
      }, appearOptions);
  
      faders.forEach(fader => {
          appearOnScroll.observe(fader);
      });
  });
  const slides = document.querySelector(".slides");
  const slideImages = document.querySelectorAll(".slide");
  const totalSlides = slideImages.length;

  let indiceSlide = 0; // Índice da imagem atual

  // Função para mostrar o slide correto
  function mostrarSlide(indice) {
      const largura = slides.clientWidth;
      slides.style.transform = `translateX(${-indice * largura}px)`;
  }

  // Botão para o próximo slide
  document.getElementById("proximo").addEventListener("click", () => {
      indiceSlide = (indiceSlide + 1) % totalSlides; // Incrementa e reseta se passar do total
      mostrarSlide(indiceSlide);
  });

  // Botão para o slide anterior
  document.getElementById("anterior").addEventListener("click", () => {
      indiceSlide = (indiceSlide - 1 + totalSlides) % totalSlides; // Decrementa e reseta se for menor que zero
      mostrarSlide(indiceSlide);
  });


  // Seleciona o botão
  const backToTopBtn = document.getElementById("backToTopBtn");

  // Evento para mostrar/esconder o botão
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      // Mostra o botão ao rolar mais de 300px para baixo
      backToTopBtn.classList.add("show");
    } else {
      // Esconde o botão ao rolar para cima
      backToTopBtn.classList.remove("show");
    }
  });

  // Evento para voltar ao topo ao clicar no botão
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0, // Volta ao início
      behavior: "smooth", // Animação suave
    });
  });
  const whatsappButton = document.getElementById("whatsappButton");

  // Função para exibir ou ocultar o botão de WhatsApp
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      // Mostra o botão se o usuário rolar mais de 300px
      whatsappButton.style.display = "block";
    } else {
      // Oculta o botão se o scroll for menor
      whatsappButton.style.display = "none";
    }
  });

  



