ServerEvents.recipes(event => {
    event.shaped(
        Item.of("kubejs:raw_rotisserie_chicken", 1),
        [
            " AD",
            " B ",
            "DC "
        ],
        {
            A: "gtceu:salt_dust",
            B: "minecraft:chicken",
            C: "gtceu:ground_wild_herbs_dust",
            D: "gtceu:iron_rod"
        }
    )
    event.recipes.gtceu.assembler("raw_rotisserie_chicken")
        .itemInputs("minecraft:chicken", "gtceu:salt_dust", "gtceu:ground_wild_herbs_dust", "2x gtceu:iron_rod")
        .itemOutputs("kubejs:raw_rotisserie_chicken")
        .duration(100)
        .EUt(30)
    event.campfireCooking("gtceu:lv_electric_motor", "kubejs:raw_rotisserie_chicken", 0, 200)
    event.recipes.gtceu.arc_furnace("rotisserie_chicken")
        .itemInputs("kubejs:raw_rotisserie_chicken")
        .inputFluids("gtceu:oxygen 20")
        .itemOutputs("gtceu:lv_electric_motor")
        .duration(80)
        .EUt(30)
    event.recipes.gtceu.stovetop("rabbit_stew")
        .itemInputs("gtceu:double_potato_plate", "gtceu:carrot_plate", "gtceu:brown_mushroom_plate", "minecraft:rabbit", "minecraft:bowl", "gtceu:lv_electric_motor")
        .inputFluids("minecraft:water 1000")
        .itemOutputs("minecraft:rabbit_stew")
        .duration(400)
        .EUt(30)
    event.shaped(
        Item.of("kubejs:loaded_baked_potato", 1),
        [
            "CBD",
            "EFE",
            " A "
        ],
        {
            A: "minecraft:baked_potato",
            B: "gtceu:double_cooked_pork_plate",
            C: "gtceu:ground_wild_herbs_dust",
            D: "gtceu:salt_dust",
            E: "gtceu:lv_electric_motor",
            F: "gtceu:fine_mozzarella_cheese_wire"
        }
        )
    event.recipes.gtceu.assembler("loaded_baked_potato")
        .itemInputs("minecraft:baked_potato", "gtceu:double_cooked_pork_plate", "gtceu:ground_wild_herbs_dust", "gtceu:salt_dust", "2x gtceu:lv_electric_motor", "gtceu:fine_mozzarella_cheese_wire")
        .itemOutputs("kubejs:loaded_baked_potato")
        .duration(100)
        .EUt(30)
})