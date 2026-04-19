ServerEvents.recipes(event => {
    event.remove({ output: '#gtceu:tools' })
    event.remove({ output: '#gtceu:scythes' })
    event.remove({ type: 'gtceu:bender' })
    event.remove({ type: 'gtceu:lathe' })
})