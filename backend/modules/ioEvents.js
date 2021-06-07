exports.eventHandler = async (client, server) => {
  // console.log(client, server)
  client.on('message', message => {
    console.log(message);
  })
}