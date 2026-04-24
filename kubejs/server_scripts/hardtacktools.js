ServerEvents.recipes(event => {
    event.shaped(
        Item.of('gtceu:hardtack_scythe', 1),
        [
            'AAA',
            '  B',
            '  B'
        ],
        {
            A: 'gtceu:hardtack_ingot',
            B: 'minecraft:stick',
        }
    )
})