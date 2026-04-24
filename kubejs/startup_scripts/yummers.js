ItemEvents.modification(event => {
    event.modify("gtceu:hardtack_ingot", item => {
        item.foodProperties = food => {
            food.hunger(2)
            food.saturation(0.5)
        }})
})
