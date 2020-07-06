const manual = require('../manual');
const bank = require('../bank');

function execute(user, msg) {
    if (msg === '*') {
        bank.db[user].stage = 0;
        return ["order canceled successfully"];
    }

    if (msg === '#') {
        bank.db[user].stage = 2;
        return["We're closing your order, okay?"];
    }

    if (!manual.menu[msg]) {
        return[
            "Invalid code, type correctly",
            "`` `Enter # to end or * to cancel```"
        ];
    }

    bank.db[user].items.push(manual.menu[msg]);

    return [
        `Item(${manual.menu[msg].description}) successfully added`,
        "``` Type # to end or * to cancel```"
    ]
}

exports.execute = execute;