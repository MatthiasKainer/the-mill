import {texts} from "./texts"

type Text = {
    default: string;
    de: string;
    en: string;
    [key: string]: any;
};

export function getLang() {
    return document.documentElement.lang || "en";
}

export type Language = "de" | "en";

export function setLanguage(language: Language) {
    document.documentElement.lang = language;
}

function selectElementInObjectByArray(object: {[key: string]: any}, array: string[]): Text | undefined {
    if (array.length === 0) {
        return object as Text;
    } else if (object[array[0]] === undefined) {
        return undefined;
    } else {
        return selectElementInObjectByArray(object[array[0]], array.slice(1));
    }
}

export function getText(key: string[], ...args: string[]): string {
    const text = selectElementInObjectByArray(texts, key)?.[getLang()] as string;
    if (!text) {
        return key.join(".");
    }
    return text.replace(/\$\{(\d+)\}/g, (_, index) => args[index]);
}

export function text(key: Text, ...args: any[]): string {
    const text = key[getLang()] as string;
    if (!text) {
        return key.default;
    }
    return text.replace(/\$\{(\d+)\}/g, (_, index) => args[index] as string);
}

export {texts}