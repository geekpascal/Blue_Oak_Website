export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const navHeight = 80 // Height of your fixed navbar
    const elementPosition = element.getBoundingClientRect().top + window.scrollY
    const offsetPosition = elementPosition - navHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }
}

