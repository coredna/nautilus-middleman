(function () {

  'use strict';

  var n;

  $(document).ready(function () {

    n.Toggle.listeners();
    n.Hover.listeners();

    var video = $('.hero-video .hero-video__video')
    var preloader = $('.hero-video .hero-video__preloader');

    function checkLoad() {
      if (video.readyState === 4) {
        preloader.hide();
      } else {
        setTimeout(checkLoad, 100);
      }
    }

    checkLoad();

  }),

  n = {

    Hover: {
      listeners: function() {
        // $('.hover').hover(n.Hover.hover_component);
      },

      hover_component: function(e) {
      }
    },

    Toggle: {

      listeners: function() {
        // $('.toggle').on('click', n.Toggle.toggle_component);
      },

      toggle_component: function(e) {
      }
    }
  }

}());

(function () {


  'use strict'

  var n;

  $(document).ready(function () {

    n.Toggle.listeners();
    n.Hover.listeners();

    $('.header').headroom();

    var video = $('.hero-video .hero-video__video')
    var preloader = $('.preloader');

    video.on('canplay', function (event) {
      preloader.fadeOut(250);
    });

    var $carousel = $('.slideshow .slideshow__slides');

    function showSliderScreen($widthScreen) {

      if ($widthScreen >= "1000") {
        if (!$carousel.hasClass('slick-initialized')) {
          $carousel.slick({
            slide: '.slide',
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            arrows: false,
            focusOnSelect: true,
            dots: false
          });
        }

      } else {
        if ($carousel.hasClass('slick-initialized')) {
          $carousel.unslick();
        }
      }   
    }

    $('.pager .pager__item').on('click', function(e) {
      e.preventDefault();
      var i = $(this).index();
      $carousel.slickGoTo(i);
      $('.pager .pager__item').removeClass('pager__item--active');
      $('.pager.pager--text .pager__item:eq(' + i + ')').addClass('pager__item--active');
      $('.pager.pager--dots .pager__item:eq(' + i + ')').addClass('pager__item--active');
    });

    var widthScreen = $(window).width();

    $(window).ready(showSliderScreen(widthScreen)).resize(
      function () {
        var widthScreen = $(window).width();
        showSliderScreen(widthScreen);
      }
    );


    if ($(window).width() >= "1000") {
      var windowHeight = $(window).height();
      $(".hero-video").height(windowHeight);
    }


    $('.hero-video .hero-video__scroll').click(function(){
      $('html,body').animate({scrollTop: $('.slideshow .slideshow__pager--text').offset().top},500);
    });


  }),

  $(window).resize(function() {
    if ($(window).width() >= "1000") {
      var windowHeight = $(window).height();
      $(".hero-video").height(windowHeight);
    }
    else {
      $(".hero-video").height('auto');
    }
  }),

  n = {

    Hover: {
      listeners: function() {
        // $('.hover').hover(n.Hover.hover_component);
      },

      hover_component: function(e) {
      }
    },

    Toggle: {

      listeners: function() {
        // $('.toggle').on('click', n.Toggle.toggle_component);
      },

      toggle_component: function(e) {
      }
    }
  }

}());

(function () {

  'use strict'

  var n;

  $(document).ready(function () {

    n.Toggle.listeners();
    n.Hover.listeners();

  }),

  n = {

    Hover: {
      listeners: function() {
        // $('.hover').hover(n.Hover.hover_component);
      },

      hover_component: function(e) {
      }
    },

    Toggle: {

      listeners: function() {
        // $('.toggle').on('click', n.Toggle.toggle_component);
      },

      toggle_component: function(e) {
      }
    }
  }

}());

