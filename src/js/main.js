
// ИНИЦИАЛИЗАЦИЯ AOS
AOS.init();

// УПРАВЛЕНИЕ СВАЙПЕР-СЛАЙДЕР
const reviewsSlider = document.querySelector('.reviews__slider');

const sliderOne = new Swiper(reviewsSlider, {

  /* direction: "horizontal",
  loop: true, */
  slidesPerView: 3,
  spaceBetween: 24,
  loopedSlides: 50,
 
  //СТРЕЛКИ
  navigation: {
    nextEl: '.reviews__arrow-next',
    prevEl: '.reviews__arrow-prev',
  },
  /* autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  }, */

});

//ДИНАМИЧЕСКИЕ ОТЗЫВЫ В СЛАЙДРЕ
const reviewsSliderItems = document.querySelector('.reviews__slider-items');

let itemReviews = '';

reviews.forEach(function (item) {

  if(item.comment.length > 300){
    item.comment =  item.comment.slice(0, 300) +'... '+ '<br><a class="reviews__slider-item-read" href="#">Читать весь отзыв</a>';
  }

  itemReviews += `
      
    <div class="reviews__slider-item swiper-slide">
        <div class="reviews__slider-item-top">
            <div class="reviews__slider-item-circle">${item.name[0]}</div>
            <div class="reviews__slider-item-title">${item.name}</div>
        </div> 
        <div class="reviews__slider-item-date-wrapper"><span class="reviews__slider-item-date">${item.date}</span></div>
        <div class="reviews__slider-item-text">${item.comment}</div>
    </div>
      
  `;

})

reviewsSliderItems.innerHTML = itemReviews;


