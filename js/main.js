// selection
let burgerBtn = document.querySelector(".navbar-toggler");
let list = document.querySelector(".navbar-collapse");
let overlay = document.querySelector(".overlay");
let sectionHome = document.querySelector("#Home");
let sections = document.querySelectorAll("section");
let header = document.querySelector("header");
let links = document.querySelectorAll("#header .navbar-nav .nav-link");
let fade = document.querySelectorAll(".fade-in");
let slide = document.querySelectorAll(".slide-in");
let hLanding = document.querySelector("#Home .card h2");
let cardServices = document.querySelectorAll("#About .row .col");

// start header

// when clicked in any where in the page the dropdown menu closed
document.addEventListener("click", (e) => {
  if (e.target !== burgerBtn || e.target !== list) {
    if (list.classList.contains("show")) {
      list.classList.toggle("show");
      burgerBtn.classList.toggle("collapsed");
      if (
        burgerBtn.getAttribute("aria-expanded") === "true" &&
        list.classList.contains("show") === false
      ) {
        burgerBtn.setAttribute("aria-expanded", "false");
      }
    }
  }
});

list.addEventListener("click", (e) => e.stopPropagation());

// when any section appear in the viewport the link in navebar become active
const sectionsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        links.forEach((link) => {
          link.classList.remove("active");
          if (link.innerHTML == entry.target.id) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  {
    rootMargin: "-100px 0px -500px 0px",
  }
);

sections.forEach((section) => {
  sectionsObserver.observe(section);
});

// when section home is disapper from the viewport will add class scrolling to the header
const sectionOneObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        header.classList.add("scrolling");
      } else {
        header.classList.remove("scrolling");
      }
    });
  },
  {
    rootMargin: "-100px 0px 0px 0px",
  }
);

sectionOneObserver.observe(sectionHome);

// end header

// start home

// create slider in the section home
let slider = document.querySelector(".slider");
let images = document.querySelectorAll(".slider-images__image");
let bullets = document.querySelector(".slider-bullets");

// create array to images
let imagesArray = Array.from(images);

// create element span to create the bullets depend on the images's number
for (let i = 0; i < imagesArray.length; i++) {
  let spanBullet = document.createElement("span");
  spanBullet.className = "slider-bullets__bullet";
  bullets.appendChild(spanBullet);
}

let current = 0;
let spanBullets = document.querySelectorAll(".slider-bullets__bullet");
let ArrayBullets = Array.from(spanBullets);
console.log(ArrayBullets);
ArrayBullets[0].classList.add("active");

// make setInterval to repeate the function every 5 seconds to add className active to current image and current bullets
setInterval(() => {
  imagesArray.forEach((image) => {
    image.classList.remove("active");
    imagesArray[current].classList.add("active");
  });

  ArrayBullets.forEach((bullet) => {
    bullet.classList.remove("active");
    ArrayBullets[current].classList.add("active");
  });
  current++;
  if (current === imagesArray.length) {
    current = 0;
  }
}, 5000);

// end home

// start animation

const appearWithScrolling = new IntersectionObserver(
  (entries, appearWithScrolling) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearWithScrolling.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.3,
    rootMargin: "0px 0px 0px 0px",
  }
);

fade.forEach((fad) => {
  appearWithScrolling.observe(fad);
});

// slide.forEach((slider) => {
//   appearWithScrolling.observe(slider);
// });

// selection section

// end animation

// start create function

// end create function
