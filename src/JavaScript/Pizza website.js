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
    $(document).ready(function() {
      $('#mobile_btn').on('click', function () {
          $('#mobile_menu').toggleClass('active');
          $('#mobile_btn').find('i').toggleClass('fa-x');
      });
  
      const sections = $('section');
      const navItems = $('.nav-item');
  
      $(window).on('scroll', function () {
          const header = $('header');
          const scrollPosition = $(window).scrollTop() - header.outerHeight();
  
          let activeSectionIndex = 0;
  
          if (scrollPosition <= 0) {
              header.css('box-shadow', 'none');
          } else {
              header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
          }
  
          sections.each(function(i) {
              const section = $(this);
              const sectionTop = section.offset().top - 96;
              const sectionBottom = sectionTop+ section.outerHeight();
  
              if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                  activeSectionIndex = i;
                  return false;
              }
          })
  
          navItems.removeClass('active');
          $(navItems[activeSectionIndex]).addClass('active');
      });
  
      ScrollReveal().reveal('#cta', {
          origin: 'left',
          duration: 2000,
          distance: '20%'
      });
  
      ScrollReveal().reveal('.dish', {
          origin: 'left',
          duration: 2000,
          distance: '20%'
      });
  
      ScrollReveal().reveal('#testimonial_chef', {
          origin: 'left',
          duration: 1000,
          distance: '20%'
      })
  
      ScrollReveal().reveal('.feedback', {
          origin: 'right',
          duration: 1000,
          distance: '20%'
      })
  });

  $(document).ready(function () {
      $('.nav-item').on('click', function () {
          $('.nav-item').removeClass('selected'); // Remove a classe de todos os itens
          $(this).addClass('selected'); // Adiciona a classe ao item clicado
      });
  });
  

  