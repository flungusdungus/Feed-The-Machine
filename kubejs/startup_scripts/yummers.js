ItemEvents.modification(event => {
    event.modify("gtceu:hardtack_ingot", item => {
        item.foodProperties = food => {
            food.hunger(2)
            food.saturation(0.5)
        }
    })
    event.modify("gtceu:bread_plate", item => {
        item.foodProperties = food => {
            food.hunger(2)
            food.saturation(0.5)
        }
    })
    event.modify("gtceu:toast_plate", item => {
        item.foodProperties = food => {
            food.hunger(3)
            food.saturation(0.5)
        }
    })
})

