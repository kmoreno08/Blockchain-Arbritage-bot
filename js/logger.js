/// logger.js ////
// This will take history logs and display them when clicked
const EventEmitter = require('events');
// uuid for unique id
const uuid = require('uuid');

class Logger extends EventEmitter {
  log(msg, msg1, msg2){
    // Call event - v4 for newest id
    // this.emit('message', { id: uuid.v4(), msg})
    this.emit('message', {msg, msg1, msg2})
  }
}

module.exports = Logger;