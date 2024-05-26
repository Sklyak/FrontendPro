function createSum(value) {
    let sum = 0;

    return (value) => sum += value;
}

const sum = createSum();

console.log(sum(3));
console.log(sum(3));
console.log(sum(5));
