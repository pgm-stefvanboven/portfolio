function addImageClickHandler() {
  const images = document.querySelectorAll('.image-collection__container-image img');
  const overlay = document.querySelector('.image-overlay');
  const overlayImage = overlay.querySelector('img');
  const closeButton = overlay.querySelector('.image-overlay__close');

  images.forEach(function(image) {
    image.addEventListener('click', function() {
      const originalWidth = this.offsetWidth;
      const originalHeight = this.offsetHeight;

      this.classList.add('image-collection__container-image--enlarged');
      this.style.width = originalWidth + 'px';
      this.style.height = originalHeight + 'px';

      overlayImage.src = this.src;
      overlayImage.alt = this.alt;

      overlay.style.display = 'flex';
    });
  });

  closeButton.addEventListener('click', function() {
    const enlargedImage = document.querySelector('.image-collection__container-image--enlarged');
    enlargedImage.style.width = '';
    enlargedImage.style.height = '';
    enlargedImage.classList.remove('image-collection__container-image--enlarged');

    overlay.style.display = 'none';
  });
}

document.addEventListener('DOMContentLoaded', addImageClickHandler);