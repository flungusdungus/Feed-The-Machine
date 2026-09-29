ServerEvents.recipes(event => {
    // GTCEU mat veggie slicing
    const veggies = [
        ["mozzarella_cheese", 40],
        ["aged_mozzarella_cheese", 50]
    ]
    veggies.forEach(recipe => {
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
        
        event.recipes.gtceu.slicer("sliced_" + recipe[0])
            .itemInputs("1x gtceu:" + recipe[0] + "_ingot")
            .itemOutputs("1x gtceu:" + recipe[0] + "_plate")
            .duration(recipe[1])
            .EUt(30)
            .circuit(1)
        event.recipes.gtceu.slicer("diced_" + recipe[0] +"_1")
            .itemInputs("2x gtceu:" + recipe[0] + "_plate")
            .itemOutputs("gtceu:double_" + recipe[0] + "_plate")
            .duration(recipe[1]*4)
            .EUt(30)
            .circuit(2)
        event.recipes.gtceu.slicer("diced_" + recipe[0] +"_2")
            .itemInputs("2x gtceu:" + recipe[0]+"_plate")
            .itemOutputs("gtceu:double_" + recipe[0] + "_plate")
            .duration(recipe[1])
            .EUt(16)
            .circuit(1)
    })
    // Vanilla veggie slicing
    const vveggies = [
        ["potato", 50],
        ["carrot", 60],
        ["brown_mushroom", 60],
    ]
    vveggies.forEach(recipe => {
        event.shaped(
            Item.of("gtceu:" + recipe[0] + "_plate", 1),
            [
                " A ",
                " B ",
                " B "
            ],
            {
                A: "#gtceu:tools/crafting_knives",
                B: "minecraft:" + recipe[0]
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

        event.recipes.gtceu.slicer("sliced_" + recipe[0])
            .itemInputs("1x minecraft:" + recipe[0])
            .itemOutputs("gtceu:" + recipe[0] + "_plate")
            .duration(recipe[1])
            .EUt(30)
            .circuit(1)
        event.recipes.gtceu.slicer("diced_" + recipe[0] +"_1")
            .itemInputs("2x minecraft:" + recipe[0])
            .itemOutputs("gtceu:double_" + recipe[0] + "_plate")
            .duration(recipe[1]*4)
            .EUt(30)
            .circuit(2)
        event.recipes.gtceu.slicer("diced_" + recipe[0] +"_2")
            .itemInputs("2x gtceu:" + recipe[0]+"_plate")
            .itemOutputs("gtceu:double_" + recipe[0] + "_plate")
            .duration(recipe[1])
            .EUt(16)
            .circuit(1)
    })
    //GTCEU mat bread slicing
    const bread = [

    ]
    bread.forEach(recipe => {
        event.shaped(
            Item.of("gtceu:" + recipe[0] + "_plate", 6),
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

        event.recipes.gtceu.slicer("sliced_" + recipe[0])
            .itemInputs("1x gtceu:" + recipe[0] + "_ingot")
            .itemOutputs("6x gtceu:" + recipe[0] + "_plate")
            .duration(recipe[1])
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
        .itemInputs("1x minecraft:bread")
        .itemOutputs("6x gtceu:bread_plate")
        .duration(100)
        .EUt(30)
        .circuit(1)
})