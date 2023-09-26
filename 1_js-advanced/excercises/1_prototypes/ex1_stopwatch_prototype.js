// In this excercise ill use the stopwatch object created in last section excercise,
// now ill move the methods to the prototype of stopwatch.
// * We should put methods on the prototype as an optimization technique, so if we are working
// * with a large number of objects for the same type, we dont want to have multiple copies of
// * these methods in memory.
// In this case we dont really need to put these methods on the prototype, this will lead to anotehr issue,
// we are not going to be able to acces the local variables declared in the Stopwatch() constructor function.
// ! the objective of this excercise was to see that
// ! Premature optimization is the root of all evils.
// This programm didnt needed optimization.
// By tring to optimize it we broke the code.

function Stopwatch() {
  // When puting the methods on the prototype, we can only access public members of Stopwatch().
  // Transforming variables to public.
  let startTime = 0;
  let stopTime = 0;
  let running = false;
  let duration = 0;

  Object.defineProperty(this, 'startTime', {
    get: function () {
      return startTime;
    },
  });

  Object.defineProperty(this, 'stopTime', {
    get: function () {
      return stopTime;
    },
  });

  Object.defineProperty(this, 'running', {
    get: function () {
      return running;
    },
  });

  Object.defineProperty(this, 'duration', {
    get: function () {
      if (this.running) throw new Error('Stopwatch is running, stop it first');
      return duration;
    },
  });
}

Stopwatch.prototype.start = function () {
  if (this.running) throw new Error('Stopwatch has already started');

  this.startTime = new Date().getTime();

  this.running = true;
};

Stopwatch.prototype.stop = function () {
  if (!this.running) throw new Error('Stopwatch is not started');

  this.stopTime = new Date().getTime();

  let timeDiff = stopTime - startTime; // in ms.
  timeDiff /= 1000; // transforming to secs.

  // ! Since duration is a read only property we cannot modify it.
  // In order to modify it we should define a 'setter' to solve this problem
  // but this will lead to the problem that this value can be modified from
  // outside the object, and thats is a bad implementation.
  duration += timeDiff;

  this.running = false;
};

Stopwatch.prototype.reset = function () {
  if (this.running) throw new Error('Stopwatch is running, stop it first');
  duration = 0;
};

const sw = new Stopwatch();
