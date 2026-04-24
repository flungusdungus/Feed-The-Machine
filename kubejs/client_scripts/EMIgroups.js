ClientEvents.highPriorityAssets((event) => {
    event.add("emi:recipe/filters/remove", {
        filters: [
            {
                category: "emi:anvil_repairing",
            },
            {
                category: "emi:grinding",
            },
        ],
    });
});