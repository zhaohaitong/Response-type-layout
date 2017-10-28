$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 10000
  });
//   function makeImageResponsive() {
//       var width = $(window).width();
//       var img = $('.item-img');
//       console.log(img)
//       if(width <= 480) {
//           console.log(480)
//           img.eq(0).attr('src', './img/ad001.png');
//           img.eq(1).attr('src', './img/ad002.png');
//           img.eq(2).attr('src', './img/ad003.png');
//       }else if(width <= 800) {
//           console.log(800)
//           img.eq(0).attr('src', './img/ad001-m.png');
//           img.eq(1).attr('src', './img/ad002-m.png');
//           img.eq(2).attr('src', './img/ad003-m.png');
//       }else{
//           console.log('else')
//           img.eq(0).attr('src', './img/ad001-l.png');
//           img.eq(1).attr('src', './img/ad002-l.png');
//           img.eq(2).attr('src', './img/ad003-l.png');
//       }
//   }
//   $(window).on('resize load', makeImageResponsive)
});