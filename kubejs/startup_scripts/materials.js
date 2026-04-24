Platform.mods.kubejs.name = 'Feed The Machine'
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('hardtack')
        .ingot()
        .color(0xa18154).iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR)
        .toolStats(new ToolProperty(3.0, 7.0, 1535, 3,
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
                GTToolType.WRENCH_IV
            ]))
        .fluidPipeProperties(2000, 200, true, true, false, false)
    })