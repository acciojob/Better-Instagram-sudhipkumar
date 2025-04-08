document.querySelectorAll('.image').forEach(image => {
  image.addEventListener('dragstart', (e) => {
    const bg = window.getComputedStyle(e.target).backgroundImage;
    e.dataTransfer.setData('text/plain', bg);
    e.dataTransfer.setData('source-id', e.target.id);
    e.target.classList.add('selected');
  });

  image.addEventListener('dragend', (e) => {
    e.target.classList.remove('selected');
  });

  image.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  image.addEventListener('drop', (e) => {
    e.preventDefault();

    const sourceId = e.dataTransfer.getData('source-id');
    const sourceElem = document.getElementById(sourceId);
    const sourceBg = e.dataTransfer.getData('text/plain');
    const targetBg = window.getComputedStyle(e.target).backgroundImage;

    // Swap backgrounds
    sourceElem.style.backgroundImage = targetBg;
    e.target.style.backgroundImage = sourceBg;
  });
});
