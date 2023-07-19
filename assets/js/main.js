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
console.log(window);

/*==================== LOADER ====================*/
document.onreadystatechange = () => {
  if (document.readyState !== "complete") {
    document.body.style.overflowY = "hidden";
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#spinner").style.visibility = "visible";
    document.querySelector("#spinWrapper").style.visibility = "visible";
  } else {
    document.querySelector("#spinner").style.display = "none";
    document.querySelector("#spinWrapper").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
    // document.querySelector("body").style.display = "block";
  }
};

/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener(
      "click",
      () => {
        // We add the show-menu class to the div tag with the nav__menu class
        nav.classList.toggle("show-menu");
      },
      { passive: true }
    );
  }
};

showMenu("nav-toggle", "nav-menu");


/*==================== FORM ====================*/
const form = document.querySelector("#submit-btn");
const inputs = document.querySelectorAll(".input");
const modal = document.querySelector("#modal");
const close = document.querySelector("#close");

emailjs.init(credentials.PUBLIC_KEY);

form.addEventListener("click", (event) => {
  event.preventDefault();

  form.innerHTML = "Sending...";

  // DATA VALIDATION
  const [name, email, sub, msg] = inputs;
  if (
    name.value.length === 0 ||
    email.value.length === 0 ||
    sub.value.length === 0 ||
    msg.value.length === 0
  ) {
    showDialog("Fill all the fields first!", true);
    form.innerHTML = "Send Message";
    return;
  }
  const userInputs = {
    name: inputs[0].value,
    email: inputs[1].value,
    subject: inputs[2].value,
    message: inputs[3].value,
  };
  inputs.forEach((input) => {
    input.value = "";
  });

  // GET THE VALUES AND RESET THE FORM

  // SEND EMAIL

  const templateParams = {
    name: userInputs.name,
    email: userInputs.email,
    subject: userInputs.subject,
    body: userInputs.message,
  };

  emailjs
    .send(credentials.SERVICE_ID, credentials.TEMPLATE_ID, templateParams)
    .then(
      function (response) {
        form.innerHTML = "Send Message";
        showDialog("Message sent sucessfully", false);
      },
      function (error) {
        form.innerHTML = "Send Message";
        showDialog("An error has occured", false);
      }
    );
});

function showDialog(msg, isError) {
  modal.showModal();
  modal.classList.add("active");
  document.body.style.overflowY = "hidden";
  document.querySelector("#msg").innerHTML =
    (isError
      ? "<i class='bx bxs-error' style='color:#ff2a00'  ></i>"
      : "<i class='bx bxs-check-circle' style='color:#2fc305'  ></i>") + msg;
  close.innerHTML = isError ? "Try Again" : "Okay";
  close.style.backgroundColor = isError ? "#ff2a00" : "#2fc305";
  close.addEventListener("click", () => {
    modal.close();
    document.body.style.overflowY = "auto";
    modal.classList.remove("active");
  });
}




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

controlImg.forEach((c) =>
  c.addEventListener("click", scrollAnimation, { passive: true })
);
