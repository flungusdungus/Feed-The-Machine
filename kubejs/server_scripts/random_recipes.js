ServerEvents.recipes(event => {
    event.smelting("gtceu:crudely_pasteurized_milk_bucket", "minecraft:milk_bucket")
    event.shapeless(
        Item.of('kubejs:cheese_prep', 1),
        [
            "#gtceu:tools/crafting_screwdrivers",
            "kubejs:glow_berry_juice_bottle",
            "gtceu:crudely_pasteurized_milk_bucket",
            "gtceu:salt_dust"
        ]
    ).damageIngredient("#gtceu:tools/crafting_screwdrivers")
    event.campfireCooking('kubejs:cheese_prep', "2x gtceu:mozzarella_cheese_ingot", 0, 300)
    event.recipes.gtceu.extractor("glow_berry_juice")
        .itemInputs("minecraft:glow_berries")
        .itemOutputs("kubejs:pulp")
        .outputFluids("gtceu:glow_berry_juice 10")
        .duration(30)
        .EUt(10)
    event.recipes.gtceu.stovetop("mozzarella_cheese")
        .inputFluids("gtceu:glow_berry_juice 30","gtceu:milk 1000")
        .itemInputs("gtceu:salt_dust")
        .itemOutputs("3x gtceu:mozzarella_cheese_ingot")
        .duration(200)
        .EUt(30)
    event.recipes.gtceu.fluid_heater("pasteurized_milk")
})