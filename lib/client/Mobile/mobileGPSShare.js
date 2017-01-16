// Adds a listener to the window on the mobile device in order to read the GPS data.
// Will send GPS data to the socket in the form of {x: x, y:y, z:z}.
// Accepts 3 arguments:
// 1. The socket you would like to connect to as the first parameter.
// 2. A room name that will inform the server which room to emit the acceleration event and data to.
// 3. A callback function that will be run every time the tap event is triggered, by default
// we will provide this function with the GPS data.
const mobileGPSShare = (socket, room, callback) => {
  window.ondeviceorientation = event => {
    const latitude = Math.round(event.alpha);
    const longitude = Math.round(event.beta);
    const out = Math.round(event.gamma);
    const gpsObject = {
      latitude,
      longitude,
      out,
    };
    socket.emit('gps', room, gpsObject);
    if (callback) callback(gpsObject);
  };
};

module.exports = mobileGPSShare;
