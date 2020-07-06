
const bot = require("venom-bot");
const bank = require("./bank");
const stages = require("./stages");

bot.create().then((client) => start(client));
function start(client) {
  client.onMessage((message) => {
    let resp = stages.step[getStage(message.from)].obj.execute(
      message.from,
      message.body,
      message.sender.name
    );
    for (let index = 0; index < resp.length; index++) {
      const element = resp[index];
      client.sendText(message.from, element);
    }
  });
}

function getStage(user) {
  if (bank.db[user]) {
    
    return bank.db[user].stage;
  } else {
    
    bank.db[user] = {
      stage: 0,
      items: [],
    };
    return bank.db[user].stage;
  }
}
