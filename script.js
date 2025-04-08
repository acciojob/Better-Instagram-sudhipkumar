let dragged = null;

document.querySelectorAll('.image').forEach(image => {
  image.addEventListener('dragstart', (e) => {
    dragged = e.target;
    e.target.classList.add('selected');
  });

  image.addEventListener('dragend', (e) => {
    e.target.classList.remove('selected');
  });

  image.addEventListener('dragover', (e) => {
    e.preventDefault(); // Allows dropping
  });

  image.addEventListener('drop', (e) => {
    e.preventDefault();

    if (dragged && dragged !== e.target) {
      // Swap background-image
      const temp = dragged.style.backgroundImage;
      dragged.style.backgroundImage = e.target.style.backgroundImage;
      e.target.style.backgroundImage = temp;
    }
  });
});
