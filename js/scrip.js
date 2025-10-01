function openLightboxBySrc(src, alt) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const caption = document.getElementById('caption');

  lightbox.style.display = 'flex';
  lightboxImg.src = src;
  caption.textContent = alt || '';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  // 1) Vincular todos los <a class="lightbox-link">
  document.querySelectorAll('a.lightbox-link').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault(); // <- evita que el <a> abra la imagen aparte
      const img = a.querySelector('img');
      openLightboxBySrc(a.getAttribute('href'), img ? img.alt : '');
    });
  });

  // 2) Cierre por clic en overlay o en la X
  const lightbox = document.getElementById('lightbox');
  lightbox.addEventListener('click', (e) => {
    if (e.target.id === 'lightbox' || e.target.classList.contains('close')) {
      closeLightbox();
    }
  });

  // 3) Cerrar con tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
});


