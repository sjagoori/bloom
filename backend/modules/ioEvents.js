const messageCache = require("./messageCache"),
  db = require("../modules/database"),
  redis = require("../modules/messageCache");

exports.eventHandler = async (client, server) => {
  client.on("message", (message) => {
    console.log("message", message);

    setCache(message.chat_id, message);
    client.broadcast.emit("message", message);
  });

  client.on("getPartners", async (partners) => {
    let fromData = await db.findOne("bloom", "userdata", {
      user_id: partners.from.user_id,
    });

    let toData = await db.findOne("bloom", "userdata", {
      user_id: partners.to.user_id,
    });
    client.emit("setPartners", {
      from: fromData,
      to: toData,
      pair: partners.pair,
    });
    client.join(partners.pair);

    let oldData = await db.findOne("bloom", "userdata", {
      user_id: partners.from.user_id,
    });

    console.log("oldData", oldData);
    delete toData.chatData;
    delete fromData.chatData;

    let a = [
      {
        chat_id: partners.pair,
        from: {
          data: fromData,
          identifier: partners.from.user_id,
          consent: true,
        },
        to: {
          data: toData,
          identifier: partners.to.user_id,
          consent: false,
        },
      },
    ];

    let newData = {
      chats: [...oldData.chatData.chats, ...a],
    };

    db.updateOne("bloom", "userdata", partners.from.user_id, newData);

    client.emit("log", newData);
  });
};

/**
 * Function handle cache
 * {String} chat_id - chat_id
 * {Object} content - content
 */
async function setCache(chat_id, content) {
  let cache = JSON.parse(await redis.getCache(chat_id));
  if (cache == undefined) {
    cache = [];
  }

  cache.push(content);

  redis.setCache(chat_id, JSON.stringify(cache));
}
