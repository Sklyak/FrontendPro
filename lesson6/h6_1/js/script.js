const clear = (str, symbols) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        let shouldRemove = false;
        for (let j = 0; j < symbols.length; j++) {
            if (str[i] === symbols[j]) {
                shouldRemove = true;
                break;
            }
        }
        if (!shouldRemove) {
            result += str[i];
        }
    }
    return result;
}

const string = prompt("Input string...");
const symbols = prompt("Input symbols which will be cleared...");

alert(clear(string, symbols));