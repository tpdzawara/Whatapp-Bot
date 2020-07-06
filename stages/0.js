const manual = require('../manual');
const bank = require('../bank');

function execute(user, msg, contact) {
    let menu = "Menu \n\n";

Object.keys(manual.menu).forEach((value) => {
    let element = manual.menu[value];
    menu += `${value} - ${element.manual}   $ ${element.price} \n`
});

bank.db[user].stage = 1;

return [
    `Hello ${contact} I am a virtual assistant , I will present the Laptops, to place the order just send the product code`,
    menu,
];

}

exports.execute = execute;