'use strict';

const PromisedStream = require('./promised-stream');

class Readable extends PromisedStream {

  _read() {
    this.push('first chunk');
    this.push(null);
  };

}

module.exports = Readable;

