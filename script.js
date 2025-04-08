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
    e.preventDefault(); // Allow drop
  });

  image.addEventListener('drop', (e) => {
    e.preventDefault();

    if (dragged && dragged !== e.target) {
      const draggedBg = window.getComputedStyle(dragged).backgroundImage;
      const targetBg = window.getComputedStyle(e.target).backgroundImage;

      dragged.style.backgroundImage = targetBg;
      e.target.style.backgroundImage = draggedBg;
    }
  });
});
