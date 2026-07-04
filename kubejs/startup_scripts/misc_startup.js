ItemEvents.modification(event => {
    event.modify('create:sand_paper', item => {
        item.maxDamage = -1
        })

    })
GTCEuStartupEvents.materialModification(event => {
    const nukeDust = ["bread", "toast", "sweet_berries", "mozzarella_cheese", "aged_mozzarella_cheese"]
    nukeDust.forEach(material => {
        TagPrefix.dust.setIgnored(GTMaterialRegistry.getMaterial(material))
        TagPrefix.dustSmall.setIgnored(GTMaterialRegistry.getMaterial(material))
        TagPrefix.dustTiny.setIgnored(GTMaterialRegistry.getMaterial(material))
    })
    const nukeBlock = ["sweet_berries", "mozzarella_cheese", "aged_mozzarella_cheese"]
    nukeBlock.forEach(material => {
        TagPrefix.block.setIgnored(GTMaterialRegistry.getMaterial(material))
    })
    const nukeNugget = ["mozzarella_cheese", "aged_mozzarella_cheese"]
    nukeNugget.forEach(material => {
        TagPrefix.block.setIgnored(GTMaterialRegistry.getMaterial(material))
    })
    TagPrefix.gem.setIgnored(GTMaterialRegistry.getMaterial("sweet_berries"))
    TagPrefix.gemExquisite.setIgnored(GTMaterialRegistry.getMaterial("sweet_berries"))
})
