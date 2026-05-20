// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links  = document.getElementById('navLinks');
toggle.addEventListener('click', () => links.classList.toggle('open'));

// Active nav link highlight on scroll
const sections = document.querySelectorAll('main section[id]');
const navAs    = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navAs.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.45 });

sections.forEach(s => observer.observe(s));

// Close mobile nav on link click
navAs.forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

// Contact form — mailto fallback
const sendBtn   = document.getElementById('sendBtn');
const formNotice = document.getElementById('formNotice');

sendBtn.addEventListener('click', () => {
  const name    = document.getElementById('name').value.trim();
  const email   = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    formNotice.style.color = '#c0392b';
    formNotice.textContent = 'Please fill in all fields before sending.';
    return;
  }

  const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
  const body    = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:michaellajondra.gico@cvsu.edu.ph?subject=${subject}&body=${body}`;

  formNotice.style.color = '#2e4057';
  formNotice.textContent = '✓ Opening your email client…';

  document.getElementById('name').value    = '';
  document.getElementById('email').value   = '';
  document.getElementById('message').value = '';
});
