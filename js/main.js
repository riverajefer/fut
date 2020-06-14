$('#carousel-example').carousel();
var winWidth = $(window).innerWidth();
$(window).resize(function () {
  if ($(window).innerWidth() < winWidth) {
    $('.carousel-inner>.item>img').css({
      'min-width': winWidth,
      width: winWidth,
    });
  } else {
    winWidth = $(window).innerWidth();
    $('.carousel-inner>.item>img').css({
      'min-width': '',
      width: '',
    });
  }
});

// $(document).ready(function () {
//   $('.slide_clientes').slick({
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 8,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 1,
//         },
//       },
//     ],
//   });
// });

$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
  /*     if (scroll > 200) {
            $('.top-nav-collapse').fadeOut();
        } else {
            $('.top-nav-collapse').fadeIn();
        } */
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('myBtnGoTop').style.display = 'block';
  } else {
    document.getElementById('myBtnGoTop').style.display = 'none';
  }
}

function openNav() {
  document.getElementById('myNav').style.width = '100%';
  $('.navbar-toggle').hide();
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
  $('.navbar-toggle').show();
}

$(document).ready(function () {
  $('.slide_clientes').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// fancybox-galeria-proyectos
