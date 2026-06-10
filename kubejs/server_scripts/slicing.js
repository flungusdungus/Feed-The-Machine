ServerEvents.recipes(event => {
    // GTCEU mat veggie slicing
    const veggies = []
    veggies.forEach(veg => {
        event.shaped(
            Item.of("gtceu:" + veg + "_plate", 1),
            [
                " A ",
                " B ",
                " B "
            ],
            {
                A: "#gtceu:tools/crafting_knives",
                B: "gtceu:" + veg + "_ingot",
            }
        ).damageIngredient("#gtceu:tools/crafting_knives")
        
        event.recipes.gtceu.slicer("sliced_" + veg)
            .itemInputs(
                "1x gtceu:" + veg + "_ingot"
            )
            .itemOutputs(
                "1x gtceu:" + veg + "_plate"
            )
            .duration(100)
            .EUt(30)
            .circuit(1)
    })
    //GTCEU mat bread slicing
    const bread = []
    bread.forEach(loaf => {
        event.shaped(
            Item.of("gtceu:" + loaf + "_plate", 6),
            [
                " A ",
                " B ",
                " B "
            ],
            {
                A: "#gtceu:tools/crafting_knives",
                B: "gtceu:" + loaf + "_ingot",
            }
        ).damageIngredient("#gtceu:tools/crafting_knives")

        event.recipes.gtceu.slicer("sliced_" + loaf)
            .itemInputs(
                "1x gtceu:" + loaf + "_ingot"
            )
            .itemOutputs(
                "6x gtceu:" + loaf + "_plate"
            )
            .duration(100)
            .EUt(30)
            .circuit(1)
    })
    //vanilla bread slicing
        event.shaped(
            Item.of("gtceu:bread_plate", 6),
            [
                " A ",
                " B ",
                " B "
            ],
            {
                A: "#gtceu:tools/crafting_knives",
                B: "minecraft:bread",
            }
        ).damageIngredient("#gtceu:tools/crafting_knives")
    event.recipes.gtceu.slicer("sliced_bread")
        .itemInputs(
            "1x minecraft:bread"
        )
        .itemOutputs(
            "6x gtceu:bread_plate"
        )
        .duration(100)
        .EUt(30)
        .circuit(1)
})