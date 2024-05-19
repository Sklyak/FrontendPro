const limit = prompt("Please enter a number");

for (let count = 1; count <= 100; count++) {
    if (count * count < limit){
        console.log(count);
    }
}

