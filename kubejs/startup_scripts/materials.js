Platform.mods.kubejs.name = 'Feed The Machine'
const $FluidAttributes = Java.loadClass('com.gregtechceu.gtceu.api.fluids.attribute.FluidAttributes')
const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder')
GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
    event.create('water').parent('dull')
})
GTCEuStartupEvents.registry('gtceu:material', event => {
    GTMaterials.Iron.addFlags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.Diamond.addFlags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_FINE_WIRE)
    event.create('hardtack')
        .ingot()
        .color(0xa18154)
        .iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
        .toolStats(new ToolProperty(3.0, 9.0, 1535, 3,
            [
                GTToolType.SCYTHE,
                GTToolType.HARD_HAMMER,
                GTToolType.DRILL_LV,
                GTToolType.DRILL_MV,
                GTToolType.DRILL_HV,
                GTToolType.DRILL_EV,
                GTToolType.DRILL_IV,
                GTToolType.HOE,
                GTToolType.AXE,
                GTToolType.CHAINSAW_LV,
                GTToolType.CHAINSAW_HV,
                GTToolType.CHAINSAW_IV,
                GTToolType.SHOVEL,
                GTToolType.SPADE,
                GTToolType.SCREWDRIVER,
                GTToolType.SCREWDRIVER_LV,
                GTToolType.SCREWDRIVER_HV,
                GTToolType.SCREWDRIVER_IV,
                GTToolType.KNIFE,
                GTToolType.CROWBAR,
                GTToolType.WIRE_CUTTER,
                GTToolType.WIRE_CUTTER_LV,
                GTToolType.WIRE_CUTTER_HV,
                GTToolType.WIRE_CUTTER_IV,
                GTToolType.MORTAR,
                GTToolType.MINING_HAMMER,
                GTToolType.WRENCH,
                GTToolType.WRENCH_LV,
                GTToolType.WRENCH_HV,
                GTToolType.WRENCH_IV,
                GTToolType.SWORD,
                GTToolType.PICKAXE,
                GTToolType.BUTCHERY_KNIFE
            ]))
        .fluidPipeProperties(2000, 200, true, true, false, false)

    event.create('bread')
        .dust()
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
    event.create('toast')
        .dust()
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
    event.create('sweet_berries')
        .gem()
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
    event.create('mozzarella_cheese')
        .ingot()
        .color(0xece3c4)
        .iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_PLATE)
        .cableProperties(32, 1, 1, false)
    event.create('aged_mozzarella_cheese')
        .ingot()
        .color(0xcabf94)
        .iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_PLATE)
        .cableProperties(32, 1, 0, true)
    event.create('ground_wild_herbs')
        .dust()
        .color(0x49762d)
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
    event.create('potato')
        .ingot()
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_PLATE)
    event.create('carrot')
        .ingot()
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_PLATE)
    event.create('brown_mushroom')
        .ingot()
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_PLATE)
    event.create('raw_pork')
        .ingot()
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_PLATE)
    event.create('raw_ham')
        .ingot()
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_PLATE)
    event.create('cooked_pork')
        .ingot()
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.GENERATE_PLATE)
    event.create('glow_berry_juice')
        .liquid(new $FluidBuilder().attribute($FluidAttributes.ACID))
        .color(0xe99143)
    event.create('crudely_pasteurized_milk')
        .liquid()
        .color(0xedebeb)
})
