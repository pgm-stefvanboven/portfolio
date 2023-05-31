function addImageClickHandler() {
  var images = document.querySelectorAll('.image-collection__container-image img');
  var overlay = document.querySelector('.image-overlay');
  var overlayImage = overlay.querySelector('img');
  var closeButton = overlay.querySelector('.image-overlay__close');

  images.forEach(function(image) {
    image.addEventListener('click', function() {
      var originalWidth = this.offsetWidth;
      var originalHeight = this.offsetHeight;

      this.classList.add('image-collection__container-image--enlarged');
      this.style.width = originalWidth + 'px';
      this.style.height = originalHeight + 'px';

      overlayImage.src = this.src;
      overlayImage.alt = this.alt;

      overlay.style.display = 'flex';
    });
  });

  closeButton.addEventListener('click', function() {
    var enlargedImage = document.querySelector('.image-collection__container-image--enlarged');
    enlargedImage.style.width = '';
    enlargedImage.style.height = '';
    enlargedImage.classList.remove('image-collection__container-image--enlarged');

    overlay.style.display = 'none';
  });
}

document.addEventListener('DOMContentLoaded', addImageClickHandler);