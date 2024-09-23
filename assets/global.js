//LAZY LOAD
document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
if ("IntersectionObserver" in window) {
  let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        let lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        lazyImage.classList.remove("lazy");
        lazyImageObserver.unobserve(lazyImage);
         }
     });
      });
  lazyImages.forEach(function(lazyImage) {
    lazyImageObserver.observe(lazyImage);
  });
  }
});
document.addEventListener('DOMContentLoaded', function() {
var enlaces = document.querySelectorAll('.nav ul li a');

enlaces.forEach(function(enlace) {
enlace.addEventListener('click', function(event) {
  event.preventDefault();
  setTimeout(function() {
    window.location.href = event.target.href;
  }, 600);
  });
});
});

//ROOT HEIGHT ELEMENTS
document.addEventListener('DOMContentLoaded', function(){
    var w = window.innerWidth,
    h = window.innerHeight;

    document.documentElement.style.setProperty('--h', h + 'px');

    b = document.getElementById("header").offsetHeight;
    document.documentElement.style.setProperty('--nav', b + 'px');
});

//ON RESIZE
window.addEventListener("resize", onResizeFunction);
function onResizeFunction (e){
var w = window.innerWidth,
h = window.innerHeight;
document.documentElement.style.setProperty('--h', h + 'px');

b = document.getElementById("header").offsetHeight;
document.documentElement.style.setProperty('--nav', b + 'px');

}
function esDispositivoMovil() {
  return window.matchMedia("(max-width: 768px)").matches;
}

// Función para invertir el texto del botón y cambiar el contenido
function invertirTextoYContenido($elemento, mostrarTexto, ocultarTexto) {
  var textoActual = $elemento.text().trim();
  var nuevoTexto = textoActual === mostrarTexto ? ocultarTexto : mostrarTexto;
  $elemento.text(nuevoTexto);
}


$(document).ready(function() {


  let ishide = false;
  let hideTimeout;
  
  $('.shop, .categories').on('mouseenter', function() {
      clearTimeout(hideTimeout);  // Clear any scheduled hiding
      if (!ishide) {
          ishide = true;
          setTimeout(function() {
              $('.categories').addClass("hid");
          }, 100);
          setTimeout(function() {
              $('.categories').addClass("show");
          }, 500);
      }
  });
  
  $('.shop, .categories').on('mouseleave', function() {
      hideTimeout = setTimeout(function() {
          if (ishide) {
              ishide = false;
              setTimeout(function() {
                  $('.categories').removeClass("hid");
              }, 500);
              setTimeout(function() {
                  $('.categories').removeClass("show");
              }, 100);
          }
      }, 100);  // Adjust the delay as needed
  });
  

  $("#add-to-bag").click(function(){
    $(".cart-part").addClass("active");
  });
 // Función para gestionar el comportamiento de los botones
 function gestionarBotones() {

  
  $(".categories").click(function(){
    var $activeCat = $(".cat.active");
    $(".cat").not($activeCat).toggle();
  });

  $(".info-pro").click(function(){
    $(".in").toggle();
    $(".info-pro span").text(function(i, text){
      return text === "-" ? "+" : "-";
    });
  }); 
}
  

  $("body").addClass("active");

});

$(document).ready(function() {
  let images = $('.image-container img');
  let imageCount = images.length;
  let imageIndex = 0;
  const displayDuration = 100; // 0.5 seconds
  const transitionDuration = 0; // 0.2 seconds

  function showNextImage() {
    // Fade out the current image
    images.eq(imageIndex).fadeOut(transitionDuration, function() {
      // Increment imageIndex and wrap around if necessary
      imageIndex = (imageIndex + 1) % imageCount;
      // Fade in the next image
      images.eq(imageIndex).fadeIn(transitionDuration);
      // Schedule the next cycle
      setTimeout(showNextImage, displayDuration);
    });
  }

  // Start the image carousel
  images.eq(imageIndex).fadeIn(transitionDuration, function() {
    setTimeout(showNextImage, displayDuration);
  });
});