// Sets up a listener for the GPS event and expects to receive an object
// with the GPS data in the form of {x: x, y:y, z:z}.
// Accepts 2 arguments:
// 1. The socket you would like to connect to.
// 2. A callback function that will be run every time the tap event is triggered.
const desktopGPSHandler = (socket, callback) => {
  socket.on('gps', gpsObj => {
    if (callback) callback(gpsObj);
  });
};

module.exports = desktopGPSHandler;
