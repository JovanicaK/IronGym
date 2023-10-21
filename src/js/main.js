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
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  }
  var swiper = new Swiper('.js-swiper', config);
}

navigation();
swiperTrainers();

