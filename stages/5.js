const bank = require('../bank');
let shipping = 0;

function execute(user, msg) {

    if(shipping === 1) {
        bank.db[user].stage = 4;

        return stages.step[4].obj.execute(user, "");
    }

    if (msg === "1") {
        shipping++;
        return ["Enter the amount in cash to get the change: "]
    }

    return ["Choose payment method: \ n1️⃣-Cash \ n2️⃣-Card"]
}

exports.execute = execute;