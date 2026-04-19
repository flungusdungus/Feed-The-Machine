ServerEvents.tags('item', event => {
    event.add('forge:ingots', 'kubejs:hardtack')
    event.add('balm:ingots', 'kubejs:hardtack')
})
ServerEvents.recipes(event => {
    event.shaped(
        Item.of('gtceu:hardtack_scythe', 1),
        [
            'AAA',
            '  B',
            '  B'
        ],
        {
            A: 'kubejs:hardtack',
            B: 'minecraft:stick',
        }
    )
})