const target = document.getElementById("menu");
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const nav = document.getElementById("responsiv-nav");
  nav.classList.toggle('in');
});