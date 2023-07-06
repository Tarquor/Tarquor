const delay = (ms) => new Promise((res) => setTimeout(res, ms));

$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");
  setTimeout(function () {
    $("#main").fadeIn(1000);
  }, 600);
});

const hamburger = document.querySelector(".hamburger");
const menuLink = document.querySelector(".navbar__menu_container");

hamburger.addEventListener("click", () => {
  menuLink.classList.toggle("active");
});

$('.navbar__links').on("click", function (e) {
  hamburger.click();
});


$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});


$(function() {
  $('.section3_item').hover(function() {
    $('.section3_item_text',this).css('opacity', '0');
    $('img',this).css('opacity', '1');
  }, function() {
    // on mouseout, reset the background colour
    $('.section3_item_text',this).css('opacity', '1');
    $('img',this).css('opacity', '0.7');
  });
});
