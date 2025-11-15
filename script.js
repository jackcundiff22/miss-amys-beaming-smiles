document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


const quotes = document.querySelectorAll('#testimonials blockquote');
let idx = 0;
setInterval(() => {
  quotes[idx].classList.remove('active');
  idx = (idx + 1) % quotes.length;
  quotes[idx].classList.add('active');
}, 5000);

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll(".animate-on-scroll")
    .forEach(el => observer.observe(el));
});


$(function(){
  $(".twentytwenty-container").twentytwenty({
    default_offset_pct: 0.5,
    orientation: "horizontal",
    before_label: "Before", 
    after_label:  "After"    
  });
});

document.querySelectorAll(".accordion button").forEach(btn => {
  btn.addEventListener("click", () => {
    const panel = btn.nextElementSibling;
    panel.style.maxHeight = 
      panel.style.maxHeight ? null : panel.scrollHeight + "px";
  });
});

const headerEl = document.querySelector('header');
const navToggle = document.querySelector('.nav-toggle');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = headerEl.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  
  document.querySelectorAll('nav a').forEach(a => {
    a.addEventListener('click', () => {
      headerEl.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded','false');
    });
  });
}

