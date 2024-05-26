const average = (list) => {
    let result = 0;
    let count = 0;
    if (!Array.isArray(list)){
        return 0;
    }
    for (let i = 0; i < list.length; i++) {
        if (Number.isInteger(list[i]) && Number.isFinite(list[i])) {
            count++;
            result += list[i];
        }
    }

    return result / count;
}

console.log(average([2,2,2,2, 'victor', null, false])); //2