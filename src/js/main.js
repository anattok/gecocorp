
// ИНИЦИАЛИЗАЦИЯ AOS
AOS.init();

// УПРАВЛЕНИЕ СВАЙПЕР-СЛАЙДЕР
const reviewsSlider = document.querySelector('.reviews-slider__slider');

const sliderOne = new Swiper(reviewsSlider, {

  /* direction: "horizontal",
  loop: true, */
  slidesPerView: 3,
  spaceBetween: 24,
  loopedSlides: 50,

  //СТРЕЛКИ
  navigation: {
    nextEl: '.reviews-slider__arrow-next',
    prevEl: '.reviews-slider__arrow-prev',
  },
  /* autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  }, */

});




//ДИНАМИЧЕСКИЕ ОТЗЫВЫ В СЛАЙДРЕ
function reviewsSliders() {

  const reviewsSliderItems = document.querySelector('.reviews-slider__slider-items');

  if (reviewsSliderItems != null) {

    let itemReviews = '';

    arrReviews.forEach(function (item) {

      if (item.comment.length > 300) {
        item.comment = item.comment.slice(0, 300) + '... ' + '<br><a class="reviews-slider__slider-item-read" href="#">Читать весь отзыв</a>';
      }

      itemReviews += `
        
      <div class="reviews-slider__slider-item swiper-slide">
          <div class="reviews-slider__slider-item-top">
              <div class="reviews-slider__slider-item-circle">${item.name[0]}</div>
              <div class="reviews-slider__slider-item-title">${item.name}</div>
          </div> 
          <div class="reviews-slider__slider-item-date-wrapper"><span class="reviews-slider__slider-item-date">${item.date}</span></div>
          <div class="reviews-slider__slider-item-text">${item.comment}</div>
      </div>
        
    `;

    });

    reviewsSliderItems.innerHTML = itemReviews;
  }



}

reviewsSliders();



//ДИНАМИЧЕСКИЕ ОТЗЫВЫ НА СТРАНИЦЕ ОТЗЫВЫ
function reviews() {

  const reviewsItems = document.querySelector('.reviews__items');

  if (reviewsItems != null) {

    let itemReviews = '';

    arrReviews.forEach(function (item) {


      itemReviews += `

            <div class="reviews__item">
                <div class="reviews__item-col">
                    <div class="reviews__item-name">${item.name}</div>
                    <div class="reviews__item-date">${item.date}</div>
                </div>
                <div class="reviews__item-text">${item.comment}</div>
            </div>

    `;

    });

    reviewsItems.innerHTML = itemReviews;
  }

}


reviews();

   


//КНОПКИ ПЕРЕКЛЮЧЕНИЯ ПО 6 ОТЗЫВОВ НА СТРАНИЦЕ ОТЗЫВЫ
function reviewsBtns() {

  let reviewsItem = document.querySelectorAll('.reviews__item'); 
  const reviewsItems = document.querySelector('.reviews__items');

  if (reviewsItems != null) {

    const reviewsBtnPrev = document.querySelector('.reviews__btns-prev');
    const reviewsBtnNext = document.querySelector('.reviews__btns-next');

 
    for (let i=6; i<reviewsItem.length; i++){

      reviewsItem[i].classList.add('hide');

    }

    let count = 5;

    reviewsBtnNext.addEventListener("click", function() {

         count = count + 6;

        if (count <= reviewsItem.length){


              for(let i=0; i<count; i++){

                reviewsItem[i].classList.add('hide');

              }

              for(let i=6; i<count; i++){
                reviewsItem[i].classList.remove('hide');
                reviewsItem[i].classList.add('visible');

              }
        }

    });


    






  }
}

reviewsBtns()