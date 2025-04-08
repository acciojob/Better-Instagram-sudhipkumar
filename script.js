document.querySelectorAll('.image').forEach(img => {
  img.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('sourceId', e.target.id);
    img.classList.add('selected');
  });

  img.addEventListener('dragend', () => {
    img.classList.remove('selected');
  });

  img.addEventListener('dragover', (e) => {
    e.preventDefault(); // necessary for drop to trigger
  });

  img.addEventListener('drop', (e) => {
    e.preventDefault();
    const sourceId = e.dataTransfer.getData('sourceId');
    const sourceEl = document.getElementById(sourceId);
    const targetEl = e.currentTarget;

    // Swap background images
    const temp = sourceEl.style.backgroundImage;
    sourceEl.style.backgroundImage = targetEl.style.backgroundImage;
    targetEl.style.backgroundImage = temp;
  });
});
