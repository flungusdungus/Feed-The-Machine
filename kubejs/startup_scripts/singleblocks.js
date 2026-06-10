GTCEuStartupEvents.registry('gtceu:machine', event => {
    function RegisterSimpleSingleblock(ID, RecipeType, DisplayName, HullModel, Tiers) {
        event.create(ID, 'simple')
            .tiers(Tiers)
            .definition((tier, builder) => builder
                .recipeTypes(RecipeType)
                .workableTieredHullModel(`gtceu:block/machines/${HullModel}`)
            );
    }
    RegisterSimpleSingleblock("slicer", 'slicer', "Slicer", "sifter", [GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV])
    RegisterSimpleSingleblock("masticator", 'masticator', "Masticator", "sifter", [GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV])
})
