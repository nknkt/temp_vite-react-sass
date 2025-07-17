import Splide from '@splidejs/splide'

function achievementSlider() {
  // achievementSlider
  const achievementSlider = new Splide('.js-achievementSlider', {
    type: 'loop',
    rewind: true,
    pagination: false,
    arrows: true,
    focus: 'center',
    updateOnMove: true,
    fixedWidth: '84vw',
    mediaQuery: 'min',
    gap: 10,
    speed: 600,
    breakpoints: {
      gap: 0,
      767: {
        fixedWidth: 950
      }
    }
  })

  const bar = achievementSlider.root.querySelector(
    '.js-achievementSliderBar div'
  )

  achievementSlider.on('mounted move', function() {
    const end = achievementSlider.Components.Controller.getEnd() + 1

    bar.style.width = String(100 / end) + '%'
    bar.style.left = String((100 / end) * achievementSlider.index) + '%'
  })

  // modalSlider
  const modalSlider = new Splide('.js-modalSlider', {
    type: 'loop',
    rewind: true,
    pagination: true,
    arrows: true,
    focus: 'center',
    updateOnMove: true,
    fixedWidth: '90%',
    mediaQuery: 'min',
    speed: 600,
    breakpoints: {
      767: {
        fixedWidth: 950
      }
    }
  })

  achievementSlider.sync(modalSlider)
  achievementSlider.mount()
  modalSlider.mount()
}
achievementSlider()

function modal() {
  const modalOpen = document.querySelector('.js-achievementSlider')
  const modal = document.querySelector('.js-modalSlider')
  const modalClose = document.querySelector('.js-modalClose')

  modalOpen.addEventListener('click', () => {
    modal.classList.add('is-open')

    modalClose.addEventListener('click', () => {
      modal.classList.remove('is-open')
    })
  })
}
modal()
