const NumbersHandler = function (numbers) {
    //fields by default
    this.numbers = [];
    if (!Array.isArray(numbers)) {
        this.numbers = Array.from(arguments).filter(arg => typeof arg === 'number');
    }else {
        this.numbers = numbers;
    }
    this.getEvenElements = () => {
        return this.numbers.filter(arg => {
            return  arg % 2 === 0;
        });
    }
}

console.log(new NumbersHandler([2,3,4,5,6,7,8,9]).getEvenElements());
console.log(new NumbersHandler(1,3,4,5,6).getEvenElements());

