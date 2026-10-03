const nav = document.querySelector('nav');
const menu = document.querySelector('.menu');
menu.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('open'));
});

const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('nav a');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id));
    }
  });
}, {threshold: .45});
sections.forEach(section => observer.observe(section));

const glow = document.querySelector('.cursor-glow');
window.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

document.querySelectorAll('.cert img').forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.88);z-index:99;display:grid;place-items:center;padding:30px;cursor:zoom-out;';
    const big = document.createElement('img');
    big.src = img.src;
    big.style.cssText = 'max-width:95vw;max-height:90vh;object-fit:contain;box-shadow:0 20px 80px #000;';
    overlay.appendChild(big);
    overlay.onclick = () => overlay.remove();
    document.body.appendChild(overlay);
  });
});