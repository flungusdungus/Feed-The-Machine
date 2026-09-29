ItemEvents.modification(event => {
    const sliced = ["carrot", "potato", "brown_mushroom"]
    sliced.forEach(type => {
        event.modify("gtceu:" + type + "_plate", item => {
            item.foodProperties = food => {
                food.hunger(1)
                food.saturation(0.25)
            }
        })
        event.modify("gtceu:double_" + type + "_plate", item => {
            item.foodProperties = food => {
                food.hunger(1)
                food.saturation(0.25)
            }
        })
    })
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
    event.modify("kubejs:loaded_baked_potato", item => {
        item.foodProperties = food => {
            food.hunger(10)
            food.saturation(3)
        }
    })
})

