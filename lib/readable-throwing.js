'use strict';

const co = require('co');
const PromisedStream = require('./promised-stream');

class ThrowingReadable extends PromisedStream {

  _read() {
    co(function*() {
      try {
        throw new Error('error from throwing readable stream');
        this.push('first chunk never gets written');
        this.push(null);
      } catch (e) {
        this.emit('error', e);
      }
    }.bind(this));
  };

}

module.exports = ThrowingReadable;

