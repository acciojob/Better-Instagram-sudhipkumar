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
    e.preventDefault();
  });

  
  });
});
