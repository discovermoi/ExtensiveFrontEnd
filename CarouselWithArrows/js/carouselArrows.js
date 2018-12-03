$(document).ready(function(){
  $('.imageCarousel').slick({
      arrows:true,
      prevArrow:'<svg class="icon icon-chevron-left"><use xlink:href="#icon-chevron-left"></use></svg>',
      nextArrow:'<svg class="icon icon-chevron-right"><use xlink:href="#icon-chevron-right"></use></svg>',
  	  speed: 700,
      slidesToShow: 2,
      slidesToScroll: 2,
  });
});