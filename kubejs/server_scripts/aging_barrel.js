ServerEvents.recipes(event => {
    event.recipes.gtceu.aging_barrel("aged_mozzarella")
        .itemInputs(
            "1x gtceu:mozzarella_cheese_ingot"
        )
        .itemOutputs(
            "1x gtceu:aged_mozzarella_cheese_ingot"
        )
        .duration(24000)
})
