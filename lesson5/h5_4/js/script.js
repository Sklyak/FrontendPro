const number = prompt("Please enter a number");

if (number <= 1) {
    console.log("Number is prime");
}else {
    let result = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            result = false
            break;
        }
    }

    console.log(result ? "Number is prime" : "Number is NOT prime");
}

