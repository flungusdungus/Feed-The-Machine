StartupEvents.registry('item', event => {
    event.create('hardtack').food(food => {
        food
            .hunger(2)
            .saturation(.5)
    })
})
