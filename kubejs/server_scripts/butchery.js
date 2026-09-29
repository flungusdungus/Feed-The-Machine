ServerEvents.recipes(event => {
    //basic meat slicing/dicing
    const meats = [["raw_ham", 200]]
    meats.forEach(recipe => {
        event.shaped(
            Item.of("gtceu:" + recipe[0] + "_plate", 1),
            [
                " A ",
                " B ",
                " B "
            ],
            {
                A: "#gtceu:tools/crafting_knives",
                B: "gtceu:" + recipe[0] + "_ingot",
            }
        ).damageIngredient("#gtceu:tools/crafting_knives")
        event.shaped(
            Item.of("gtceu:double_" + recipe[0] + "_plate", 1),
            [
                " A ",
                " B ",
                " B "
            ],
            {
                A: "#gtceu:tools/crafting_knives",
                B: "gtceu:" + recipe[0] + "_plate"
            }
        ).damageIngredient("#gtceu:tools/crafting_knives")

        event.recipes.gtceu.butchery("sliced_" + recipe[0])
            .itemInputs("1x gtceu:" + recipe[0] + "_ingot")
            .itemOutputs("1x gtceu:" + recipe[0] + "_plate")
            .duration(recipe[1])
            .EUt(30)
            .circuit(1)
        event.recipes.gtceu.butchery("diced_" + recipe[0] + "_1")
            .itemInputs("2x gtceu:" + recipe[0] + "_ingot")
            .itemOutputs("gtceu:double_" + recipe[0] + "_plate")
            .duration(recipe[1] * 4)
            .EUt(30)
            .circuit(2)
        event.recipes.gtceu.butchery("diced_" + recipe[0] + "_2")
            .itemInputs("2x gtceu:" + recipe[0] + "_plate")
            .itemOutputs("gtceu:double_" + recipe[0] + "_plate")
            .duration(recipe[1])
            .EUt(16)
            .circuit(1)
    })
    //vanilla meats RUHHH
    const vmeats = [["raw_pork", 200, "porkchop"]]
    vmeats.forEach(recipe => {
        event.shaped(
            Item.of("gtceu:" + recipe[0] + "_plate", 1),
            [
                " A ",
                " B ",
                " B "
            ],
            {
                A: "#gtceu:tools/crafting_knives",
                B: "minecraft:"+recipe[2],
            }
        ).damageIngredient("#gtceu:tools/crafting_knives")
        event.shaped(
            Item.of("gtceu:double_" + recipe[0] + "_plate", 1),
            [
                " A ",
                " B ",
                " B "
            ],
            {
                A: "#gtceu:tools/crafting_knives",
                B: "gtceu:" + recipe[0] + "_plate"
            }
        ).damageIngredient("#gtceu:tools/crafting_knives")

        event.recipes.gtceu.butchery("sliced_" + recipe[0])
            .itemInputs("minecraft:" + recipe[2])
            .itemOutputs("1x gtceu:" + recipe[0] + "_plate")
            .duration(recipe[1])
            .EUt(30)
            .circuit(1)
        event.recipes.gtceu.butchery("diced_" + recipe[0] + "_1")
            .itemInputs("2x minecraft:" + recipe[2])
            .itemOutputs("gtceu:double_" + recipe[0] + "_plate")
            .duration(recipe[1] * 4)
            .EUt(30)
            .circuit(2)
        event.recipes.gtceu.butchery("diced_" + recipe[0] + "_2")
            .itemInputs("2x gtceu:" + recipe[0] + "_plate")
            .itemOutputs("gtceu:double_" + recipe[0] + "_plate")
            .duration(recipe[1])
            .EUt(16)
            .circuit(1)
    })
})