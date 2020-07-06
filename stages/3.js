const bank = require('../bank');
const stages = require('../stages');


function execute(user, msg) {
    if(msg === "*") {
        bank.db[user].stage = 0;
        return ["Order canceled successfully"];
    }

    if(msg === "#") {
        bank.db[user].stage = 5;

        return stages.step[5].obj.execute(user, "");
    }

    return [
        `Confirms delivery address : \n ${msg}`,

        "`` `Enter # to continue or * to cancel```"
    ];
}

exports.execute = execute;
