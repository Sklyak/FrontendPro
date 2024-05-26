const input =  array = [1, 3, 4, 6, 2, 5, 7];
const clear = (list, toDelete) => {
    let copyList = [];
    for (const item of list) {
        if (item !== toDelete){
            copyList.push(item);
        }
    }

    return copyList;
}

console.log(clear(input));