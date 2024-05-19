const year = prompt("Enter your year of birth");
const city = prompt("Enter your city");
const sport = prompt("Enter your favorite sport").toLowerCase();

let output = `Your age is ${2024 - +year} years old!`;

switch (city) {
    case "Kyiv":
        output += "\n You're living in capital of Ukraine!";
        break;
    case "Washington" :
        output += "\n You're living in capital of USA!";
        break;
    case "London" :
        output += "\n You're living in capital of USA!";
        break;
}

switch (sport) {
    case "box":
        output += "\n Ooo, you want to be like Usik!";
        break;
    case "snooker" :
        output += "\n Ooo, you want to be like O`Salivan!";
        break;
    case "football" :
        output += "\n Ooo, you want to be like Messi!";
        break;
}

alert(output);

