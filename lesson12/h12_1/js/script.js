let link = "";
document.addEventListener('DOMContentLoaded', function() {
    const linkButton = document.getElementById("input");
    const moveButton = document.getElementById("move");

    linkButton.addEventListener("click", function (event) {
        event.preventDefault();
        link = prompt("Please input URI");
    });

    moveButton.addEventListener("click", function (event) {
        event.preventDefault();
        if (link !== "") {
            window.location.href = link;
        }
    });
});