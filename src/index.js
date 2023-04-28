import pretty from 'pretty-time'

/**
 * @typedef {'ns' | 'μs' | 'ms' | 's' | 'm' | 'h' | 'd' | 'w'} TimeIncrements
 */

export class Timer {
  /** @type {[number, number]} */
  start

  /**
   * @param {[number, number]} start
   */
  static start(start = process.hrtime()) {
    return new Timer(start)
  }

  /**
   * @param {[number, number]} start
   */
  constructor(start) {
    this.start = start
  }

  /**
   * @param {TimeIncrements} [smallest]
   */
  end(smallest) {
    const time = process.hrtime(this.start)
    return pretty(time, smallest || 's')
  }
}