(function () {

  "use strict"

  var n;

  $(document).ready(function () {

    n.toggle.listeners();

  }),

  n = {

    toggle: {

      listeners: function() {
        $(".toggle").on("click", n.toggle.toggle_states);
      },

      toggle_states: function(e) {
        var activate = $(this).data("activate").split(" ");
        var deactivate = $(this).data("deactivate").split(" ");

        // Toggle Activated States
        for (var i=0, l=activate.length; i<l; i++) {

          var toggle = $(".toggle.toggle--" + activate[i]);
          var state = activate[i];

          if ($(".page.active--" + activate[i]).length) {
            deactivateAriaPressed( toggle );
            deactivatePageState( state );
          }
          else {
            activateAriaPressed( toggle );
            activatePageState( state );
          }
        }

        // Toggle Deactivated States
        for (var i=0, l=deactivate.length; i<l; i++) {

          var toggle = $(".toggle.toggle--" + deactivate[i]);
          var state = deactivate[i];
          
          deactivateAriaPressed( toggle );
          deactivatePageState( state );
        }

        // Utility Functions
        function activateAriaPressed( toggle ) {
          toggle.attr("aria-pressed", "true");
        }

        function deactivateAriaPressed( toggle ) {
          toggle.attr("aria-pressed", "false");
        }

        function activatePageState( state ) {
          $(".page").addClass("active--" + state);
        }

        function deactivatePageState( state ) {
          $(".page").removeClass("active--" + state);
        }
      }
    }
  }
}(jQuery));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcm8tdmlkZW8uanMiLCJtYWluLmpzIiwic2VhcmNoLmpzIiwidG9nZ2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcblxuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIG47XG5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXG4gICAgbi5Ub2dnbGUubGlzdGVuZXJzKCk7XG4gICAgbi5Ib3Zlci5saXN0ZW5lcnMoKTtcblxuICAgIHZhciB2aWRlbyA9ICQoJy5oZXJvLXZpZGVvIC5oZXJvLXZpZGVvX192aWRlbycpXG4gICAgdmFyIHByZWxvYWRlciA9ICQoJy5oZXJvLXZpZGVvIC5oZXJvLXZpZGVvX19wcmVsb2FkZXInKTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrTG9hZCgpIHtcbiAgICAgIGlmICh2aWRlby5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgIHByZWxvYWRlci5oaWRlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRUaW1lb3V0KGNoZWNrTG9hZCwgMTAwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0xvYWQoKTtcblxuICB9KSxcblxuICBuID0ge1xuXG4gICAgSG92ZXI6IHtcbiAgICAgIGxpc3RlbmVyczogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vICQoJy5ob3ZlcicpLmhvdmVyKG4uSG92ZXIuaG92ZXJfY29tcG9uZW50KTtcbiAgICAgIH0sXG5cbiAgICAgIGhvdmVyX2NvbXBvbmVudDogZnVuY3Rpb24oZSkge1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBUb2dnbGU6IHtcblxuICAgICAgbGlzdGVuZXJzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gJCgnLnRvZ2dsZScpLm9uKCdjbGljaycsIG4uVG9nZ2xlLnRvZ2dsZV9jb21wb25lbnQpO1xuICAgICAgfSxcblxuICAgICAgdG9nZ2xlX2NvbXBvbmVudDogZnVuY3Rpb24oZSkge1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59KCkpO1xuIiwiKGZ1bmN0aW9uICgpIHtcblxuXG4gICd1c2Ugc3RyaWN0J1xuXG4gIHZhciBuO1xuXG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuICAgIG4uVG9nZ2xlLmxpc3RlbmVycygpO1xuICAgIG4uSG92ZXIubGlzdGVuZXJzKCk7XG5cbiAgICAkKCcuaGVhZGVyJykuaGVhZHJvb20oKTtcblxuICAgIHZhciB2aWRlbyA9ICQoJy5oZXJvLXZpZGVvIC5oZXJvLXZpZGVvX192aWRlbycpXG4gICAgdmFyIHByZWxvYWRlciA9ICQoJy5wcmVsb2FkZXInKTtcblxuICAgIHZpZGVvLm9uKCdjYW5wbGF5JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBwcmVsb2FkZXIuZmFkZU91dCgyNTApO1xuICAgIH0pO1xuXG4gICAgdmFyICRjYXJvdXNlbCA9ICQoJy5zbGlkZXNob3cgLnNsaWRlc2hvd19fc2xpZGVzJyk7XG5cbiAgICBmdW5jdGlvbiBzaG93U2xpZGVyU2NyZWVuKCR3aWR0aFNjcmVlbikge1xuXG4gICAgICBpZiAoJHdpZHRoU2NyZWVuID49IFwiMTAwMFwiKSB7XG4gICAgICAgIGlmICghJGNhcm91c2VsLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgICAgICAgJGNhcm91c2VsLnNsaWNrKHtcbiAgICAgICAgICAgIHNsaWRlOiAnLnNsaWRlJyxcbiAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgIGZvY3VzT25TZWxlY3Q6IHRydWUsXG4gICAgICAgICAgICBkb3RzOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICgkY2Fyb3VzZWwuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICAgICAgICAkY2Fyb3VzZWwudW5zbGljaygpO1xuICAgICAgICB9XG4gICAgICB9ICAgXG4gICAgfVxuXG4gICAgJCgnLnBhZ2VyIC5wYWdlcl9faXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHZhciBpID0gJCh0aGlzKS5pbmRleCgpO1xuICAgICAgJGNhcm91c2VsLnNsaWNrR29UbyhpKTtcbiAgICAgICQoJy5wYWdlciAucGFnZXJfX2l0ZW0nKS5yZW1vdmVDbGFzcygncGFnZXJfX2l0ZW0tLWFjdGl2ZScpO1xuICAgICAgJCgnLnBhZ2VyLnBhZ2VyLS10ZXh0IC5wYWdlcl9faXRlbTplcSgnICsgaSArICcpJykuYWRkQ2xhc3MoJ3BhZ2VyX19pdGVtLS1hY3RpdmUnKTtcbiAgICAgICQoJy5wYWdlci5wYWdlci0tZG90cyAucGFnZXJfX2l0ZW06ZXEoJyArIGkgKyAnKScpLmFkZENsYXNzKCdwYWdlcl9faXRlbS0tYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICB2YXIgd2lkdGhTY3JlZW4gPSAkKHdpbmRvdykud2lkdGgoKTtcblxuICAgICQod2luZG93KS5yZWFkeShzaG93U2xpZGVyU2NyZWVuKHdpZHRoU2NyZWVuKSkucmVzaXplKFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd2lkdGhTY3JlZW4gPSAkKHdpbmRvdykud2lkdGgoKTtcbiAgICAgICAgc2hvd1NsaWRlclNjcmVlbih3aWR0aFNjcmVlbik7XG4gICAgICB9XG4gICAgKTtcblxuXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpID49IFwiMTAwMFwiKSB7XG4gICAgICB2YXIgd2luZG93SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgJChcIi5oZXJvLXZpZGVvXCIpLmhlaWdodCh3aW5kb3dIZWlnaHQpO1xuICAgIH1cblxuXG4gICAgJCgnLmhlcm8tdmlkZW8gLmhlcm8tdmlkZW9fX3Njcm9sbCcpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAkKCdodG1sLGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6ICQoJy5zbGlkZXNob3cgLnNsaWRlc2hvd19fcGFnZXItLXRleHQnKS5vZmZzZXQoKS50b3B9LDUwMCk7XG4gICAgfSk7XG5cblxuICB9KSxcblxuICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+PSBcIjEwMDBcIikge1xuICAgICAgdmFyIHdpbmRvd0hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcbiAgICAgICQoXCIuaGVyby12aWRlb1wiKS5oZWlnaHQod2luZG93SGVpZ2h0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAkKFwiLmhlcm8tdmlkZW9cIikuaGVpZ2h0KCdhdXRvJyk7XG4gICAgfVxuICB9KSxcblxuICBuID0ge1xuXG4gICAgSG92ZXI6IHtcbiAgICAgIGxpc3RlbmVyczogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vICQoJy5ob3ZlcicpLmhvdmVyKG4uSG92ZXIuaG92ZXJfY29tcG9uZW50KTtcbiAgICAgIH0sXG5cbiAgICAgIGhvdmVyX2NvbXBvbmVudDogZnVuY3Rpb24oZSkge1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBUb2dnbGU6IHtcblxuICAgICAgbGlzdGVuZXJzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gJCgnLnRvZ2dsZScpLm9uKCdjbGljaycsIG4uVG9nZ2xlLnRvZ2dsZV9jb21wb25lbnQpO1xuICAgICAgfSxcblxuICAgICAgdG9nZ2xlX2NvbXBvbmVudDogZnVuY3Rpb24oZSkge1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59KCkpO1xuIiwiKGZ1bmN0aW9uICgpIHtcblxuICAndXNlIHN0cmljdCdcblxuICB2YXIgbjtcblxuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cbiAgICBuLlRvZ2dsZS5saXN0ZW5lcnMoKTtcbiAgICBuLkhvdmVyLmxpc3RlbmVycygpO1xuXG4gIH0pLFxuXG4gIG4gPSB7XG5cbiAgICBIb3Zlcjoge1xuICAgICAgbGlzdGVuZXJzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gJCgnLmhvdmVyJykuaG92ZXIobi5Ib3Zlci5ob3Zlcl9jb21wb25lbnQpO1xuICAgICAgfSxcblxuICAgICAgaG92ZXJfY29tcG9uZW50OiBmdW5jdGlvbihlKSB7XG4gICAgICB9XG4gICAgfSxcblxuICAgIFRvZ2dsZToge1xuXG4gICAgICBsaXN0ZW5lcnM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyAkKCcudG9nZ2xlJykub24oJ2NsaWNrJywgbi5Ub2dnbGUudG9nZ2xlX2NvbXBvbmVudCk7XG4gICAgICB9LFxuXG4gICAgICB0b2dnbGVfY29tcG9uZW50OiBmdW5jdGlvbihlKSB7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn0oKSk7XG4iLCIoZnVuY3Rpb24gKCkge1xuXG4gIFwidXNlIHN0cmljdFwiXG5cbiAgdmFyIG47XG5cbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXG4gICAgbi50b2dnbGUubGlzdGVuZXJzKCk7XG5cbiAgfSksXG5cbiAgbiA9IHtcblxuICAgIHRvZ2dsZToge1xuXG4gICAgICBsaXN0ZW5lcnM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAkKFwiLnRvZ2dsZVwiKS5vbihcImNsaWNrXCIsIG4udG9nZ2xlLnRvZ2dsZV9zdGF0ZXMpO1xuICAgICAgfSxcblxuICAgICAgdG9nZ2xlX3N0YXRlczogZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgYWN0aXZhdGUgPSAkKHRoaXMpLmRhdGEoXCJhY3RpdmF0ZVwiKS5zcGxpdChcIiBcIik7XG4gICAgICAgIHZhciBkZWFjdGl2YXRlID0gJCh0aGlzKS5kYXRhKFwiZGVhY3RpdmF0ZVwiKS5zcGxpdChcIiBcIik7XG5cbiAgICAgICAgLy8gVG9nZ2xlIEFjdGl2YXRlZCBTdGF0ZXNcbiAgICAgICAgZm9yICh2YXIgaT0wLCBsPWFjdGl2YXRlLmxlbmd0aDsgaTxsOyBpKyspIHtcblxuICAgICAgICAgIHZhciB0b2dnbGUgPSAkKFwiLnRvZ2dsZS50b2dnbGUtLVwiICsgYWN0aXZhdGVbaV0pO1xuICAgICAgICAgIHZhciBzdGF0ZSA9IGFjdGl2YXRlW2ldO1xuXG4gICAgICAgICAgaWYgKCQoXCIucGFnZS5hY3RpdmUtLVwiICsgYWN0aXZhdGVbaV0pLmxlbmd0aCkge1xuICAgICAgICAgICAgZGVhY3RpdmF0ZUFyaWFQcmVzc2VkKCB0b2dnbGUgKTtcbiAgICAgICAgICAgIGRlYWN0aXZhdGVQYWdlU3RhdGUoIHN0YXRlICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYWN0aXZhdGVBcmlhUHJlc3NlZCggdG9nZ2xlICk7XG4gICAgICAgICAgICBhY3RpdmF0ZVBhZ2VTdGF0ZSggc3RhdGUgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUb2dnbGUgRGVhY3RpdmF0ZWQgU3RhdGVzXG4gICAgICAgIGZvciAodmFyIGk9MCwgbD1kZWFjdGl2YXRlLmxlbmd0aDsgaTxsOyBpKyspIHtcblxuICAgICAgICAgIHZhciB0b2dnbGUgPSAkKFwiLnRvZ2dsZS50b2dnbGUtLVwiICsgZGVhY3RpdmF0ZVtpXSk7XG4gICAgICAgICAgdmFyIHN0YXRlID0gZGVhY3RpdmF0ZVtpXTtcbiAgICAgICAgICBcbiAgICAgICAgICBkZWFjdGl2YXRlQXJpYVByZXNzZWQoIHRvZ2dsZSApO1xuICAgICAgICAgIGRlYWN0aXZhdGVQYWdlU3RhdGUoIHN0YXRlICk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVdGlsaXR5IEZ1bmN0aW9uc1xuICAgICAgICBmdW5jdGlvbiBhY3RpdmF0ZUFyaWFQcmVzc2VkKCB0b2dnbGUgKSB7XG4gICAgICAgICAgdG9nZ2xlLmF0dHIoXCJhcmlhLXByZXNzZWRcIiwgXCJ0cnVlXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZGVhY3RpdmF0ZUFyaWFQcmVzc2VkKCB0b2dnbGUgKSB7XG4gICAgICAgICAgdG9nZ2xlLmF0dHIoXCJhcmlhLXByZXNzZWRcIiwgXCJmYWxzZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGFjdGl2YXRlUGFnZVN0YXRlKCBzdGF0ZSApIHtcbiAgICAgICAgICAkKFwiLnBhZ2VcIikuYWRkQ2xhc3MoXCJhY3RpdmUtLVwiICsgc3RhdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZGVhY3RpdmF0ZVBhZ2VTdGF0ZSggc3RhdGUgKSB7XG4gICAgICAgICAgJChcIi5wYWdlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlLS1cIiArIHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufShqUXVlcnkpKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==