document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('table');
    if (button) {
        button.addEventListener('click', function () {
            const className = 'red';
            if (!this.classList.contains(className)) {
                this.classList.add(className);
            } else {
                this.classList.remove(className);
            }
        });
    }
});