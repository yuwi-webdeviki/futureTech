import Swiper from 'swiper'
import 'swiper/css'

export const usePostsSwiper = () => {
  const swiper = new Swiper('.posts__slider', {
    grabCursor: true,
    breakpoints: {
      320: { spaceBetween: 14, slidesPerView: 'auto', },
      1440: { spaceBetween: 20, slidesPerView: 6 },
    },
  })

  const buttons = document.querySelectorAll('[data-filter]')
  const slides = document.querySelectorAll('[data-category]')

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter

      buttons.forEach((btn) => btn.classList.remove('is-active'))
      btn.classList.add('is-active')

      slides.forEach((slide) => {
        const categories = slide.dataset.category.split(' ')

        if (filter === 'all' || categories.includes(filter)) {
          slide.classList.remove('hidden')
        } else {
          slide.classList.add('hidden')
        }
      })
      swiper.update()
    })
  })
}
