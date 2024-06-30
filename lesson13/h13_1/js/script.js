const validationRules = new Map([
    ['name', /^.+$/],
    ['phone', /^\+380/],
    ['email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/],
    ['message', /^.{5,}$/]
]);
window.addEventListener('DOMContentLoaded', function () {
    const name = document.getElementById("name");
    const message = document.getElementById("message");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");

    const nameError = document.getElementById("nameError");
    const messageError = document.getElementById("messageError");
    const phoneError = document.getElementById("phoneError");
    const emailError = document.getElementById("emailError");

    contactForm.addEventListener("input", function (event) {
        const target = event.target;
        const isValid = validate(target);
        const errorSpan = document.getElementById(`${target.id}Error`);
        if (isValid !== '') {
            errorSpan.textContent = `Must be compatible with ${isValid}`;
            errorSpan.style.display = 'block';
        } else {
            errorSpan.style.display = 'none';

        }
    });
});

function validate(field) {
    if (validationRules.has(field.id)) {
        const regex = validationRules.get(field.id);
        if (!regex.test(field.value)){
            return regex;
        }
    }
    return "";
}
