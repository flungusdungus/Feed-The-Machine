ItemEvents.modification(event => {
    event.modify('create:sand_paper', item => {
        item.maxDamage = -1
        })

    })
GTCEuStartupEvents.materialModification(event => {
    const nukeDust = ["bread", "toast", "sweet_berries"]
    nukeDust.forEach(material => {
        TagPrefix.dust.setIgnored(GTMaterialRegistry.getMaterial(material))
            TagPrefix.dustSmall.setIgnored(GTMaterialRegistry.getMaterial(material))
            TagPrefix.dustTiny.setIgnored(GTMaterialRegistry.getMaterial(material))
    }
)
    TagPrefix.gem.setIgnored(GTMaterialRegistry.getMaterial("sweet_berries"))
    TagPrefix.gemExquisite.setIgnored(GTMaterialRegistry.getMaterial("sweet_berries"))
})
