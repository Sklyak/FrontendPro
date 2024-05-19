const count = prompt("Enter 3 counts number");
const withoutDoubles = count.split(count[0]).join('');

console.log(`Count: ${count}`);

if (withoutDoubles === '') {
    console.log("All numbers are equal");
} else if (withoutDoubles.length !== count.length -1) {
    console.log(`Number ${count[0]} more than 1 time`);
} else if (count.split(count[1]).join('').length !== count.length -1) {
    console.log(`Number ${count[1]} more than 1 time`);
}
