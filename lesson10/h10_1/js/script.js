const Person = function (name, age, city,) {
    //fields by default
    this.name = "John Doe";
    this.city = "Unknown";
    this.age = 0;
    if (typeof name === 'string' && name.length > 0) {
        this.name = name;
    }
    if (typeof city === 'string' && city.length > 0) {
        this.city = city;
    }
    if (!isNaN(age)) {
        this.age = age;
    }
    this.printOutput = function () {
        console.log(`Hello, this is: ${this.name}. Living in ${this.city} city. ${this.age} years old`);
    }
}

new Person("Victor", 72, "Lviv").printOutput();


