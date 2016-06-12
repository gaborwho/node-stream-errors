'use strict';

const Stream = require('stream');

class PromisedStream extends Stream.Readable {

  static createWithPromise() {
    const stream = new this();
    const promise = new Promise((resolve, reject) => {
      stream.on('error', reject);
      stream.on('end', resolve);
      stream.on('close', resolve);
    });
    promise.stream = stream;
    return promise;
  }

}

module.exports = PromisedStream;

