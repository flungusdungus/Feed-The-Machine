ServerEvents.recipes(event => {
    const mortar = [
        ["gtceu:small_ground_wild_herbs_dust", "minecraft:grass"]
    ]
    mortar.forEach(recipe => {
    event.shaped(
        Item.of(recipe[1], 1),
        [
            " A ",
            " B ",
            "   "
        ],
        {
            A: "#gtceu:tools/crafting_mortars",
            B: recipe[0],
        }
    ).damageIngredient("#gtceu:tools/crafting_mortars")
})
    event.shaped(
        Item.of('kubejs:glow_berry_juice_bottle', 1),
        [
            " A ",
            " B ",
            " C "
        ],
        {
            A: "#gtceu:tools/crafting_mortars",
            B: "quark:glowberry_sack",
            C: "minecraft:glass_bottle",
        }
    ).damageIngredient("#gtceu:tools/crafting_mortars")
})