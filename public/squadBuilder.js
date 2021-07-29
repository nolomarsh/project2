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
    let combos = []

    const rSquad = (combo = [],playerIndex = 0, pokemonIndex = 0) => {
        if (combo.length >= playerArr.length ||) {
            combos.push(combo)
        } else {

        }
        combos.push(combo)
    }

    rSquad()

    return combos
}

// console.log(testPlayers[0].favePokemon);
console.log(calcSquads(testPlayers));
