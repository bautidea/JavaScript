// In this excercise ill create an stopwatch object with 4 methods.
// 1- start() --> Start timer / cant be started if its already counting.
// 2- stop() --> Stop timer / cant be stoped if stopwatch is not started.
// 3- duration() --> initialize at 0 / if stopwatch is stoped it should return the
//                  elapsed time between start() and stop()
// 4- reset() --> Will reinitialize stopwatch duration to 0.
function Stopwatch() {
  let startTime = 0;
  let stopTime = 0;
  let duration = 0;

  this.start = function start() {
    // if timer is running the startTime will always be bigger than stopTime.
    if (startTime > stopTime) throw new Error('Stopwatch has already started');

    startTime = new Date();
  };

  this.stop = function stop() {
    // if timer is stoped the stopTime will always be bigger than startTime.
    if (stopTime >= startTime) throw new Error('Stopwatch is not started');

    stopTime = new Date();

    let timeDiff = stopTime - startTime; // in ms.
    timeDiff /= 1000; // transforming to secs.

    duration += timeDiff;
  };

  this.reset = function reset() {
    duration = 0;
  };

  Object.defineProperty(this, 'duration', {
    get: function () {
      if (startTime > stopTime)
        throw new Error('Stopwatch is running, stop it first');
      return duration;
    },
  });
}

const sw = new Stopwatch();
