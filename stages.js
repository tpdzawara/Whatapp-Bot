const stages = {
    0: {
        description: "Welcome",
        obj: require('./stages/0')
    },
    1: {
        description: "Sales",
        obj: require('./stages/1')
    },
    2: {
        description: "Order",
        obj: require('./stages/2')
    },
    3: {
        description: "Address",
        obj: require('./stages/3')
    },
    4: {
        description: "Waxing",
        obj: require('./stages/4')
    },
    5: {
        description: "Form of payment",
        obj: require('./stages/5')
    }
}

exports.step = stages;