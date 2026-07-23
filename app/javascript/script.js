import $ from "jquery"

let title = "javascriptが使えました";
alert(title);

document.addEventListener("turbo:load", () => {
  $('.jquery').on('click', function(){
    $(this).css('color', 'red');
  });
});

const opt = {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
}

document.addEventListener("turbo:load", () => {
  new Swiper('.swiper', opt);
});