import 'intersection-observer'
import _ from 'lodash'

IntersectionObserver.prototype.POLL_INTERVAL = 20

const defaults = {
  selector: '.u-scroll-active',
  activeClass: 'is-active',
  options: {
    threshold: 0.5
  },
  active: {
    md: true,
    sm: true
  }
}

export default class {
  constructor(el, callback) {
    this._settings = _.merge({}, defaults)
    this._el = el
    this._mql = window.matchMedia('only screen and (max-width: 767px)')
    this._observer = null
    this._isActive = false
    this._callback = callback

    this._settings.options.threshold = this._el.dataset.threshold
      ? Number(this._el.dataset.threshold)
      : defaults.options.threshold
  }

  init() {
    this.handleEvents()
    this.onMatchMedia()
  }

  handleEvents() {
    this._mql.addListener(this.onMatchMedia.bind(this))
  }

  onMatchMedia() {
    const mode = this._mql.matches ? 'sm' : 'md'

    if (this._settings.active[mode] && !this._isActive) {
      this.addEvents()
    } else if (!this._settings.active[mode] && this._isActive) {
      this.removeEvents()
    }
  }

  addEvents() {
    this._observer = new IntersectionObserver(
      this.listerner.bind(this),
      this._settings.options
    )

    this._observer.observe(this._el)

    this._isActive = true
  }

  removeEvents() {
    this._observer.unobserve(this._el)
    this._el.classList.remove(this._settings.activeClass)

    this._observer = null

    this._isActive = false
  }

  listerner(changes) {
    changes.forEach(c => {
      const target = c.target
      const isIntersecting = c.isIntersecting

      if (isIntersecting) this.intersected(target)
    })
  }

  intersected(target) {
    target.classList.add(this._settings.activeClass)

    if (this._callback) this._callback()

    this._observer.unobserve(target)
  }
}
