import { text, texts } from "../../../internationalization";
import { Dice } from "./dice";

type TranslationElement = {
    default: string,
    de: string,
    en: string,
    [key: string]: string
}
type DiceStory = {
    name: TranslationElement,
    story: TranslationElement,
}

function getTexts(key: DiceStory): {name: string, story: string} {
    return {
        name: text(key.name),
        story: text(key.story),
    }
}

export function Standard(): Dice {
    return {
        ...getTexts(texts.assets.dices.standard),
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
        ...getTexts(texts.assets.dices.mightyBlowOfBetrayal),
        sides: [
            { value: -3 },
            { value: 0 },
            { value: 0 },
            { value: 6 },
            { value: 12 },
        ]
    }
}

export function SmallCastleDefence(): Dice {
    return {
        ...getTexts(texts.assets.dices.smallCastleDefence),
        sides: [
            { value: 12 },
            { value: 12 },
            { value: 16 },
            { value: 16 },
            { value: 21 },
        ]
    }

}