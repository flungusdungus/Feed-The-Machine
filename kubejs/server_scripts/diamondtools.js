ServerEvents.recipes(event => {
    event.shaped(
        Item.of("gtceu:diamond_drill_head", 1),
        [
            " A ",
            " A ",
            "ABA"
        ],
        {
            A: "minecraft:diamond",
            B: "#gtceu:tools/crafting_wrenches"
        }
    ).damageIngredient("#gtceu:tools/crafting_wrenches")

    event.shaped(
        Item.of("gtceu:diamond_screwdriver_tip", 1),
        [
            "AAA",
            " A ",
            " B "
        ],
        {
            A: "gtceu:diamond_rod",
            B: "#gtceu:tools/crafting_wrenches"
        }
    ).damageIngredient("#gtceu:tools/crafting_wrenches")

    event.shaped(
        Item.of("gtceu:diamond_wire_cutter_head", 1),
        [
            "   ",
            "AAA",
            "   "
        ],
        {
            A: "gtceu:fine_diamond_wire",
        }
    )

    event.shaped(
        Item.of("gtceu:diamond_wrench_tip", 1),
        [
            " A ",
            "BBB",
            " A "
        ],
        {
            A: "minecraft:diamond",
            B: "gtceu:diamond_rod"
        }
    )

    event.shaped(
        Item.of("gtceu:diamond_scythe", 1),
        [
            "AAA",
            "  B",
            "  B"
        ],
        {
            A: "minecraft:diamond",
            B: "minecraft:stick",
        }
    )

    event.shaped(
        Item.of("gtceu:diamond_hammer", 1),
        [
            " A ",
            " BA",
            "B  "
        ],
        {
            A: "minecraft:diamond",
            B: "minecraft:stick",
        }
    )

    event.shaped(
        Item.of("gtceu:diamond_hoe", 1),
        [
            " AA",
            " B ",
            " B "
        ],
        {
            A: "minecraft:diamond",
            B: "minecraft:stick",
        }
    )

    event.shaped(
        Item.of("gtceu:diamond_axe", 1),
        [
            " AA",
            " BA",
            " B "
        ],
        {
            A: "minecraft:diamond",
            B: "minecraft:stick",
        }
    )

    event.shaped(
        Item.of("gtceu:diamond_pickaxe", 1),
        [
            "AAA",
            " B ",
            " B "
        ],
        {
            A: "minecraft:diamond",
            B: "minecraft:stick",
        }
    )

    event.shaped(
        Item.of("gtceu:diamond_shovel", 1),
        [
            " A ",
            " B ",
            " B "
        ],
        {
            A: "minecraft:diamond",
            B: "minecraft:stick",
        }
    )

    event.shaped(
        Item.of("gtceu:diamond_wire_cutter", 1),
        [
            "   ",
            "BAB",
            "   "
        ],
        {
            A: "gtceu:diamond_wire_cutter_head",
            B: "minecraft:iron_nugget",
        }
    )

    event.shaped(
        Item.of("gtceu:diamond_mining_hammer", 1),
        [
            "AAA",
            " BA",
            " B "
        ],
        {
            A: "minecraft:diamond",
            B: "minecraft:stick",
        }
    )

    event.shaped(
        Item.of("gtceu:diamond_screwdriver", 1),
        [
            "  A",
            " B ",
            "   "
        ],
        {
            A: "gtceu:diamond_screwdriver_tip",
            B: "minecraft:stick",
        }
    )
    event.shaped(
        Item.of("gtceu:diamond_spade", 1),
        [
            "A A",
            "ABA",
            " B "
        ],
        {
            A: "minecraft:diamond",
            B: "minecraft:stick",
        }
    )
    event.shaped(
        Item.of("gtceu:diamond_wrench", 1),
        [
            "  A",
            " B ",
            "   "
        ],
        {
            A: "gtceu:diamond_wrench_tip",
            B: "gtceu:diamond_rod",
        }
    )
    event.shaped(
        Item.of("gtceu:diamond_sword", 1),
        [
            " A ",
            " A ",
            " B "
        ],
        {
            A: "minecraft:diamond",
            B: "minecraft:stick",
        }
    )
    event.shaped(
        Item.of("gtceu:diamond_knife", 1),
        [
            "   ",
            " A ",
            " B "
        ],
        {
            A: "minecraft:diamond",
            B: "minecraft:stick",
        }
    )
    event.shaped(
        Item.of("gtceu:diamond_crowbar", 1),
        [
            "  A",
            "A A",
            " A "
        ],
        {
            A: "minecraft:diamond",
            B: "minecraft:stick",
        }
    )
    const drillTiers = ["lv", "mv", "hv", "ev", "iv"]
    drillTiers.forEach(tier => {
        event.shaped(
            Item.of("gtceu:"+tier+"_diamond_drill", 1),
            [
                "CAD",
                " B ",
                "   "
            ],
            {
                A: "gtceu:diamond_drill_head",
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
            Item.of("gtceu:"+tier+"_diamond_chainsaw", 1),
            [
                "CAD",
                " B ",
                "   "
            ],
            {
                A: "gtceu:diamond_chainsaw_head",
                B: "gtceu:"+tier+"_power_unit",
                C: "#gtceu:tools/crafting_wrenches",
                D: "#gtceu:tools/crafting_screwdrivers"
            }
        ).damageIngredient("#gtceu:tools/crafting_wrenches")
            .damageIngredient("#gtceu:tools/crafting_screwdrivers")

        event.shaped(
            Item.of("gtceu:"+tier+"_diamond_wrench", 1),
            [
                "CAD",
                " B ",
                "   "
            ],
            {
                A: "gtceu:diamond_wrench_tip",
                B: "gtceu:"+tier+"_power_unit",
                C: "#gtceu:tools/crafting_wrenches",
                D: "#gtceu:tools/crafting_screwdrivers"
            }
        ).damageIngredient("#gtceu:tools/crafting_wrenches")
            .damageIngredient("#gtceu:tools/crafting_screwdrivers")

        event.shaped(
            Item.of("gtceu:"+tier+"_diamond_screwdriver", 1),
            [
                "CAD",
                " B ",
                "   "
            ],
            {
                A: "gtceu:diamond_screwdriver_tip",
                B: "gtceu:"+tier+"_power_unit",
                C: "#gtceu:tools/crafting_wrenches",
                D: "#gtceu:tools/crafting_screwdrivers"
            }
        ).damageIngredient("#gtceu:tools/crafting_wrenches")
            .damageIngredient("#gtceu:tools/crafting_screwdrivers")

        event.shaped(
            Item.of("gtceu:"+tier+"_diamond_wire_cutter", 1),
            [
                "CAD",
                " B ",
                "   "
            ],
            {
                A: "gtceu:diamond_wire_cutter_head",
                B: "gtceu:"+tier+"_power_unit",
                C: "#gtceu:tools/crafting_wrenches",
                D: "#gtceu:tools/crafting_screwdrivers"
            }
        ).damageIngredient("#gtceu:tools/crafting_wrenches")
            .damageIngredient("#gtceu:tools/crafting_screwdrivers")
    })
})

