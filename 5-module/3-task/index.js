function initCarousel() {
  let carouselArrowLeft = document.querySelector(".carousel__arrow_left");
  let carouselArrowRight = document.querySelector(".carousel__arrow_right");
  let slider = document.querySelector(".carousel__inner");
  let carouselInner = document.querySelector('.carousel__inner');
  let slideQuantity = document.querySelectorAll('.carousel__slide').length;
  let sliderWidth = carouselInner.offsetWidth;
  let x = 0;

  carouselArrowLeft.style.display = 'none';
  carouselArrowLeft.addEventListener('click', function() {
    if (x < 0){
      x += sliderWidth;
      slider.style.transform = `translateX(${x}px)`;
      carouselArrowRight.style.display = '';
      if (x == 0) {
        this.style.display = 'none';
      }
    }
  } );
  carouselArrowRight.addEventListener('click', function() {
    if (x > -1 * slideQuantity * sliderWidth) {
      x -= sliderWidth;
      slider.style.transform = `translateX(${x}px)`;
      carouselArrowLeft.style.display = '';
      if (x < -1 * (slideQuantity - 2) * sliderWidth) {
        this.style.display = 'none';
      }
    }
  } );
}
