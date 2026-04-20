class Navigation {
  selectors = {
    navigationLink: '[data-js-header-navigation-link]',
  }

  stateClasses = {
    isActive: 'is-active',
  }

  constructor() {
    this.navigationLinkElements = document.querySelectorAll(this.selectors.navigationLink)
    this.currentPage = window.location.pathname
    this.setActiveLink()
  }

  setActiveLink() {
    this.navigationLinkElements.forEach((link) => {
      const linkPath = new URL(link.href).pathname
      if (linkPath === this.currentPage) {
        link.classList.add('is-active')
      }
    })
  }
}

export default Navigation
