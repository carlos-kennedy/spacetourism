const primaryNav = document.querySelector(".menu");
const navButtonOpen = document.querySelector(".open-menu-mobile");
const navButtonClose = document.querySelector(".close-menu-mobile");

navButtonOpen.classList.remove("unactive");

// open
navButtonOpen.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  primaryNav.setAttribute("data-visible", false);

  navButtonOpen.classList.add("unactive");
  navButtonOpen.setAttribute("aria-expanded", false);

  navButtonClose.classList.remove("unactive");
  navButtonClose.setAttribute("aria-expanded", false);

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navButtonOpen.setAttribute("aria-expanded", false);
    navButtonClose.setAttribute("aria-expanded", true);
  }
});

// close
navButtonClose.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  navButtonOpen.classList.remove("unactive");
  navButtonOpen.setAttribute("aria-expanded", true);

  navButtonClose.classList.add("unactive");
  navButtonClose.setAttribute("aria-expanded", true);

  if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navButtonClose.setAttribute("aria-expanded", false);
  }
});
