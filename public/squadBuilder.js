let testPlayers = [
    {
        name: "Nolo",
        favePokemon: [
            {
                name: "eldegoss",
                role: "supporter"
            },
            {
                name: "gengar",
                role: "speedster",
            },
            {
                name: "crustle",
                role: "defender"
            }
        ]
    },
    {
        name: "Charlie",
        favePokemon: [
            {
                name: "snorlax",
                role: "defender"
            },
            {
                name: "alolan ninetails",
                role: "attacker"
            },
            {
                name: "slowbro",
                role: "defender"
            }
        ]
    },
    {
        name: "Joe",
        favePokemon: [
            {
                name: "mr. mime",
                role: "supporter"
            },
            {
                name: "absol",
                role: "speedster"
            },
        ]
    },
    {
        name: "Lily",
        favePokemon: [
            {
                name: "gardevoir",
                role: "attacker"
            },
            {
                name: "charizard",
                role: "all-rounder"
            },
            {
                name: "lucario",
                role: "all-rounder"
            }
        ]
    },
    {
        name: "Garrett",
        favePokemon: [
            {
                name: 'garchomp',
                role: "all-rounder"
            },
            {
                name: 'greninja',
                role: 'attacker',
            },
            {
                name: 'wigglytuff',
                role: 'supporter'
            }
        ]
    }
]

const calcSquads = (playerArr) => {
    // const rSquad = (combos = [], combo = [], index = 0) => {
    //     let inCombo = combo
    //     if (combo.length >= 0) {
    //         for (let pokemon of playerArr[index].favePokemon) {
    //             combo.push(pokemon.name)
    //             // console.log(pokemon.name);
    //             // console.log(combo);
    //             combos.push(combo)
    //
    //             combo=inCombo
    //         }
    //     } else {
    //         for (let pokemon of playerArr[index].favePokemon) {
    //             combo.push(pokemon.name)
    //             combos.push(combo)
    //             rSquad(combos, combo, index+1)
    //             combo.pop()
    //         }
    //     }
    //     return combos
    // }

    let outerArray = []

    for (let player of playerArr) {
        let innerArray = []
        for (let pokemon of player.favePokemon) {
            innerArray.push(pokemon.name)
        }
        outerArray.push(innerArray)
    }

    let combos = []

    const rSquad = (combo = [], index = 0, addMon) => {
        if (!addMon) {
            for (let pokemon of outerArray[index]) {
                rSquad(combo,index+1,pokemon)
            }
        } else {
            if (combo.length >= 4) {
                combo.push(addMon)
                combos.push(combo)
            } else {
                combo.push(addMon)
                for (let pokemon of outerArray[index]) {
                    rSquad(combo, index+1,pokemon)
                }
            }
        }
    }

    rSquad()

    return combos
}

// console.log(testPlayers[0].favePokemon);
console.log(calcSquads(testPlayers));
