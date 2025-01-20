// the animation style of my javascript
$(document).ready(function () {
  // First Slider
  $(".carousel-slider").slick({
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: '<div class="chevron chevron-right">&#10095;</div>',
    prevArrow: '<div class="chevron chevron-left">&#10094;</div>',
  });

  // Second Slider
  $(".new-slider").slick({
    dots: true, // Enable navigation dots
    infinite: false,
    arrows: false, // Hide navigation arrows
    slidesToShow: 4, // Show 4 slides at once
    slidesToScroll: 2, // Move 1 slide at a time
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, // Tablet view
        settings: {
          slidesToShow: 2, // Show 2 slides at once
        },
      },
      {
        breakpoint: 480, // Mobile view
        settings: {
          slidesToShow: 1, // Show 1 slide at a time
        },
      },
    ],
  });

  // Third Slider
  $(".packages-slider").slick({
    dots: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: '<div class="chevron chevron-right">&#10095;</div>',
    prevArrow: '<div class="chevron chevron-left">&#10094;</div>',
  });

  // Showcase Cards Slider
  $(".showcase-cards").slick({
    slidesToShow: 4, // Display 4 cards at once
    slidesToScroll: 1, // Move 1 card at a time
    autoplay: true, // Auto-slide enabled
    autoplaySpeed: 2000, // Slide every 2 seconds
    dots: true, // Show pagination dots
    responsive: [
      {
        breakpoint: 768, // Tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".hamburger").click(function () {
    $(".side-bar").toggle();
  });
});
