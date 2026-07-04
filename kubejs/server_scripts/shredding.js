ServerEvents.recipes(event => {
    // Cheese!
    const cheeses = ["mozzarella_cheese", "aged_mozzarella_cheese"]
    cheeses.forEach(cheese => {
        event.shaped(
            Item.of("gtceu:" + cheese + "_single_wire", 1),
            [
                "   ",
                " BA",
                "   "
            ],
            {
                A: "#gtceu:tools/crafting_wire_cutters",
                B: "gtceu:" + cheese + "_ingot",
            }
        ).damageIngredient("#gtceu:tools/crafting_wire_cutters")

        event.recipes.gtceu.cheese_shredder(cheese + "single_wire")
            .itemInputs(
                "1x gtceu:" + cheese + "_ingot"
            )
            .itemOutputs(
                "2x gtceu:" + cheese + "_single_wire"
            )
            .duration(100)
            .EUt(30)
            .circuit(1)

        event.recipes.gtceu.cheese_shredder(cheese + "double_wire")
            .itemInputs(
                "1x gtceu:" + cheese + "_ingot"
            )
            .itemOutputs(
                "1x gtceu:" + cheese + "_double_wire"
            )
            .duration(200)
            .EUt(30)
            .circuit(2)

        event.recipes.gtceu.cheese_shredder(cheese + "quadruple_wire")
            .itemInputs(
                "2x gtceu:" + cheese + "_ingot"
            )
            .itemOutputs(
                "1x gtceu:" + cheese + "_quadruple_wire"
            )
            .duration(400)
            .EUt(30)
            .circuit(4)

        event.recipes.gtceu.cheese_shredder(cheese + "octal_wire")
            .itemInputs(
                "4x gtceu:" + cheese + "_ingot"
            )
            .itemOutputs(
                "1x gtceu:" + cheese + "_octal_wire"
            )
            .duration(800)
            .EUt(30)
            .circuit(8)

        event.recipes.gtceu.cheese_shredder(cheese + "hex_wire")
            .itemInputs(
                "8x gtceu:" + cheese + "_ingot"
            )
            .itemOutputs(
                "1x gtceu:" + cheese + "_hex_wire"
            )
            .duration(1600)
            .EUt(30)
            .circuit(16)

        event.recipes.gtceu.cheese_shredder("fine_" + cheese + "_wire")
            .itemInputs(
                "1x gtceu:" + cheese + "_ingot"
            )
            .itemOutputs(
                "8x gtceu:fine_"+ cheese + "_wire"
            )
            .duration(150)
            .EUt(30)
            .circuit(3)
        })
})