ServerEvents.recipes(event => {
    event.shaped(
        Item.of("gtceu:hardtack_drill_head", 1),
        [
            " A ",
            " A ",
            "ABA"
        ],
        {
            A: "gtceu:hardtack_ingot",
            B: "#gtceu:tools/crafting_wrenches"
        }
    ).damageIngredient("#gtceu:tools/crafting_wrenches")

    event.shaped(
        Item.of("gtceu:hardtack_screwdriver_tip", 1),
        [
            "AAA",
            " A ",
            " B "
        ],
        {
            A: "gtceu:hardtack_rod",
            B: "#gtceu:tools/crafting_wrenches"
        }
    ).damageIngredient("#gtceu:tools/crafting_wrenches")

    event.shaped(
        Item.of("gtceu:hardtack_wire_cutter_head", 1),
        [
            "   ",
            "AAA",
            "   "
        ],
        {
            A: "gtceu:fine_hardtack_wire",
        }
    )

    event.shaped(
        Item.of("gtceu:hardtack_wrench_tip", 1),
        [
            " A ",
            "BBB",
            " A "
        ],
        {
            A: "gtceu:hardtack_ingot",
            B: "gtceu:hardtack_rod"
        }
    )

    event.shaped(
        Item.of("gtceu:hardtack_scythe", 1),
        [
            "AAA",
            "  B",
            "  B"
        ],
        {
            A: "gtceu:hardtack_ingot",
            B: "minecraft:stick",
        }
        )

    event.shaped(
        Item.of("gtceu:hardtack_hammer", 1),
        [
            " A ",
            " BA",
            "B  "
        ],
        {
            A: "gtceu:hardtack_ingot",
            B: "minecraft:stick",
        }
    )

    event.shaped(
        Item.of("gtceu:hardtack_mortar", 1),
        [
            " A ",
            "BAB",
            "BBB"
        ],
        {
            A: "gtceu:hardtack_ingot",
            B: "#forge:stone",
        }
    )

    event.shaped(
        Item.of("gtceu:hardtack_hoe", 1),
        [
            " AA",
            " B ",
            " B "
        ],
        {
            A: "gtceu:hardtack_ingot",
            B: "minecraft:stick",
        }
    )

    event.shaped(
        Item.of("gtceu:hardtack_axe", 1),
        [
            " AA",
            " BA",
            " B "
        ],
        {
            A: "gtceu:hardtack_ingot",
            B: "minecraft:stick",
        }
    )

    event.shaped(
        Item.of("gtceu:hardtack_pickaxe", 1),
        [
            "AAA",
            " B ",
            " B "
        ],
        {
            A: "gtceu:hardtack_ingot",
            B: "minecraft:stick",
        }
    )

    event.shaped(
        Item.of("gtceu:hardtack_shovel", 1),
        [
            " A ",
            " B ",
            " B "
        ],
        {
            A: "gtceu:hardtack_ingot",
            B: "minecraft:stick",
        }
    )

    event.shaped(
        Item.of("gtceu:hardtack_wire_cutter", 1),
        [
            "   ",
            "BAB",
            "   "
        ],
        {
            A: "gtceu:hardtack_wire_cutter_head",
            B: "minecraft:iron_nugget",
        }
    )

    event.shaped(
        Item.of("gtceu:hardtack_mining_hammer", 1),
        [
            "AAA",
            " BA",
            " B "
        ],
        {
            A: "gtceu:hardtack_ingot",
            B: "minecraft:stick",
        }
    )

    event.shaped(
        Item.of("gtceu:hardtack_screwdriver", 1),
        [
            "  A",
            " B ",
            "   "
        ],
        {
            A: "gtceu:hardtack_screwdriver_tip",
            B: "minecraft:stick",
        }
    )
    event.shaped(
        Item.of("gtceu:hardtack_spade", 1),
        [
            "A A",
            "ABA",
            " B "
        ],
        {
            A: "gtceu:hardtack_ingot",
            B: "minecraft:stick",
        }
    )
    event.shaped(
        Item.of("gtceu:hardtack_wrench", 1),
        [
            "  A",
            " B ",
            "   "
        ],
        {
            A: "gtceu:hardtack_wrench_tip",
            B: "gtceu:hardtack_rod",
        }
    )
    event.shaped(
        Item.of("gtceu:hardtack_sword", 1),
        [
            " A ",
            " A ",
            " B "
        ],
        {
            A: "gtceu:hardtack_ingot",
            B: "minecraft:stick",
        }
    )
    event.shaped(
        Item.of("gtceu:hardtack_knife", 1),
        [
            "   ",
            " A ",
            " B "
        ],
        {
            A: "gtceu:hardtack_ingot",
            B: "minecraft:stick",
        }
    )
    event.shaped(
        Item.of("gtceu:hardtack_crowbar", 1),
        [
            "  A",
            "A A",
            " A "
        ],
        {
            A: "gtceu:hardtack_ingot"
        }
    )
    event.shaped(
        Item.of("gtceu:hardtack_butchery_knife", 1),
        [
            "AA ",
            "AA ",
            " B "
        ],
        {
            A: "gtceu:hardtack_ingot",
            B: "minecraft:stick"
        }
    )
    const drillTiers = ["lv", "mv", "hv", "ev", "iv"]
    drillTiers.forEach(tier => {
        event.shaped(
            Item.of("gtceu:"+tier+"_hardtack_drill", 1),
            [
                "CAD",
                " B ",
                "   "
            ],
            {
                A: "gtceu:hardtack_drill_head",
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
            Item.of("gtceu:"+tier+"_hardtack_chainsaw", 1),
            [
                "CAD",
                " B ",
                "   "
            ],
            {
                A: "gtceu:hardtack_chainsaw_head",
                B: "gtceu:"+tier+"_power_unit",
                C: "#gtceu:tools/crafting_wrenches",
                D: "#gtceu:tools/crafting_screwdrivers"
            }
        ).damageIngredient("#gtceu:tools/crafting_wrenches")
            .damageIngredient("#gtceu:tools/crafting_screwdrivers")

        event.shaped(
            Item.of("gtceu:"+tier+"_hardtack_wrench", 1),
            [
                "CAD",
                " B ",
                "   "
            ],
            {
                A: "gtceu:hardtack_wrench_tip",
                B: "gtceu:"+tier+"_power_unit",
                C: "#gtceu:tools/crafting_wrenches",
                D: "#gtceu:tools/crafting_screwdrivers"
            }
        ).damageIngredient("#gtceu:tools/crafting_wrenches")
            .damageIngredient("#gtceu:tools/crafting_screwdrivers")

        event.shaped(
            Item.of("gtceu:"+tier+"_hardtack_screwdriver", 1),
            [
                "CAD",
                " B ",
                "   "
            ],
            {
                A: "gtceu:hardtack_screwdriver_tip",
                B: "gtceu:"+tier+"_power_unit",
                C: "#gtceu:tools/crafting_wrenches",
                D: "#gtceu:tools/crafting_screwdrivers"
            }
        ).damageIngredient("#gtceu:tools/crafting_wrenches")
            .damageIngredient("#gtceu:tools/crafting_screwdrivers")

        event.shaped(
            Item.of("gtceu:"+tier+"_hardtack_wire_cutter", 1),
            [
                "CAD",
                " B ",
                "   "
            ],
            {
                A: "gtceu:hardtack_wire_cutter_head",
                B: "gtceu:"+tier+"_power_unit",
                C: "#gtceu:tools/crafting_wrenches",
                D: "#gtceu:tools/crafting_screwdrivers"
            }
        ).damageIngredient("#gtceu:tools/crafting_wrenches")
            .damageIngredient("#gtceu:tools/crafting_screwdrivers")
    })
    })

