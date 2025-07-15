/* eslint-disable */
import defaultsDeep from 'lodash/defaultsDeep'
import each from 'lodash/each'
import anime from 'animejs'
import ElementCoordinate from './_ElementCoordinate'

const defaultConfig = {
  headerSelector: '#js-header',
  anchorSelector: '.js-anchor-link'
}

export default class AnchorScroll {
  constructor(config) {
    this.config = defaultsDeep(config, defaultConfig, {})
    this.scrollRoot =
      'scrollingElement' in document
        ? document.scrollingElement
        : document.documentElement
    this.headerElement = document.querySelector(this.config.headerSelector)
    this.targetElement = document.querySelectorAll(this.config.anchorSelector)
  }

  init() {
    this._handleEvent()
  }

  animation(targetElement) {
    if (targetElement) {
      const targetCoordinate = new ElementCoordinate(targetElement)

      anime({
        targets: this.scrollRoot,
        scrollTop: targetCoordinate.y,
        duration: 800,
        easing: 'easeOutQuart'
      })
    }
  }

  _handleEvent() {
    window.addEventListener('load', e => {
      const hash = location.hash
      const targetElement =
        hash !== '' ? document.querySelector(location.hash) : null

      if (targetElement) {
        this.animation(targetElement)
      }
    })

    each(this.targetElement, el => {
      el &&
        el.addEventListener(
          'click',
          e => {
            const hrefAttr = e.currentTarget.getAttribute('href')

            // console.log(this.headerElement.offsetHeight)

            if (hrefAttr) {
              const [pathname, targetHash] = hrefAttr.split('#')
              const targetSelector = `#${targetHash}`
              const targetElement = targetSelector
                ? document.querySelector(targetSelector)
                : null

              if (pathname === location.pathname || pathname === '') {
                e.preventDefault()
              }

              if (targetElement) {
                this.animation(targetElement)
              }
            }
          },
          false
        )
    })
  }
}
