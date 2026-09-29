BlockEvents.rightClicked('minecraft:sweet_berry_bush', e => {
    if (e.block.properties.get("age") != 3) {
        return // Return to prevent running rest of the code
    }
    if (Math.floor(Math.random() * 100) == 1)
    e.block.popItemFromFace(Item.of("gtceu:flawless_sweet_berries_gem", 1), "up")
})

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:pig")
        .randomChance(0.3)
        .addLoot("gtceu:raw_ham_ingot")
})