import { defineHormone, defineSingleHormone } from "organismus";
import { Asset } from ".";
import { Dice } from "../player/dices/dice";
import { FigherAsset, MoveableAsset, Player, ResourceGeneratingBuilding, Resources, SimpleCoords, Team } from "./types";

export type Abort = boolean
export const Abort = defineSingleHormone<Abort>("action/abort")

export type PlayerUpdate = Player
export const PlayerUpdate = defineHormone<PlayerUpdate>("player/update")

export type RequestSelectCoords = SimpleCoords & {
    item: string,
    payload?: Asset
};
export const RequestSelectCoords = defineSingleHormone<RequestSelectCoords>("player/request/select")

export type SelectedItem<T> = SimpleCoords & {
    item: string,
    payload?: T
}
export const ItemSelected = defineHormone<SelectedItem<unknown>>("player/buildings/item/selected")

export type ItemMovedAsset = {
    asset: MoveableAsset
    location: SimpleCoords
}
export const ItemMoved = defineHormone<ItemMovedAsset>("player/item/moved")
export const KnightCreated = defineHormone<SimpleCoords & {
    team: Team
}>("player/knights/created")
export const WagonCreated = defineHormone<SimpleCoords & {
    team: Team
}>("player/wagon/created")

export const UpdateAllPlayerElements = defineHormone<Asset[]>("player/assets/loaded")


export type CheckPlayerHasActionsLeft = {}
export const CheckPlayerHasActionsLeft = defineHormone<CheckPlayerHasActionsLeft>("turn/player/actions/hasLeft")
export type PlayerNoActionsLeft = boolean
export const PlayerNoActionsLeft = defineSingleHormone<PlayerNoActionsLeft>("turn/player/actions/none")

export type HexagonUpdatedPayload = SimpleCoords & {
    elements: Asset[]
}
export const HexagonUpdated = defineSingleHormone<HexagonUpdatedPayload>("map/hexagon/updated", { readOnce: true })

export type MoveModeData = {
    asset: MoveableAsset
    start: SimpleCoords
    inReach?: SimpleCoords[]
    trail?: SimpleCoords[]
    end?: SimpleCoords
}
export const MoveModeActivate = defineHormone<MoveModeData>("modes/move/activate")
export const MoveModeActivated = defineHormone<MoveModeData>("modes/move/activated")
export const MoveModeDeactivate = defineHormone("modes/move/deactivate")
export type MoveModeHovered = SimpleCoords
export const MoveModeTargetHovered = defineHormone<MoveModeHovered>("modes/move/hovered-target")
export type MoveModeEndElement = SimpleCoords
export const MoveModeEnd = defineHormone<MoveModeEndElement>("modes/move/end")

export type BuildWithWagon = {
    asset: Asset | ResourceGeneratingBuilding
    position: SimpleCoords
}
export type BuildFailed = {
    asset: Asset | ResourceGeneratingBuilding
    position: SimpleCoords
    reason: string
}
export const BuildLumberjackSmall = defineHormone<BuildWithWagon>("modes/build/lumberjack-small");
export const BuildLumberjackSmallSuccess = defineHormone<BuildWithWagon>("modes/build/lumberjack-small/success");
export const BuildLumberjackSmallFailed = defineHormone<BuildFailed>("modes/build/lumberjack-small/failed");
export const BuildMineSmall = defineHormone<BuildWithWagon>("modes/build/mine-small");
export const BuildMineSmallSuccess = defineHormone<BuildWithWagon>("modes/build/mine-small/success");
export const BuildMineSmallFailed = defineHormone<BuildFailed>("modes/build/mine-small/failed");

export type BattleModeData = {
    asset: MoveableAsset
    start: SimpleCoords
    range?: SimpleCoords[]
    end?: SimpleCoords
}
export const BattleModeActivate = defineHormone<BattleModeData>("modes/battle/activate")
export const BattleModeActive = defineHormone<BattleModeData>("modes/battle/active")
export type BattleModeEndElement = SimpleCoords
export const BattleModeEnd = defineHormone<BattleModeEndElement>("modes/battle/end")
export const BattleModeDeactivate = defineHormone<BattleModeData>("modes/battle/deactivate")

export type BattleStarted = {
    location: SimpleCoords
    attacker: FigherAsset[]
    defender: FigherAsset[]
}
export const BattleStarted = defineHormone<BattleStarted>("battle/started")

type FigherInBattle = {
    asset: FigherAsset,
    dices: Dice[]
}
export type BattleThrowDices = {
    location: SimpleCoords
    attacker: FigherInBattle
    defender: FigherAsset
}
export const BattleThrowDice = defineHormone<BattleThrowDices>("battle/dice/thrown")
export type BattlePlayerAttacked = {
    location: SimpleCoords
    damage: number
    attacker: FigherAsset
    defender: FigherAsset
}
export const BattlePlayerAttacked = defineHormone<BattlePlayerAttacked>("battle/player/attacked")

export type AssetTaken = {
    asset: Asset
    transfered: {
        from?: Team,
        to: Team
    }
    by: FigherAsset
    location: SimpleCoords
    team: Team
}
export const MillTakeover = defineHormone<AssetTaken>("mill/takeover")
export const LumberjackTakeover = defineHormone<AssetTaken>("lumberjack/takeover")
export const MineTakeover = defineHormone<AssetTaken>("mine/takeover")

export type ModalBattleOpen = BattleStarted
export const ModalBattleOpen = defineHormone<ModalBattleOpen>("modal/battle/open")

export type ModalDiceResultOpen = BattleStarted & {
    defender_after: FigherAsset[]
    attacker_after: FigherAsset[]
    result: number
}
export const ModalDiceResultOpen = defineHormone<ModalDiceResultOpen>("modal/dice-result/open")

export type TurnStarted = {}
export const TurnStarted = defineHormone<TurnStarted>("turn/world/started")

export type TurnAccepted = Team
export const TurnAccepted = defineHormone<TurnAccepted>("turn/world/accepted")

export type TurnPlayerComplete = {}
export const TurnPlayerComplete = defineHormone<TurnPlayerComplete>("turn/player/complete")

export type TurnsComplete = {}
export const TurnsComplete = defineHormone<TurnsComplete>("turn/world/complete")

export type ResourcesGenerated = ResourceGeneratingBuilding
export const ResourcesGenerated = defineHormone<ResourcesGenerated>("resources/generated")

export type ResourceGenerationComplete = { 
    team: Team 
    before: Resources,
    after: Resources
}
export const ResourceGenerationComplete = defineHormone<ResourceGenerationComplete>("resources/generation/complete");

export type ResourceSummary = any;
export const ResourceSummary = defineHormone<ResourceSummary>("resources/summary");

export type DistributeResources = {
    team: Team,
    resourcesToGenerate: ResourceGeneratingBuilding[]
}
export const DistributeResources = defineHormone<DistributeResources>("resources/distribute")
export const RequestUpdatedResources = defineHormone<{ team: Team }>("resources/distribute/request")
export const UpdatedResources = defineHormone<DistributeResources>("resources/distribute/updated")