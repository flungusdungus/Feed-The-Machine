ServerEvents.recipes(event => {
    event.recipes.create.sandpaper_polishing("gtceu:hardtack_rod", "gtceu:hardtack_ingot")
    event.recipes.create.sandpaper_polishing("gtceu:fine_hardtack_wire", "gtceu:hardtack_rod")
    event.recipes.create.sandpaper_polishing("gtceu:diamond_rod", "minecraft:diamond")
    event.recipes.create.sandpaper_polishing("gtceu:fine_diamond_wire", "gtceu:diamond_rod")
    event.recipes.create.sandpaper_polishing("gtceu:iron_rod", "minecraft:iron_ingot")
    event.recipes.create.sandpaper_polishing("gtceu:fine_iron_wire", "gtceu:iron_rod")
    const gtceu_masticate = ["hardtack"]
    gtceu_masticate.forEach(material => {
        event.recipes.gtceu.masticator()
            .itemInputs(
                "1x gtceu:" + material + "_ingot"
            )
            .itemOutputs(
                "1x gtceu:" + material + "_rod"
            )
            .duration(100)
            .EUt(30)

        event.recipes.gtceu.masticator()
            .itemInputs(
                "1x gtceu:" + material + "_rod"
            )
            .itemOutputs(
                "1x gtceu:fine_" + material + "_wire"
            )
            .duration(100)
            .EUt(30)
    })
    const vanilla_ingot_masticate = ["iron"]
    vanilla_ingot_masticate.forEach(material => {
        event.recipes.gtceu.masticator()
            .itemInputs(
                "1x minecraft:" + material + "_ingot"
            )
            .itemOutputs(
                "1x gtceu:" + material + "_rod"
            )
            .duration(100)
            .EUt(30)

        event.recipes.gtceu.masticator()
            .itemInputs(
                "1x gtceu:" + material + "_rod"
            )
            .itemOutputs(
                "1x gtceu:fine_" + material + "_wire"
            )
            .duration(100)
            .EUt(30)
    })
    const vanilla_masticate = ["diamond"]
    vanilla_masticate.forEach(material => {
        event.recipes.gtceu.masticator()
            .itemInputs(
                "1x minecraft:" + material
            )
            .itemOutputs(
                "1x gtceu:" + material + "_rod"
            )
            .duration(100)
            .EUt(30)

        event.recipes.gtceu.masticator()
            .itemInputs(
                "1x gtceu:" + material + "_rod"
            )
            .itemOutputs(
                "1x gtceu:fine_" + material + "_wire"
            )
            .duration(100)
            .EUt(30)
    })
})