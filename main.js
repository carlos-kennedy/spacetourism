window.addEventListener("scroll", onScrollEvents);
window.addEventListener("click", buttonsMenu);

const primaryNav = document.querySelector(".menu");
const navButtonOpen = document.querySelector(".open-menu-mobile");
const navButtonClose = document.querySelector(".close-menu-mobile");

onScrollEvents();
function onScrollEvents() {
  buttonsMenu();
  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(destination);
  activateMenuAtCurrentSection(crew);
  activateMenuAtCurrentSection(technology);
  return;
}

function activateMenuAtCurrentSection(section) {
  const targetline = scrollY + innerHeight / 2;
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionTopReachOrPassedTargetLine = targetline >= sectionTop;
  const sectionEndsAt = sectionTop + sectionHeight;

  const sectionEndPassedTargetline = sectionEndsAt <= targetline;

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetline;

  const sectionId = section.getAttribute("id");
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove("active");
  if (sectionBoundaries) {
    menuElement.classList.add("active");
  }
}

navButtonOpen.classList.remove("unactive");
function buttonsMenu() {
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
  return;
}
