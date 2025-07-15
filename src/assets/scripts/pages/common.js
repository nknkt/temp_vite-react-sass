import ScrollActive from '../modules/_ScrollActive'
import AnchorScroll from '../modules/_AnchorScroll'
import Collapse from '../modules/_Collapse'
import _ from 'lodash'

// Anchor scroll
{
  const anchorScroll = new AnchorScroll()
  anchorScroll.init()
}

// Scroll Active
{
  const els = document.getElementsByClassName('js-scroll-active')
  _.forEach(els, el => {
    const scrollActive = new ScrollActive(el)
    scrollActive.init()
  })
}

{
  // viewport
  function viewportSet() {
    var wsw = window.screen.width
    if (wsw > 767 && wsw < 1280) {
      document
        .querySelector("meta[name='viewport']")
        .setAttribute('content', 'width=1280')
    } else {
      document
        .querySelector("meta[name='viewport']")
        .setAttribute('content', 'width=device-width, initial-scale=1')
    }
  }
  window.addEventListener('DOMContentLoaded', viewportSet, false)
  window.addEventListener('resize', viewportSet, false)
  window.addEventListener('orientationchange', viewportSet, false)
}

// hamburger menu
if (window.innerWidth < 768) {
  window.addEventListener('load', () => {
    const hdrLogo = document.querySelector('.js-hdrLogo')
    const navBtn = document.querySelector('.js-navBtn')
    const hdrNav = document.querySelector('.js-hdrNav')

    navBtn.addEventListener('click', () => {
      hdrLogo.classList.toggle('is-open')
      navBtn.classList.toggle('is-open')
      hdrNav.classList.toggle('is-open')
    })
  })
}

// header
{
  // hamburger menu
  const header = document.querySelector('.js-hdr')
  const navBtn = document.querySelector('.js-navBtn')

  if (window.innerWidth < 768) {
    window.addEventListener('load', () => {
      navBtn.addEventListener('click', () => {
        header.classList.toggle('is-open')
      })
    })

    document.addEventListener(
      'DOMContentLoaded',
      function() {
        var hdrAnchor = document.querySelectorAll('.js-hdrNav__anchor')

        for (var i = 0; i < hdrAnchor.length; i++) {
          hdrAnchor[i].addEventListener('click', () => {
            header.classList.remove('is-open')
          })
        }
      },
      false
    )
  }

  // header scroll
  let scrollEndTimer
  let scrollPositionPrev = 0

  window.addEventListener('scroll', () => {
    let scrollPosition = window.pageYOffset

    if (window.innerWidth > 768) {
      // スクロール量100以上で
      if (scrollPosition > 100) {
        // スクロールに差分がある = 移動している
        let _diff = scrollPosition - scrollPositionPrev

        if (_diff > 0) {
          header.classList.add('is-hidden')
        } else {
          header.classList.remove('is-hidden')
        }

        scrollPositionPrev = scrollPosition

        // 0.2秒移動がない
        clearTimeout(scrollEndTimer)
        scrollEndTimer = setTimeout(function() {
          header.classList.remove('is-hidden')
        }, 200)
      }
    }

    if (scrollPosition < 100) {
      header.classList.add('is-top')
    } else {
      header.classList.remove('is-top')
    }
  })
}

// Collapse
window.addEventListener('load', () => {
  _.forEach(document.querySelectorAll('[data-collapse-toggler]'), el => {
    const collapse = new Collapse(el, {
      hashNavigation: true
    })
    collapse.init()
  })
})
