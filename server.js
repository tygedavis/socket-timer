const io = require('socket.io')();

io.on('connect', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('Client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });
});

const port = 8000;
io.listen(port);
console.log(`App listening on port ${port}`)