const EventEmitter = require('events')


class OneFunctionAtTime extends EventEmitter {

  constructor() {
    this.fns = [];
    this.processing = false;
  }


  /**
   * Add function to queue
   * @param {function} fn 
   */
  add(fn) {
    this.fns.push(fn);
    this._run();
  }


  _run(engoing) {

    if (this.processing) return;
    
    if (this.fns && this.fns.length) {
      this.processing = true;
      
      // New functions group
      if (!engoing) {
        this.emit('start');
      }

      let fn = this.fns.shift();
      fn(() => {
        this.processing = false;
        this._run(true);
      });
    }

    else if (engoing) {
      this.emit('finish');
    }
  }
}


exports.OneFunctionAtTime = OneFunctionAtTime;