const messageCache = require('./messageCache'),
  db = require("../modules/database"),
  redis = require('../modules/messageCache');

exports.eventHandler = async (client, server) => {
  client.on('message', message => {
    console.log(message);

    db.updateOne('bloom', 'userdata',
      {
        user_id: message.consent.from.identifier,
        chats: [
          {
            chat_id: message.chat_id,
            from: {
              identifier: message.from.identifier,
              consent: true
            },
            to: {
              identifier: message.to.identifier,
              consent: false
            }
          }
        ]
      }
    )

    setCache(message.chat_id, message)
    // client.broadcast.to(message.chat_id).emit('loadChatHistory', 'loadChatHistory')
  })

  client.on('getPartners', partners => {
    console.log("partners", partners)

    // * this will be the room name
    const pairData = Object.values(partners).sort((a, b) => a.user_id.localeCompare(b.user_id))
    const pair = pairData[0].user_id + pairData[1].user_id
    console.log("pair", pair)

    // make a room
    client.join(pair)

    // TODO get partners from somewhere
    // * dont forget to broadcast these to the room instead
    // client.broadcast.to(pair).emit('setPartners', {
    client.emit('setPartners', {
      from: {
        identifier: pairData[0].user_id,
        consent: true
      },
      to: {
        identifier: pairData[1].user_id,
        consent: false
      },
      chat_id: pair
    })
  })
}

/**
 * Function handle cache
 * {String} chat_id - chat_id
 * {Object} content - content
 */
async function setCache(chat_id, content) {
  let cache = JSON.parse(await redis.getCache(chat_id))
  if (cache == undefined) {
    cache = []
  }

  cache.push(content)

  redis.setCache(chat_id, JSON.stringify(cache))
}