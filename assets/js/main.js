/*==================== LOADER ====================*/
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#spinner").style.visibility = "visible";
    document.querySelector("#spinWrapper").style.visibility = "visible";
  } else {
    document.querySelector("#spinner").style.display = "none";
    document.querySelector("#spinWrapper").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};

/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.toggle("show-menu");
    }, {passive: true});
  }
};

showMenu("nav-toggle", "nav-menu");

/*==================== NAVBAR ====================*/
const observer = new IntersectionObserver(
  (main) => {
    document
      .querySelector("#nav")
      .classList.toggle("active", !main[0].isIntersecting);
  },
  {
    threshold: 0.8,
  }
);

observer.observe(document.querySelector("#main"));

/*==================== SWIPER JS ====================*/
let galleryThumbs = new Swiper(".gallery-thumbs", {
  spaceBetween: 0,
  slidesPerView: 0,
});

let galleryTop = new Swiper(".gallery-top", {
  effect: "fade",
  loop: true,

  thumbs: {
    swiper: galleryThumbs,
  },
});

/*==================== GSAP ANIMATION ====================*/
const controlImg = document.querySelectorAll(".controls__img");

function scrollAnimation() {
  gsap.from(".islands__subtitle", {
    opacity: 0,
    duration: 0.2,
    delay: 0.2,
    y: -20,
  });
  gsap.from(".islands__title", {
    opacity: 0,
    duration: 0.3,
    delay: 0.3,
    y: -20,
  });
  gsap.from(".islands__description", {
    opacity: 0,
    duration: 0.4,
    delay: 0.4,
    y: -20,
  });
  gsap.from(".islands__button", {
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    y: -20,
  });
  gsap.from(".islands__video-content", {
    opacity: 0,
    duration: 0.6,
    delay: 0.6,
    y: -20,
  });

  islandsPopup.classList.remove("show-popup");
}

controlImg.forEach((c) => c.addEventListener("click", scrollAnimation, {passive: true}));
