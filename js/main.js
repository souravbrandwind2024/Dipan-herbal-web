$( document ).ready(function() {

  // Menu-on-hover-area-start //
  $('body').on('mouseenter mouseleave', '.nav-item', function (e) {
    if ($(window).width() > 750) {
        var _d = $(e.target).closest('.nav-item');
        _d.addClass('show');
        setTimeout(function () {
            _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
        }, 1);
    }
});

// Menu-on-hover-area-end //

// Dropdown-area-start //
$('.dropdown-menu a.dropdown-toggle').click(function (e) {
    if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');


    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
        $('.dropdown-submenu .show').removeClass("show");
    });
    return false;
});
// Dropdown-area-end //


// sticky-header-area-start //
$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $('.topmain').addClass("sticky");
    } else {
        $('.topmain').removeClass("sticky");
    }
});
// sticky-header-area-end //


// home-banner-area-start //
var mySwiper = new Swiper('.swiper-container', {
    autoplay: {
      delay: 2600,
      disableOnInteraction: false,
    },
    direction: 'horizontal',
  effect: 'fade',
  loop: true,
  speed: 1000,
        // Add pagination
        pagination: {
            el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
          },
          // Add navigation buttons
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
})

// home-banner-area-end //


// category-carousel-area-start //
$('.category-carousel').owlCarousel({
  center: true,
  items: 4,
  margin: 20,
  loop: true,
  responsiveClass: true,
  nav: false,
  dots: false,
  animateOut: 'fadeOut',
  autoplay: true,
  autoplayTimeout: 2000,
  smartSpeed: 2000,
  dotsSpeed: 2000,
  autoplayHoverPause: true,
  responsive: {
      0: {
          items: 1,
          nav: false
      },
      500: {
          items: 2,
      },
      1200: {
          items: 6
      }
  }
});

// category-carousel-area-end //

// product-carousel-area-start //
$('.product-carousel').owlCarousel({
  center: true,
  items: 4,
  margin: 27,
  loop: true,
  responsiveClass: true,
  nav: true,
  dots: false,
  animateOut: 'fadeOut',
  navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
//   autoplay: true,
  autoplay: 8500,
  autoplayTimeout: 4500,
//   smartSpeed: 2000,
smartSpeed: 4500,
  dotsSpeed: 4500,
  autoplayHoverPause: true,
  responsive: {
      0: {
          items: 1,
          nav: false,
      },
      500: {
          items: 2,
          nav: false,
      },
      1200: {
          items: 5,
      }
  }
});

// product-carousel-area-end //


// product-tooltip-area-start //
$("[data-toggle=tooltip]").tooltip();
// product-tooltip-area-end //

// scroll-to-top-area-start //
var scrollTop = $(".scrollTop");
$(window).scroll(function () {
$(this).scrollTop() > 100 ? $(scrollTop).css("opacity", "1") : $(scrollTop).css("opacity", "0")
  }),
$(scrollTop).click(function () {
return $("html, body").animate({
  scrollTop: 0
   }, 800),
  !1
});
  
// scroll-to-top-area-end //

 // footer-bottom-year-area-start //
 const yearEl = document.querySelector('.year');
 let date = new Date();
 
 yearEl.innerText = date.getFullYear();
 // footer-bottom-year-area-end //


// product-details-carousel-change-on-hover-area-start //
        $(function(){
          $("#product-details-inner .carousel-indicators li").hover(function () {
              var goto = Number($(this).attr('data-slide-to'));
              $("#product-details-inner").carousel(goto);
          });
      });
// product-details-carousel-change-on-hover-area-end //

// product-details-image-zoom-area-start //
      $(function(){
          $('.zoom').elevateZoom({
              cursor: 'pointer',
              imageCrossfade: true,
              zoomWindowWidth: 650,
              zoomWindowHeight: 550,
              responsive: true,
          });
      });
// product-details-image-zoom-area-end //

// product-details-size-clickable-area-start //
$(".weight-label.area1 .waitbtn li").click(function(){
  $(".weight-label.area1 .waitbtn li").removeClass("active");
  $(this).toggleClass("active");
});
// product-details-size-clickable-area-end //
   

// product-list-range-slider-area-start //
(function() {
  var parent = document.querySelector(".range-slider");
  if(!parent) return;

  var
    rangeS = parent.querySelectorAll("input[type=range]"),
    numberS = parent.querySelectorAll("input[type=number]");

  rangeS.forEach(function(el) {
    el.oninput = function() {
      var slide1 = parseFloat(rangeS[0].value),
            slide2 = parseFloat(rangeS[1].value);

      if (slide1 > slide2) {
                [slide1, slide2] = [slide2, slide1];
        // var tmp = slide2;
        // slide2 = slide1;
        // slide1 = tmp;
      }

      numberS[0].value = slide1;
      numberS[1].value = slide2;
    }
  });

  numberS.forEach(function(el) {
    el.oninput = function() {
            var number1 = parseFloat(numberS[0].value),
                    number2 = parseFloat(numberS[1].value);
            
      if (number1 > number2) {
        var tmp = number1;
        numberS[0].value = number2;
        numberS[1].value = tmp;
      }

      rangeS[0].value = number1;
      rangeS[1].value = number2;

    }
  });
})();
// product-list-range-slider-area-end //


// blog-tooltip-area-start //
$('#example').tooltip(options)
// blog-tooltip-area-end //


});




// header-search-fullscreen-area-start //
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

// header-search-fullscreen-area-end //


// product-details-increment-decrement-area-start //
(function() {
 
  window.inputNumber = function(el) {

    var min = el.attr('min') || false;
    var max = el.attr('max') || false;

    var els = {};

    els.dec = el.prev();
    els.inc = el.next();

    el.each(function() {
      init($(this));
    });

    function init(el) {

      els.dec.on('click', decrement);
      els.inc.on('click', increment);

      function decrement() {
        var value = el[0].value;
        value--;
        if(!min || value >= min) {
          el[0].value = value;
        }
      }

      function increment() {
        var value = el[0].value;
        value++;
        if(!max || value <= max) {
          el[0].value = value++;
        }
      }
    }
  }
})();

inputNumber($('.updown-btn .input-number'))

// product-details-increment-decrement-area-end //








