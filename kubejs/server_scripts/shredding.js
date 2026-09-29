ServerEvents.recipes(event => {
    // Cheese!
    const cheese = [
        ["mozzarella_cheese", 100],
        ["aged_mozzarella_cheese", 100]
    ]
    cheese.forEach(recipe => {
        event.shaped(
            Item.of("gtceu:" + recipe[0] + "_single_wire", 1),
            [
                "   ",
                " BA",
                "   "
            ],
            {
                A: "#gtceu:tools/crafting_wire_cutters",
                B: "gtceu:" + recipe[0] + "_ingot",
            }
        ).damageIngredient("#gtceu:tools/crafting_wire_cutters")

        event.recipes.gtceu.cheese_shredder(recipe[0] + "single_wire")
            .itemInputs("1x gtceu:" + recipe[0] + "_ingot")
            .itemOutputs("2x gtceu:" + recipe[0] + "_single_wire")
            .duration(recipe[1])
            .EUt(10)
            .circuit(1)

        event.recipes.gtceu.cheese_shredder(recipe[0] + "double_wire")
            .itemInputs("1x gtceu:" + recipe[0] + "_ingot")
            .itemOutputs("1x gtceu:" + recipe[0] + "_double_wire")
            .duration(recipe[1])
            .EUt(10)
            .circuit(2)

        event.recipes.gtceu.cheese_shredder(recipe[0] + "quadruple_wire")
            .itemInputs("2x gtceu:" + recipe[0] + "_ingot")
            .itemOutputs("1x gtceu:" + recipe[0] + "_quadruple_wire")
            .duration(recipe[1] * 2)
            .EUt(10)
            .circuit(4)

        event.recipes.gtceu.cheese_shredder(recipe[0] + "octal_wire")
            .itemInputs("4x gtceu:" + recipe[0] + "_ingot")
            .itemOutputs("1x gtceu:" + recipe[0] + "_octal_wire")
            .duration(recipe[1] * 4)
            .EUt(10)
            .circuit(8)

        event.recipes.gtceu.cheese_shredder(recipe[0] + "hex_wire")
            .itemInputs("8x gtceu:" + recipe[0] + "_ingot")
            .itemOutputs("1x gtceu:" + recipe[0] + "_hex_wire")
            .duration(recipe[1] * 8)
            .EUt(10)
            .circuit(16)

        event.recipes.gtceu.cheese_shredder("fine_" + recipe[0] + "_wire")
            .itemInputs("1x gtceu:" + recipe[0] + "_ingot")
            .itemOutputs("8x gtceu:fine_" + recipe[0] + "_wire")
            .duration(recipe[1] * 3)
            .EUt(7)
            .circuit(3)
    })
})