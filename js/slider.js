// the animation style of my javascript
$(document).ready(function () {
  // First Slider
  $(".carousel-slider").slick({
    dots: true,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: '<div class="chevron chevron-right">&#10095;</div>',
    prevArrow: '<div class="chevron chevron-left">&#10094;</div>',
  });

  // second Slider
  $(".packages-slider").slick({
    dots: true,
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: '<div class="chevron chevron-right">&#10095;</div>',
    prevArrow: '<div class="chevron chevron-left">&#10094;</div>',
  });
});
