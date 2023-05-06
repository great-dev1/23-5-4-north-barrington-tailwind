$(document).ready(function () {
  $(".hero-slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $(".news-slider").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $(".news-next").on("click", function () {
    $(".news-slider").slick("slickNext");
  });

  $(".news-prev").on("click", function () {
    $(".news-slider").slick("slickPrev");
  });
});
