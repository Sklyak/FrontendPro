function createLadder() {
    //lets building has 11 floors (hole + 10 floors)
    const LIMIT = 10;
    //EU standard: zero, means hole
    let floor = "Hole";

    return {
        getFlor() {
            return floor;
        },
        up() {
            if (floor !== LIMIT) {
                if (floor === 'Hole') {
                    floor = 1;
                } else {
                    floor++;
                }
            } else {
                console.log("Highest floor !")
            }
            return this;
        },
        down() {
            if (floor === "Hole") {
                console.log("Lowest floor");
                return this;
            }

            if (floor === 1) {
                floor = "Hole";
            } else {
                floor--;
            }

            return this;
        }
    };
}

const ladder = createLadder();
console.log(ladder.getFlor()); //hole
ladder.up().up().up().up();
console.log(ladder.getFlor()); //4

ladder.down().down();
console.log(ladder.getFlor()); //2
ladder.down().down().down();
console.log(ladder.getFlor()); //hole



