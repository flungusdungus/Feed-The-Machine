GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('slicer')
        .category('FTM')
        .setEUIO('in')
        .setMaxIOSize(2, 1, 0, 0) //
        .setSlotOverlay(false, false, GuiTextures.SLOT)
        .setProgressBar(GuiTextures.PROGRESS_BAR_SLICE, FillDirection.LEFT_TO_RIGHT) //
        .setSound(GTSoundEntries.COMPRESSOR)
    event.create('masticator')
        .category('FTM')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 0, 0) //
        .setSlotOverlay(false, false, GuiTextures.SLOT)
        .setProgressBar(GuiTextures.PROGRESS_BAR_MACERATE, FillDirection.LEFT_TO_RIGHT) //
        .setSound(GTSoundEntries.FORGE_HAMMER)
    event.create('cheese_shredder')
        .category('FTM')
        .setEUIO('in')
        .setMaxIOSize(2, 1, 0, 0) //
        .setSlotOverlay(false, false, GuiTextures.SLOT)
        .setProgressBar(GuiTextures.PROGRESS_BAR_WIREMILL, FillDirection.LEFT_TO_RIGHT) //
        .setSound(GTSoundEntries.COMPRESSOR)
})