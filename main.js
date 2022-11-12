let position = "absolute"
let navbarTop = 0
let lastScrollPosition = 0

const supportPageOffset = window.pageYOffset !== undefined

function onScroll() {
  const navbar = document.querySelector("#nav")
  const currentScrollPosition = supportPageOffset ? window.pageYOffset : document.documentElement.scrollTop
  if (currentScrollPosition <= 0) {
    position = "absolute"
    navbarTop = 0
    lastScrollPosition = 0
  } else {
    if (currentScrollPosition > lastScrollPosition) {
      position = "absolute"
      let { top, height } = navbar.getBoundingClientRect()
      if (top < -height) {
        top = -height
      }
      navbarTop = currentScrollPosition + top
    } else if (currentScrollPosition < lastScrollPosition) {
      const { top } = navbar.getBoundingClientRect()
      if (top >= 0) {
        navbarTop = 0
        position = "fixed"
      }
    }
    lastScrollPosition = currentScrollPosition 
  }
  navbar.style = `position: ${position}; top: ${navbarTop}px;`
}

window.addEventListener("scroll", onScroll, { passive: true })