// animação simples ao scroll
const elements = document.querySelectorAll(".card, .about-text, .about-image");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

elements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(30px)";
  el.style.transition = "0.6s ease";
  observer.observe(el);
});

// movimento leve com o mouse
document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  document.querySelectorAll(".blob").forEach((blob, index) => {
    blob.style.transform = `translate(${x * 30 * (index + 1)}px, ${y * 30}px)`;
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  const imgs = document.querySelectorAll(".clickable-img");
  const closeBtn = document.querySelector(".close");

  imgs.forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Fecha ao clicar fora da imagem
  modal.addEventListener("click", e => {
    if(e.target === modal) modal.style.display = "none";
  });
});

const modal = document.createElement('div');
modal.classList.add('modal');
modal.innerHTML = `
  <span class="close">&times;</span>
  <video controls autoplay style="max-width:90%; max-height:80vh;"></video>
`;
document.body.appendChild(modal);

const modalVideo = modal.querySelector('video');
const closeBtn = modal.querySelector('.close');

document.querySelectorAll('.video-thumb').forEach(thumb => {
  thumb.addEventListener('click', () => {
    const videoSrc = thumb.dataset.video;
    modalVideo.src = videoSrc;
    modal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  modalVideo.pause();
  modalVideo.src = '';
});

