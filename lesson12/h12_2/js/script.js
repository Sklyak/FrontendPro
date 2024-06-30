window.addEventListener('DOMContentLoaded', function() {
    const buttonsContainer = document.getElementById("buttons");
    buttonsContainer.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            const number = event.target.dataset.number;
            console.log(number);
        }
    });
});