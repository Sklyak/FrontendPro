window.onload = function() {
    const button = document.getElementById('button');
    const imageElem = document.getElementById('cats');

    if (button && imageElem) {
        button.addEventListener('click', function () {
            const imageNumber = Math.ceil(Math.random() * 3);
            const imageSrc = `img/cat${imageNumber}.jpeg`;
            imageElem.src = imageSrc;
        });
    }
};