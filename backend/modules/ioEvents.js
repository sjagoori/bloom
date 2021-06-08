exports.eventHandler = async (client, server) => {

  client.on('message', message => {
    console.log(message);
    client.broadcast.to(pair).emit('loadChatHistory', 'loadChatHistory')
  })

  client.on('getPartners', partners => {
    console.log(partners)
    // * this will be the room name
    // ? find a better way of generating room names in case of flipping from/to
    const pair = partners.from + partners.to
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