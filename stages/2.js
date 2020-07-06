const bank = require('../bank');

function execute(user, msg) {
    if (msg === "*") {
        bank.db[user].stage = 0;
        return ["Order canceled successfully"];
    }

    if ( msg === "#") {
        bank.db[user].stage = 3;
        return ["Please enter the address :"];
    }

    let order = "ORDER SUMMARY \n";
    let total = 0;

    bank.db[user].items.forEach((value) => {
        console.log(value);
        order += `${value.description}------------------${value.price} \n`;

        total += value.price;
    });

    order += "--------------------\n";
    order += `Total $ ${total}`;
    return [order, "To confirm enter # or to cancel enter *"];
}


exports.execute = execute;