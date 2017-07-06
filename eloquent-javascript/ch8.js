// Bugs and Error Handling
'use strict';

// Retry
function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

console.log(primitiveMultiply(10, 10));

function reliableMultiply(a, b) {
  for (;;) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure))
        throw e;
    }
  }
}

console.log(reliableMultiply(8, 8));



// The Locked Box
var box = {
    locked: true,
    unlock: function() { this.locked = false; },
    lock: function() { this.locked = true },
    _content: ['You found my gold!'],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

console.log('The box is locked? ' + box.locked);

function withBoxUnlocked(f) {
    if (!box.locked) { console.log("unlocked"); return; }
    try {
        box.unlock();
        console.log('The box is locked? ' + box.locked);
        f(box);
    } finally {
        box.lock();
    }
};

function getContents(box) {
    var treasure = box.content;
    console.log(treasure);
};

withBoxUnlocked(getContents);