const messageCache = require('./messageCache')

const tempTestVariable = {
  "chat_id": [
    {
      "user_id": "user 1",
      "message": "message",
      "timestamp": 1623236809378,
      "chat_id": "chat_id"
    },
    {
      "user_id": "user 2",
      "message": "message",
      "timestamp": 1623236809378,
      "chat_id": "chat_id"
    }
  ]
}

exports.eventHandler = async (client, server) => {
  client.on('message', message => {
    console.log(message);
    client.broadcast.to(pair).emit('loadChatHistory', 'loadChatHistory')
  })

  client.on('getPartners', partners => {
    // * this will be the room name
    const pairData = Object.values(partners).sort((a, b) => a.user_id.localeCompare(b.user_id))
    const pair = pairData[0].user_id + pairData[1].user_id
    console.log(pair)

    // make a room
    client.join(pair)

    // TODO get partners from somewhere
    // * dont forget to broadcast these to the room instead
    // client.broadcast.to(pair).emit('setPartners', {
    client.emit('setPartners',
      // get these values from the getPartners event above
      {
        // load this from a db
        from: {
          identifier: "someone",
          consent: false
        },
        to: {
          identifier: 'someoneelse',
          consent: true
        }
      }
    )


  })
}