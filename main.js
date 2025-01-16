  
  // Initiate the wowjs
  new WOW().init();


window.addEventListener('DOMContentLoaded', function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById('contenido').innerHTML = this.responseText;
      }
    };
    xhttp.open('GET', 'view/nav.html', true);
    xhttp.send();
    window.scrollTo(0, 0);
  });

  window.addEventListener('scroll', function() {
    var navbar = document.querySelector('nav.bg-navbar');
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    var logo = document.getElementById("logo");
    if (scrolled > 0) {
      navbar.classList.add('navbar-scrolled');
    // logo.src = "images/logo_blanco.png";
    } else {
      navbar.classList.remove('navbar-scrolled');
      // logo.src = "images/logo_hambings_icono.png";
    }
  });


  


(function ($) {
  "use strict";




  $('.dropdown-hover').hover(function(){
    $(this).find('.dropdown-toggle').dropdown('toggle');
});



 

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
      delay: 10,
      time: 2200
  });

  $('#carouselExampleSlidesOnly').on('slid.bs.carousel', function () {
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2200
    });
});



  
})(jQuery);




