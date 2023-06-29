/*global $, jQuery, alert*/

// import dataJson from 'json/pathFile' assert { type: 'json' };

var classProject = [
  '.popup-img-bigc', '.popup-img-bbtec',
  '.popup-img-tot', '.popup-img-planb' ,
  '.popup-img-mea', '.popup-img-smartTax' ,
  '.popup-img-stock', '.popup-img-travel' ,
  '.popup-img-restaurant' ,
];
var portShow = [
  { text: "Biots", path: "images/portfolio/BigC/B1.png", language: "all Javascript" },
  { text: "Project Control", path: "images/portfolio/ProjectControl/P1.png", language: "all Javascript nodejs" },
  { text: "Smart City", path: "images/portfolio/TOT/T1.png", language: "all Javascript nodejs" },
  { text: "Maxi Operation", path: "images/portfolio/PlanB/PB1.png", language: "all reactjs" },
  // { text: "System Signature Control ", path: "images/portfolio/MEA/1.png", language: "all angular" },
  // { text: "System Samrt Tax", path: "images/portfolio/Samrt-tax/1.png", language: "all angular" },
  { text: "Stock", path: "images/portfolio/Stock/1.png", language: "all reactjs" },
  { text: "Demo Booking Travel", path: "images/portfolio/travel/1.png", language: "all next" },
  { text: "Demo Booking Restaurant", path: "images/portfolio/Restaurant/1.png", language: "all next" },

]
$(document).ready(function () {
  'use strict';

  LoadProject();
  LoadDetailProject();
  LoadSkill();

  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function () {
      $(this).removeClass('active');
      if ($(window).width() < 768) {
        $('.nav-menu').slideUp();
      }
    });

    $(this).addClass('active');

    var target = this.hash,
      menu = target;

    target = $(target);
    $('html, body').stop().animate({
      'scrollTop': target.offset().top - 80
    }, 500, 'swing', function () {
      window.location.hash = target.selector;
      $(document).on("scroll", onScroll);
    });
  });


  function onScroll(event) {
    if ($('.home').length) {
      var scrollPos = $(document).scrollTop();
      $('nav ul li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
      });
    }
  }


  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 200) {
      $("#main-nav, #main-nav-subpage").slideDown(700);
      $("#main-nav-subpage").removeClass('subpage-nav');
    } else {
      $("#main-nav").slideUp(700);
      $("#main-nav-subpage").hide();
      $("#main-nav-subpage").addClass('subpage-nav');
    }
  });


  $('.responsive').on('click', function (e) {
    $('.nav-menu').slideToggle();
  });

  var typed = $(".typed");

  $(function () {
    typed.typed({
      strings: ["I'm Tirapong Srikasem."],
      typeSpeed: 150,
      // loop: true,
    });
  });

  $('.services-carousel').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 20,
    dots: true,
    nav: false,
    responsiveClass: true,
    responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 4 } }
  });

  var magnifPopup = function () {

    classProject.forEach(element => $(element).magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        opener: function (openerElement) {
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    }));
  };
  magnifPopup();

});


$(window).load(function () {
  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-thumbnail',
    layoutMode: 'fitRows'
  });
  $('#portfolio-flters li').on('click', function () {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');
    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });
})

function LoadProject() {
  var setProject = "";
  for (let i = 0; i < portShow.length; i++) {
    setProject += '<div class="col-lg-4 col-md-6 portfolio-thumbnail ' + portShow[i]["language"] + '">';
    setProject += '<a class="' + classProject[i].substring(1, classProject[i].length) + '" href="' + portShow[i]["path"] + '">';
    setProject += '<img src="' + portShow[i]["path"] + '" alt="img" style="height: 200px;">';
    setProject += '<h4 class="mt-3">' + portShow[i]["text"] + '</h4></a></div>';
  }
  $('#ProjectDisplay').append(setProject);

}

function LoadDetailProject() {
  var setDetail = '';
  var index = 0;
  for (const [key, value] of Object.entries(dataJson)) {
    for (let i = 0; i < dataJson[key].length; i++) {
      setDetail += '<div class="col-lg-4 col-md-6 ">';
      setDetail += '<a class="' + classProject[index].substring(1, classProject[index].length) + '" href="' + dataJson[key][i]["path"] + '">';
      setDetail += '</a></div>';
    }
    index++;
  }
  $('#detailProject').append(setDetail);
}
function LoadSkill(){
    var setSkill = '' ; 

    for(let i = 0 ; i < dataSkill.length ; i++){
      setSkill += '<div class="services-block">' ; 
      setSkill += '<img src="'+dataSkill[i]["path"]+'" class="img-responsive" alt="me" style="height: 40px;width: 40px;">' ;
      setSkill += '<span>'+dataSkill[i]["text"]+'</span> </div>' ;
    }
    $('#displaySkill').append(setSkill);
}
