


document.addEventListener('DOMContentLoaded', function () {
    const gridItems = document.querySelectorAll('.grid-item img');

    gridItems.forEach(item => {
        item.addEventListener('click', function () {
            const modal = document.createElement('div');
            modal.classList.add('modal');
            const modalImg = document.createElement('img');
            modalImg.src = this.src;
            modal.appendChild(modalImg);
            document.body.appendChild(modal);

            modal.addEventListener('click', function () {
                document.body.removeChild(modal);
            });
        });
    });
});