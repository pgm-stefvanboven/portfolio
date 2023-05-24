function addImageZoom() {
    const imageContainers = document.querySelectorAll('.image-collection__container-image');
  
    imageContainers.forEach((container) => {
      container.addEventListener('mouseover', () => {
        container.style.transform = 'scale(2.3)';
        container.style.zIndex = '1';
      });
  
      container.addEventListener('mouseout', () => {
        container.style.transform = 'scale(1)';
        container.style.zIndex = '0';
      });
    });
  }
  
  // Call the function to add image zoom functionality
  addImageZoom();
     