const hamburgerBtn = document.querySelector('.hamburger')
const navbarMenuLinks = document.querySelector('.navbar__menu ul')
const navbarItems = document.querySelectorAll('.navbar__item')

// Toggle Nav
hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('hamburger--active')
  navbarMenuLinks.classList.toggle('navbar__menu--active')

  // Animate Links
  navbarItems.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = ''
    } else {
      link.style.animation = `navbarItemsFade 0.5s ease forwards ${index / 6}s`
    }
  })
})
