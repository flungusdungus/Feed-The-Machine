ServerEvents.recipes(event => {
const spiceGrinder = [
    ["minecraft:grass", "gtceu:small_ground_wild_herbs_dust", 100, 16],
    ["minecraft:iron_ingot", "gtceu:iron_dust", 56, 2]
    ]
    spiceGrinder.forEach(recipe => {
        event.recipes.gtceu.macerator("ground" + recipe[0])
            .itemInputs(recipe[0])
            .itemOutputs(recipe[1])
            .duration(recipe[2])
            .EUt(recipe[3])
       })
    })