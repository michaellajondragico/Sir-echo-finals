// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links  = document.getElementById('navLinks');

if (toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
}

// Active nav link highlight on scroll
const sections = document.querySelectorAll('main section[id]');
const navAs    = document.querySelectorAll('.nav-links a');

const setActive = (id) => {
  navAs.forEach(a => a.classList.remove('active'));
  const active = document.querySelector(`.nav-links a[href="#${id}"]`);
  if (active) active.classList.add('active');
};

const onScroll = () => {
  // If scrolled to the bottom of the page, highlight the last section
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
    setActive(sections[sections.length - 1].id);
    return;
  }

  let current = sections[0].id;
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 80) {
      current = section.id;
    }
  });

  setActive(current);
};

window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('load', onScroll);
onScroll();

// Close mobile nav on link click
navAs.forEach(a => a.addEventListener('click', () => {
  if (links) links.classList.remove('open');
}));