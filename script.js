const draggables = document.querySelectorAll('.draggable');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', dragStart);
    draggable.addEventListener('dragover', dragOver);
    draggable.addEventListener('drop', drop);
});

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
}

function dragOver(e) {
    e.preventDefault(); // Prevent default to allow drop
}

function drop(e) {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    const draggableElement = document.getElementById(id);
    const dropzone = e.target;

    // Swap the images
    const tempImage = dropzone.style.backgroundImage;
    dropzone.style.backgroundImage = draggableElement.style.backgroundImage;
    draggableElement.style.backgroundImage = tempImage;
}