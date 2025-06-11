//what is tedx
window.addEventListener('scroll', function () {
    const section = document.querySelector('.tedx-section');
    const position = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
      section.classList.add('animate');
    }
  });

function toggleSpeaker(element) {
  // Close others
  document.querySelectorAll('.speaker-block').forEach(el => {
    if (el !== element) el.classList.remove('active');
  });

  // Toggle current one
  element.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("bg-video");
  if (video) {
    video.playbackRate = 0.5; // Set your desired speed here
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "images/speech1.jpg",
    "images/speech2.jpg",
    "images/speech3.jpg",
    "images/speech4.jpg",
    "images/speech5.jpg",
    "images/speech6.jpg",
    "images/speech7.jpg"
  ];
  let currentIndex = 0;

  const imgElement = document.getElementById("carousel-image");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.src = images[currentIndex];
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    imgElement.src = images[currentIndex];
  });
});


//about page
window.addEventListener('scroll', function () {
    const aboutSection = document.querySelector('#about');
    const position = aboutSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight / 1.3;

    if (position < screenHeight) {
      aboutSection.classList.add('animate');
    }
  });

  //past info
  const observers = document.querySelectorAll('.slide-left, .slide-right');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // Run animation once
      }
    });
  }, {
    threshold: 0.2
  });

  observers.forEach(el => {
    observer.observe(el);
  });

  //navbar scrolling
const sections = document.querySelectorAll("section, footer");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
