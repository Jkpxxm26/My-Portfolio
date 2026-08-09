const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('modal-img');
const lightboxCaption = document.getElementById('modal-caption');

function openLightbox(cardElement) {
    const img = cardElement.querySelector('img');
    const caption = cardElement.querySelector('.caption').innerText;

    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.innerText = caption;

    lightbox.classList.add('active');
}

function closeLightbox() {
    lightbox.classList.remove('active');
}

document.querySelector('.modal-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});