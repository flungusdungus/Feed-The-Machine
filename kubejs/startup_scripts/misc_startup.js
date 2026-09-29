ItemEvents.modification(event => {
    event.modify('create:sand_paper', item => {
        item.maxDamage = -1
        })
    })
GTCEuStartupEvents.materialModification(event => {
    const nukeDust = ["bread", "toast", "sweet_berries", "mozzarella_cheese", "aged_mozzarella_cheese", "potato", "carrot", "brown_mushroom", "raw_ham"]
    nukeDust.forEach(material => {
        TagPrefix.dust.setIgnored(GTMaterialRegistry.getMaterial(material))
        TagPrefix.dustSmall.setIgnored(GTMaterialRegistry.getMaterial(material))
        TagPrefix.dustTiny.setIgnored(GTMaterialRegistry.getMaterial(material))
    })
    const nukeBlock = ["sweet_berries", "mozzarella_cheese", "aged_mozzarella_cheese", "potato", "carrot", "brown_mushroom", "raw_pork", "raw_ham", "cooked_pork"]
    nukeBlock.forEach(material => {
        TagPrefix.block.setIgnored(GTMaterialRegistry.getMaterial(material))
    })
    const nukeNugget = ["mozzarella_cheese", "aged_mozzarella_cheese", "potato", "carrot", "brown_mushroom", "raw_pork", "raw_ham", "cooked_pork"]
    nukeNugget.forEach(material => {
        TagPrefix.nugget.setIgnored(GTMaterialRegistry.getMaterial(material))
    })
    TagPrefix.gem.setIgnored(GTMaterialRegistry.getMaterial("sweet_berries"))
    TagPrefix.gemExquisite.setIgnored(GTMaterialRegistry.getMaterial("sweet_berries"))
    const nukeIngot = ["potato", "carrot", "brown_mushroom", "raw_pork", "cooked_pork"]
    nukeIngot.forEach(material => {
        TagPrefix.ingot.setIgnored(GTMaterialRegistry.getMaterial(material))
    })
    const nukeFoil = ["mozzarella_cheese", "aged_mozzarella_cheese"]
    nukeFoil.forEach(material => {
        TagPrefix.foil.setIgnored(GTMaterialRegistry.getMaterial(material))
    })
})
