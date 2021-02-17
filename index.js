

class OneFunctionAtTime {

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


  _run() {
    if (this.processing) return;
    if (this.fns && this.fns.length) {
      this.processing = true;

      let fn = this.fns.shift();
      fn(() => {
        this.processing = false;
        this._run();
      });
    }
  }
}


exports.OneFunctionAtTime = OneFunctionAtTime;