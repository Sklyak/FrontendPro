const types = [1, "one", null, true, {}, 1n, Symbol()];

for (let elem = 0; elem < types.length; elem++) {
    //null will be obj
    console.log(typeof types[elem]);
}

let undef;
console.log(typeof undef);