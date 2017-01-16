'use strict';
// import our getCookie function which we will use to pull
// out the roomID and nonce cookie for socket connection and display on client
import getCookie from './getCookie.js';
// import io from 'socket.io';
// initialize library storage object
const imperio = {};
// instantiate our shared socket
imperio.socket = io();
// store roomID to pass to server for room creation and correctly routing the emissions
imperio.room = getCookie('roomId');
// store nonce to use to display and show mobile user how to connect
imperio.nonce = getCookie('nonce');
// take a tap event and emit the tap event
imperio.mobileTapShare = require('./Mobile/mobileTapShare.js');
// sets up listener for motion data and emits object containing x,y,z coords
imperio.mobileAccelShare = require('./Mobile/mobileAccelShare.js');
// sets up a listener for gps data and emits object containing latitude, longitude, and out data
imperio.mobileGPSShare = require('./Mobile/mobileGPSShare.js');
// sets up a listener for orientation data and emits object containing alpha, beta, and gamma data
imperio.mobileGyroShare = require('./Mobile/mobileGyroShare.js');
// establishes connection to socket and shares room it should connnect to
imperio.mobileRoomSetup = require('./Mobile/mobileRoomSetup.js');
// sets up listener for tap event on desktop
imperio.desktopTapHandler = require('./Desktop/desktopTapHandler.js');
// sets up listener for accel event/data on desktop
imperio.desktopAccelHandler = require('./Desktop/desktopAccelHandler.js');
// sets up listener for gps event/data on desktop
imperio.desktopGPSHandler = require('./Desktop/desktopGPSHandler.js');
// sets up listener for gyro event/data on desktop
imperio.desktopGyroHandler = require('./Desktop/desktopGyroHandler.js');
// establishes connection to socket and shares room it should connnect to
imperio.desktopRoomSetup = require('./Desktop/desktopRoomSetup.js');
// attaches our library object to the window so it is accessible when we use the script tag
window.imperio = imperio;

// if (typeof module === 'undefined') module.exports = frontEndEcho;
// else window.frontEndEcho = frontEndEcho;
