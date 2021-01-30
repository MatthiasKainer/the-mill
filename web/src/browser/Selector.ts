import { Asset } from "../game";

export function deepQuerySelector(element: Asset | undefined) {
    if (!element) return undefined;
    const hexagons = [...(document?.querySelector("the-mill")?.shadowRoot?.
        querySelector("world-map")?.shadowRoot?.
        querySelectorAll("hexagon-element")
        ?? [])
    ]
    return hexagons.find(hexagon =>
        hexagon.shadowRoot?.querySelector("sprite-set")?.querySelector(`[id="${element.id}"]`));
}

(document as any).deepQuerySelector = deepQuerySelector;