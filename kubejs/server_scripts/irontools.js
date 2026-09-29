ServerEvents.recipes(event => {
    event.shaped(
        Item.of("gtceu:iron_drill_head", 1),
        [
            " A ",
            " A ",
            "ABA"
        ],
        {
            A: "minecraft:iron_ingot",
            B: "#gtceu:tools/crafting_wrenches"
        }
    ).damageIngredient("#gtceu:tools/crafting_wrenches")

    event.shaped(
        Item.of("gtceu:iron_screwdriver_tip", 1),
        [
            "AAA",
            " A ",
            " B "
        ],
        {
            A: "gtceu:iron_rod",
            B: "#gtceu:tools/crafting_wrenches"
        }
    ).damageIngredient("#gtceu:tools/crafting_wrenches")

    event.shaped(
        Item.of("gtceu:iron_wire_cutter_head", 1),
        [
            "   ",
            "AAA",
            "   "
        ],
        {
            A: "gtceu:fine_iron_wire",
        }
    )

    event.shaped(
        Item.of("gtceu:iron_wrench_tip", 1),
        [
            " A ",
            "BBB",
            " A "
        ],
        {
            A: "minecraft:iron_ingot",
            B: "gtceu:iron_rod"
        }
    )

    event.shaped(
        Item.of("gtceu:iron_scythe", 1),
        [
            "AAA",
            "  B",
            "  B"
        ],
        {
            A: "minecraft:iron_ingot",
            B: "minecraft:stick",
        }
    )

    event.shaped(
        Item.of("gtceu:iron_hammer", 1),
        [
            " A ",
            " BA",
            "B  "
        ],
        {
            A: "minecraft:iron_ingot",
            B: "minecraft:stick",
        }
    )

    event.shaped(
        Item.of("gtceu:iron_mortar", 1),
        [
            " A ",
            "BAB",
            "BBB"
        ],
        {
            A: "minecraft:iron_ingot",
            B: "#forge:stone",
        }
    )

    event.shaped(
        Item.of("gtceu:iron_hoe", 1),
        [
            " AA",
            " B ",
            " B "
        ],
        {
            A: "minecraft:iron_ingot",
            B: "minecraft:stick",
        }
    )

    event.shaped(
        Item.of("gtceu:iron_axe", 1),
        [
            " AA",
            " BA",
            " B "
        ],
        {
            A: "minecraft:iron_ingot",
            B: "minecraft:stick",
        }
    )

    event.shaped(
        Item.of("gtceu:iron_pickaxe", 1),
        [
            "AAA",
            " B ",
            " B "
        ],
        {
            A: "minecraft:iron_ingot",
            B: "minecraft:stick",
        }
    )

    event.shaped(
        Item.of("gtceu:iron_shovel", 1),
        [
            " A ",
            " B ",
            " B "
        ],
        {
            A: "minecraft:iron_ingot",
            B: "minecraft:stick",
        }
    )

    event.shaped(
        Item.of("gtceu:iron_wire_cutter", 1),
        [
            "   ",
            "BAB",
            "   "
        ],
        {
            A: "gtceu:iron_wire_cutter_head",
            B: "gtceu:iron_nugget",
        }
    )

    event.shaped(
        Item.of("gtceu:iron_mining_hammer", 1),
        [
            "AAA",
            " BA",
            " B "
        ],
        {
            A: "minecraft:iron_ingot",
            B: "minecraft:stick",
        }
    )

    event.shaped(
        Item.of("gtceu:iron_screwdriver", 1),
        [
            "  A",
            " B ",
            "   "
        ],
        {
            A: "gtceu:iron_screwdriver_tip",
            B: "minecraft:stick",
        }
    )
    event.shaped(
        Item.of("gtceu:iron_spade", 1),
        [
            "A A",
            "ABA",
            " B "
        ],
        {
            A: "minecraft:iron_ingot",
            B: "minecraft:stick",
        }
    )
    event.shaped(
        Item.of("gtceu:iron_wrench", 1),
        [
            "  A",
            " B ",
            "   "
        ],
        {
            A: "gtceu:iron_wrench_tip",
            B: "gtceu:iron_rod",
        }
    )
    event.shaped(
        Item.of("gtceu:iron_sword", 1),
        [
            " A ",
            " A ",
            " B "
        ],
        {
            A: "minecraft:iron_ingot",
            B: "minecraft:stick",
        }
    )
    event.shaped(
        Item.of("gtceu:iron_knife", 1),
        [
            "   ",
            " A ",
            " B "
        ],
        {
            A: "minecraft:iron_ingot",
            B: "minecraft:stick",
        }
    )
    event.shaped(
        Item.of("gtceu:iron_crowbar", 1),
        [
            "  A",
            "A A",
            " A "
        ],
        {
            A: "minecraft:iron_ingot"
        }
    )
    event.shaped(
        Item.of("gtceu:iron_butchery_knife", 1),
        [
            "AA ",
            "AA ",
            " B "
        ],
        {
            A: "minecraft:iron_ingot",
            B: "minecraft:stick"
        }
    )
    const drillTiers = ["lv", "mv", "hv", "ev", "iv"]
    drillTiers.forEach(tier => {
        event.shaped(
            Item.of("gtceu:"+tier+"_iron_drill", 1),
            [
                "CAD",
                " B ",
                "   "
            ],
            {
                A: "gtceu:iron_drill_head",
                B: "gtceu:"+tier+"_power_unit",
                C: "#gtceu:tools/crafting_wrenches",
                D: "#gtceu:tools/crafting_screwdrivers"
            }
        ).damageIngredient("#gtceu:tools/crafting_wrenches")
            .damageIngredient("#gtceu:tools/crafting_screwdrivers")
    })
    const tiers = ["lv", "hv", "iv"]
    tiers.forEach(tier => {
        event.shaped(
            Item.of("gtceu:"+tier+"_iron_chainsaw", 1),
            [
                "CAD",
                " B ",
                "   "
            ],
            {
                A: "gtceu:iron_chainsaw_head",
                B: "gtceu:"+tier+"_power_unit",
                C: "#gtceu:tools/crafting_wrenches",
                D: "#gtceu:tools/crafting_screwdrivers"
            }
        ).damageIngredient("#gtceu:tools/crafting_wrenches")
            .damageIngredient("#gtceu:tools/crafting_screwdrivers")

        event.shaped(
            Item.of("gtceu:"+tier+"_iron_wrench", 1),
            [
                "CAD",
                " B ",
                "   "
            ],
            {
                A: "gtceu:iron_wrench_tip",
                B: "gtceu:"+tier+"_power_unit",
                C: "#gtceu:tools/crafting_wrenches",
                D: "#gtceu:tools/crafting_screwdrivers"
            }
        ).damageIngredient("#gtceu:tools/crafting_wrenches")
            .damageIngredient("#gtceu:tools/crafting_screwdrivers")

        event.shaped(
            Item.of("gtceu:"+tier+"_iron_screwdriver", 1),
            [
                "CAD",
                " B ",
                "   "
            ],
            {
                A: "gtceu:iron_screwdriver_tip",
                B: "gtceu:"+tier+"_power_unit",
                C: "#gtceu:tools/crafting_wrenches",
                D: "#gtceu:tools/crafting_screwdrivers"
            }
        ).damageIngredient("#gtceu:tools/crafting_wrenches")
            .damageIngredient("#gtceu:tools/crafting_screwdrivers")

        event.shaped(
            Item.of("gtceu:"+tier+"_iron_wire_cutter", 1),
            [
                "CAD",
                " B ",
                "   "
            ],
            {
                A: "gtceu:iron_wire_cutter_head",
                B: "gtceu:"+tier+"_power_unit",
                C: "#gtceu:tools/crafting_wrenches",
                D: "#gtceu:tools/crafting_screwdrivers"
            }
        ).damageIngredient("#gtceu:tools/crafting_wrenches")
            .damageIngredient("#gtceu:tools/crafting_screwdrivers")
    })
})

