'use strict';

const Stream = require('stream');
const co = require('co');
const Readable = require('./lib/readable');
const ThrowingReadable = require('./lib/readable-throwing');

class Writable extends Stream.Writable {

  _write(chunk) {  
    console.log('stream result:', chunk.toString());
  };

}

const runStream = function*(source) {
  try {
    const dst = new Writable();
    source.stream
      .pipe(dst);
    yield source;
  } catch(e) {
    console.log('error:', e.message);
  }
};

const title = function(message) {
  const underline = message.replace(/./g, '=');
  console.log(`
${message}
${underline}
`);
};

co(function*() {
  title('readable stream flows message');
  yield runStream(Readable.createWithPromise());

  title('readable stream is throwing error');
  yield runStream(ThrowingReadable.createWithPromise());
});

