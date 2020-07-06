const bank = require('../index');

function execute(user, msg) {
    bank.db[user].stage = 0;

    return [
        "Thank you for your preference.",
        "Wait, your order will arrive soon",
        "More information call 0719806679"
    ]
}

exports.execute = execute;