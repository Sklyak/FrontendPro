console.log((function () {
    let input = 0;
    for (let i = 0; i < 10; i++) {
        input = prompt("Please enter a number more than 100");
        if (Number.isFinite(input) && input > 100) {
            return input;
        }
    }

    return input;
})());
