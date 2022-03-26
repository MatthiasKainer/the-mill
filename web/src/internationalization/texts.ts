

export const texts = {
    resources: {
        stone: {
            default: "resources.stone",
            de: "Stein",
            en: "Stone",
        },
        log: {
            default: "resources.log",
            de: "Holz",
            en: "Wood",
        },
        grain: {
            default: "resources.grain",
            de: "Mehl",
            en: "Flour",
        },
        hay: {
            default: "resources.hay",
            de: "Getreide",
            en: "Hay",
        },
        iron: {
            default: "resources.iron",
            de: "Eisen",
            en: "Iron",
        },
    },
    assets: {
        wagon: {
            default: "assets.wagon",
            de: "Wagen",
            en: "Wagon"
        },
        knight: {
            default: "assets.knight",
            de: "Ritter",
            en: "Knight",
        },
        castle: {
            build: {
                default: "assets.castle.build",
                de: "Bauen",
                en: "Build",
            }
        },
        dices: {
            standard: {
                name: {
                    default: "assets.dices.standard.name",
                    de: "Standardwaffe",
                    en: "Standardweapon",
                },
                story: {
                    default: "assets.dices.standard.story",
                    de: "Eine faire, ausgewogene Waffe die jeder Ritter haben sollte",
                    en: "A fair, well-balanced weapon that every knight should have",
                }
            },
            mightyBlowOfBetrayal: {
                name: {
                    default: "assets.dices.mightyBlowOfBetrayal.name",
                    de: "Mächtiger Schlag des Betrugs",
                    en: "Mighty blow of betrayal",
                },
                story: {
                    default: "assets.dices.mightyBlowOfBetrayal.story",
                    de: "Eine Waffe, die bis zu 12 Schaden verursachen kann, doch auch eine hohe Wahrscheinlichkeit hat gar keinen Schaden zu verursachen, oder sogar den Ritter selbst zu verletzen!",
                    en: "A weapon that can inflict up to 12 damage, but also has a high chance of inflicting no damage, or even injuring the knight himself",
                }
            },
            smallCastleDefence: {
                name: {
                    default: "assets.dices.smallCastleDefence.name",
                    de: "Verteidigungswaffen der kleinen Burg",
                    en: "Defensive weapons of the small castle",
                },
                story: {
                    default: "assets.dices.smallCastleDefence.story",
                    de: "Schon die kleine Burg hat mächtige Verteidigungswaffen, die viele Angriffe abwehren kann. Nur eine mächtige Armee wird es schaffen, diese Verteidigung zu überwinden.",
                    en: "The small castle has mighty defensive weapons so that many attacks can be thwarted. Only a mighty army can defeat it.",
                }
            }
        },
        properties: {
            life: {
                default: "assets.properties.life",
                de: "<strong>Leben</strong> ${0} von ${1}",
                en: "<strong>Life</strong> ${0} of ${1}",
            },
            actions: {
                default: "assets.properties.actions",
                de: "<strong>Aktionen</strong> ${0} von ${1}",
                en: "<strong>Actions</strong> ${0} of ${1}",
                move: {
                    default: "assets.properties.actions.move",
                    de: "Bewegen",
                    en: "Move",
                },
                attack: {
                    default: "assets.properties.actions.attack",
                    de: "Angreifen",
                    en: "Attack",
                },
                fortify: {
                    default: "assets.properties.actions.fortify",
                    de: "Verteidigen",
                    en: "Fortify",
                },
                load: {
                    default: "assets.properties.actions.load",
                    de: "Laden/Entladen",
                    en: "Load/Unload",
                },
                build: {
                    knight: {
                        default: "assets.properties.actions.build.knight",
                        de: "Ritter bauen",
                        en: "Build knight",
                    },
                    wagon: {
                        default: "assets.properties.actions.build.wagon",
                        de: "Wagen bauen",
                        en: "Build wagon",
                    },
                    iron: {
                        default: "assets.properties.actions.build.iron",
                        de: "Eisen bauen",
                        en: "Build iron",
                    },
                    castle_medium: {
                        default: "assets.properties.actions.build.castle_medium",
                        de: "Mittlere Burg bauen",
                        en: "Build medium castle",
                    },
                    castle_large: {
                        default: "assets.properties.actions.build.castle_large",
                        de: "Große Burg bauen",
                        en: "Build large castle",
                    },
                    lumberjack_small: {
                        default: "assets.properties.actions.build.lumberjack_small",
                        de: "Baue einen Holzfäller (klein)",
                        en: "Build Lumberjack (small)",
                    },
                    mine_small: {
                        default: "assets.properties.actions.build.mine_small",
                        de: "Baue eine Mine (klein)",
                        en: "Build Mine (small)",
                    }
                }
            }
        }
    }
}