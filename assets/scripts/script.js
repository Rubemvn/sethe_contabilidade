const controls = document.querySelectorAll(".control");
const galleryWrapper = document.querySelector('.galleryWrapper')
let scrollAmount = 0
let maxScroll = galleryWrapper.scrollWidth - galleryWrapper.clientWidth;

const scrollBallon = document.querySelector('.scrollBallon')

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    isLeft = control.classList.contains("arrowLeft");

    if (isLeft) {
      scrollAmount -= 150
      galleryWrapper.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
        inline: "center"
      });

      if (scrollAmount < 0) {
        scrollAmount = maxScroll
        galleryWrapper.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
          inline: "center"
        });
      }
    } else {
      scrollAmount += 150
      galleryWrapper.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
      });
      if (scrollAmount > maxScroll) {
        scrollAmount = 0
        galleryWrapper.scrollTo({
          left: scrollAmount,
          behavior: "smooth"
        });
      }
    }

  });
});

scrollBallon.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})
