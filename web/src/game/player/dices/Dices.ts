import { Dice } from "./dice";

export function Standard(): Dice {
    return {
        name: "Standardwaffe",
        story: "Eine faire, ausgewogene Waffe die jeder Ritter haben sollte",
        sides: [
            { value: 3 },
            { value: 3 },
            { value: 3 },
            { value: 4 },
            { value: 5 },
            { value: 6 },
        ]
    }
}

export function MightyBlowOfBetrayal(): Dice {
    return {
        name: "Mächtiger Schlag des Betrugs",
        story: "Eine Waffe, die bis zu 12 Schaden verursachen kann, doch auch eine hohe Wahrscheinlichkeit hat gar keinen Schaden zu verursachen, oder sogar den Ritter selbst zu verletzen!",
        sides: [
            { value: -3 },
            { value: 0 },
            { value: 0 },
            { value: 6 },
            { value: 12 },
        ]
    }
}