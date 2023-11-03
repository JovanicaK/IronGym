function navigation() {
  var $nav = $('.nav');
  var $navlink = $('.nav-link');
  var active = ('nav-link--active');
  var $toggle = $('.header__toggle');

  $navlink.on('click', function() {
    $navlink.removeClass(active);
    $(this).addClass(active);
  })

  $toggle.on('click', function() {
    $nav.slideToggle();
  });

  $(window).on('scroll', function() {
    if($(this).height()>500) {
      $nav.removeAttr('style');
    }
  })

  $(window).on('resize', function() {
    if ($(this).width()>767) {
      $nav.removeAttr('style');
    }
  })
}

function swiperTrainers() {
  var config = {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 40,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 2,
      },
    },
  }
  var swiper = new Swiper('.js-swiperTrainers', config);
}

function swiperTestimonials() {
  var config = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  }
  var swiper = new Swiper('.js-swiperTestimonials', config);
}

navigation();
swiperTrainers();
swiperTestimonials();


